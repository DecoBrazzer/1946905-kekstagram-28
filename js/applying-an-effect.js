import { IMG_UPLOAD_PREVIEW } from './constants.js';


const effectsItem = document.querySelectorAll('.effects__item input');

/* Блок вставки слайдера */
const effectLevelSlider = document.querySelector('.effect-level__slider');

/* запись value */
const effectLevelValue = document.querySelector('.effect-level__value');

/* Блок полностью со слайдером */
const effectSliderContainer = document.querySelector('.img-upload__effect-level');

/* Нет эффекта*/
const NO_EFFECT = 'none';

const effectLevelDefault = {
  range: {min: 0, max: 100, },
  start: 1,
  step: 1,
};

const EFFECT_CONFIG = {
  chrome: {
    options: {
      range: { min: 0, max: 1, },
      start: 1,
      step: 0.1,
      connect: 'lower',
    },
    style: 'grayscale',
    unit: '',
  },

  sepia: {
    options: {
      range: { min: 0, max: 1, },
      start: 1,
      step: 0.1,
      connect: 'lower',
    },
    style: 'sepia',
    unit: '',
  },

  marvin: {
    options: {
      range: { min: 0, max: 100, },
      start: 100,
      step: 1,
      connect: 'lower',
    },
    style: 'invert',
    unit: '%',
  },

  phobos: {
    options: {
      range: { min: 0, max: 3, },
      start: 3,
      step: 0.1,
      connect: 'lower',
    },
    style: 'blur',
    unit: 'px',
  },

  heat: {
    options: {
      range: { min: 1, max: 3, },
      start: 3,
      step: 0.1,
      connect: 'lower',
    },
    style: 'brightness',
    unit: '',
  },
};

const imageEffectReset = () => {
  IMG_UPLOAD_PREVIEW.style.filter = NO_EFFECT;
  IMG_UPLOAD_PREVIEW.className = '';
  effectLevelValue.value = '';
  effectSliderContainer.classList.add('hidden');
};


noUiSlider.create(effectLevelSlider, effectLevelDefault);

const updateSliderConfig = (effectName) => {
  effectLevelSlider.noUiSlider.updateOptions(effectName.options);
};

const changesImgUploadPreview = (effectName) => {
  IMG_UPLOAD_PREVIEW.style.filter = `${effectName.style}(${effectLevelSlider.noUiSlider.get()}${effectName.unit})`;
};


const addEffectOnPreview = (evt) => {
  const effectName = evt.target.value;
  IMG_UPLOAD_PREVIEW.className = '';
  IMG_UPLOAD_PREVIEW.classList.add(`effects__preview--${effectName}`);

  if (effectName === NO_EFFECT) {
    imageEffectReset();
  } else {
    effectSliderContainer.classList.remove('hidden');
    updateSliderConfig(EFFECT_CONFIG[effectName]);
    effectLevelSlider.noUiSlider.on('update', () => {
      effectLevelValue.getAttributeNode('value').value = effectLevelSlider.noUiSlider.get();
      changesImgUploadPreview(EFFECT_CONFIG[effectName]);
    });
  }
};


const applyingEffects = () => {
  for (let i = 0; i < effectsItem.length; i++) {
    effectsItem[i].addEventListener('change', addEffectOnPreview);
  }
};

// document.removeEventListener('click', addClassOnPreview);


export { applyingEffects };
