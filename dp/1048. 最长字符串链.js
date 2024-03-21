/**
 * @param {string[]} words
 * @return {number}
 */
var longestStrChain = function (words) {
  words.sort((a, b) => a.length - b.length);
  let dp = Array(words.length).fill(1);
  let res = 1;
  for (let i = 1; i < dp.length; i++) {
    for (let j = 0; j < i; j++) {
      if (isInluced(words[j], words[i])) {
        dp[i] = Math.max(dp[j] + 1, dp[i]);
      }
    }
    res = Math.max(dp[i], res);
  }
  return res;
};

function isInluced(s1, s2) {
  // console.log(s1, s2);
  for (let i = 0; i < s2.length; i++) {
    let substr = s2.slice(0, i) + s2.slice(i + 1);
    if (substr === s1) {
      return true;
    }
  }
  return false;
}
let words = ["a", "b", "ba", "bca", "bda", "bdca"];
console.log(longestStrChain(words));
