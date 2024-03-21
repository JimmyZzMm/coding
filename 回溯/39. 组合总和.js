/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
  candidates = candidates.sort((a, b) => a - b);
  let result = [];
  let path = [];
  let sum = 0;
  function backtracking(startIndex = 0) {
    if (sum >= target) {
      if (sum === target) {
        result.push([...path]);
      }
      return;
    }
    for (let i = startIndex; i < candidates.length; i++) {
      let cur = candidates[i];
      path.push(cur);
      sum += cur;
      backtracking(i);
      sum -= cur;
      path.pop();
    }
  }
  backtracking();
  return result;
};

let candidates = [2, 3, 6, 7],
  target = 7;
console.log(combinationSum(candidates, target));
