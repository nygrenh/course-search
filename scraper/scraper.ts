import axios from "axios";
import { CoursesResult } from "./coursesResult";
import { isCoursesResult } from "./coursesResult.guard";
import fs from "fs/promises";
const Typesense = require('typesense') //typesense has no ts types
/* 
* Scraper for getting course data from studies.helsinki.fi
* We save results to the cache so we don't have to query the api every time.
* studies.helsinki.fi gives maximum of 30 results per page so we have to query
* over hunders pages separately. We wait two seconds between querys so we don't get
* blocked.
*/
 async function Scrape(client : any) { //Typesense client
  fs.mkdir("data")
  let i = 0;
  while (true) {
    const fetchResult = await fetchAndValidate(
      "fi",
      i,
      "hy-university-root-id/2021/0/1",
      "2021"
    );
    const res = fetchResult.result;
    if (res.hits.length === 0) {
      console.log("No more results");
      break;
    }
    console.log(
      `Page: ${i}, total hits: ${res.totalHits}, pageSize: ${
        res.pageSize
      }, queryExceedsMaxResultWindow: ${res.queryExceedsMaxResultWindow}`
    );
    i = i + 1;
    res.hits.forEach(async hit => { /* Here we push data to typesense. */
      let document = {
        'name': hit.name.en || hit.name.fi || "",
        'teachers': hit.teacherNames,
        'study_level': hit.studyLevel,
        'credits': hit.credits.min || 0,
        'course_code': hit.code,
        'language': hit.teachingLanguages.map(o => o.en || o.fi || o.sv || "").join(", "),
        'type': hit.type,
        'degree_programme': hit.degreeProgrammeIds,
        'study_track': hit.studyTrackGroupIds,
        'is_open_university_course': hit.isOpenUniversityCourse
      }
      await client.collections('courses').documents().create(document)
    })
    if (!fetchResult.cached) {
      await sleep(2000);
    }
  }
}

interface FetchResult {
  cached: boolean;
  result: CoursesResult;
}

async function fetchAndValidate(
  lang: string,
  page: number,
  period: string,
  studyYear: string
): Promise<FetchResult> {
  const res = await fetch(lang, page, period, studyYear);
  // This autogenerated type guard asserts that the data matches our interface
  if (!isCoursesResult(res.result)) {
    console.error("Scraped data not in expected format");
    console.log(JSON.stringify(res.result, null, 2));
    if (process.env.NODE_ENV === "development") {
      // we abort in development mode so that we notice if our interface if out of date.
      // In production no need to abort because likely the program will still function even
      // if the interface changes slightly
      console.error("Aborting because we're in development mode");
      console.log(page)
      process.exit(1);
    } else {
      console.error("Trying to continue since we're not in development mode");
    }
  }
  return res;
}

async function fetch(
  lang: string,
  page: number,
  period: string,
  studyYear: string
): Promise<FetchResult> {
  const cacheKey = `${lang}-${page}-${period}-${studyYear}`.replace(/\//g, "-");
  try {
    const cached = await fs.readFile(`data/${cacheKey}`, "utf8");
    const result = JSON.parse(cached);
    return { cached: true, result };
  } catch (e) {
    // not cached, fetch from server
  }
  const res = await axios.get(
    `https://studies.helsinki.fi/api/search?lang=${encodeURIComponent(
      lang
    )}&page=${encodeURIComponent(page)}&period=${encodeURIComponent(
      period
    )}&studyYear=${encodeURIComponent(studyYear)}`
  );
  const data = res.data;

  fs.writeFile(`data/${cacheKey}`, JSON.stringify(data, null, 2));
  return { cached: false, result: data };
}

function sleep(ms: number) {
  return new Promise(resolve => {
    setTimeout(resolve, ms);
  });
}

export default Scrape
