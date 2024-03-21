  /**
   * @param {number} n
   * @return {boolean}
   */
  var isHappy = function (n) {
    let map = {};
    while (true) {
      let numbers = String(n).split("").map(Number);
      let sum = 0;
      for (let number of numbers) {
        sum += number * number;
      }
      if (sum in map) {
        return false;
      }
      if (sum === 1) {
        return true;
      }
      map[sum] = 1;
      n = sum;
    }
  };
