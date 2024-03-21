/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findLength = function (nums1, nums2) {
  const dp = createMatrix(nums1.length + 1, nums2.length + 1);
  let result = 0;
  for (let i = 1; i <= nums1.length; i++) {
    for (let j = 1; j <= nums2.length; j++) {
      if (nums1[i - 1] == nums2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1;
      } else {
        dp[i][j] = dp[i - 1][j - 1];
      }
      result = dp[i][j] > result ? dp[i][j] : result;
      console.log(dp);
    }
  }
  return result;
};
function createMatrix(row, col) {
  const matrix = [];
  for (let i = 0; i < row; i++) {
    matrix.push(new Array(col).fill(0));
  }
  return matrix;
}
// let nums1 = [1, 2, 3, 2, 1],
//   nums2 = [3, 2, 1, 4, 7];
// console.log(findLength(nums1, nums2));
