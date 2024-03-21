const promise = new Promise((resolve) => {
  resolve(1);
});
promise.then(() => {
  console.log(0);
});
console.log(1, promise);
