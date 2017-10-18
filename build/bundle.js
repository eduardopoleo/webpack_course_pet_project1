/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "build/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


var _big = __webpack_require__(3);

var _big2 = _interopRequireDefault(_big);

var _small = __webpack_require__(4);

var _small2 = _interopRequireDefault(_small);

__webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var image = document.createElement('img');
image.src = _small2.default;
document.body.appendChild(image);

var bigImage = document.createElement('img');
bigImage.src = _big2.default;

document.body.appendChild(bigImage);

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var sum = function sum(a, b) {
  return a + b;
};

exports.default = sum;

/***/ },
/* 2 */
/***/ function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "8202693348cd2dc6d482b6df9f277a08.jpeg";

/***/ },
/* 4 */
/***/ function(module, exports) {

module.exports = "data:image/jpeg;base64,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"

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


var _sum = __webpack_require__(1);

var _sum2 = _interopRequireDefault(_sum);

__webpack_require__(0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var total = (0, _sum2.default)(10, 5);
console.log(total);

/***/ }
/******/ ]);