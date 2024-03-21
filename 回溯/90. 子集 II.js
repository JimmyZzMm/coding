/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function (nums) {
  nums = nums.sort((a, b) => a - b);
  let result = [];
  let path = [];
  let used = Array(nums.length).fill(false);
  function backtracking(startIndex = 0) {
    result.push([...path]);
    if (path.length === nums.length) {
      return;
    }
    for (let i = startIndex; i < nums.length; i++) {
      if (i > 0 && nums[i] === nums[i - 1] && used[i - 1] === false) {
        continue;
      }
      used[i] = true;
      path.push(nums[i]);
      backtracking(i + 1);
      path.pop();
      used[i] = false;
    }
  }
  backtracking();
  return result;
};

let nums = [1, 2, 2];
console.log(subsetsWithDup(nums));
