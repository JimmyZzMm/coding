let obj = {
  name: "ned",
  like: "man",
};

Object.defineProperty(Object.prototype, "age", {
  value: "18",
  enumerable: false,
});
for (item in obj) {
  console.log(item);
}
