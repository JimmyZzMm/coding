/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  let map = {};
  let res;
  nums.forEach((num, index) => {
    if (target - num in map) {
      res = [map[target - num], index];
    } else {
      map[num] = index;
    }
  });
  return res;
};
