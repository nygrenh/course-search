import React from "react";

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
  type: string;
  objectID: string;
  _snippetResult: any; // complex object that specifies exactly how the hit was matched
}

interface HitProps {
  hit: SearchHit;
}

const Hit = ({ hit }: HitProps) => {
  return (
    <div>
      <h2>
        {hit.name} <small>({hit.course_code})</small>
      </h2>
      <div>Teachers: {hit.teachers.join(", ")}</div>
      <div>Language: {hit.language}</div>
      <div>Credits: {hit.credits}</div>
      <div>Study level: {hit.study_level}</div>
      <div>Study track: {hit.study_track}</div>
      <div>Degree programme: {hit.degree_programme}</div>
    </div>
  );
};

export default Hit;
