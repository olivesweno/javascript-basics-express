const negate = (answer) => {
  return !answer;
  };

const both = (a, b) => {
  if (a && b === true) {
    return true;
  } else {
    return false;
  }
}
const either = (a, b) => {
  if ( a || b === true) {
    return true;
  } else {
    return false;
  }
};

const none = (a, b) => {
  if (a || b === true) {
    return false;
  } else {
    return true;
  }
};

const one = (a, b) => {
  if ((!a && b) || (a && !b)) {
    return true;
} else {
  return false;
}
}

const truthiness = (a) => {
  return Boolean(a);
};

function isEqual(a, b) {
  if (a === b) {
    return true;
  } else {
    return false;
  }
};

function isGreaterThan(a, b) {
  if (a > b) {
    return true;
  } else {
    return false;
  }
};

function isLessThanOrEqualTo(a, b) {
  if (a <= b) {
    return true;
  } else {
    return false;
  }
};

function isOdd(a) {
  if(a % 2==0) {
    return false;
  } else {
    return true;
  }
};

function isEven(a) {
  if(a % 2==0) {
    return true;
  } else {
    return false;
  }
};

function isSquare(a) {
  return Math.sqrt(a) %1 === 0;
};

function startsWith(char, string) {
  return string.startsWith(char);
};

function containsVowels(string) {
  string = string.toLowerCase()
  const vowels = [ 'a', 'e', 'i', 'o', 'u']
  let count = 0
  vowels.forEach(vowels => {
  if(string.includes(vowels)) {
    count ++;
   } 
  })
  if(count >= 1) {
    return true;
  } else {
    return false;
  }
};

function isLowerCase(string) {
  if(string === string.toLowerCase()) {
    return true;
  } else {
    return false;
  }
};

module.exports = {
  negate,
  both,
  either,
  none,
  one,
  truthiness,
  isEqual,
  isGreaterThan,
  isLessThanOrEqualTo,
  isOdd,
  isEven,
  isSquare,
  startsWith,
  containsVowels,
  isLowerCase
};
