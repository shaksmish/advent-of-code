const fs = require('fs');

const digitsArray = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];

const getNum = (input) => {
  let i = 0;
  let leftDigit, rightDigit;
  let length = input.length;

  do {
    if(!Number(leftDigit)) {
      if(Number(input[i])) {
        leftDigit = Number(input[i]);
      } else {
        for (digit of digitsArray) {
          if (input.substring(i).startsWith(digit)) {
            leftDigit = digitsArray.indexOf(digit);
          }
        }
      }
    }
    if (!Number(rightDigit)) {
      if(Number(input[length - i])) {
        rightDigit = Number(input[length - i]);
      } else {
        for (digit of digitsArray) {
          if (input.substring(length - i).startsWith(digit)) {
            rightDigit = digitsArray.indexOf(digit);
          }
        }
    }
  }
}
  while (i++ < length) {
    return (leftDigit * 10 || 0 ) + (rightDigit || 0);
  }
}

fs.readFile('./input.txt', 'utf-8', (err, data) => {
  const input = data.split("\n");
  console.log(`Sum: `+ input.reduce((accumulator, currentValue) => accumulator = accumulator + getNum(currentValue), 0));
})

