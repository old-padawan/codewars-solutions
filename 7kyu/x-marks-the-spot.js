// https://www.codewars.com/kata/5777fe3f355edbf0a5000d11

const xMarksTheSpot = (input) => {
  const searchX = [...input].join('').match(/x/g);
  if (!/x/g.test([...input].join('')) || searchX.length > 1) {
    return [];
  } else {
    for (let i = 0; i < input.length; i++) {
      if (input[i].includes('x')) {
        return [i, input[i].indexOf('x')];
      }
    }
  }
};
