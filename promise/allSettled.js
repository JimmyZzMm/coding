/**
接收一个Promise数组，数组中如有非Promise项，则此项当做成功
把每一个Promise的结果，集合成数组，返回
 * @param {*} promises 
 * @returns 
 */
Promise.allSettled = function (promises) {
  let result = Array(promises.length);
  let count = 0;
  return new Promise((resolve, reject) => {
    function addData(status, value, index) {
      result[index] = {
        status,
        value,
      };
      count++;
      if (count === promises.length) {
        resolve(result);
      }
    }
    promises.forEach((promise, index) => {
      Promise.resolve(promise).then(
        (res) => addData("fulfilled", res, index),
        (err) => addData("rejected", err, index)
      );
    });
  });
};
Promise.allSettled([
  new Promise((resolve) => {
    resolve(22);
  }),
  new Promise((resolve, reject) => {
    // reject(11);
  }),
]).then((res) => console.log(res));
