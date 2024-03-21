/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function (s) {
  const dp = Array.from({ length: s.length }, () =>
    Array.from({ length: s.length }, () => false)
  );

  let count = 0;
  for (let i = s.length - 1; i >= 0; i--) {
    for (let j = i; j <= s.length - 1; j++) {
      if (s[i] === s[j]) {
        if (j - i <= 1 || dp[i + 1][j - 1] === true) {
          dp[i][j] = true;
          count++;
        }
      }
    }
  }
  // console.log(dp);
  return count;
};
let s = "aaa";
countSubstrings(s);
