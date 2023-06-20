import { PHOTO_CARDS_DATA, PICTURES_CONTAINER } from './constants.js';


const picturePattern = document.querySelector('#picture').content;

const pictureItem = picturePattern.querySelector('.picture');

const fragment = document.createDocumentFragment();


function fillingСards() {
  for(let i = 0; i < PHOTO_CARDS_DATA.length; i++) {
    const element = pictureItem.cloneNode(true);
    element.classList.add('picture');

    const pictureImg = element.querySelector('.picture__img');
    const pictureComment = element.querySelector('.picture__comments');
    const pictureLike = element.querySelector('.picture__likes');

    pictureImg.src = PHOTO_CARDS_DATA[i].url;
    pictureComment.textContent = PHOTO_CARDS_DATA[i].comments.length;
    pictureLike.textContent = PHOTO_CARDS_DATA[i].likes;
    fragment.appendChild(element);
  }
  return fragment;
}

PICTURES_CONTAINER.appendChild(fillingСards());

