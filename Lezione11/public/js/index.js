
function createArticle(title, content) {

    const articleElement = document.createElement('article');


    const now = new Date();
    const dateElement = document.createElement('span');
    dateElement.textContent = now.toLocaleDateString() + ' alle ' + now.toLocaleTimeString();
    articleElement.appendChild(dateElement);

    const titleElement = document.createElement('h2');
    titleElement.textContent = title;
    articleElement.appendChild(titleElement);       // has-a

    const contentElement = document.createElement('p');
    contentElement.textContent = content;
    articleElement.appendChild(contentElement);

    return articleElement;
}



const main = document.querySelector('main');

const titleInput = document.getElementById('titleInput');
const contentTextarea = document.getElementById('contentTextarea');

const articleForm = document.getElementById('articleForm');
articleForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const article = createArticle(titleInput.value, contentTextarea.value);
    main.appendChild(article);
});


// unix timestamp
// millisecondi trascorsi dal 1 gennaio 1970 UTC

// i mesi partono da 0 dove 0 è gennaio mentre 11 è dicembre
// getDate() il giorno del mese
// getDay() il giorno della settimana






