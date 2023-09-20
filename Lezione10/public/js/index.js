function addContact(contactsList, contact) {

    const contactItem = document.createElement('li');
    contactsList.appendChild(contactItem);

    const nameSpan = document.createElement('span');
    nameSpan.textContent = contact.name;
    contactItem.appendChild(nameSpan);

    const phoneSpan = document.createElement('span');
    phoneSpan.textContent = contact.phone;
    contactItem.appendChild(phoneSpan);

    const deleteBtn = document.createElement('button');
    deleteBtn.classList.add('bi', 'bi-trash-fill');
    deleteBtn.addEventListener('click', function() {
        contactsList.removeChild(contactItem);
    });
    contactItem.appendChild(deleteBtn);
}

const contactsList = document.getElementById('contactsList');

const nameInput = document.getElementById('nameInput');
const phoneInput = document.getElementById('phoneInput');
const contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit', function(event) {

    event.preventDefault();

    const contact = {
        name: nameInput.value,
        phone: phoneInput.value
    };


    addContact(contactsList, contact);

    nameInput.value = '';
    phoneInput.value = '';
});



