
/*
<div class="col-12 col-md-6 col-lg-4 col-xl-3">
    <div class="category-card">
        <a class="category-body" href="">
            <div class="category-body-icon">
                <i class="bi bi-airplane"></i>
            </div>
            <h3>Auto</h3>
            <p>123 Annunci</p>
        </a>
    </div>
</div>
*/

function addCategory(category) {

    const col = document.createElement('div');
    col.classList.add('col-12', 'col-md-6', 'col-lg-4', 'col-xl-3');

    const categoryCard = document.createElement('div');
    categoryCard.classList.add('category-card');
    col.appendChild(categoryCard);

    const link = document.createElement('a');
    link.classList.add('category-body');
    link.setAttribute('href', '');
    categoryCard.appendChild(link);

    const categoryBodyIcon = document.createElement('div');
    categoryBodyIcon.classList.add('category-body-icon');
    link.appendChild(categoryBodyIcon);

    const icon = document.createElement('i');
    const iconClasses = category.icon.split(' ');
    iconClasses.forEach((clazz) => {
        icon.classList.add(clazz);
    });
    //icon.classList.add('bi', 'bi-airplane');    // TODO convertire 'bi bi-airplane' -> 'bi', 'bi-airplane'
    categoryBodyIcon.appendChild(icon);

    const title = document.createElement('h3');
    title.textContent = category.name;
    link.appendChild(title);

    const description = document.createElement('p');
    description.textContent = `Annunci ${category.announcementsCount}`;
    link.appendChild(description);


    // category.announcementsCount
    // category.icon
    // category.name
    
    return col;
}


const categoriesRow = document.getElementById('categoriesRow');


fetch('/Presto/server/api/categorie.json')
    .then(function(response) {
        return response.json();
    })
    .then(function(categories) {

        console.log('categories', categories);
        
        categories.forEach((category) => {

            const categoryColumn = addCategory(category);
            categoriesRow.appendChild(categoryColumn);
        });
    })
    .catch(function(error) {
        console.log(error);
    });