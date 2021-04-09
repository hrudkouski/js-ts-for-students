import {StudentType} from "../secondLessonObjects/lessonObjects";
import {CityType, GovernmentBuildingType, HouseType} from "../secondLessonObjects/02_02";

export const addSkill = (student: StudentType, skill: string) => {
    student.technologies.push({
        id: new Date().getTime(),
        title: skill
    })
}

export const makeStudentActive = (st: StudentType) => {
    st.isActive = true;
}

export const doesStudentLiveIn = (s: StudentType, city: string) => {
    return s.address.city.title === city;
}

export function addMoneyToBudget(buildings: GovernmentBuildingType, budget: number) {
    buildings.budget += budget;
}

export const repairHouse = (house: HouseType) => {
    house.repaired = true;
}

export function toFireStaff(govBuild: GovernmentBuildingType, stuffCount: number) {
    govBuild.staffCount -= stuffCount;
}

export function toHireStaff(govBuild: GovernmentBuildingType, stuffCount: number) {
    govBuild.staffCount += stuffCount;
}

export const createMessage = (props: CityType) => {
    return `Hello ${props.title} citizens. All ${props.citizensNumber} people`;
}