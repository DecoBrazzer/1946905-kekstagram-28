import { PHOTO_CARDS_DATA } from './constants.js';

const addressOnPictureInContainer = document.querySelectorAll('.picture .picture__img');

const addressOnPictureInPopup = document.querySelector('.big-picture__img img');

const likeCounter = document.querySelector('.social__likes .likes-count');

const commentCounter = document.querySelector('.social__comment-count .comments-count');

const captionPicture = document.querySelector('.social__caption');

function addThumbnailClickHandler (thumbnail, dataCard) {
  thumbnail.addEventListener('click', () => {
    addressOnPictureInPopup.src = dataCard.url;
    likeCounter.textContent = dataCard.likes;
    commentCounter.textContent = dataCard.comments.length;
    captionPicture.textContent = dataCard.description;
  });
}


for (let i = 0; i < PHOTO_CARDS_DATA.length; i++) {
  addThumbnailClickHandler(addressOnPictureInContainer[i], PHOTO_CARDS_DATA[i]);
}


