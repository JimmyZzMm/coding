

interface myEvent{
  on:()=>void;
  emit:()=>void;
  off:()=>void;
  once:()=>void;
}

class Dispatch implements myEvent{
  constructor(){

  }
  on(){

  }
  emit(){

  }
  off(){

  }
  once(){};
}

const o = new Dispatch()

