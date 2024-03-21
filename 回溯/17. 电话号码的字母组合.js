/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  let path = "";
  let result = [];
  let map = {
    2: "abc",
    3: "def",
    4: "ghi",
    5: "jkl",
    6: "mno",
    7: "pqrs",
    8: "tuv",
    9: "wxyz",
  };
  function backtracking(digitIndex = 0) {
    if (path.length === digits.length) {
      result.push(path);
      return;
    }
    const chars = map[digits[digitIndex]];
    for (let i = 0; i < chars.length; i++) {
      path += chars[i];
      backtracking(digitIndex + 1);
      path = path.slice(0, -1);
    }
  }
  backtracking(0);
  return result;
};

let digits = "23";
console.log(letterCombinations(digits));
