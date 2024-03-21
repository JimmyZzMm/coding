const { startupSnapshot } = require("v8");

function clone(Parent, Child) {
  // 这里改用 Object.create 就可以减少组合继承中多进行一次构造的过程
  Child.prototype = Object.create(Parent.prototype);
  Child.prototype.constructor = Child;
  return function () {};
}
Object.defineProperty({}, "test", {});

function Parent(name, play) {
  this.name = name;
  this.play = play;
}
Parent.prototype.getName = function () {
  return this.name;
};
function Child() {
  Parent.call(this);
  this.friends = "child5";
}

Child = clone(Parent, Child);

Child.prototype.getFriends = function () {
  return this.friends;
};

let person6 = new Child6();
console.log(person6); //{friends:"child5",name:"child5",play:[1,2,3],__proto__:Parent6}
console.log(person6.getName()); // parent6
console.log(person6.getFriends()); // child5
