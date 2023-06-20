import { PHOTO_CARDS_DATA } from './constants.js';

const pictureSurce = document.querySelectorAll('.picture .picture__img');

const surcePictureOnPopup = document.querySelector('.big-picture__img img');

const likeCounter = document.querySelector('.social__likes .likes-count');

const commentCounter = document.querySelector('.social__comment-count .comments-count');

const captionPicture = document.querySelector('.social__caption');

function addThumbnailClickHandler (thumbnail, dataCard) {
  thumbnail.addEventListener('click', () => {
    surcePictureOnPopup.src = dataCard.url;
    likeCounter.textContent = dataCard.likes;
    commentCounter.textContent = dataCard.comments.length;
    captionPicture.textContent = dataCard.description;
  });
}


for (let i = 0; i < PHOTO_CARDS_DATA.length; i++) {
  addThumbnailClickHandler(pictureSurce[i], PHOTO_CARDS_DATA[i]);
}


