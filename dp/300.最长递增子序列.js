/**
 * dp定义为以i为结尾的最长递增子序列长度，因为只有这样才能产生递推公式dp[i]为dp[j](j<i)中最大且nums[j]<nums[i]加一
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {
  let dp = Array(nums.length).fill(1);
  let max = 1;
  for (let i = 1; i < dp.length; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[j] < nums[i]) {
        dp[i] = Math.max(dp[j] + 1, dp[i]);
        // console.log(dp[i]);
      }
      // console.log(dp);
    }
    max = Math.max(max, dp[i]);
  }
  return max;
};
let nums = [10, 9, 2, 5, 3, 7, 101, 18];
console.log(lengthOfLIS(nums));
