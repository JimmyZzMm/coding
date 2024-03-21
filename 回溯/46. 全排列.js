/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  let result = [];
  let path = [];
  let used = Array(nums.length).fill(false);
  function backTracking() {
    if (path.length === nums.length) {
      result.push([...path]);
      return;
    }
    for (let i = 0; i < nums.length; i++) {
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
let nums = [1, 2, 3];
console.log(permute(nums));
// [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
