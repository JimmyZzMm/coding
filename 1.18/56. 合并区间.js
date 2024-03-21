/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
  intervals = intervals.sort((a, b) => a[0] - b[0]);
  let merged = [intervals[0]];
  for (let i = 1; i < intervals.length; i++) {
    let curInterval = intervals[i];
    let preInterval = merged[merged.length - 1];
    if (curInterval[0] < preInterval[1]) {
      merged[merged.length - 1][1] = Math.max(
        merged[merged.length - 1][1],
        curInterval[1]
      );
    } else {
      merged.push(curInterval);
    }
  }
  return merged;
};
let intervals = [
  [2, 6],
  [1, 3],
  [8, 10],
  [15, 18],
];
console.log(merge(intervals));
