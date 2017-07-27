(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(factory());
}(this, (function () { 'use strict';

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

function saySomething() {
  var somthing = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'nothing';

  console.info('it says,"' + somthing + '"');
}

var Hello = function () {
  function Hello() {
    var info = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "world";
    classCallCheck(this, Hello);

    this.info = info;
  }

  createClass(Hello, [{
    key: 'say',
    value: function say() {
      saySomething("Hello " + this.info);
    }
  }]);
  return Hello;
}();

var Hello2 = function () {
  function Hello2() {
    var info = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "world";
    classCallCheck(this, Hello2);

    this.info = info;
  }

  createClass(Hello2, [{
    key: 'say',
    value: function say() {
      saySomething("Hello2 " + this.info);
    }
  }]);
  return Hello2;
}();

saySomething();
new Hello("Tom").say();

})));
