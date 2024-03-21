/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function (s) {
  let dp = [];
  let count = 0;
  // 初始化dp数组
  // dp数组的含义是i到j的回文子串个数是几（左闭右闭）
  for (let i = 0; i < s.length; i++) {
    let arr = [];
    for (let j = 0; j < s.length; j++) {
      if (i === j) {
        arr.push(true);
        count++;
      } else {
        arr.push(false);
      }
    }
    dp.push(arr);
  }
  // 递推
  for (let j = 0; j < s.length; j++) {
    for (let i = 0; i < j; i++) {
      if (s[i] === s[j]) {
        if (j - i <= 2) {
          dp[i][j] = true;
        } else {
          dp[i][j] = dp[i + 1][j - 1];
        }
        if (dp[i][j] === true) {
          count++;
        }
      }
      console.log(dp);
    }
  }
  return count;
};
console.log(countSubstrings("aaa"));
