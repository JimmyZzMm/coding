/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  let dp = [nums[0]];
  let max = nums[0];
  for (let i = 1; i < nums.length; i++) {
    dp[i] = Math.max(nums[i], nums[i] + dp[i - 1]);
    max = Math.max(dp[i], max);
  }
  return max;
};
