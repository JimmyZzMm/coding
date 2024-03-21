// function testWeightBagProblem(weights, values, size) {
//   // 初始化dp
//   // dp数组的含义是允许使用0-i个物品时，容量为j的背包的最大价值
//   const dp = Array.from({ length: weights.length }, () =>
//     Array(size + 1).fill(0)
//   );
//   for (let i = weights[0]; i < dp[0].length; i++) {
//     dp[0][i] = values[0];
//   }
//   for (let i = 1; i < dp.length; i++) {
//     for (let j = 1; j <= size; j++) {
//       if (j < weights[i]) dp[i][j] = dp[i - 1][j];
//       else
//         dp[i][j] = Math.max(
//           dp[i - 1][j],
//           dp[i - 1][j - weights[i]] + values[i]
//         );
//     }
//   }
//   console.table(dp);
//   return dp[dp.length - 1][size];
// }
/**
 * 二维数组
 * @param {*} weights
 * @param {*} values
 * @param {*} capacity
 * @returns
 */
function testWeightBagProblem(weights, values, capacity) {
  // 1.确定dp数组的含义
  // 2.初始化dp数组
  // 初始化dp数组，列是任选下标0-i的物品，行是背包容量，dp[i][j]为任取下标0-i的物品可能得最大价值，当容量为零时第一列初始化为0，当只能选下标0的物品时，背包容量需要大于weights[0]
  let dp = Array.from({ length: values.length }, (value, index) => {
    let res = Array(capacity + 1).fill(0);
    if (index === 0) {
      res = res.map((v, index) => {
        if (index >= weights[0]) {
          return values[0];
        }
        return 0;
      });
    }
    return res;
  });
  // 3.确认遍历顺序：i在外层，j在内层（反过来也可以，由于结果是由左上方和上方递推得来）
  for (let i = 1; i < weights.length; i++) {
    for (let j = 1; j < dp[0].length; j++) {
      // 如果不使用物品i，那么直接复用i-1的结果
      let notUseObjectI = dp[i - 1][j];
      let useObjectI = 0;
      // 如果使用物品i，则先腾出背包空间，然后加上物品的价值
      if (j - weights[i] >= 0) {
        useObjectI = dp[i - 1][j - weights[i]] + values[i];
      }
      dp[i][j] = Math.max(useObjectI, notUseObjectI);
    }
  }
  console.table(dp);
  return dp[dp.length - 1][dp[0].length - 1];
}
/**
 * 滚动数组
 * @param {*} weights
 * @param {*} values
 * @param {*} capacity
 */
function testWeightBagProblem2(weights, values, capacity) {
  const dp = Array(capacity + 1).fill(0);
  for (let i = 0; i < weights.length; i++) {
    for (let j = capacity; j >= weights[i]; j--) {
      let notUseObjectI = dp[j];
      let useObjectI = dp[j - weights[i]] + values[i];
      dp[j] = Math.max(notUseObjectI, useObjectI);
    }
  }
  console.log(dp);
}
function test() {
  console.log(testWeightBagProblem2([1, 3, 4, 5], [15, 20, 30, 55], 6));
}

test();
