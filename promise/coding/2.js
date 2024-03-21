// 红灯3秒亮一次，黄灯2秒亮一次，绿灯1秒亮一次；如何让三个灯不断交替重复亮灯？（用Promise实现）三个亮灯函数已经存在：
function red() {
  console.log("red");
}
function green() {
  console.log("green");
}
function yellow() {
  console.log("yellow");
}

function genPromise(cb, timeout) {
  return new Promise((resolve) => {
    setTimeout(() => {
      cb();
      resolve();
    }, timeout);
  });
}

function step() {
  Promise.resolve()
    .then(() => genPromise(red, 3000))
    .then(() => genPromise(green, 2000))
    .then(() => genPromise(yellow, 1000))
    .then(step);
}
step();
