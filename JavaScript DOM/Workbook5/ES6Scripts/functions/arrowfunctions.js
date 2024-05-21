function addTwoNumbers(a, b) {
  return a + b;
}

(a, b) => a + b;

let numbers = [300, 150, 25];
/*
function getSum(currentTotal, arrayValue) {
 return currentTotal + arrayValue;
}
*/
let sum = numbers.reduce(
  (currentTotal, arrayValue) => currentTotal + arrayValue,
  0
);
