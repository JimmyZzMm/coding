interface Options {
  el: string | HTMLElement;
}
interface VueCls {
  options: Options;
  init: () => void;
}
interface Vnode {
  tag: string;
  text?: string;
  children?: Vnode[];
}
class Dom {}

class Vue implements VueCls {
  options: Options;
  constructor(options: Options) {
    this.options = options;
    this.init();
  }
  init() {
    let data: Vnode = {
      tag: "div",
      children: [{ tag: "section", text: "子节点2" }],
    };
  }
}
