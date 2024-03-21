// async function getData() {
//   const data = await fetchData();
//   console.log(data);
// }
function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("data");
    }, 100);
  });
}
[].
function fetchImage() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("image");
    }, 1000);
  });
}

function* getData() {
  const data = yield fetchData();
  console.log(data);

  const img = yield fetchImage();
  console.log(img);
  return 1;
}
function run(generatorFn) {
  const generator = generatorFn();
  function handle(result) {
    if (result.done) return Promise.resolve(result.value);
    return Promise.resolve(result.value).then((res) =>
      handle(generator.next(res))
    );
  }
  return handle(generator.next());
}
run(getData).then((res) => console.log(res));
