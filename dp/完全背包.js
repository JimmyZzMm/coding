// 先遍历物品，再遍历背包容量
function test_completePack1() {
  let weight = [1, 3, 5];
  let value = [15, 20, 30];
  let bagWeight = 4;
  let dp = new Array(bagWeight + 1).fill(0);
  for (let i = 0; i <= weight.length; i++) {
    for (let j = weight[i]; j <= bagWeight; j++) {
      dp[j] = Math.max(dp[j], dp[j - weight[i]] + value[i]);
    }
  }
  console.table(dp);
}

// 先遍历背包容量，再遍历物品
function test_completePack2() {
  let weight = [1, 3, 5];
  let value = [15, 20, 30];
  let bagWeight = 4;
  let dp = Array.from({ length: value.length }, (_, index) => {
    let res = Array(bagWeight + 1).fill(0);
    if (index === 0) {
      res = res.map((v, index) => {
        if (index >= weight[0]) {
          return value[0];
        }
        return 0;
      });
    }
    return res;
  });
  for (let j = 0; j <= bagWeight; j++) {
    for (let i = 1; i < weight.length; i++) {
      let useObjectI = 0;
      let notUseObjectI = dp[i - 1][j];
      if (j >= weight[i]) {
        useObjectI = dp[i][j - weight[i]] + value[i];
      }
      dp[i][j] = Math.max(useObjectI, notUseObjectI);
    }
  }
  console.table(dp);
}
test_completePack1();
test_completePack2();
