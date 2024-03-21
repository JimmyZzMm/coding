/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  for (let i = s.length - 1, j = 0; i >= 0; i--) {
    console.log(s[i]);
  }
};
let s = " a good   example ";
console.log(reverseWords(s));
