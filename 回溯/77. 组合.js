/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function (n, k) {
  let path = [];
  let result = [];
  function backtracking(startIndex = 1) {
    if (path.length === k) {
      result.push([...path]);
      return;
    }
    for (let i = startIndex; i <= n; i++) {
      console.log(i, "push");
      path.push(i);
      backtracking(i + 1);
      path.pop();
      console.log(i, "pop");
    }
  }
  backtracking();
  return result;
};

let n = 4,
  k = 2;
console.log(combine(n, k));
/**
[
  [2,4],
  [3,4],
  [2,3],
  [1,2],
  [1,3],
  [1,4],
]
 */
