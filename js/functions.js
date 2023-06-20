function checkLength(inputLine, sizeLine) {
  if (inputLine.length > sizeLine) {
    return false;
  }

  return true;
}

function checkPolindrom(inputLine) {
  const reverseLine = inputLine.split('').reverse('').join('');

  return inputLine.toLowerCase() === reverseLine.toLowerCase() ;
}

function takeNumber(inputLine) {
  let num = '';

  for (let i = 0; i <= inputLine.length - 1; i++) {
    for (let j = 0; j < 10; j++) {
      if (inputLine[i] === j) {
        num += inputLine[i];
      }
    }
  }

  return Number(num);
}

function padStart(str, minLength, padString) {
  if (str.length >= minLength) {
    return str;
  }

  const diff = minLength - str.length;
  let paddedStr = '';

  while (paddedStr.length < diff) {
    paddedStr += padString;
  }

  paddedStr = paddedStr.substring(0, diff);

  return paddedStr + str;
}


export { checkLength, checkPolindrom, takeNumber, padStart };
