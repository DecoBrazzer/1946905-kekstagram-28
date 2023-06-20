import { generatePosts } from './data.js';

export const PICTURES_CONTAINER = document.querySelector('.pictures');

export const BODY_DOCUMENT = document.querySelector('body');

export const PHOTO_CARDS_DATA = generatePosts();

export const FULL_MODE = document.querySelector('.big-picture');

export const CANCEL_FULL_MODE = FULL_MODE.querySelector('.big-picture__cancel');
