/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
  k = k % nums.length;
  console.log(k);
};
let nums = [1, 2, 3, 4, 5, 6, 7],
  k = 3;
console.log(rotate(nums, k));
