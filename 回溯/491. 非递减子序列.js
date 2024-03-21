/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var findSubsequences = function (nums) {
  let path = [];
  let result = [];
  function backTracking(startIndex) {
    if (path.length >= 2) {
      result.push([...path]);
    }
    let set = new Set();
    for (let i = startIndex; i < nums.length; i++) {
      let cur = nums[i];
      if (path.length > 0 && cur < path[path.length - 1]) continue;
      if (set.has(cur)) continue;
      set.add(cur);
      path.push(cur);
      backTracking(i + 1);
      path.pop();
    }
  }
  backTracking(0);
  return result;
};
let nums = [4, 6, 7, 7];
console.log(findSubsequences(nums));
// [[4,6],[4,6,7],[4,6,7,7],[4,7],[4,7,7],[6,7],[6,7,7],[7,7]]
