/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function (s) {
  let result = [];
  let path = [];
  function isPalindrome(s) {
    for (let left = 0, right = s.length - 1; left < right; left++, right--) {
      if (s[left] !== s[right]) {
        return false;
      }
    }
    return true;
  }

  function backtracking(startIndex = 0) {
    if (startIndex >= s.length) {
      result.push([...path]);
      return;
    }
    for (let i = startIndex; i < s.length; i++) {
      let cur = s.slice(startIndex, i + 1);
      if (isPalindrome(cur)) {
        path.push(cur);
        backtracking(i + 1);
        path.pop();
      }
    }
  }
  backtracking();
  return result;
};

let s = "aab";
console.log(partition(s));
// [["a","a","b"],["aa","b"]]
