/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Scripts/modules/format.js":
/*!***************************************!*\
  !*** ./src/Scripts/modules/format.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"format\": () => (/* binding */ format)\n/* harmony export */ });\nlet pow = Math.pow,\nfloor = Math.floor,\nabs = Math.abs,\nlog = Math.log;\n\nlet abbrev = [\"k\",\"m\",\"b\",\"t\",\"aa\",\"ab\",\"ac\",\"ad\",\"ae\",\"af\",\"ag\",\"ah\",\"ai\",\"aj\",\"ak\",\"al\",\"am\",\"an\",\"ao\",\"ap\",\"ar\",\"as\",\"at\",\"au\",\"aw\",\"az\",\"ba\",];\n\nfunction round(n, precision) {\n  let prec = Math.pow(10, precision);\n  return Math.floor(n * prec) / prec;\n}\n\nfunction format(n) {\n  let base = floor(log(abs(n)) / log(1000));\n  let suffix = abbrev[Math.min(100, base - 1)];\n  base = abbrev.indexOf(suffix) + 1;\n  return suffix ? round(n / pow(1000, base), 2) + suffix : \"\" + n;\n}\n\n//# sourceURL=webpack:///./src/Scripts/modules/format.js?");

/***/ }),

/***/ "./src/Scripts/modules/onClickIncrement.js":
/*!*************************************************!*\
  !*** ./src/Scripts/modules/onClickIncrement.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"onClickHandler\": () => (/* binding */ onClickHandler)\n/* harmony export */ });\n/* harmony import */ var _format_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./format.js */ \"./src/Scripts/modules/format.js\");\n\n\nconst counterElement = document.getElementById(\"counter\");\n\nlet returnedFormatedValue = counter;\n\nfunction changeCounterElementText(value){\n  returnedFormatedValue = (0,_format_js__WEBPACK_IMPORTED_MODULE_0__.format)(value);\n\n  counterElement.textContent = returnedFormatedValue + \" $\";\n}\n\nfunction onClickHandler(counter) {\n  counter++;\n  changeCounterElementText(counter);\n  return counter;\n}\n\n//# sourceURL=webpack:///./src/Scripts/modules/onClickIncrement.js?");

/***/ }),

/***/ "./src/Scripts/modules/upgrades.js":
/*!*****************************************!*\
  !*** ./src/Scripts/modules/upgrades.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"menelUpgrade\": () => (/* binding */ menelUpgrade),\n/* harmony export */   \"timer\": () => (/* binding */ timer),\n/* harmony export */   \"upgradeCostFormat\": () => (/* binding */ upgradeCostFormat)\n/* harmony export */ });\nlet upgradeLevel = 0;\nlet upgradeCost = 10;\nlet upgradeCostFormat = upgradeCost;\n\nfunction menelUpgrade(autoClick){\n    if(counter>=upgradeCost)\n    {  \n        counter = counter - upgradeCost; \n\n        returnedFormatedValue = format(counter);\n        upgradeCost = upgradeCost + 10;\n        upgradeLevel = upgradeLevel + 1;\n        autoClick = autoClick + 1;\n        upgradeCostFormat = format(upgradeCost);\n    \n        document.getElementById('counter').innerHTML = returnedFormatedValue + ' $';\n        document.getElementById('menellevel').innerHTML = upgradeLevel;\n        document.getElementById('menelcost').innerHTML = upgradeCostFormat +' $';\n        document.getElementById('moneyPerSecond').innerHTML ='Na sekunde: ' + autoClick +' $';\n    }\n}\n\nfunction timer() \n{\n    counter = counter + autoClick;\n    document.getElementById('counter').innerHTML = counter + ' $';\n}\n\n//# sourceURL=webpack:///./src/Scripts/modules/upgrades.js?");

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"autoClick\": () => (/* binding */ autoClick),\n/* harmony export */   \"counter\": () => (/* binding */ counter)\n/* harmony export */ });\n/* harmony import */ var _Scripts_modules_onClickIncrement_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Scripts/modules/onClickIncrement.js */ \"./src/Scripts/modules/onClickIncrement.js\");\n/* harmony import */ var _Scripts_modules_upgrades_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Scripts/modules/upgrades.js */ \"./src/Scripts/modules/upgrades.js\");\n\n\n\nconst counterButtonElement = document.getElementById(\"counter-button\");\nconst menelUpgradeButton = document.getElementById(\"upgrade1\");\n\nlet counter = 11;\nlet autoClick = 0;\n\nif (_Scripts_modules_upgrades_js__WEBPACK_IMPORTED_MODULE_1__.timer) {\n    counter = counter + autoClick;\n}\n\nif (menelUpgradeButton) {\n    menelUpgradeButton.addEventListener('click', (event) => {\n        counter = (0,_Scripts_modules_upgrades_js__WEBPACK_IMPORTED_MODULE_1__.menelUpgrade)(autoClick);\n        console.log(autoClick);\n    });\n}\n\nif (counterButtonElement){\n    counterButtonElement.addEventListener('click', (event) => {\n        counter = (0,_Scripts_modules_onClickIncrement_js__WEBPACK_IMPORTED_MODULE_0__.onClickHandler)(counter);\n    });\n};\n\nwindow.addEventListener('DOMContentLoaded', (event) => {\n    console.log('DOM fully loaded and parsed');\n});\n\nsetInterval(_Scripts_modules_upgrades_js__WEBPACK_IMPORTED_MODULE_1__.timer, 1000);\n\n//# sourceURL=webpack:///./src/main.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/main.js");
/******/ 	
/******/ })()
;