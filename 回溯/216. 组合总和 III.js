/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function (k, n) {
  let sum = 0;
  let path = [];
  let result = [];
  function backtracking(startIndex = 1) {
    if (sum > n || path.length > k) {
      return;
    }
    if (sum === n && path.length === k) {
      result.push([...path]);
      return;
    }
    for (let i = startIndex; i <= 9; i++) {
      path.push(i);
      sum += i;
      backtracking(i + 1);
      sum -= i;
      path.pop();
    }
  }
  backtracking();
  return result;
};
let k = 3,
  n = 7;
console.log(combinationSum3(k, n));
