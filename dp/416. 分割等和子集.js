// /**
//  * @param {number[]} nums
//  * @return {boolean}
//  */
// var canPartition = function (nums) {
//   let sum = nums.reduce((pre, cur) => pre + cur, 0);
//   console.log(sum);
//   let target = sum / 2;
//   if (Math.floor(target) !== target) return false;
//   let dp = Array.from({ length: nums.length }, () => Array(target + 1).fill(0));
//   for (let i = nums[0]; i <= target; i++) [(dp[0][i] = nums[0])];
//   for (let i = 1; i < dp.length; i++) {
//     for (let j = 1; j <= target; j++) {
//       if (j < nums[i]) dp[i][j] = dp[i - 1][j];
//       else dp[i][j] = Math.max(dp[i - 1][j], dp[i - 1][j - nums[i]] + nums[i]);
//     }
//   }
//   return dp[dp.length - 1][target] === target;
// };

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function (nums) {
  let sum = nums.reduce((pre, cur) => pre + cur);
  if (sum % 2 !== 0) {
    return false;
  }
  let target = sum / 2;
  let dp = Array.from({ length: nums.length }, (value, index) => {
    let res = Array(target + 1).fill(0);
    if (index === 0) {
      res = res.map((v, index) => {
        if (index >= nums[0]) {
          return nums[0];
        }
        return 0;
      });
    }
    return res;
  });
  // 3.确认遍历顺序：i在外层，j在内层（反过来也可以，由于结果是由左上方和上方递推得来）
  for (let i = 1; i < nums.length; i++) {
    for (let j = 1; j < dp[0].length; j++) {
      // 如果不使用物品i，那么直接复用i-1的结果
      let notUseObjectI = dp[i - 1][j];
      let useObjectI = 0;
      // 如果使用物品i，则先腾出背包空间，然后加上物品的价值
      if (j - nums[i] >= 0) {
        useObjectI = dp[i - 1][j - nums[i]] + nums[i];
      }
      dp[i][j] = Math.max(useObjectI, notUseObjectI);
    }
  }
  console.table(dp);
  return dp[dp.length - 1][dp[0].length - 1] === target;
};

let nums1 = [1, 5, 11, 5];
let nums2 = [1, 2, 3, 5];
console.log(`output->canP`, canPartition(nums1));
console.log(`output->canP`, canPartition(nums2));
