/*
 * Generated type guards for "coursesResult.ts".
 * WARNING: Do not manually change this file.
 */
import { CoursesResult, Hit, ActivityPeriod, CMSExamInfo, Credits, EnrolmentPeriod, TranslatedString, StudyGroupSet, StudySubGroup } from "./coursesResult";

export function isCoursesResult(obj: any, _argumentName?: string): obj is CoursesResult {
    return (
        (obj !== null &&
            typeof obj === "object" ||
            typeof obj === "function") &&
        Array.isArray(obj.hits) &&
        obj.hits.every((e: any) =>
            isHit(e) as boolean
        ) &&
        typeof obj.totalHits === "number" &&
        typeof obj.pageSize === "number" &&
        typeof obj.queryExceedsMaxResultWindow === "boolean"
    )
}

export function isHit(obj: any, _argumentName?: string): obj is Hit {
    return (
        (obj !== null &&
            typeof obj === "object" ||
            typeof obj === "function") &&
        (typeof obj.cmsIntroductionTitle === "undefined" ||
            isTranslatedString(obj.cmsIntroductionTitle) as boolean) &&
        isTranslatedString(obj.cmsFieldSummary) as boolean &&
        (typeof obj.cmsBody === "undefined" ||
            isTranslatedString(obj.cmsBody) as boolean) &&
        (typeof obj.cmsExamInfo === "undefined" ||
            (obj.cmsExamInfo !== null &&
                typeof obj.cmsExamInfo === "object" ||
                typeof obj.cmsExamInfo === "function")) &&
        (typeof obj.cmsMoodleLink === "undefined" ||
            typeof obj.cmsMoodleLink === "string") &&
        typeof obj.cuId === "string" &&
        typeof obj.curId === "string" &&
        typeof obj.aId === "string" &&
        typeof obj.aiGroupId === "string" &&
        isCredits(obj.credits) as boolean &&
        typeof obj.type === "string" &&
        isTranslatedString(obj.typeName) as boolean &&
        typeof obj.code === "string" &&
        typeof obj.lc_code === "string" &&
        typeof obj.studyLevel === "string" &&
        typeof obj.studyLevelSort === "number" &&
        isActivityPeriod(obj.activityPeriod) as boolean &&
        Array.isArray(obj.curriculumPeriodIds) &&
        obj.curriculumPeriodIds.every((e: any) =>
            typeof e === "string"
        ) &&
        (typeof obj.enrolmentPeriod === "undefined" ||
            obj.enrolmentPeriod === null ||
            isEnrolmentPeriod(obj.enrolmentPeriod) as boolean) &&
        isTranslatedString(obj.name) as boolean &&
        isTranslatedString(obj.nameSpecifier) as boolean &&
        Array.isArray(obj.degreeProgrammeIds) &&
        obj.degreeProgrammeIds.every((e: any) =>
            typeof e === "string"
        ) &&
        Array.isArray(obj.degreeProgrammeGroupIds) &&
        obj.degreeProgrammeGroupIds.every((e: any) =>
            typeof e === "string"
        ) &&
        Array.isArray(obj.studyTrackGroupIds) &&
        obj.studyTrackGroupIds.every((e: any) =>
            typeof e === "string"
        ) &&
        Array.isArray(obj.ancestorModuleIds) &&
        obj.ancestorModuleIds.every((e: any) =>
            typeof e === "string"
        ) &&
        (typeof obj.teachingLanguageUrn === "undefined" ||
            obj.teachingLanguageUrn === null ||
            typeof obj.teachingLanguageUrn === "string") &&
        Array.isArray(obj.teachingLanguages) &&
        obj.teachingLanguages.every((e: any) =>
            isTranslatedString(e) as boolean
        ) &&
        typeof obj.id === "string" &&
        Array.isArray(obj.organisationIds) &&
        obj.organisationIds.every((e: any) =>
        (e === null ||
            typeof e === "string")
        ) &&
        Array.isArray(obj.studyEventIds) &&
        obj.studyEventIds.every((e: any) =>
            typeof e === "string"
        ) &&
        Array.isArray(obj.teacherIds) &&
        obj.teacherIds.every((e: any) =>
            typeof e === "string"
        ) &&
        Array.isArray(obj.teacherNames) &&
        obj.teacherNames.every((e: any) =>
            typeof e === "string"
        ) &&
        Array.isArray(obj.customCodeUrns) &&
        obj.customCodeUrns.every((e: any) =>
            typeof e === "string"
        ) &&
        (typeof obj.tweetText === "undefined" ||
            obj.tweetText === null ||
            isTranslatedString(obj.tweetText) as boolean) &&
        typeof obj.curType === "string" &&
        Array.isArray(obj.studyGroupSets) &&
        obj.studyGroupSets.every((e: any) =>
            isStudyGroupSet(e) as boolean
        ) &&
        typeof obj.timestamp === "string" &&
        isTranslatedString(obj.plainName) as boolean &&
        typeof obj.useOldCoursePage === "boolean" &&
        typeof obj.isOpenUniversityCourse === "boolean" &&
        typeof obj.coursePageUrl === "string"
    )
}

