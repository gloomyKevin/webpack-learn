"use strict";

require("../css/index.css");

function component() {
  var element = document.createElement("div");
  element.innerHTML = ["Hello", "webpack"].join(" ");
  element.className = "content";
  return element;
}

document.body.appendChild(component());