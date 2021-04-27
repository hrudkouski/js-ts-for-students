export type UserType = {
    name: string
    age: number
    address: { title: string }
}

function increaseAge(u: UserType) {
    u.age = u.age + 1;
}

test('Big reference type test', () => {
    let user = {
        name: 'Dimych',
        age: 32,
        address: {
            title: 'string'
        }
    }

    increaseAge(user);

    expect(user.age).toBe(33);

    const superMan = user;

    superMan.age = 1000;

    console.log(superMan)

    expect(user.age).toBe(1000);
})

test('Array test', () => {
    let users = [
        {
            name: 'Dimych',
            age: 32
        },
        {
            name: 'Dimych',
            age: 32
        },
    ]
    const admins = users;

    console.log(admins)

    admins.push({name: 'Artem', age: 10})

    expect(users[2]).toEqual({name: 'Artem', age: 10});
})

// test('Value type test', () => {
//     let usersCount = 100;
//     let adminsCount = usersCount;
//     adminsCount = 101;
//     console.log(adminsCount)
//     console.log(usersCount)
// })

test('Reference type test', () => {

    const address = {
        title: 'Minsk City'
    }
    let user = {
        name: 'Dimych',
        age: 32,
        address: address
    }

    let user2 = {
        name: 'Natasha',
        age: 30,
        address: address
    }

    address.title = 'Minsk City'

    expect(user.address).toBe(user2.address);
    expect(user2.address.title).toEqual('Minsk City')


})

// test('Reference type Array test', () => {
//
//     const address = {
//         title: 'Minsk City'
//     }
//     let user: UserType = {
//         name: 'Dimych',
//         age: 32,
//         address: address
//     }
//
//     let user2: UserType = {
//         name: 'Natasha',
//         age: 30,
//         address: address
//     }
//
//     const users = [user, user2, {name: 'Misha', age: 4, address: address}]
//
//     const admins = [user, users];
//
//     admins[0].name = 'Dmitry';
//
//     expect(users[0].name).toBe('Dmitry');
//     expect(user.name).toBe('Dmitry')
//
//
// })

test('sort array test', () => {
    const letters = ['c', 'd', 'a', 'z', 'e'];
    letters.sort();
    expect(letters).toEqual(['a', 'c', 'd', 'e', 'z'])
})