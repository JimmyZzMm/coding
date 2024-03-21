/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var findTargetSumWays = function (nums, target) {
  let sum = nums.reduce((pre, cur) => pre + cur);
  let capacity = (sum + target) / 2;
  let dp = Array.from({ length: nums.length }, () =>
    Array(capacity + 1).fill(0)
  );
  dp[0][0] = 1;
  for (let i = 0; i < nums.length; i++) {
    for (let j = 1; j <= capacity; j++) {
      let useObjectI = 0;
      let notUseObecjtI = dp[i - 1][j];
      if (j - nums[i] >= 0) {
        useObjectI = dp[i - 1][j - nums[i]];
      }
      dp[i][j] = useObjectI + notUseObecjtI;
    }
  }
  console.table(dp);
};
let nums = [1, 1, 1, 1, 1],
  target = 3;
console.log(findTargetSumWays(nums, target));
