class EventEmitter {
  constructor() {
    this.event = {};
  }
  on(eventType, cb) {
    if (!this.event[eventType]) {
      this.event[eventType] = [cb];
    } else {
      this.event[eventType].push(cb);
    }
  }
  emit(eventType, ...args) {
    const cbs = this.event[eventType] ?? [];
    cbs.forEach((cb) => cb.call(this, ...args));
  }
  off(eventType, handler) {
    const cbs = this.event[eventType] ?? [];

    const newCbs = cbs.filter(
      (cb) => cb !== handler && cb.initialFn !== handler
    );
    this.event[eventType] = newCbs;
  }
  once(eventType, handler) {
    const onceFn = (...args) => {
      handler.call(this, ...args);
      this.off(eventType, handler);
    };
    onceFn.initialFn = handler;
    this.on(eventType, onceFn);
  }
}
let emitter = new EventEmitter();
const fn = function (...args) {
  console.log(args, this);
};
emitter.once("test", fn);
emitter.emit("test", 1, 2, 3);
emitter.off("test", fn);

emitter.emit("test", 1, 2, 3);
