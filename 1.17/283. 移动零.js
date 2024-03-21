/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  let slow = 0;
  for (let fast = 0; fast < nums.length; fast++) {
    const cur = nums[fast];
    if (cur !== 0) {
      nums[slow] = nums[fast];
      slow++;
    }
  }
  for (; slow < nums.length; slow++) {
    nums[slow] = 0;
  }
  return nums;
};
const nums = [0, 1, 0, 3, 12];
console.log(moveZeroes(nums));
