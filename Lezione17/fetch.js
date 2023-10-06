// fetch
// recap di tutto
// conversione di tipo di dato

/*
// HTTP GET -> READ BY ID
fetch('http://dms.cyberdelia.eu/api/v1/user/1')
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        console.log(data);
    })
    .catch((error) => {
        console.error(error);
    });
*/

// HTTP POST -> CREATE

/*
const user = {
    firstname: 'Gabriele',
    lastname: 'Cesarano'
};

// serializzazione converto un oggetto in una stringa usando un particolare formato
const userSerialized = JSON.stringify(user);

const opt = {
    method: 'POST',
    headers: new Headers({
        "Content-Type": "application/json",
    }),
    body: userSerialized
}

fetch('http://dms.cyberdelia.eu/api/v1/user', opt)
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        console.log(data);
    })
    .catch((error) => {
        console.error(error);
    });
*/


/*
const x = 12; // number
const xStr = new String();

console.log(typeof x);
*/



/*
const num = undefined;

const isUltimoGiorno = Boolean(num);
console.log(isUltimoGiorno);
*/




function printMsg(msg) {

    if(!msg) {
        throw new Error('il messaggio è vuoto');
    }

    console.log(msg);
}



const str = '';
printMsg(str);