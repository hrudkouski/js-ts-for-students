import {
    createGreetingMessage,
    createGreetingMessageForStreets,
    getStreetsTitlesHouses,
    getStreetsTitlesOfGovernmentsBuildings,
    ManType
} from "./05_05";
import {CityType} from "../secondLessonObjects/02_02";

let people: Array<ManType> = []

beforeEach(() => {
    people = [
        {name: 'Andrew Ivanov', age: 33},
        {name: 'Alexander Petrov', age: 24},
        {name: 'Dmitry Sidorov', age: 18},
    ]
})


test('should get array of greeting messages', () => {
    const messages = createGreetingMessage(people);

    expect(messages.length).toBe(3);
    expect(messages[0]).toBe('Hello Andrew!!!');
    expect(messages[1]).toBe('Hello Alexander!!!');
    expect(messages[2]).toBe('Hello Dmitry!!!');
})


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

test('list of streets titles of governments buildings', () => {
    let streetsNames = getStreetsTitlesOfGovernmentsBuildings(city.governmentBuildings);

    expect(streetsNames.length).toBe(2);
    expect(streetsNames[0]).toBe('Central str');
    expect(streetsNames[1]).toBe('South str');
})

test('list of streets titles', () => {
    let streetsNames = getStreetsTitlesHouses(city.houses);

    expect(streetsNames.length).toBe(3);
    expect(streetsNames[0]).toBe('White street');
    expect(streetsNames[1]).toBe('Happy street');
    expect(streetsNames[2]).toBe('Happy street');
})

test('create greeting messages for streets', () => {
    const message = createGreetingMessageForStreets(city.houses);

    expect(message.length).toBe(3);
    expect(message[0]).toBe('Hello people of White street');
    expect(message[1]).toBe('Hello people of Happy street');
    expect(message[2]).toBe('Hello people of Happy street');
})