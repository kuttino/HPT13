/*
const eric = {
    firstname: 'eric',
    age: 10,
    getAge: function() {
        return this.age;
    },
    setAge: function(age) {

        if(age < 0) {
            throw new Error('valore negativo non valido per l\'eta');
        }

        if(age > 150) {
            throw new Error('sei sicuro che l\'utente ha più di 150 anni?!?!');
        }

        this.age = age;
    }
};




console.log('inizio del try catch');
try {
    eric.setAge(230);
    console.log(eric);

} catch(error) {
    console.log('si è verificato un errore', error.message);
}

console.log('fine del try catch');
*/








/*
function sumNaturals(x, y) {

    if(x < 0) {
        return -1;
    }

    if(y < 0) {
        return -2;
    }

    return x + y;
}


function raddoppiaNaturals(x) {
    return sumNaturals(x, x);
}


const num = -3;
const numRaddoppiato = raddoppiaNaturals(num);
console.log(numRaddoppiato);
*/


/*
function prependMr(firstname) {

    if(firstname.length == 0) {
        throw new Error('firstname vuoto');
    }

    return 'Mr ' + firstname;
}



const user = '';
const mrUser = prependMr(user);
console.log(mrUser);
*/



/*
function sumNatural(x, y) {

    return new Promise(function(resolve, reject) {

        if(x < 0) {
            reject('x deve essere maggiore o uguale di zero');
            return;
        }

        if(y < 0) {

            reject('y deve essere maggiore o uguale di zero');
            return;
        }

        let z = x + y;
        resolve(z);
    });
}

function print(msg) {

    return new Promise(function(resolve, reject) {

        resolve(msg)
    });
}
*/


async function print(msg) {
    return msg;
}


async function sumNatural(x, y) {

    if(x < 0) {
        throw new Error('x deve essere maggiore o uguale di zero');
    }

    if(y < 0) {
        throw new Error('y deve essere maggiore o uguale di zero');
    }

    let z = x + y;
    return z;
}


async function printSumNatural(x, y) {
    const result = await sumNatural(x, y);
    console.log('sumNatural terminato');

    // promise chaining
    const msg = await print(result);
    console.log('print terminato', msg);
}


printSumNatural(-5, 3)
    .then(function() {
        console.log('printSumNatural terminato');
    })
    .catch(function(error) {
        console.log('printSumNatural catch', error);
    });

/*
sumNatural(5, 3)
    .then(function(result) {
        console.log('sumNatural terminato');

        // promise chaining
        return print(result);
    })
    .then(function(msg) {
        console.log('print terminato', msg);
    })
    .catch(function(error) {
        console.log(error);
    });
*/