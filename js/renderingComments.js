import { PHOTO_CARDS_DATA } from './constants.js';

const socialCommentsList = document.querySelector('.social__comments');

const CommentContent = socialCommentsList.querySelectorAll('.social__comment');


// --------Отключение счетчика и загрузыки коментариев------------->
const commentLouder = document.querySelector('.comments-loader');

const commentCount = document.querySelector('.social__comment-count');

function elementsCommentOff() {
  commentLouder.classList.add('hidden');
  commentCount.classList.add('hidden');
}
// ---------------------------------------------------------------->

const fragment = document.createDocumentFragment();


function createComment(surce, text) {
  const element = CommentContent[0].cloneNode(true);
  element.classList.add('social__comment');

  const elementmentImgOnComment = element.querySelector('.social__picture');
  const elementParagraphOnComment = element.querySelector('.social__text');

  elementParagraphOnComment.textContent = text;
  elementmentImgOnComment.src = surce;

  fragment.appendChild(element);

  return fragment;
}


for (let i = 1; i < PHOTO_CARDS_DATA[i].comments.length; i++) {
  socialCommentsList.appendChild(createComment(PHOTO_CARDS_DATA[i].comments[i].avatar, PHOTO_CARDS_DATA[i].comments[i].message));
}


