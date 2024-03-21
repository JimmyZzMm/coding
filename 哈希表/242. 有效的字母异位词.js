/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  let Map = {};
  if (s.length !== t.length) {
    return false;
  }
  for (let i = 0; i < s.length; i++) {
    Map[t[i]] = Map[t[i]] ? Map[t[i]] + 1 : 1;
    Map[s[i]] = Map[s[i]] ? Map[s[i]] - 1 : -1;
  }
  for (key in Map) {
    if (Map[key] !== 0) {
      return false;
    }
  }
  return true;
};
