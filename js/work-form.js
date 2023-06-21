import { UPLOAD_FILE, IMG_UPLOAD_OVERLAY } from './constants.js';
import { isEscapeKey } from './util.js';

const IMG_UPLOAD_CANCEL = document.querySelector('.img-upload__cancel');


const onOpenUploadFile = () => {
  IMG_UPLOAD_OVERLAY.classList.remove('hidden');
  document.addEventListener('keydown', onClosePressEsc);
};

const onCloseUploadFile = () => {
  IMG_UPLOAD_OVERLAY.classList.add('hidden');
  document.removeEventListener('keydown', onClosePressEsc);
};

function onClosePressEsc(evt) {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    onCloseUploadFile();
  }
}


UPLOAD_FILE.addEventListener('change', onOpenUploadFile);
IMG_UPLOAD_CANCEL.addEventListener('click', onCloseUploadFile);


