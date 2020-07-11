console.log('it works');

// Accesse the post list div element, the parent node with id attribute

// let postList = document.querySelector('#post-list');

// Access the form

let postTitleInp = document.querySelector('#postTitle.form-controle');
let contentInp = document.querySelector('[name="postContent"]');
let imageInp = document.querySelector('[name="postImg"]');
let postAuthorInp = document.querySelector('[name="postAuthor"]');

// Add a new div element to wrape the elements below with a class
const newPost = () => {


let cardDiv = document.createElement('div');
cardDiv.classList.add('card');

// Create an image element with necessary attributes

let cardImg = document.createElement('img');
cardImg.classList.add('card-img-top');
//cardImg.textContent = imageInp.value;

// Add a div element as a sibling of the image above with required attribute
let bodyCard = document.createElement('div');
bodyCard.classList.add('card-body');


// Create an h5 element as the heading/ title of div card body with a class 

let titleCardBody = document.createElement('h5');
titleCardBody.classList.add('card-title');
//titleCardBody.textContent = postTitleInp.value;
titleCardBody.textContent = ' by I am the title';

// Create a small element inside h5
let authorSmall = document.createElement('small');
//authorSmall.textContent = postAuthorInp.value;
authorSmall.textContent = 'I am small';
titleCardBody.appendChild(authorSmall);

// Create a new paragraph as description text of card body div
let textCardBody = document.createElement('p');
textCardBody.classList.add('card-text');
//textCardBody.textContent = contentInp.value;
textCardBody.textContent = 'Paragreph';
// Add a button to delete post if necessary

let deleteButton = document.createElement('button');
deleteButton.setAttribute('type', 'button');
deleteButton.classList.add('btn', 'btn-smbtn-light', 'btn-delete');
deleteButton.textContent = "Delete";

// Set a div element to add a date when the post was/is posted

let footerCard = document.createElement('div');
footerCard.classList.add('card-footer', 'text-muted');
footerCard.textContent = 'Dete';

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
let postList = document.querySelector('#post-list');
    postList.appendChild(newPost());

// let sbmBtn = document.querySelector('.btn-primary');
// sbmBtn.addEventListener('click', ($event) => {
//     let postList = document.querySelector('#post-list');
//     postList.appendChild(newPost());
//     $event.preventDefault();
// });
// console.log(sbmBtn);