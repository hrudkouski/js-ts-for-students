import {CityType} from "../secondLessonObjects/02_02";
import {demolishHousesOnTheStreet, getBuildingsWithStaffCountGreaterThen} from "./04_04";

let city: CityType;

beforeEach(() => {
    city = {
        title: 'New York',
        houses: [
            {
                id: 1,
                buildedAt: 2012,
                repaired: false,
                address: {
                    number: 100,
                    street: {
                        title: 'White street'
                    }
                }
            },
            {
                id: 2,
                buildedAt: 2008,
                repaired: false,
                address: {
                    number: 100,
                    street: {
                        title: 'Happy street'
                    }
                },
            },
            {
                id: 3,
                buildedAt: 2020,
                repaired: false,
                address: {
                    number: 101,
                    street: {
                        title: 'Happy street'
                    }
                }
            }
        ],
        governmentBuildings: [
            {
                type: 'HOSPITAL',
                budget: 200000,
                staffCount: 200,
                address: {
                    street: {
                        title: 'Central str'
                    }
                }
            },
            {
                type: 'FIRE-STATION',
                budget: 500000,
                staffCount: 1000,
                address: {
                    street: {
                        title: 'South str'
                    }
                }
            }
        ],
        citizensNumber: 1000000,
    }
})

test('Houses should be destroyed', () => {
    demolishHousesOnTheStreet(city, 'Happy street');

    expect(city.houses.length).toBe(1);
    expect(city.houses[0].id).toBe(1);
})

test('buildings with correct staff count', () => {
    let buildings = getBuildingsWithStaffCountGreaterThen(city.governmentBuildings, 500)

    expect(buildings.length).toBe(1);
    expect(buildings[0].type).toBe('FIRE-STATION');
})

test('get only completed tasks', () => {
    const tasks = [
        {id: 1, title: 'Milk', isDone: false},
        {id: 2, title: 'Bread', isDone: true},
        {id: 3, title: 'Salt', isDone: true},
        {id: 4, title: 'Sugar', isDone: true},
    ];

    const completedTasks = tasks.filter(t => t.isDone);

    expect(completedTasks.length).toBe(3);
    expect(completedTasks[0].id).toBe(2);
    expect(completedTasks[1].id).toBe(3);
    expect(completedTasks[2].id).toBe(4);
})

test('get only uncompleted tasks', () => {
    const tasks = [
        {id: 1, title: 'Milk', isDone: false},
        {id: 2, title: 'Bread', isDone: true},
        {id: 3, title: 'Salt', isDone: true},
        {id: 4, title: 'Sugar', isDone: true},
    ];

    const unCompletedTasks = tasks.filter(t => !t.isDone);

    expect(unCompletedTasks.length).toBe(1);
    expect(unCompletedTasks[0].id).toBe(1);
})