function generateComments() {
  const comments = [];
  const nameExamples = ['Артем', 'Никита', 'Сергей', 'Филлип', 'Влад'];
  const СommentExamples = [
    'Всё отлично!','В целом всё неплохо. Но не всё.',
    'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
    'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
    'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
    'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.'
  ];
  for (let i = 0; i <= 6; i++) {

    const comment = {
      id: i,
      avatar: `img/avatar-${i}.svg`,
      message: СommentExamples[getRandomInteger(0, СommentExamples.length - 1)],
      name: nameExamples[getRandomInteger(0, nameExamples.length - 1)],
    };
    comments.push(comment);
  }
  return comments;
}

function getRandomInteger (minInt, maxInt) {
  const lower = Math.ceil(Math.min(Math.abs(minInt), Math.abs(maxInt)));
  const upper = Math.floor(Math.max(Math.abs(minInt), Math.abs(maxInt)));
  const result = Math.floor(Math.random() * (upper - lower + 1) + lower);

  return result;
}

const isEscapeKey = function(evt) {
  return evt.key === 'Escape';
};


export { getRandomInteger, generateComments, isEscapeKey};