export function isActivityPeriod(obj: any, _argumentName?: string): obj is ActivityPeriod {
    return (
        (obj !== null &&
            typeof obj === "object" ||
            typeof obj === "function") &&
        typeof obj.startDate === "string" &&
        typeof obj.endDate === "string"
    )
}

export function isCMSExamInfo(obj: any, _argumentName?: string): obj is CMSExamInfo {
    return (
        (obj !== null &&
            typeof obj === "object" ||
            typeof obj === "function")
    )
}

export function isCredits(obj: any, _argumentName?: string): obj is Credits {
    return (
        (obj !== null &&
            typeof obj === "object" ||
            typeof obj === "function") &&
        typeof obj.min === "number" &&
        (obj.max === null ||
            typeof obj.max === "number")
    )
}

export function isEnrolmentPeriod(obj: any, _argumentName?: string): obj is EnrolmentPeriod {
    return (
        (obj !== null &&
            typeof obj === "object" ||
            typeof obj === "function") &&
        typeof obj.startDateTime === "string" &&
        typeof obj.endDateTime === "string"
    )
}

export function isTranslatedString(obj: any, _argumentName?: string): obj is TranslatedString {
    return (
        (obj !== null &&
            typeof obj === "object" ||
            typeof obj === "function") &&
        (typeof obj.en === "undefined" ||
            obj.en === null ||
            typeof obj.en === "string") &&
        (typeof obj.fi === "undefined" ||
            obj.fi === null ||
            typeof obj.fi === "string") &&
        (typeof obj.sv === "undefined" ||
            obj.sv === null ||
            typeof obj.sv === "string")
    )
}

export function isStudyGroupSet(obj: any, _argumentName?: string): obj is StudyGroupSet {
    return (
        (obj !== null &&
            typeof obj === "object" ||
            typeof obj === "function") &&
        typeof obj.localId === "string" &&
        isTranslatedString(obj.name) as boolean &&
        Array.isArray(obj.studySubGroups) &&
        obj.studySubGroups.every((e: any) =>
            isStudySubGroup(e) as boolean
        ) &&
        isCredits(obj.subGroupRange) as boolean
    )
}

export function isStudySubGroup(obj: any, _argumentName?: string): obj is StudySubGroup {
    return (
        (obj !== null &&
            typeof obj === "object" ||
            typeof obj === "function") &&
        (typeof obj.fromDate === "undefined" ||
            obj.fromDate === null ||
            typeof obj.fromDate === "string") &&
        (typeof obj.toDate === "undefined" ||
            obj.toDate === null ||
            typeof obj.toDate === "string") &&
        typeof obj.id === "string" &&
        isTranslatedString(obj.name) as boolean &&
        Array.isArray(obj.teacherNames) &&
        obj.teacherNames.every((e: any) =>
            typeof e === "string"
        )
    )
}
