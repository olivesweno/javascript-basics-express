const getNthElement = (index, array) => {
  return array[index % array.length];
};

const arrayToCSVString = array => {
  return array.toString();
};

const csvStringToArray = string => {
  return string.split(',');
};

const addToArray = (element, array) => {
  array.push(element);
};

const addToArray2 = (element, array) => {
  return array.concat(element);
};

const removeNthElement = (index, array) => {
  return array.splice(index,1);
};

const numbersToStrings = numbers => {
  return numbers.join().split(',');
};

const uppercaseWordsInArray = strings => {
  return strings.map(string => string.toUpperCase());
};

const reverseWordsInArray = strings => {
  return strings.map(string => string.split('').reverse().join(''));
};

const onlyEven = numbers => {
  return numbers.filter(number => number % 2 === 0);
};

const removeNthElement2 = (index, array) => {
  const array1 = array.slice(0, index);
  const array2 = array.slice(index + 1, array [-1]);
  return array1.concat(array2);

};

const elementsStartingWithAVowel = strings => {
  const stringsTwo = strings.filter(word => {
    const lowercase = word.toLowerCase();
    console.log(lowercase);
    if (
      lowercase.charAt(0) === 'a' ||
      lowercase.charAt(0) === 'e' ||
      lowercase.charAt(0) === 'i' ||
      lowercase.charAt(0) === 'o' ||
      lowercase.charAt(0) === 'u'
    ) {
    return true;
    } 
    return false;
    });
    console.log(stringsTwo);
    return stringsTwo;
};

const removeSpaces = string => {
  const stringSplit = string.split(' ');
  const noSpace = stringSplit.join('');
  return noSpace;
};

const sumNumbers = numbers => {
  return numbers.reduce((sum, number) => sum + number, 0)
};

const sortByLastLetter = strings => {
  strings.sort((a,b) => {
    const lastLetterA = a.slice(-1);
    const lastLetterB = b.slice(-1);
    if (lastLetterA < lastLetterB) {
      return -1;
    } else {
      return 1;
    }
  })
  return strings;
};

module.exports = {
  getNthElement,
  arrayToCSVString,
  csvStringToArray,
  addToArray,
  addToArray2,
  removeNthElement,
  numbersToStrings,
  uppercaseWordsInArray,
  reverseWordsInArray,
  onlyEven,
  removeNthElement2,
  elementsStartingWithAVowel,
  removeSpaces,
  sumNumbers,
  sortByLastLetter
};
