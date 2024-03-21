/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
  nums = nums.sort((a, b) => a - b);
  let result = [];
  let path = [];
  function backtracking(startIndex = 0) {
    result.push([...path]);
    if (path.length === nums.length) {
      return;
    }
    for (let i = startIndex; i < nums.length; i++) {
      path.push(nums[i]);
      backtracking(i + 1);
      path.pop();
    }
  }
  backtracking();
  return result;
};
let nums = [1, 2, 3];
console.log(subsets(nums));
// [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]
