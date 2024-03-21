/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
// 暴力
// var removeElement = function (nums, val) {
//   let length = nums.length;
//   let resLength = 0;
//   for (let i = 0; i < length; ) {
//     let cur = nums[i];
//     if (cur === val) {
//       for (let j = i; j < length - 1; j++) {
//         nums[j] = nums[j + 1];
//       }
//       length--;
//     } else {
//       i++;
//       resLength++;
//     }
//   }

//   return resLength;
// };

// 双指针
var removeElement = function (nums, val) {
  let length = nums.length;
  let fast = 0;
  let slow = 0;
  while (fast < length) {
    let cur = nums[fast];
    if (cur === val) {
      fast++;
      continue;
    } else {
      nums[slow] = nums[fast];
      slow++;
      fast++;
    }
  }
  return slow;
};
let nums = [3, 2, 2, 3],
  val = 3;
console.log(removeElement(nums, val), nums);
