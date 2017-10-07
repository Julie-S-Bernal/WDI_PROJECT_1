/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jquery__);

const css = __webpack_require__(2);


const keyboardControls = () => {
  Object(__WEBPACK_IMPORTED_MODULE_0_jquery__["default"])(document).keydown((e) => {
    if(e.originalEvent.code === 'ArrowLeft' ){
        Object(__WEBPACK_IMPORTED_MODULE_0_jquery__["default"])('#character').animate({
            left: '-=10px',
            duration: 0.1
        }, () => {
            //animation complete
        });
    }

    if(e.originalEvent.code === 'ArrowRight' ){
        Object(__WEBPACK_IMPORTED_MODULE_0_jquery__["default"])('#character').animate({
            left: '+=10px',
            duration: 0.1
        }, () => {
            //animation complete
        });
    }
  })
};

Object(__WEBPACK_IMPORTED_MODULE_0_jquery__["default"])(() => {
  console.log('Starting programe');
  keyboardControls();
  const existingdiv1 = document.getElementById('character');
});


/***/ }),
/* 1 */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/home/bernalre/projects/WDI_PROJECT_1/node_modules/jquery/dist/jquery.js'");

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(3);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {"hmr":true}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(5)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../node_modules/css-loader/index.js!./style.css", function() {
			var newContent = require("!!../node_modules/css-loader/index.js!./style.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(undefined);
// imports


// module
exports.push([module.i, "body {\n  background-color: pink;\n  text-align: center;\n}\n\n#character {\n  margin: 0 auto ;\n  width: 150px;\n  background-color: red;\n  position: relative;\n}\n\nbody {\n  background: #00b4ff;\n  color: #333;\n  font: 100% Arial, Sans Serif;\n  height: 100vh;\n  margin: 0;\n  padding: 0;\n  overflow-x: hidden;\n}\n\n#background-wrap {\n  bottom: 0;\n  left: 0;\n  padding-top: 50px;\n  position: fixed;\n  right: 0;\n  top: 0;\n  z-index: -1;\n}\n\n/* KEYFRAMES */\n\n@-webkit-keyframes animateCloud {\n  0% {\n    margin-left: -1000px;\n  }\n  100% {\n    margin-left: 100%;\n  }\n}\n\n@keyframes animateCloud {\n  0% {\n    margin-left: -1000px;\n  }\n  100% {\n    margin-left: 100%;\n  }\n}\n\n/* ANIMATIONS */\n\n.x1 {\n  animation: animateCloud 35s linear infinite;\n  transform: scale(0.65);\n}\n\n.x2 {\n  animation: animateCloud 20s linear infinite;\n  transform: scale(0.3);\n}\n\n.x3 {\n  animation: animateCloud 30s linear infinite;\n  transform: scale(0.5);\n}\n\n.x4 {\n  animation: animateCloud 18s linear infinite;\n  transform: scale(0.4);\n}\n\n.x5 {\n  animation: animateCloud 25s linear infinite;\n  transform: scale(0.55);\n}\n\n/* OBJECTS */\n\n.cloud {\n  background: #fff;\n  background: linear-gradient(top,  #fff 5%,#f1f1f1 100%);\n  border-radius: 100px;\n  box-shadow: 0 8px 5px rgba(0, 0, 0, 0.1);\n  height: 120px;\n  position: relative;\n  width: 350px;\n}\n\n.cloud:after, .cloud:before {\n  background: #fff;\n  content: '';\n  position: absolute;\n  z-indeX: -1;\n}\n\n.cloud:after {\n  border-radius: 100px;\n  height: 100px;\n  left: 50px;\n  top: -50px;\n  width: 100px;\n}\n\n.cloud:before {\n  border-radius: 200px;\n  width: 180px;\n  height: 180px;\n  right: 50px;\n  top: -90px;\n}\n", ""]);

// exports


/***/ }),
/* 4 */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/home/bernalre/projects/WDI_PROJECT_1/node_modules/css-loader/lib/css-base.js'");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/home/bernalre/projects/WDI_PROJECT_1/node_modules/style-loader/lib/addStyles.js'");

/***/ })
/******/ ]);