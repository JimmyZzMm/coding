/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[]} nums3
 * @param {number[]} nums4
 * @return {number}
 */
var fourSumCount = function (nums1, nums2, nums3, nums4) {
  let map = {};
  let res = 0;
  for (let num1 of nums1) {
    for (let num2 of nums2) {
      let mapKey = num1 + num2;
      let mapValue = map[mapKey];
      map[mapKey] = mapValue ? ++mapValue : 1;
    }
  }
  for (let num3 of nums3) {
    for (let num4 of nums4) {
      let target = 0 - (num3 + num4);

      if (target in map) {
        res += map[target];
      }
    }
  }
  return res;
};
