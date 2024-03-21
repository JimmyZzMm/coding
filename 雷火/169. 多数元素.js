/**
 * @param {number[]} nums
 * @return {number}
 * https://leetcode.cn/problems/majority-element/?envType=study-plan-v2&envId=top-100-liked
 */
var majorityElement = function (nums) {
  let res = nums[0];
  let count = 0;
  for (let num of nums) {
    if (count == 0) res = num;
    if (num === res) {
      count++;
    } else {
      count--;
    }
  }
  return res;
};
