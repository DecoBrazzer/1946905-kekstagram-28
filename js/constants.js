import { generatePosts } from './data.js';

export const PICTURES_CONTAINER = document.querySelector('.pictures');

export const BODY_DOCUMENT = document.querySelector('body');

export const PHOTO_CARDS_DATA = generatePosts();

export const FULL_MODE = document.querySelector('.big-picture');

export const CANCEL_FULL_MODE = FULL_MODE.querySelector('.big-picture__cancel');

export const UPLOAD_FILE = document.querySelector('#upload-file');

export const IMG_UPLOAD_OVERLAY = document.querySelector('.img-upload__overlay');

export const FORM_UPLOAD_FORM = document.querySelector('.img-upload__form');

export const IMG_UPLOAD__SUBMIT = document.querySelector('.img-upload__submit');

export const IMG_UPLOAD_PREVIEW = document.querySelector('.img-upload__preview img');
