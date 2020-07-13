console.log('it works');

// Access the form

let postTitleInp = document.querySelector('#postTitle');
let contentInp = document.querySelector('[name="postContent"]');
let imageInp = document.querySelector('[name="postImg"]');
let postAuthorInp = document.querySelector('[name="postAuthor"]');
const textAreaErrorMessage = document.querySelector('#error-message');
let postList = document.querySelector('#post-list');


// 1. Show/hide form

const showForm = document.querySelector('#show-form');
const formCard = document.querySelector('#form-card');

const toggleForm = () => {
    if (formCard.classList.contains('hidden')) {
        formCard.classList.remove('hidden');
        showForm.textContent = 'Hide form';
    } else {
    formCard.classList.add('hidden');
    showForm.textContent = 'Add a post';
    }
}

// 1.2 Add a new div element to wrape the elements below with a class. This is the html

const newPost = () => {

let cardDiv = document.createElement('div');
cardDiv.classList.add('card');

// Create an image element with necessary attributes

let cardImg = document.createElement('img');
cardImg.classList.add('card-img-top');
cardImg.setAttribute('src', `${imageInp.value}`);

// Add a div element as a sibling of the image above with required attribute
let bodyCard = document.createElement('div');
bodyCard.classList.add('card-body');


// Create an h5 element as the heading/ title of div card body with a class 

let titleCardBody = document.createElement('h5');
titleCardBody.classList.add('card-title');
//titleCardBody.textContent = postTitleInp.value;


// Create a small element inside h5
let authorSmall = document.createElement('small');
//authorSmall.textContent = postAuthorInp.value;
authorSmall.textContent = ` by ${postAuthorInp.value}`;
titleCardBody.textContent = `${postTitleInp.value}`;
titleCardBody.appendChild(authorSmall);

// Create a new paragraph as description text of card body div
let textCardBody = document.createElement('p');
textCardBody.classList.add('card-text');
//textCardBody.textContent = contentInp.value;
textCardBody.textContent = `${contentInp.value}`;
// Add a button to delete post if necessary

let deleteButton = document.createElement('button');
deleteButton.setAttribute('type', 'button');
deleteButton.classList.add('btn', 'btn-smbtn-light', 'btn-delete');
deleteButton.textContent = "Delete entry";

// Set a div element to add a date when the post was/is posted
const today = new Date();
let footerCard = document.createElement('div');
footerCard.classList.add('card-footer', 'text-muted');
footerCard.textContent = `${today.toLocaleDateString()}`;

// ApendChild them here with their parents

// postList.appendChild(cardDiv);
cardDiv.appendChild(cardImg);
cardDiv.insertAdjacentElement('beforeend', bodyCard);
bodyCard.appendChild(titleCardBody);
bodyCard.appendChild(textCardBody);
bodyCard.appendChild(deleteButton);
cardDiv.insertAdjacentElement('beforeend', footerCard);
return cardDiv;
};

// 2. Handle new post

const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const postContent = contentInp;
    const nbrOfWords = postContent.value.split(' ').length;

    if (nbrOfWords < 20) {
        postContent.classList.add('is-invalid');
        textAreaErrorMessage.classList.remove('hidden');
    } else {
        postList.appendChild(newPost());

        postContent.classList.remove('is-invalid');
		textAreaErrorMessage.classList.add('hidden');
    }

    form.reset();
};

    

// let sbmBtn = document.querySelector('.btn-primary');
// sbmBtn.addEventListener('click', ($event) => {
//     postList.appendChild(newPost());
//     $event.preventDefault();
// });
// console.log(sbmBtn);

showForm.addEventListener('click', toggleForm);