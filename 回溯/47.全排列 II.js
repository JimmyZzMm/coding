/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function (nums) {
  nums = nums.sort((a, b) => a - b);
  let result = [];
  let path = [];
  let used = Array(nums.length).fill(false);
  function backTracking() {
    if (path.length === nums.length) {
      result.push([...path]);
      return;
    }
    for (let i = 0; i < nums.length; i++) {
      if (i > 0 && nums[i] === nums[i - 1] && used[i - 1] === false) continue;
      if (used[i] === true) continue;
      path.push(nums[i]);
      used[i] = true;
      backTracking();
      used[i] = false;
      path.pop();
    }
  }
  backTracking();
  return result;
};
let nums = [1, 1, 2];
console.log(permuteUnique(nums));
/*
[[1,1,2],
 [1,2,1],
 [2,1,1]]
*/
