/**
 * @param {number[]} nums
 * @return {number}
 * https://leetcode.cn/problems/single-number/description/
 */
var singleNumber = function (nums) {
  let res = nums[0];
  for (let i = 1; i < nums.length; i++) res = res ^ nums[i];

  return res;
};
