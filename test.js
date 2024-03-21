function createMatrix(m, n, defaultValue) {
  let matrix = [];
  for (let i = 0; i < m; i++) {
    let row = [];
    for (let j = 0; j < n; j++) {
      row.push(defaultValue);
    }
    matrix.push(row);
  }
  return matrix;
}

// Example usage
let matrix = createMatrix(3, 4, "a");
console.log(matrix);
