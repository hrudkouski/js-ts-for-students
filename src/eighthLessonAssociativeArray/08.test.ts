export {};

type UsersTestType = {
    [key: string]: { id: number, name: string };
}

let users: UsersTestType;

beforeEach(() => {
        users = {
            '101': {id: 101, name: 'Dimych'},
            '3232312': {id: 3232312, name: 'Natasha'},
            '1212': {id: 1212, name: 'Valera'},
            '1': {id: 1, name: 'Katya'},
        }
    }
)

test('should update corresponding user from obj', () => {
    users['1'].name = 'Ekaterina';
    expect(users['1']).toEqual({id: 1, name:'Ekaterina'});
})

test('should delete corresponding user from obj', () => {
    delete users['1'];
    expect(users['1']).toBeUndefined();
})