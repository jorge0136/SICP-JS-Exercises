// * Exercise 1.3
// Define a procedure that takes three numbers as arguments and returns
// the sum of the squares of the two larger numbers.

const square = (x) => { return x * x };

const sumSquare = (y, z) => { return square(y) + square(z) };

export const sumSquareOfBiggestTwo = (a, b, c) => {
  let smallest = Math.min(a, b, c);

  let results;

  if (smallest === c) { results = sumSquare(a,b);}
  else if (smallest === b) { results = sumSquare(a,c); }
  else if (smallest === a) { results = sumSquare(b,c); }
  else {-1}

  return results;
}
