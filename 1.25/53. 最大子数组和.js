/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  const { max } = Math;
  let dp = Array(nums).fill(-Infinity);
  dp[0] = nums[0];
  let res = nums[0];
  for (let i = 1; i < nums.length; i++) {
    dp[i] = max(nums[i], dp[i - 1] + nums[i]);
    res = max(dp[i], res);
  }
  return res;
};
let nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
console.log(maxSubArray(nums));
