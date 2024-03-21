/**
 * @param {string} s
 * @return {number}
 */
var longestPalindromeSubseq = function (s) {
  const dpLength = s.length;
  let max = 1;
  const dp = Array.from({ length: dpLength }, (v, index1) =>
    Array.from({ length: dpLength }, (val, index2) =>
      index1 === index2 ? 1 : 0
    )
  );
  for (let i = dpLength - 1; i >= 0; i--) {
    for (let j = i + 1; j <= dpLength - 1; j++) {
      if (s[i] === s[j]) {
        dp[i][j] = dp[i + 1][j - 1] + 2;
      } else {
        dp[i][j] = Math.max(dp[i][j - 1], dp[i + 1][j]);
      }
    }
  }

  // console.log(dp);
  return dp[0][dpLength - 1];
};

const s = "bbbab";

console.log(longestPalindromeSubseq(s));
