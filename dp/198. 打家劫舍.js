/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  let dp = [];
  for (let i = 0; i < nums.length; i++) {
    let pre1 = i - 2 >= 0 ? dp[i - 2] : 0;
    let pre2 = i - 1 >= 0 ? dp[i - 1] : 0;
    dp[i] = Math.max(pre1 + nums[i], pre2);
  }
  return dp[dp.length - 1];
};
let nums = [2, 7, 9, 3, 1];
console.log(rob(nums));
