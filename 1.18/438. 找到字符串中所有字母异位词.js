/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function (s, p) {
  const result = [];
  if (s.length < p.length) return result;
  const sRate = new Array(26).fill(0);
  const pRate = new Array(26).fill(0);
  for (let i = 0; i < p.length; i++) {
    pRate[p.charCodeAt(i) - "a".charCodeAt(0)]++;
  }
  // console.log(pRate);

  let left = 0;
  for (let right = 0; right < s.length; right++) {
    sRate[s.charCodeAt(right) - "a".charCodeAt(0)]++;
    // console.log(sRate);
    while (
      sRate[s.charCodeAt(right) - "a".charCodeAt(0)] >
      pRate[s.charCodeAt(right) - "a".charCodeAt(0)]
    ) {
      sRate[s.charCodeAt(left) - "a".charCodeAt(0)]--;
      left++;
    }
    console.log(s.slice(left, right));
    if (right - left + 1 === p.length) {
      result.push(left);
    }
  }
  return result;
};
let s = "cbaebabacd",
  p = "abc";
console.log(findAnagrams(s, p));
