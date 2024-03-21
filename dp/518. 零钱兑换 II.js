/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */
var change = function (amount, coins) {
  let dp = Array(amount + 1).fill(0);
  dp[0] = 1;
  for (let i = 0; i < coins.length; i++) {
    for (let j = coins[i]; j <= amount; j++) {
      dp[j] += dp[j - coins[i]];
    }
    console.log(dp);
  }

  return dp[amount];
};
let amount = 5,
  coins = [1, 2, 5];
change(amount, coins);
