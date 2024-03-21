function maxGiftBagsValue(n, m, a, b) {
  let totalValue = 0;
  let valuePerAppleForBag1 = a / 2;
  let valuePerPeachForBag1 = a;
  let valuePerAppleForBag2 = b;
  let valuePerPeachForBag2 = b / 2;

  if (
    valuePerAppleForBag1 + valuePerPeachForBag1 >=
    valuePerAppleForBag2 + valuePerPeachForBag2
  ) {
    while (n >= 2 && m >= 1) {
      n -= 2;
      m -= 1;
      totalValue += a;
    }
    while (n >= 1 && m >= 2) {
      n -= 1;
      m -= 2;
      totalValue += b;
    }
  } else {
    while (n >= 1 && m >= 2) {
      n -= 1;
      m -= 2;
      totalValue += b;
    }
    while (n >= 2 && m >= 1) {
      n -= 2;
      m -= 1;
      totalValue += a;
    }
  }

  return totalValue;
}

// 测试用例
console.log(maxGiftBagsValue(3, 4, 1, 2)); // 输出应为 4
