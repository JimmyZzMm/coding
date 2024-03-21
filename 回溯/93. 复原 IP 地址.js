/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function (s) {
  let result = [];
  let path = [];
  function backtracking(startIndex = 0) {
    if (path.length === 4) {
      if (startIndex >= s.length) {
        result.push(path.join("."));
      }
      return;
    }
    for (let i = startIndex; i < s.length; i++) {
      let str = s.slice(startIndex, i + 1);
      if (str.length > 3 || +str > 255) break;
      if (str.length > 1 && str[0] === "0") break;
      path.push(str);
      backtracking(i + 1);
      path.pop();
    }
  }
  backtracking();
  return result;
};
let s = "25525511135";
console.log(restoreIpAddresses(s));
// ["255.255.11.135","255.255.111.35"]
