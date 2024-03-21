/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function (num1, num2) {
  [num1, num2] = addZero(num1, num2);
  let carry = 0;
  let res = [];
  // console.log(`output->num1,num2`, num1, num2);
  for (let i = num1.length - 1; i >= 0; i--) {
    let number1 = Number(num1[i]);
    let number2 = Number(num2[i]);
    let sum = number1 + number2 + carry;
    carry = Math.floor(sum / 10);
    res.unshift(sum % 10);
  }
  if (carry !== 0) {
    res.unshift(carry);
  }

  // console.log(`output->res`, res);
  return res.join("");
};

function addZero(a, b) {
  if (a.length < b.length) {
    while (a.length < b.length) {
      a = "0" + a;
    }
  }
  if (b.length < a.length) {
    while (b.length < a.length) {
      b = "0" + b;
    }
  }
  return [a, b];
}
let num1 = "456",
  num2 = "77";

console.log(`output-addString()`, addStrings(num1, num2));
