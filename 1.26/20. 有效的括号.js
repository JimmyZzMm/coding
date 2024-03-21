/**
 * @param {string} s
 * @return {boolean}
 */
let map = {
  "(": ")",
  "[": "]",
  "{": "}",
};
function isLeft(c) {
  return c === "(" || c === "[" || c === "{";
}
var isValid = function (s) {
  const stash = [];
  for (let i = 0; i < s.length; i++) {
    if (isLeft(s[i])) {
      stash.push(s[i]);
    } else {
      let c = stash.pop();
      if (s[i] !== map[c]) {
        return false;
      }
    }
  }
  return true;
};
let s = "()";
console.log(isValid(s));
