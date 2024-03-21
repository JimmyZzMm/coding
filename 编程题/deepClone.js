// function deepClone(target, map = new WeakMap()) {
//   if (typeof target !== "object" || target === null) return target;
//   if (target instanceof Date) return new Date(target);
//   if (target instanceof RegExp) return new RegExp(target);
//   if (map.get(target)) return map.get(target);
//   let newObj = Array.isArray(target) ? [] : Object.create(target.__proto__);
//   map.set(target, newObj);
//   Reflect.ownKeys(target).forEach((key) => {
//     newObj[key] = deepClone(target[key], map);
//   });
//   return newObj;
// }
// a = [1, 2];
// console.log(deepClone(a).toString());
Function.prototype.myBind = function (context, ...args) {
  if (typeof this !== "function") {
    throw new TypeError("bind error ");
  }
  let fn = this;
  return function () {
    if (new.target) {
      return new fn(...args, ...arguments);
    }
    return fn.call(context, ...args, ...arguments);
  };
};
function Foo(name, age) {
  console.log(this, arguments);
}
let fn = Foo.myBind({ a: 1 }, 1);
let obj = fn(2, 3);
