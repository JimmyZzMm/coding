function isEqual(a, b) {
  if (!isObject(a) || !isObject(b)) {
    return a === b;
  } else {
    const keys = Reflect.ownKeys(a);
    for (let key of keys) {
      if (!isEqual(a[key], b[key])) {
        return false;
      }
    }
    return true;
  }
}

function isObject(a) {
  return typeof a === "object" && a !== null;
}
const symbolKey = Symbol();
let obj1 = {
  [symbolKey]: NaN,
  age: 18,
  address: {
    phone: 111,
    country: "china",
  },
};
let obj2 = {
  [symbolKey]: NaN,
  age: 18,
  address: {
    phone: 111,
    country: "china",
  },
};
console.log(isEqual(obj1, obj2));
