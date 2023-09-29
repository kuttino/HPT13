


// esiste un contenitore per operazione asincrone che ci informi se
// un certo task (una operazione asincrona) è stato eseguito in maniera
// positiva oppure se si è verificato un qualche problema?





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





sumNatural(5, -3)
    .then(function(value) {
        console.log(value);
    })
    .catch(function(error) {
        console.log(error);
    });
*/




/*
function getPhonePromise(didYouForgot, maxBudget) {

    return new Promise(function(resolve, reject) {

        window.setTimeout(function() {

            if(didYouForgot) {
                reject('mi sono scordato');
                return;
            }


            const phonePrice = 100;
            if(maxBudget < phonePrice) {
                reject('costa troppo');
                return
            }

            resolve('Luca ti ho comprato il telefono');

        }, 10000);
    });
}




console.log('inizio script');


getPhonePromise(false, 150)
    .then(function(result) {
        console.log(result);
    })
    .catch(function(error) {
        console.log(error);
    });


console.log('fine script');
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

        window.setTimeout(function() {

            reject('non posso eseguire la stampa');

        }, 1000);
    });
}



sumNatural(-5, 3)
    .then(function(result) {
        console.log('sumNatural terminato');

        // promise chaining
        return print(result);
    })
    .then(function() {
        console.log('print terminato');
    })
    .catch(function(error) {
        console.log(error);
    });
*/


// JSON javascript object notation

fetch('https://picsum.photos/v2/list')
    .then(function(response) {
        console.log(response.status);

        // promise chaining
        return response.json();
    })
    .then(function(data) {
        console.log(data);
    })
    .catch(function(error) {
        // questa funzione viene invocata solo se si verifica un problema
        // di connessione lato client
        console.log(error);
    });



