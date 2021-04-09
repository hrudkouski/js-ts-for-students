import {CityType, GovernmentBuildingType} from "../secondLessonObjects/02_02";

export const demolishHousesOnTheStreet = (city: CityType, street: string) => {
    city.houses = city.houses.filter(h => h.address.street.title !== street)
}

export function getBuildingsWithStaffCountGreaterThen(govB: Array<GovernmentBuildingType>, staff: number) {
    return govB.filter(el => el.staffCount > staff)
}