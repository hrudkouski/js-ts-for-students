import {
    addNewBooksToUser, addNewWork, CompaniesType,
    makeHairstyle,
    moveUser,
    moveUserToOtherHouse, removeBook, updateBook, updateCompany, updateCompanyTitle,
    upgradeNotebook,
    UserType,
    UserWithBooksType, UserWithCompaniesType,
    UserWithLaptopType
} from "./10_10";

test('reference type test', () => {
    let user: UserType = {
        name: 'Dimych',
        hair: 32,
        address: {
            city: 'Minsk',
            house: 12
        }
    }
    const awesomeUser = makeHairstyle(user, 2);
    expect(user.hair).toBe(32);
    expect(awesomeUser.hair).toBe(16);
    expect(awesomeUser.address).toBe(user.address);
})

test('change address', () => {
    let user: UserWithLaptopType = {
        name: 'Dimych',
        hair: 32,
        address: {
            city: 'Minsk',
            house: 12
        },
        laptop: {
            title: 'ZenBook'
        }
    }

    const movedUser = moveUser(user, 'Kiev');

    expect(user).not.toBe(movedUser);
    expect(user.address).not.toBe(movedUser.address);
    expect(user.laptop).toBe(movedUser.laptop);
    expect(movedUser.address.city).toBe('Kiev')
})

test('upgrade laptop to macBook', () => {
    let user: UserWithLaptopType = {
        name: 'Dimych',
        hair: 32,
        address: {
            city: 'Minsk',
            house: 12
        },
        laptop: {
            title: 'ZenBook'
        }
    }
    const userCopy = upgradeNotebook(user, 'macBook');
    expect(user).not.toBe(userCopy);
    expect(user.address).toBe(userCopy.address);
    expect(user.laptop).not.toBe(userCopy.laptop);
    expect(userCopy.laptop.title).toBe('macBook')
    expect(user.laptop.title).not.toBe('macBook')
    expect(user.laptop.title).toBe('ZenBook')
})

test('move user to another house', () => {
    let user: UserWithLaptopType & UserWithBooksType = {
        name: 'Dimych',
        hair: 32,
        address: {
            city: 'Minsk',
            house: 12
        },
        laptop: {
            title: 'ZenBook'
        },
        books: ['css', 'html', 'js', 'react']
    }
    const userCopyNew = moveUserToOtherHouse(user, 99);

    expect(user).not.toBe(userCopyNew);
    expect(user.books).toBe(userCopyNew.books);
    expect(user.laptop).toBe(userCopyNew.laptop);
    expect(user.address).not.toBe(userCopyNew.address);
    expect(userCopyNew.address.house).toEqual(99)
})

test('add new books to user', () => {
    let user: UserWithLaptopType & UserWithBooksType = {
        name: 'Dimych',
        hair: 32,
        address: {
            city: 'Minsk',
            house: 12
        },
        laptop: {
            title: 'ZenBook'
        },
        books: ['css', 'html', 'js', 'react']
    }
    const userCopyNew = addNewBooksToUser(user, ['ts', 'rest api']);

    expect(user).not.toBe(userCopyNew);
    expect(user.laptop).toBe(userCopyNew.laptop);
    expect(user.address).toBe(userCopyNew.address);
    expect(user.books).not.toBe(userCopyNew.books);
    expect(userCopyNew.books.length).toBe(6);
    expect(userCopyNew.books[4]).toBe('ts');
    expect(userCopyNew.books[5]).toBe('rest api');
    expect(user.books.length).toBe(4);
    expect(user.books[3]).toBe('react');
})

test('update js to ts', () => {
    let user: UserWithLaptopType & UserWithBooksType = {
        name: 'Dimych',
        hair: 32,
        address: {
            city: 'Minsk',
            house: 12
        },
        laptop: {
            title: 'ZenBook'
        },
        books: ['css', 'html', 'js', 'react']
    }
    const userCopyNew = updateBook(user, 'js', 'ts');

    expect(user).not.toBe(userCopyNew);
    expect(user.laptop).toBe(userCopyNew.laptop);
    expect(user.address).toBe(userCopyNew.address);
    expect(user.books).not.toBe(userCopyNew.books);
    expect(userCopyNew.books[2]).toBe('ts');
    expect(user.books[2]).toBe('js');
    expect(userCopyNew.books.length).toBe(4);
    expect(user.books.length).toBe(4);
})

