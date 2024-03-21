/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function (candidates, target) {
  candidates = candidates.sort((a, b) => a - b);
  let path = [];
  let result = [];
  let used = Array(candidates.length).fill(0);
  let sum = 0;
  function backtracking(startIndex = 0) {
    if (sum >= target) {
      if (sum === target) {
        result.push([...path]);
      }
      return;
    }
    for (let i = startIndex; i < candidates.length; i++) {
      // 树层去重，排序过后，相邻且相等的元素不需要再进行遍历，因为前面的相同元素已经包含当前元素的所有结果（所有可能得组合情况）
      if (i > 0 && candidates[i] === candidates[i - 1] && !used[i - 1]) {
        continue;
      }
      path.push(candidates[i]);
      sum += candidates[i];
      used[i] = 1;
      backtracking(i + 1);
      used[i] = 0;
      sum -= candidates[i];
      path.pop();
    }
  }
  backtracking();
  return result;
};
let candidates = [10, 1, 2, 7, 6, 1, 5],
  target = 8;
console.log(combinationSum2(candidates, target));
/**
[
[1,1,6],
[1,2,5],
[1,7],
[2,6]
]
 */
