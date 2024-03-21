/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  const { min, max } = Math;
  let left = 0;
  let right = height.length - 1;
  let maxArea = 0;
  while (left !== right) {
    const curArea = (right - left) * min(height[right], height[left]);
    maxArea = max(maxArea, curArea);
    if (height[left] >= height[right]) {
      right--;
    } else {
      left++;
    }
  }
  return maxArea;
};
const height = [1, 8, 6, 2, 5, 4, 8, 3, 7];
console.log(maxArea(height));
