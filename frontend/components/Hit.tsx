import React from "react";
import styles from "../styles/Hit.module.css";

export interface SearchHit {
  course_code: string;
  credits: number;
  degree_programme: string[];
  id: string;
  is_open_university_course: boolean;
  language: string;
  name: string;
  study_level: string;
  study_track: string[];
  teachers: string[];
  course_page_url: string,
  summary: string,
  long_description: string,
  type: string;
  objectID: string;
  _snippetResult: any; // complex object that specifies exactly how the hit was matched
}

interface HitProps {
  hit: SearchHit;
}

const Hit = ({ hit }: HitProps) => {
  return (
    <a className={styles.hit} href={`https://studies.helsinki.fi${hit.course_page_url}`}>
      <h2>
        {hit.name} <small>({hit.course_code})</small>
      </h2>
      <div>Teachers: {hit.teachers.join(", ")}</div>
      <div>Language: {hit.language}</div>
      <div>Credits: {hit.credits}</div>
      {hit.summary && <p>{hit.summary}</p>}
    </a>
  );
};

export default Hit;