test('remove js book', () => {
    let user: UserWithLaptopType & UserWithBooksType = {
        name: 'Dimych',
        hair: 32,
        address: {
            city: 'Minsk',
            house: 12
        },
        laptop: {
            title: 'ZenBook'
        },
        books: ['css', 'html', 'js', 'react']
    }
    const userCopyNew = removeBook(user, 'js');

    expect(user).not.toBe(userCopyNew);
    expect(user.laptop).toBe(userCopyNew.laptop);
    expect(user.address).toBe(userCopyNew.address);
    expect(user.books).not.toBe(userCopyNew.books);
    expect(userCopyNew.books[2]).toBe('react');
    expect(user.books[2]).toBe('js');
    expect(userCopyNew.books.length).toBe(3);
    expect(user.books.length).toBe(4);
})

test('add my new work', () => {
    let user: UserWithLaptopType & UserWithCompaniesType = {
        name: 'Dimych',
        hair: 32,
        address: {
            city: 'Minsk',
            house: 12
        },
        laptop: {
            title: 'ZenBook'
        },
        companies: [
            {id: 1, title: 'IT-Soft'},
            {id: 2, title: 'IT-INCUBATOR'}
        ]
    }
    const userCopyNew = addNewWork(user, 3, 'Google');

    expect(user).not.toBe(userCopyNew);
    expect(user.laptop).toBe(userCopyNew.laptop);
    expect(user.address).toBe(userCopyNew.address);
    expect(user.companies).not.toBe(userCopyNew.companies);
    expect(userCopyNew.companies.length).toBe(3);
    expect(user.companies.length).toBe(2);
    expect(userCopyNew.companies[2].id).toBe(3);
    expect(userCopyNew.companies[2].title).toBe('Google');
})

test('update company title', () => {
    let user: UserWithLaptopType & UserWithCompaniesType = {
        name: 'Dimych',
        hair: 32,
        address: {
            city: 'Minsk',
            house: 12
        },
        laptop: {
            title: 'ZenBook'
        },
        companies: [
            {id: 1, title: 'IT-Soft'},
            {id: 2, title: 'IT-INCUBATOR'}
        ]
    }
    const userCopy = updateCompanyTitle(user, 1, 'IT-SOFT') as UserWithLaptopType & UserWithCompaniesType;

    expect(user).not.toBe(userCopy);
    expect(user.laptop).toBe(userCopy.laptop);
    expect(user.address).toBe(userCopy.address);
    expect(user.companies).not.toBe(userCopy.companies);
    expect(userCopy.companies.length).toBe(2);
    expect(user.companies.length).toBe(2);
    expect(userCopy.companies[0].title).toBe('IT-SOFT');
    expect(user.companies[0].title).toBe('IT-Soft');
})

test('update company', () => {
    let companies: CompaniesType = {
        'Dimych': [
            {id: 1, title: 'IT-Soft'},
            {id: 2, title: 'IT-INCUBATOR'}
        ],
        'Artem': [
            {id: 1, title: 'IT-Soft'}
        ]
    }
    const companiesCopy = updateCompany(companies, 'Dimych', 1, 'IT-SOFT');

    expect(companiesCopy['Dimych']).not.toBe(companies['Dimych'])
    expect(companiesCopy['Artem']).toBe(companies['Artem'])
    expect(companies['Dimych'][0].title).toBe('IT-Soft');
    expect(companiesCopy['Dimych'][0].title).toBe('IT-SOFT')
    expect(companies['Dimych'][0].title).not.toBe(companiesCopy['Dimych'][0].title);
    expect(companies['Dimych'][1].title).toBe(companiesCopy['Dimych'][1].title);
})