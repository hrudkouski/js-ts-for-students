import {GovernmentBuildingType, HouseType} from "../secondLessonObjects/02_02";

export type ManType = {
    name: string
    age: number
}

const people: Array<ManType> = [
    {name: 'Andrew Ivanov', age: 33},
    {name: 'Alexander Petrov', age: 24},
    {name: 'Dmitry Sidorov', age: 18},
]

// const dimychTransformator = (man: ManType) => ({
//     stack: ['css,html', 'js', 'tdd', 'react'],
//     firstName: man.name.split(' ')[0],
//     lastName: man.name.split(' ')[1]
// })

// const devs = [
//     {
//         stack: ['css,html', 'js', 'tdd', 'react'],
//         firstName: 'Andrey', lastName: 'Ivanov'
//     },
//     {
//         stack: ['css,html', 'js', 'tdd', 'react'],
//         firstName: 'Alexander', lastName: 'Petrov'
//     },
//     {
//         stack: ['css,html', 'js', 'tdd', 'react'],
//         firstName: 'Dmitry', lastName: 'Sidorov'
//     },
// ]
//
// const dev2 = [
//     dimychTransformator(people[0]),
//     dimychTransformator(people[1]),
//     dimychTransformator(people[2]),
// ]
//
// const dev3 = people.map(dimychTransformator);
//
// const dev4 = people.map(man => ({
//     stack: ['css,html', 'js', 'tdd', 'react'],
//     firstName: man.name.split(' ')[0],
//     lastName: man.name.split(' ')[1]
// }))

// let messages = people.map(el => `Hello ${el.name.split(' ')[0]}!!!`);

export const createGreetingMessage = (people: Array<ManType>) => {
    return people.map(el => `Hello ${el.name.split(' ')[0]}!!!`);
}

export const getStreetsTitlesOfGovernmentsBuildings = (govBuildings: Array<GovernmentBuildingType>) => {
    return govBuildings.map(el => el.address.street.title);
}

export const getStreetsTitlesHouses = (houses: Array<HouseType>) => {
    return houses.map(el => el.address.street.title)
}

export const createGreetingMessageForStreets = (houses: Array<HouseType>) => {
    return houses.map(el => `Hello people of ${el.address.street.title}`)
}