import { FORM_UPLOAD_FORM } from './constants.js';

const MINLENGTH = 20;
const MAXELNGTH = 140;

// Vaidation HASHTAGS and Comment
const HASHTAGS_MAX_COUNT = 5;
const HASHTAGS_MAX_LENGTH = 20;
const COMMENT_MAX_LENGTH = 140;
const REGULAR_EXPRESSION = /#[A-Za-zA-Яа-яЁё0-9]{1,19}$/;
const hashtagValidateRegExp = new RegExp(REGULAR_EXPRESSION);


const INPUT_HASHTAGS = FORM_UPLOAD_FORM.querySelector('.text__hashtags');
const INPUT_DESCRIPTION = FORM_UPLOAD_FORM.querySelector('.text__description');


// Конфигурация Pristine
const validConfig = {
  classTo: 'text',
  errorTextParent: 'text',
  errorTextClass: 'text__description--error',
  errorClass: 'text__description--invalid',
  successClass: 'text__description--valid',
  errorTextTag: 'div'
};

const pristine = new Pristine (FORM_UPLOAD_FORM, validConfig);

// Функция проверяет обязательный символ #
const startsWithHashTag = (value) => {
  if (value === '') {
    return true;
  }
  return value.trim().split(' ').filter((word) => word !== '').every((word) => word.startsWith('#'));
};


// Функция проверяет, на разделение хеш-тегов одним пробелом
const checkEmptyTags = (value) => {
  if (value === '') {
    return true;
  }
  return !value.trim().split(' ').some((word) => word === '');
};

// Функция проверяет длинну хеш-тега
const checkHashtagLength = (value) => value.split(' ').every((hashtag) => hashtag.length <= HASHTAGS_MAX_LENGTH);

// Функция проверяет на соответсвие условиям ругелярного выражения
const checkIsValidHashtag = (arrayItem) => hashtagValidateRegExp.test(arrayItem);

// Функция проверки каждого хеш-тега на правильность ввода в соответствии с регулярным выражением
const checkIsValidHashtags = (value) => {
  if (value === '') {
    return true;
  }
  return value.trim().split(' ').filter((word) => word !== '').every(checkIsValidHashtag);
};

// Функция проверяет наличие пробелов в конце
const checkHashtagsTrailingSpace = (value) => !value.endsWith(' ');


// Функция проверяет количество хеш-тегов
const checkHashtagsCount = (value) => value.trim().split(' ').filter((word) => word !== '').length <= HASHTAGS_MAX_COUNT;

// Функция проверяет дублирование хеш-тегов
const validateIsDuplicateHashtags = (value) => {
  const hashtags = value.trim().toLowerCase().split(' ').filter((word) => word !== '');
  const uniqueHashtags = new Set(hashtags);
  return uniqueHashtags.size === hashtags.length;
};


// функция проверяет количество, символов введенных в Descriotion
const validateDescriptionText = (value) => value.length >= MINLENGTH && value.length <= (MAXELNGTH - 1);


pristine.addValidator(INPUT_HASHTAGS, checkHashtagsCount, `Не более ${HASHTAGS_MAX_COUNT} хеш-тегов`, 1, false);
pristine.addValidator(INPUT_HASHTAGS, checkEmptyTags, 'Хеш-теги разделяются одним пробелом', 1, false);
pristine.addValidator(INPUT_HASHTAGS, checkHashtagLength, `Длина хештега не должна превышать ${HASHTAGS_MAX_LENGTH} символов`, 1, true);
pristine.addValidator(INPUT_HASHTAGS, checkIsValidHashtags, 'Строка после решётки может состоять только из букв и чисел', 1, false);
pristine.addValidator(INPUT_HASHTAGS, checkHashtagsTrailingSpace, 'В поле ввода хеш-тегов не должно быть пробелов в конце', 1, false);
pristine.addValidator(INPUT_HASHTAGS, startsWithHashTag, 'Хеш-тег должен начинаться с #', 1, true);
pristine.addValidator(INPUT_HASHTAGS, validateIsDuplicateHashtags, 'Хеш-теги не должны повторяться', 1, false);
pristine.addValidator(INPUT_DESCRIPTION, validateDescriptionText, `Длина комментария не может составлять больше ${COMMENT_MAX_LENGTH} символов`, 1, false);


FORM_UPLOAD_FORM.addEventListener('submit', (evt) => {
  const isValid = pristine.validate();
  if (!isValid) {
    evt.preventDefault();
  }
});

