function perfectRectangles(matrix) {
  const n = matrix.length;
  const countZeros = Array(n + 1)
    .fill(0)
    .map(() => Array(n + 1).fill(0));
  const countOnes = Array(n + 1)
    .fill(0)
    .map(() => Array(n + 1).fill(0));

  // Preprocess the matrix to count zeros and ones in each subrectangle
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
      countZeros[i][j] =
        countZeros[i - 1][j] +
        countZeros[i][j - 1] -
        countZeros[i - 1][j - 1] +
        (matrix[i - 1][j - 1] === 0 ? 1 : 0);
      countOnes[i][j] =
        countOnes[i - 1][j] +
        countOnes[i][j - 1] -
        countOnes[i - 1][j - 1] +
        (matrix[i - 1][j - 1] === 1 ? 1 : 0);
    }
  }

  // Function to check if a rectangle is perfect
  const isPerfectRectangle = (x1, y1, x2, y2) => {
    const zeros =
      countZeros[x2][y2] -
      countZeros[x1 - 1][y2] -
      countZeros[x2][y1 - 1] +
      countZeros[x1 - 1][y1 - 1];
    const ones =
      countOnes[x2][y2] -
      countOnes[x1 - 1][y2] -
      countOnes[x2][y1 - 1] +
      countOnes[x1 - 1][y1 - 1];
    return zeros === ones;
  };

  // Count perfect rectangles for each i
  const perfectCounts = Array(n + 1).fill(0);
  for (let i = 1; i <= n; i++) {
    for (let x1 = 1; x1 + i - 1 <= n; x1++) {
      for (let y1 = 1; y1 + i - 1 <= n; y1++) {
        const x2 = x1 + i - 1;
        const y2 = y1 + i - 1;
        if (isPerfectRectangle(x1, y1, x2, y2)) {
          perfectCounts[i]++;
        }
      }
    }
  }

  return perfectCounts.slice(1); // Return counts for 1 <= i <= n
}
// 示例输入
const matrix = [
  [1, 0, 1, 0],
  [0, 1, 0, 1],
  [1, 1, 0, 0],
  [0, 0, 1, 1],
];

console.log(perfectRectangles(matrix));
