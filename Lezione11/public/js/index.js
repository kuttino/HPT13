

const garage = [
    {
        brand: 'fiat',
        model: '500'
    },
    {
        brand: 'fiat',
        model: 'punto'
    },
    {
        brand: 'ferrari',
        model: '512'
    }
];


const foundList = document.getElementById('foundList');

const brandInput = document.getElementById('brandInput');
const searchForm = document.getElementById('searchForm');
searchForm.addEventListener('submit', (event) => {

    event.preventDefault();

    //foundList.innerHTML = '';
    // rimuovo i figli di foundList
    while(foundList.hasChildNodes()) {
        const firstChild = foundList.firstChild;
        foundList.removeChild(firstChild);
    }


    garage.forEach((car) => {
        if(car.brand == brandInput.value) {

            const li = document.createElement('li');
            li.textContent = car.model;
    
            foundList.appendChild(li);
        }
    });

    brandInput.value = '';
});


