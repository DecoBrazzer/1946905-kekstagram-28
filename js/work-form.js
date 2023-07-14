import { UPLOAD_FILE, IMG_UPLOAD_OVERLAY, BODY_DOCUMENT, IMG_UPLOAD_PREVIEW, FORM_UPLOAD_FORM} from './constants.js';
import { isEscapeKey } from './util.js';
import { addScaleHandler, removeScaleHandler, SCALE_DEFAULT } from './scale-on-form.js';
import './validator.js';
import { applyingEffects } from './applying-an-effect.js';
// import './slider.js';


const IMG_UPLOAD_CANCEL = document.querySelector('.img-upload__cancel');

const effectSliderContainer = document.querySelector('.img-upload__effect-level');

const VALUE_SCALE_CONTROL = document.querySelector('.scale__control--value');


const clearEnterData = () => {
  VALUE_SCALE_CONTROL.value = `${SCALE_DEFAULT}%`;
  IMG_UPLOAD_PREVIEW.style = 'transform: scale(1)';

  FORM_UPLOAD_FORM.reset();
  IMG_UPLOAD_PREVIEW.style.filter = 'none';
  IMG_UPLOAD_PREVIEW.src = '';
};

const onOpenUploadFile = () => {
  IMG_UPLOAD_OVERLAY.classList.remove('hidden');
  document.addEventListener('keydown', onClosePressEsc);
  addScaleHandler();
  applyingEffects();
  BODY_DOCUMENT.classList.add('modal-open');
  effectSliderContainer.classList.add('hidden');
};

const onCloseUploadFile = () => {
  IMG_UPLOAD_OVERLAY.classList.add('hidden');
  document.removeEventListener('keydown', onClosePressEsc);
  removeScaleHandler();
  clearEnterData();
  BODY_DOCUMENT.classList.remove('modal-open');
};

function onClosePressEsc(evt) {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    onCloseUploadFile();
  }
}


UPLOAD_FILE.addEventListener('change', onOpenUploadFile);

IMG_UPLOAD_CANCEL.addEventListener('click', onCloseUploadFile);


// FORM_UPLOAD_SELECT.addEventListiner('submit', onUploadFormSubmit);


