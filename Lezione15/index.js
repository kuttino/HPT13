function randomColor() {
    return Math.floor(Math.random() * 256);
}

let counter = 0;

function appendSquare() {
    const container = document.getElementById('container');

    const r = randomColor();
    const g = randomColor();
    const b = randomColor();

    const square = document.createElement('p');
    square.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
    square.textContent = counter;
    container.appendChild(square);

    counter++;
}

function fetchSim() {

    for(let i=0; i<10; i++) {
        appendSquare();
    }
}

// prima fetch
// https://instagram.com/explore?page=1&size=10
fetchSim();



// https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API
const observer = new IntersectionObserver((entries) => {
    const entry = entries[0];
    if(entry.intersectionRatio <= 0) {
        return;
    }

    // https://instagram.com/explore?page=2&size=10
    // https://instagram.com/explore?page=3&size=10
    fetchSim();
});

const more = document.getElementById('more');
observer.observe(more);