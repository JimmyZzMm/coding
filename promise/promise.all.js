const { reject } = require("./MyPromise");

/**
接收一个Promise数组，数组中如有非Promise项，则此项当做成功
如果所有Promise都成功，则返回成功结果数组
如果有一个Promise失败，则返回这个失败结果
 * @param {*} promises 
 * @returns 
 */
Promise.all = function (promises) {
  let result = Array(promises.length);
  let count = 0;
  return new Promise((resolve, reject) => {
    function addData(index, data) {
      result[index] = data;
      count++;
      if (count === promises.length) {
        resolve(result);
      }
    }
    promises.forEach((promise, index) => {
      Promise.resolve(promise).then(
        (res) => addData(index, res),
        (err) => reject(err)
      );
    });
  });
};

let promise1 = new Promise((resolve) => {
  setTimeout(() => resolve(1000), 1000);
});
let promise2 = new Promise((resolve, reject) => {
  setTimeout(() => reject(100), 100);
});
let promise3 = 1;
Promise.all([promise1, promise2, promise3]).then(
  (res) => console.log(res),
  (err) => console.log(err)
);
