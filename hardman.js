class _HardMan {
  constructor(name) {
    this.taskQueue = [];
    this.taskQueue.push(() => {
      setTimeout(() => {
        this.next();
      });
    });
    this.taskQueue.push(() => {
      console.log(`I am ${name}`);
      this.next();
    });
    this.next();
  }

  next() {
    let task = this.taskQueue.shift();
    task && task();
  }

  learn(lesson) {
    this.taskQueue.push(() => {
      console.log(`Learning ${lesson}`);
      this.next();
    });
    return this;
  }

  rest(sec) {
    this.taskQueue.push(() => {
      setTimeout(() => {
        console.log(`等待${sec}秒..`);
        console.log(`Start learning after ${sec} seconds`);
        this.next();
      }, sec * 1000);
    });
    return this;
  }

  restFirst(sec) {
    this.taskQueue.unshift(() => {
      setTimeout(() => {
        console.log(`等待${sec}秒..`);
        console.log(`Start learning after ${sec} seconds`);
        this.next();
      }, sec * 1000);
    });
    return this;
  }
}

const HardMan = function (name) {
  return new _HardMan(name);
};
HardMan("jack")
  .restFirst(3)
  .learn("Chinese")
  .learn("Englsih")
  .rest(2)
  .learn("Japanese");

// //等待3秒..
// Start learning after 3 seconds
// I am jack
// Learning Chinese
// Learning Englsih
// //等待2秒..
// Start learning after 2 seconds
// Learning Japanese
