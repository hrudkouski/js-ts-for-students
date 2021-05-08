export type UserType = {
    name: string
    hair: number
    address: {
        city: string
        house: number
    }
};
export type LaptopType = {
    title: string
}
export type UserWithLaptopType = UserType & {
    laptop: LaptopType
}
export type UserWithBooksType = {
    books: Array<string>
}
export type UserWithCompaniesType = {
    companies: Array<{ id: number, title: string }>
}
export type CompanyType = {
    id: number
    title: string
}
export type CompaniesType = {
    [key: string]: Array<CompanyType>
}

export function makeHairstyle(u: UserType, power: number) {
    return {
        ...u,
        hair: u.hair / power
    }
    //copyUser.hair = u.hair / power;
    // return copy;
}
export function moveUser(u: UserWithLaptopType, city: string) {
    return {
        ...u,
        address: {
            ...u.address,
            city: city
        }
    }
    // copyUser.address = {
    //     ...u.address,
    //     city: city
    // }
    // return copyUser;
}
export function upgradeNotebook(u: UserWithLaptopType, notebook: string) {
    return {
        ...u,
        laptop: {
            ...u.laptop,
            title: notebook
        }
    }
}
export function moveUserToOtherHouse(u: UserWithLaptopType & UserWithBooksType, house: number) {
    return {
        ...u,
        address: {
            ...u.address,
            house: house
        }
    }
}
export function addNewBooksToUser(u: UserWithLaptopType & UserWithBooksType, newBooks: Array<string>) {
    return {
        ...u,
        books: [
            ...u.books, ...newBooks
        ]
    }
}
export const updateBook = (u: UserWithLaptopType & UserWithBooksType, book1: string, book2: string) => ({
    ...u,
    books: u.books.map(el => el === book1 ? book2 : el)
});
export const removeBook = (u: UserWithLaptopType & UserWithBooksType, book: string) => ({
    ...u,
    books: u.books.filter(el => el !== book)
});
export const addNewWork = (u: UserWithLaptopType & UserWithCompaniesType, id: number, title: string) => ({
    ...u,
    companies: [
        ...u.companies, {id, title}
    ]
});
export const updateCompanyTitle = (u: UserWithCompaniesType, id: number, newTitle: string) => ({
    ...u,
    companies: u.companies.map(el => el.id === id ? {...el, title: newTitle} : el)
});

export const updateCompany = (c: CompaniesType, userName: string, id: number, newTitle: string) => {
    let copyCompanies = {...c};
    copyCompanies[userName] = copyCompanies[userName].map(el => el.id === id
        ? {...el, title: newTitle}
        : el)
    return copyCompanies;
}