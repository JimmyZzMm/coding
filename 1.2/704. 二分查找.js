/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  // 左闭右开区间
  let left = 0;
  let right = nums.length;
  // 只有当left<right的时候，区间才成立
  while (left < right) {
    // 防止溢出 使用位运算效率更高
    let mid = left + ((right - left) >> 1);
    // console.log(`output->mid`, mid);
    const midValue = nums[mid];
    if (target > midValue) {
      left = mid + 1;
    } else if (target < midValue) {
      right = mid;
    } else {
      return mid;
    }
  }
  return -1;
};

let nums = [-1, 0, 3, 5, 9, 12],
  target = 2;
// let nums = [-1, 0, 3, 5, 9, 12],
//   target = 9;
console.log(search(nums, target));
