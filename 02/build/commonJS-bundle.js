(function () {
  // 定义了一个对象
  // 模块的路径(key): 函数(value)
  var __webpack_modules__ = ({
    "./src/js/format.js":
      (function (module) {
        var dataFormat = function (date) {
          return '2020-12-12';
        };
        var priceFormat = function (price) {
          return '100.00';
        };
        // 将要导出的变量，放入到module对象中的exports对象
        module.exports = {
          dataFormat,
          priceFormat
        };
      })
  });

  // The module cache
  // 定义一个对象，作为加载模块的缓存
  var __webpack_module_cache__ = {};

  // The require function
  // 是一个函数，当我们加载一个模块时，都会通过这个函数来加载
  function __webpack_require__ (moduleId) {
    // Check if module is in cache
    // 判断缓存中是否已经加载
    var cachedModule = __webpack_module_cache__[moduleId];
    if (cachedModule !== undefined) {
      return cachedModule.exports;
    }
    // Create a new module (and put it into the cache)
    // 连续赋值
    var module = __webpack_module_cache__[moduleId] = {
      // no module.id needed
      // no module.loaded needed
      exports: {}
    };

    // Execute the module function
    // 加载执行模块
    __webpack_modules__[moduleId](module, module.exports, __webpack_require__);

    // Return the exports of the module
    return module.exports;
  }

  var __webpack_exports__ = {};

  // This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
  // 此处才是具体开始执行代码
  !function () {

    var {
      dateFormat,
      priceFormat
    } = __webpack_require__("./src/js/format.js");

    console.log(dateFormat('abc'));
    console.log(priceFormat('abc'));
  }();
})();
