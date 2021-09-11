export interface CoursesResult {
  hits:                        Hit[];
  totalHits:                   number;
  pageSize:                    number;
  queryExceedsMaxResultWindow: boolean;
}

export interface Hit {
  cmsIntroductionTitle?:   TranslatedString;
  cmsFieldSummary:         TranslatedString;
  cmsBody?:                TranslatedString;
  // seems to be always an empty object
  cmsExamInfo?:            {[key: string]: unknown};
  cmsMoodleLink?:          string;
  cuId:                    string;
  curId:                   string;
  aId:                     string;
  aiGroupId:               string;
  aiSnapshotDateTime?:      unknown;
  credits:                 Credits;
  type:                    string;
  typeName:                TranslatedString;
  code:                    string;
  lc_code:                 string;
  studyLevel:              string;
  studyLevelSort:          number;
  activityPeriod:          ActivityPeriod;
  curriculumPeriodIds:     string[];
  enrolmentPeriod?:         EnrolmentPeriod | null;
  name:                    TranslatedString;
  nameSpecifier:           TranslatedString;
  degreeProgrammeIds:      string[];
  degreeProgrammeGroupIds: string[];
  studyTrackGroupIds:      string[];
  ancestorModuleIds:       string[];
  teachingLanguageUrn?:     string | null;
  teachingLanguages:       TranslatedString[];
  id:                      string;
  organisationIds:         (string | null)[];
  studyEventIds:           string[];
  teacherIds:              string[];
  teacherNames:            string[];
  customCodeUrns:          string[];
  tweetText?:              TranslatedString | null;
  curType:                 string;
  studyGroupSets:          StudyGroupSet[];
  timestamp:               string;
  plainName:               TranslatedString;
  useOldCoursePage:        boolean;
  isOpenUniversityCourse:  boolean;
  coursePageUrl:           string;
}

export interface ActivityPeriod {
  startDate: string;
  endDate:   string;
}

export interface CMSExamInfo {
}

export interface Credits {
  min: number;
  max: number | null;
}


export interface EnrolmentPeriod {
  startDateTime: string;
  endDateTime:   string;
}

export interface TranslatedString {
  en?: string | null;
  fi?: string | null;
  sv?: string | null;
}

export interface StudyGroupSet {
  localId:        string;
  name:           TranslatedString;
  studySubGroups: StudySubGroup[];
  subGroupRange:  Credits;
}

export interface StudySubGroup {
  fromDate?:     string | null;
  toDate?:       string | null;
  id:           string;
  name:         TranslatedString;
  teacherNames: string[];
}
