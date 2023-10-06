/*
// rest operator
function sum(...params) {
    let sum = 0;
    params.forEach((value) => {
        sum += value;
    });
    return sum;
}


const result = sum(5, 2, 3);
console.log(result);
*/


/*
const arr = [5, 2, 3];

// spread operator
const max = Math.max(...arr);
console.log(max);
*/


/*
const giocatoriInter = ['ugo', 'giovanni'];
const giocatoriMilan = ['ciccio', 'matteo'];


//const giocatoriSerieA = ['ugo', 'giovanni', 'ciccio', 'matteo']
const giocatoriSerieA = [...giocatoriInter, ...giocatoriMilan];
console.log(giocatoriSerieA);
*/



/*

const userData = ['eric', 'cartman', 'eric.cartman@gmail.com'];

const firstname = userData[0];
const lastname = userData[1];
const email = userData[2];

// array destructuring
const [firstname, lastname, email] = userData;


console.log(firstname);
console.log(lastname);
console.log(email);
*/




/*
const eric = {
    firstname: 'eric',
    lastname: 'cartman',
    email: 'eric.cartman@gmail.com'
};

const firstname = eric.firstname;
const lastname = eric.lastname;
const email = eric.email;

// object destructuring
const {firstname, email} = eric;


console.log(firstname);
console.log(email);
*/


function printFullname({lastname, firstname}) {

    console.log(`${firstname} ${lastname}`);
}

const eric = {
    firstname: 'eric',
    lastname: 'cartman',
    email: 'eric.cartman@gmail.com'
};

printFullname(eric);