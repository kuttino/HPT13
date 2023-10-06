import { users, addUser } from "./user.js"


function printUsers(utenti) {

    utenti.forEach((user) => {
        console.log(user);
    });
}


addUser({
    firstname: 'kenny'
})

printUsers(users);