import {ManType} from "./07_07";

let props: ManType;

beforeEach(() => {
    props = {
        name: 'Dimych',
        age: 32,
        lessons: [
            {title: '1'},
            {title: '2'},
            {title: '3', name: 'React'}
        ],
        address: {
            street: {
                title: 'Nezavisimosti street'
            }
        }
    }
})

test('trainee object', () => {
    // const age = props.age;
    // const lessons = props.lessons;
    const {age, lessons} = props;

    expect(age).toBe(32);
    expect(lessons.length).toBe(3);
})

test('trainee array', () => {
    const l1 = props.lessons[0];
    const l2 = props.lessons[1];

    // const [ls1,,ls3] = props.lessons;
    const [ls1,...restLessons] = props.lessons;

    expect(l1.title).toBe('1');
    expect(l2.title).toBe('2');

    expect(ls1.title).toBe('1');
    expect(restLessons.length).toBe(2);
    expect(restLessons[0].title).toBe('2');
    expect(restLessons[1].title).toBe('3');
    expect(restLessons[1]).toStrictEqual({title: '3', name: 'React'})
})

