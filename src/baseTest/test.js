export default 'hello world!';
function saySomething(somthing='nothing'){
     console.info('it says,"'+somthing+'"');
}

export {saySomething}

class Hello {
  constructor(info="world"){
    this.info=info;
  }
  say(){
    saySomething("Hello "+this.info);
  }
}

class Hello2 {
  constructor(info="world"){
    this.info=info;
  }
  say(){
    saySomething("Hello2 "+this.info);
  }
}
export {Hello,Hello2}
