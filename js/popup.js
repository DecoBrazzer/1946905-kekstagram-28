import { isEscapeKey } from './util.js';
import { FULL_MODE, CANCEL_FULL_MODE, PICTURES_CONTAINER, BODY_DOCUMENT } from './constants.js';


const pictureCards = PICTURES_CONTAINER.querySelectorAll('.picture');


const removeClassHidden = function() {
  FULL_MODE.classList.remove('hidden');
  document.addEventListener('keydown', onDocumentKeyDown);
  BODY_DOCUMENT.classList.add('modal-open');
};

const addClassHidden = function() {
  FULL_MODE.classList.add('hidden');
  document.removeEventListener('keydown', onDocumentKeyDown);
  BODY_DOCUMENT.classList.remove('modal-open');
};


function onDocumentKeyDown(evt) {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    addClassHidden();
  }
}


for (let i = 0; i < pictureCards.length; i++) {
  pictureCards[i].addEventListener('click', removeClassHidden);
}
CANCEL_FULL_MODE.addEventListener('click', addClassHidden);

