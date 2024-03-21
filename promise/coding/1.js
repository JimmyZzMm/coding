// 使用Promise实现每隔1秒输出1,2,3

const arr = [1, 2, 3];
arr.reduce((pre, cur) => {
  return pre.then(() => {
    console.log(cur);
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, 1000);
    });
  });
}, new Promise((resolve) => setTimeout(resolve, 1000)));
