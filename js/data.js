import { getRandomInteger, generateComments } from './util.js';

function generatePosts() {
  const objectArray = [];

  for(let i = 1; i <= 25; i++) {
    const crtImage = {
      id: i,
      url: `photos/${i}.jpg`,
      description: `Я тут был ${i} раз!`,
      likes: getRandomInteger(15, 200),
      comments: generateComments(),
    };
    objectArray.push(crtImage);
  }
  return objectArray;
}


export { generatePosts };
