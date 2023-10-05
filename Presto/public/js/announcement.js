


function createAnnouncement(announcement) {

    const createdAt = new Date(announcement.createdAt);

    return `
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






document.addEventListener('DOMContentLoaded', async () => {

    const rawQuery = window.location.search;
    const query = new URLSearchParams(rawQuery);
    
    const id = query.get('id');

    const response = await fetch('/Presto/server/api/annunci.json');
    const announcements = await response.json();


    const announcementRow = document.getElementById('announcementRow');

    const announcementFound = announcements.find((announcement) => {
        return announcement.id == id;
    });

    announcementRow.innerHTML = createAnnouncement(announcementFound);
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
