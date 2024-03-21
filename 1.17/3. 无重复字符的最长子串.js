/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let set = new Set();
  let start = 0;
  let maxLength = 0;
  let end;
  for (end = 0; end < s.length; end++) {
    const curChar = s[end];
    if (set.has(curChar)) {
      maxLength = Math.max(end - start, maxLength);
      while (set.has(curChar)) {
        set.delete(s[start]);
        start++;
      }
    }
    set.add(curChar);
  }
  maxLength = Math.max(end - start, maxLength);
  return maxLength;
};
let s = "abcabcbb";
console.log(lengthOfLongestSubstring(s));
