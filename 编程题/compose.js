function compose(...fns) {
  if (fns.length === 0) return (args) => args;
  if (fns.length === 1) return fns[0];
  return fns.reduce(
    (pre, cur) =>
      (...args) =>
        cur(pre(...args))
  );
}
function double(x) {
  return x * 2;
}

function square(x) {
  return x * x;
}

const composition = compose(double, square, double);
console.log(composition(3)); // 输出: 36, 因为3*2=6, 然后6*6=36
