var MinStack = function () {
  this.originStack = [];
  this.supportStack = [];
};

/**
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function (val) {
  this.originStack.push(val);
  if (
    this.supportStack.length === 0 ||
    val <= this.supportStack[this.supportStack.length - 1]
  ) {
    this.supportStack.push(val);
  }
  return val;
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
  const val = this.originStack.pop();
  if (val === this.supportStack[this.supportStack.length - 1]) {
    this.supportStack.pop();
  }
  // console.log(this.originStack);
  return val;
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  return this.originStack[this.originStack.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
  return this.supportStack[this.supportStack.length - 1];
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
// let minStack = new MinStack();
// minStack.push(-2);
// minStack.push(0);
// minStack.push(-3);
// console.log(minStack);
