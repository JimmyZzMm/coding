const { error } = require("console");
const { resolve } = require("path");

const PENDING = "PENDING";
const RESOLVED = "RESOLVED";
const REJECTED = "REJECTED";

class MyPromise {
  // 储存状态的变量，初始值是 pending
  status = PENDING;
  // 成功之后的值
  value = null;
  // 失败之后的原因
  reason = null;

  // 存储成功回调函数
  onFulfilledCallbacks = [];
  // 存储失败回调函数
  onRejectedCallbacks = [];
  constructor(executor) {
    try {
      executor(this.resolve, this.reject);
    } catch (error) {
      this.reject(error);
    }
  }
  resolve = (value) => {
    if (this.status === PENDING) {
      this.status = RESOLVED;
      this.value = value;
      while (this.onFulfilledCallbacks.length) {
        this.onFulfilledCallbacks.shift()(value);
      }
    }
  };
  reject = (error) => {
    if (this.status === PENDING) {
      this.status = REJECTED;
      this.reason = error;
      if (this.onRejectedCallbacks.length === 0) {
        throw error;
      }
      while (this.onRejectedCallbacks.length) {
        this.onRejectedCallbacks.shift()(error);
      }
    }
  };
  then = (onFulfilled, onRejected) => {
    const realOnFulfilled =
      typeof onFulfilled === "function" ? onFulfilled : (value) => value;
    const realOnRejected =
      typeof onRejected === "function"
        ? onRejected
        : (reason) => {
            throw reason;
          };
    const newPromise = new MyPromise((resolve, reject) => {
      const fulfilledMicrotask = () => {
        queueMicrotask(() => {
          try {
            const x = realOnFulfilled(this.value);
            resolvePromise(newPromise, x, resolve, reject);
          } catch (error) {
            reject(error);
          }
        });
      };
      const rejectedMicrotask = () => {
        queueMicrotask(() => {
          try {
            const x = realOnRejected(this.reason);
            resolvePromise(newPromise, x, resolve, reject);
          } catch (error) {
            reject(error);
          }
        });
      };
      // 判断状态
      if (this.status === REJECTED) {
        fulfilledMicrotask();
      } else if (this.status === REJECTED) {
        rejectedMicrotask();
      } else if (this.status === PENDING) {
        // 等待
        // 因为不知道后面状态的变化情况，所以将成功回调和失败回调存储起来
        // 等到执行成功失败函数的时候再传递
        this.onFulfilledCallbacks.push(fulfilledMicrotask);
        this.onRejectedCallbacks.push(rejectedMicrotask);
      }
    });
    return newPromise;
  };
  catch = (fn) => {
    this.then(null, fn);
  };
  static resolve(parameter) {
    if (parameter instanceof MyPromise) {
      return parameter;
    }
    return new MyPromise((resolve, reject) => {
      resolve(parameter);
    });
  }
  static reject(parameter) {
    return new MyPromise((resolve, reject) => {
      reject(parameter);
    });
  }
}
function resolvePromise(promise, x, resolve, reject) {
  // 如果相等了，说明return的是自己，抛出类型错误并返回
  if (promise === x) {
    return reject(
      new TypeError("The promise and the return value are the same")
    );
  }
  if (typeof x == "object" || typeof x === "function") {
  } else {
    resolve(x);
  }
}
let promise = new Promise((resolve) => resolve()).then(() => promise);
