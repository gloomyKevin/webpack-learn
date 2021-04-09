"use strict";

var _math = require("./js/math.js");

require("./js/component.js");

// const { dateFormat, priceFormat } = require('./js/format');
console.log((0, _math.sum)(20, 30));
console.log((0, _math.multiply)(20, 30)); // console.log(dateFormat("1213"));
// console.log(priceFormat("1213"));

var message = "babel-test";

var foo = function foo(info) {
  console.log(info);
};

foo(message);