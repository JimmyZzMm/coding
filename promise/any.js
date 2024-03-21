/**
接收一个Promise数组，数组中如有非Promise项，则此项当做成功
如果有一个Promise成功，则返回这个成功结果
如果所有Promise都失败，则报错
 */
// Promise.any = function (promises) {
//   let count = 0;
//   return new Promise((resolve, reject) => {
//     promises.forEach((promise) => {
//       promise.then(
//         (res) => resolve(res),
//         (err) => {
//           count++;
//           if (count === promises.length) {
//             reject();
//           }
//         }
//       );
//     });
//   });
// };
Promise.any([
  new Promise((resolve, reject) => resolve(11)),
  new Promise((resolve, reject) => reject(21)),
]).then((res) => console.log(res));
