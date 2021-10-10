import Scrape from "./scraper"
const Typesense = require('typesense')

/*
*  Set up TypeSense for the scraper.
*  We connect to the container and give it a schema.
*  After making the schema we start the scraper.
*/
async function main () {
  await sleep(10*1000) /* Temporal hack to wait the container to be ready. Typesense has healtcheck pattenrn on /health which we could use.*/
  let client = new Typesense.Client({
      'nodes': [{
        'host': 'typesense', 
        'port': '8108',      
        'protocol': 'http'
      }],
      'apiKey': 'xyz',
      'connectionTimeoutSeconds': 10
    })
    let courseSchema = {
      'name': 'courses',
      'fields': [
        {'name': 'name', 'type': 'string' },
        {'name': 'teachers', 'type': 'string[]', 'facet': true },
        {'name': 'study_level', 'type': 'string' },
        {'name': 'credits', 'type': 'int32' },
        {'name': 'course_code', 'type': 'string' },
        {'name': 'language', 'type': 'string' },
        {'name': 'type', 'type': 'string' },
        {'name': 'degree_programme', 'type': 'string[]' },
        {'name': 'study_track', 'type': 'string[]' },
        {'name': 'is_open_university_course', 'type': 'bool'}
      ],
    }
    if ((await client.collections().retrieve()) == '') {
    client.collections().create(courseSchema)
      .then(function (data: any) {
        console.log(data)
      })
    } else console.log("Schema already exists")

    await Scrape(client);

}

/* Function for waiting in async functions. */
const sleep = (waitTimeInMs: any) => new Promise(resolve => setTimeout(resolve, waitTimeInMs));

main()