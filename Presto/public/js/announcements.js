function generateAnnouncementCard(announcement) {

    let badge = '';
    if(announcement.type == 'search') {
        badge = '<span class="position-absolute top-0 end-0 badge bg-primary py-2 px-4">SEARCH</span>';
    } else {
        badge = '<span class="position-absolute top-0 end-0 badge bg-danger py-2 px-4">SELL</span>';
    }

    const createdAt = new Date(announcement.createdAt);

    return `<a href="" class="card">
        <div class="position-relative">
            <img src="https://picsum.photos/seed/237/640/480" class="card-img-top">
            ${badge}
        </div>
        <div class="card-body">
            <p class="mb-1 fw-semibold fs-4 text-primary">€${announcement.price}</p>
            <h5 class="card-title mb-2 display-5 text-black">${announcement.name}</h5>
            <p class="card-text text-muted">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
        <div class="card-footer d-flex justify-content-around py-3 bg-white text-primary ">
            <p class="my-0"><i class="bi bi-tag-fill"></i><span class="ms-2">${announcement.category}</span></p>
            <p class="my-0"><i class="bi bi-calendar-fill"></i><span class="ms-2">${createdAt.toLocaleDateString()}</span></p>
        </div>
    </a>`;
}


function showAnnouncements(announcements) {

    // cerco l'elemento parent
    const announcementsRow = document.getElementById('announcementsRow');

    // rimuovo i child dal parent
    // announcementsRow.innerHTML = '';
    while(announcementsRow.hasChildNodes()) {
        announcementsRow.removeChild(announcementsRow.firstChild);
    }

    // appendo ogni singolo annuncio al parent
    announcements.forEach((ann) => {

        const col = document.createElement('div');
        col.classList.add('col-12', 'col-md-6', 'col-lg-4');
        col.innerHTML = generateAnnouncementCard(ann);

        announcementsRow.appendChild(col);
    });
}

function filteringAnnouncements(announcements, options) {

    console.log('announcements', announcements);
    console.log('options', options);

    const filteredAnnouncements = announcements.filter((announcement) => {

        let isAnnouncementValid = true;
        if(options.search.length > 0) {
            isAnnouncementValid = announcement.name.toLowerCase().includes(options.search.toLowerCase());
        }

        if(isAnnouncementValid && options.minPrice.length > 0) {
            isAnnouncementValid = parseFloat(announcement.price) >= parseFloat(options.minPrice);
        }

        if(isAnnouncementValid && options.maxPrice.length > 0) {
            isAnnouncementValid = parseFloat(announcement.price) <= parseFloat(options.maxPrice);
        }

        return isAnnouncementValid;
    });


    // TODO 
    // ordinamento dell'array


    return filteredAnnouncements;
}



let foundAnnouncements = [];
fetch('/Presto/server/api/annunci.json')
    .then((response) => {
        return response.json();
    })
    .then((announcements) => {
        foundAnnouncements = announcements;
        showAnnouncements(announcements);
    })
    .catch((error) => {
        console.error(error);
    });




const searchInput = document.getElementById('searchInput');
const categorySelect = document.getElementById('categorySelect');
const minPriceInput = document.getElementById('minPriceInput');
const maxPriceInput = document.getElementById('maxPriceInput');
const sortSelect = document.getElementById('sortSelect');



const filteringForm = document.getElementById('filteringForm');
filteringForm.addEventListener('submit', (event) => {
    event.preventDefault();

    //console.log('foundAnnouncements', foundAnnouncements);  // da sostituire usando async await

    const options = {
        search: searchInput.value,
        category: categorySelect.value,
        minPrice: minPriceInput.value,
        maxPrice: maxPriceInput.value,
        sort: sortSelect.value
    };


    const filteredAnnouncements = filteringAnnouncements(foundAnnouncements, options);
    showAnnouncements(filteredAnnouncements);
});




