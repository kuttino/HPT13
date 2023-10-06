
const users = [
    {
        id: 1,
        firstname: 'eric',
        lastname: 'cartman'
    },
    {
        id: 2,
        firstname: 'stan',
        lastname: 'marsh'
    },
];

let nextId = 3;

function addUser(user) {

    user.id = nextId;
    users.push(user);

    nextId++;
}

export { users, addUser };