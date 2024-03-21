// 题目需求
let middleware = [];
middleware.push((next) => {
  console.log(1);
  next();
  console.log(1.1);
});
middleware.push((next) => {
  console.log(2);
  next();
  console.log(2.1);
});
middleware.push((next) => {
  console.log(3);
  next();
  console.log(3.1);
});

let fn = compose(middleware);
fn();

function compose(fns) {
  fns.reverse();
  return fns.reduce(
    (pre, cur) => () => cur(pre),
    () => {}
  );
}
