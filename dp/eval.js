function getJsonProperty(target, str) {
  let res = eval(`target.${str}`);
  console.log(res);
}
const obj = {
  a: { b: [1, 2, 3] },
};
const str = "a.b[1]";
getJsonProperty(obj, str);

console.log(eval("getJsonProperty(obj,str)"));
