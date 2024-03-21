/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  let result = [];
  nums = nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] > 0) {
      return result;
    }
    if (i > 0 && nums[i - 1] == nums[i]) {
      continue;
    }
    let left = i + 1;
    let right = nums.length - 1;
    while (left < right) {
      let leftVal = nums[left];
      let rightVal = nums[right];
      let curVal = nums[i];
      let sum = curVal + leftVal + rightVal;
      if (sum === 0) {
        result.push([curVal, leftVal, rightVal]);
        while (right > left && nums[right] == nums[right - 1]) right--;
        while (right > left && nums[left] == nums[left + 1]) left++;

        right--;
        left++;
      } else if (sum > 0) {
        right--;
      } else {
        left++;
      }
    }
  }
  return result;
};
const nums = [-1, 0, 1, 2, -1, -4];
console.log(threeSum(nums));
