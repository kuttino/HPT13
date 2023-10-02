function showAnnouncement(announcement) {

    const createdAt = new Date(announcement.createdAt);

    const announcementRow = document.getElementById('announcementRow');
    announcementRow.innerHTML = `
        <div class="col-12 col-md-6 p-0">
            <img src="https://picsum.photos/seed/237/640/480" class="card-img-top">
        </div>
        <div class="col-12 col-md-6 d-flex flex-column justify-content-center">
            <div class="p-4">
                <p class="mb-1 fw-semibold fs-4 text-primary">€${announcement.price}</p>
                <h5 class="mb-2 display-5 text-black">${announcement.name}</h5>
                <p class="text-muted">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
            <div class=" d-flex justify-content-around py-3 text-primary ">
                <p class="my-0 ${announcement.type == 'sell' ? 'text-danger' : 'text-primary'}"><i class="bi bi-tag-fill"></i><span class="ms-2">${announcement.type}</span></p>
                <p class="my-0"><i class="bi bi-tag-fill"></i><span class="ms-2">${announcement.category}</span></p>
                <p class="my-0"><i class="bi bi-calendar-fill"></i><span class="ms-2">${createdAt.toLocaleDateString()}</span></p>
            </div>
        </div>
    `;
}

const rawQuery = window.location.search;
const query = new URLSearchParams(rawQuery);

const id = query.get('id');

fetch('/Presto/server/api/annunci.json')
    .then((response) => {
        return response.json();
    })
    .then((announcements) => {

        const announcementFound = announcements.find((announcement) => {
            return announcement.id == id;
        });

        showAnnouncement(announcementFound);
    })
    .catch((error) => {
        console.error(error);
    });



/*

const type = 'search';

let color = '';
if(type == 'sell') {
    color = 'red';
} else {
    color = 'green';
}

// let color = type == 'sell' ? 'red' : 'green';
console.log(color);
*/
