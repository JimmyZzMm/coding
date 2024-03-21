/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
  let map = {};
  let set = new Set();
  for (let num of nums1) {
    map[num] = 1;
  }
  for (let num of nums2) {
    if (num in map) {
      set.add(num);
    }
  } 
  return [...set];
};
