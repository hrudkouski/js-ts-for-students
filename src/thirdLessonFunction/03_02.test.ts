import {CityType} from "../secondLessonObjects/02_02";
import {addMoneyToBudget, createMessage, repairHouse, toFireStaff, toHireStaff} from "./03_03";

let city: CityType;

beforeEach(() => {
    city = {
        title: 'New York',
        houses: [
            {
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

test('Budget should be changed for HOSPITAL', () => {
    addMoneyToBudget(city.governmentBuildings[0], 100000);
    expect(city.governmentBuildings[0].budget).toBe(300000);
});

test('Budget should be changed for FIRE-STATION', () => {
    addMoneyToBudget(city.governmentBuildings[1], -100000);
    expect(city.governmentBuildings[1].budget).toBe(400000);
});

test('House should be repared', () => {
    repairHouse(city.houses[1]);
    expect(city.houses[1].repaired).toBeTruthy();
})

test('Stuff should be decreased', () => {
    toFireStaff(city.governmentBuildings[0], 20);
    expect(city.governmentBuildings[0].staffCount).toBe(180)
})

test('Stuff should be increased', () => {
    toHireStaff(city.governmentBuildings[0], 20);
    toHireStaff(city.governmentBuildings[1], 100);
    expect(city.governmentBuildings[0].staffCount).toBe(220);
    expect(city.governmentBuildings[1].staffCount).toBe(1100);
})

test('Greeting message should be correct for city', () => {
    expect(createMessage(city)).toBe('Hello New York citizens. All 1000000 people')
})

