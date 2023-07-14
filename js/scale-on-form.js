import { IMG_UPLOAD_PREVIEW } from './constants.js';
const SCALE_STEP = 25;
const MIN_SCALE = 25;
const MAX_SCALE = 100;
const SCALE_DEFAULT = 100;
const DIVIDER_SCALE = 100;


const LOW_SCALE_CONTROL = document.querySelector('.scale__control--smaller');

const BIGGER_SCALE_CONTROL = document.querySelector('.scale__control--bigger');

const VALUE_SCALE_CONTROL = document.querySelector('.scale__control--value');


const zoomOut = () => {
  let scale = parseInt(VALUE_SCALE_CONTROL.value, 10);
  if (scale > MIN_SCALE) {
    scale -= SCALE_STEP;
    VALUE_SCALE_CONTROL.value = `${scale}%`;
    IMG_UPLOAD_PREVIEW.style = `transform: scale(${scale / DIVIDER_SCALE})`;
  }
};

const zoomIt = () => {
  let scale = parseInt(VALUE_SCALE_CONTROL.value, 10);
  if (scale < MAX_SCALE) {
    scale += SCALE_STEP;
    VALUE_SCALE_CONTROL.value = `${scale}%`;
    IMG_UPLOAD_PREVIEW.style = `transform: scale(${scale / DIVIDER_SCALE})`;
  }
};

const addScaleHandler = () => {
  VALUE_SCALE_CONTROL.value = `${SCALE_DEFAULT}%`;
  LOW_SCALE_CONTROL.addEventListener('click', zoomOut);
  BIGGER_SCALE_CONTROL.addEventListener('click', zoomIt);
};


const removeScaleHandler = () => {
  LOW_SCALE_CONTROL.removeEventListener('submit', zoomOut);
  BIGGER_SCALE_CONTROL.removeEventListener('submit', zoomIt);
};


export { addScaleHandler, removeScaleHandler, SCALE_DEFAULT};


