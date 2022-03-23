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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"format\": () => (/* binding */ format)\n/* harmony export */ });\nlet pow = Math.pow,\nfloor = Math.floor,\nabs = Math.abs,\nlog = Math.log;\n\nlet abbrev = [\"k\",\"m\",\"b\",\"t\",\"aa\",\"ab\",\"ac\",\"ad\",\"ae\",\"af\",\"ag\",\"ah\",\"ai\",\"aj\",\"ak\",\"al\",\"am\",\"an\",\"ao\",\"ap\",\"ar\",\"as\",\"at\",\"au\",\"aw\",\"az\",\"ba\",];\n\nfunction round(n, precision) {\n  let prec = Math.pow(10, precision + 1);\n  return Math.floor(n * prec) / prec;\n}\n\nfunction format(n) {\n  let base = floor(log(abs(n)) / log(1000));\n  let suffix = abbrev[Math.min(100, base - 1)];\n  base = abbrev.indexOf(suffix) + 1;\n  return suffix ? round(n / pow(1000, base), 2) + suffix : \"\" + n;\n}\n\n//# sourceURL=webpack:///./src/Scripts/modules/format.js?");

/***/ }),

/***/ "./src/Scripts/modules/onClickIncrement.js":
/*!*************************************************!*\
  !*** ./src/Scripts/modules/onClickIncrement.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"onClickHandler\": () => (/* binding */ onClickHandler)\n/* harmony export */ });\n/* harmony import */ var _format_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./format.js */ \"./src/Scripts/modules/format.js\");\n/* harmony import */ var _upgrades__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./upgrades */ \"./src/Scripts/modules/upgrades.js\");\n\n\n\nconst counterElement = document.getElementById(\"counter\");\n\nlet returnedFormatedValue = counter;\n\nfunction changeCounterElementText(value){\n  returnedFormatedValue = (0,_format_js__WEBPACK_IMPORTED_MODULE_0__.format)(value);\n\n  counterElement.textContent = returnedFormatedValue + \" $\";\n}\n\nfunction onClickHandler(counter) {\n  counter = counter + _upgrades__WEBPACK_IMPORTED_MODULE_1__.extraMoneyPerClick;\n  counter++;\n  changeCounterElementText(counter);\n  return counter;\n}\n\n//# sourceURL=webpack:///./src/Scripts/modules/onClickIncrement.js?");

/***/ }),

/***/ "./src/Scripts/modules/upgrades.js":
/*!*****************************************!*\
  !*** ./src/Scripts/modules/upgrades.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"browarUpgrade\": () => (/* binding */ browarUpgrade),\n/* harmony export */   \"destylarniaUpgrade\": () => (/* binding */ destylarniaUpgrade),\n/* harmony export */   \"extraMoneyPerClick\": () => (/* binding */ extraMoneyPerClick),\n/* harmony export */   \"gangUpgrade\": () => (/* binding */ gangUpgrade),\n/* harmony export */   \"grazynaUpgrade\": () => (/* binding */ grazynaUpgrade),\n/* harmony export */   \"mietekUpgrade\": () => (/* binding */ mietekUpgrade),\n/* harmony export */   \"monopolowyUpgrade\": () => (/* binding */ monopolowyUpgrade),\n/* harmony export */   \"otwieraczUpgrade\": () => (/* binding */ otwieraczUpgrade),\n/* harmony export */   \"sebaUpgrade\": () => (/* binding */ sebaUpgrade),\n/* harmony export */   \"timer\": () => (/* binding */ timer)\n/* harmony export */ });\n/* harmony import */ var _format_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./format.js */ \"./src/Scripts/modules/format.js\");\n/* harmony import */ var _main_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../main.js */ \"./src/main.js\");\n \n\n\n// let upgradeCost= 10;\nlet upgradeCostFormat = 10;\nlet extraMoneyPerClick = 0;\nlet returnedFormatedValue = 0;\nlet autoClickFormat;\n\n// zmienne od poszczególnych ulepszeń\nlet otwieraczUpgradeLevel = 0;\nlet otwieraczUpgradeCost = 10;\n\nlet mietekUpgradeLevel = 0;\nlet mietekUpgradeCost = 150;\n\nlet sebaUpgradeLevel = 0;\nlet sebaUpgradeCost= 1200;\n\nlet grazynaUpgradeLevel = 0;\nlet grazynaUpgradeCost= 5000;\n\nlet gangUpgradeLevel = 0;\nlet gangUpgradeCost= 30000;\n\nlet monopolowyUpgradeLevel = 0;\nlet monopolowyUpgradeCost= 115000;\n\nlet browarUpgradeLevel = 0;\nlet browarUpgradeCost= 750000;\n\nlet destylarniaUpgradeLevel = 0;\nlet destylarniaUpgradeCost= 4000000;\n\n// funkcje od ulepszeń \nfunction otwieraczUpgrade(counter, autoClick)\n{\n    if(counter >= otwieraczUpgradeCost)\n    {  \n        counter -= otwieraczUpgradeCost;\n        returnedFormatedValue = (0,_format_js__WEBPACK_IMPORTED_MODULE_0__.format)(counter);\n        otwieraczUpgradeCost += 40;\n        otwieraczUpgradeLevel += 1;\n        autoClick += 2;\n        upgradeCostFormat = (0,_format_js__WEBPACK_IMPORTED_MODULE_0__.format)(otwieraczUpgradeCost);\n        extraMoneyPerClick += 1;\n        autoClickFormat = (0,_format_js__WEBPACK_IMPORTED_MODULE_0__.format)(autoClick);\n        \n        document.getElementById('counter').innerHTML = returnedFormatedValue + ' $';\n        document.getElementById('otwieraczLevel').innerHTML = otwieraczUpgradeLevel;\n        document.getElementById('otwieraczCost').innerHTML = upgradeCostFormat +' $';\n        document.getElementById('moneyPerSecond').innerHTML ='Na sekunde: ' + autoClickFormat +' $';\n    }\n    return counter;\n}\n\nfunction mietekUpgrade(counter, autoClick)\n{\n     if(counter >= mietekUpgradeCost)\n    {  \n        counter -= mietekUpgradeCost; \n        returnedFormatedValue = (0,_format_js__WEBPACK_IMPORTED_MODULE_0__.format)(counter);\n        mietekUpgradeCost += 150;\n        mietekUpgradeLevel += 1;\n        autoClick += 9;\n        upgradeCostFormat = (0,_format_js__WEBPACK_IMPORTED_MODULE_0__.format)(mietekUpgradeCost);\n        extraMoneyPerClick += 4;\n\n        document.getElementById('counter').innerHTML = returnedFormatedValue + ' $';\n        document.getElementById('mietekLevel').innerHTML = mietekUpgradeLevel;\n        document.getElementById('mietekCost').innerHTML = upgradeCostFormat +' $';\n        document.getElementById('moneyPerSecond').innerHTML ='Na sekunde: ' + autoClickFormat +' $';\n    }\n    return counter;\n}\n\nfunction sebaUpgrade(counter, autoClick)\n{\n     if(counter>=sebaUpgradeCost)\n    {  \n        counter -= sebaUpgradeCost; \n        returnedFormatedValue = (0,_format_js__WEBPACK_IMPORTED_MODULE_0__.format)(counter);\n        sebaUpgradeCost += 700;\n        sebaUpgradeLevel += 1;\n        autoClick += 73;\n        upgradeCostFormat = (0,_format_js__WEBPACK_IMPORTED_MODULE_0__.format)(sebaUpgradeCost);\n        extraMoneyPerClick += 9;\n\n        document.getElementById('counter').innerHTML = returnedFormatedValue + ' $';\n        document.getElementById('sebaLevel').innerHTML = sebaUpgradeLevel;\n        document.getElementById('sebaCost').innerHTML = upgradeCostFormat +' $';\n        document.getElementById('moneyPerSecond').innerHTML ='Na sekunde: ' + autoClickFormat +' $';\n    }\n    return counter;\n}\n\nfunction grazynaUpgrade(counter, autoClick)\n{\n     if(counter>=grazynaUpgradeCost)\n    {  \n        counter -= grazynaUpgradeCost; \n        returnedFormatedValue = (0,_format_js__WEBPACK_IMPORTED_MODULE_0__.format)(counter);\n        grazynaUpgradeCost += 3000;\n        grazynaUpgradeLevel += 1;\n        autoClick = autoClick + 223;\n        upgradeCostFormat = (0,_format_js__WEBPACK_IMPORTED_MODULE_0__.format)(grazynaUpgradeCost);\n        extraMoneyPerClick += 150 ;\n\n        document.getElementById('counter').innerHTML = returnedFormatedValue + ' $';\n        document.getElementById('grazynaLevel').innerHTML = grazynaUpgradeLevel;\n        document.getElementById('grazynaCost').innerHTML = upgradeCostFormat +' $';\n        document.getElementById('moneyPerSecond').innerHTML ='Na sekunde: ' + autoClickFormat +' $';\n    }    \n    return counter;\n}\n\nfunction gangUpgrade(counter, autoClick)\n{\n     if(counter>=gangUpgradeCost)\n    {  \n        counter -= gangUpgradeCost; \n        returnedFormatedValue = (0,_format_js__WEBPACK_IMPORTED_MODULE_0__.format)(counter);\n        gangUpgradeCost += 20000;\n        gangUpgradeLevel += 1;\n        autoClick += 641;\n        upgradeCostFormat = (0,_format_js__WEBPACK_IMPORTED_MODULE_0__.format)(gangUpgradeCost);\n        extraMoneyPerClick += 300 ;\n\n        document.getElementById('counter').innerHTML = returnedFormatedValue + ' $';\n        document.getElementById('gangLevel').innerHTML = gangUpgradeLevel;\n        document.getElementById('gangCost').innerHTML = upgradeCostFormat +' $';\n        document.getElementById('moneyPerSecond').innerHTML ='Na sekunde: ' + autoClickFormat +' $';\n    }\n    return counter;\n}\n\nfunction monopolowyUpgrade(counter, autoClick)\n{\n     if(counter>=monopolowyUpgradeCost)\n    {  \n        counter -= monopolowyUpgradeCost; \n        returnedFormatedValue = (0,_format_js__WEBPACK_IMPORTED_MODULE_0__.format)(counter);\n        monopolowyUpgradeCost += 150000;\n        monopolowyUpgradeLevel += 1;\n        autoClick += 1234;\n        upgradeCostFormat = (0,_format_js__WEBPACK_IMPORTED_MODULE_0__.format)(monopolowyUpgradeCost);\n        extraMoneyPerClick += 900 ;\n\n        document.getElementById('counter').innerHTML = returnedFormatedValue + ' $';\n        document.getElementById('monopolowyLevel').innerHTML = monopolowyUpgradeLevel;\n        document.getElementById('monopolowyCost').innerHTML = upgradeCostFormat +' $';\n        document.getElementById('moneyPerSecond').innerHTML ='Na sekunde: ' + autoClickFormat +' $'; \n    }\n    return counter;\n}\n\nfunction browarUpgrade(counter, autoClick)\n{\n     if(counter>=browarUpgradeCost)\n    {  \n        counter -= browarUpgradeCost; \n        returnedFormatedValue = (0,_format_js__WEBPACK_IMPORTED_MODULE_0__.format)(counter);\n        browarUpgradeCost += 1242353;\n        browarUpgradeLevel += 1;\n        autoClick += 2578;\n        upgradeCostFormat = (0,_format_js__WEBPACK_IMPORTED_MODULE_0__.format)(browarUpgradeCost);\n        extraMoneyPerClick += 3924 ;\n\n        document.getElementById('counter').innerHTML = returnedFormatedValue + ' $';\n        document.getElementById('browarLevel').innerHTML = browarUpgradeLevel;\n        document.getElementById('browarCost').innerHTML = upgradeCostFormat +' $';\n        document.getElementById('moneyPerSecond').innerHTML ='Na sekunde: ' + autoClickFormat +' $';\n    }\n    return counter;\n}\n\nfunction destylarniaUpgrade(counter, autoClick)\n{\n     if(counter>=destylarniaUpgradeCost)\n    {  \n        counter -= destylarniaUpgradeCost; \n        returnedFormatedValue = (0,_format_js__WEBPACK_IMPORTED_MODULE_0__.format)(counter);\n        destylarniaUpgradeCost += 3475675;\n        destylarniaUpgradeLevel += 1;\n        autoClick += 4256;\n        upgradeCostFormat = (0,_format_js__WEBPACK_IMPORTED_MODULE_0__.format)(destylarniaUpgradeCost);\n        extraMoneyPerClick += 5398;\n\n        document.getElementById('counter').innerHTML = returnedFormatedValue + ' $';\n        document.getElementById('destylarniaLevel').innerHTML = destylarniaUpgradeLevel;\n        document.getElementById('destylarniaCost').innerHTML = upgradeCostFormat +' $';\n        document.getElementById('moneyPerSecond').innerHTML ='Na sekunde: ' + autoClickFormat +' $';   \n    }\n    return counter;\n}\n\nfunction timer(counter, autoClick) \n{\n    counter += autoClick;\n    console.log(counter);\n    console.log(autoClick);\n    return counter;\n}\n\n//# sourceURL=webpack:///./src/Scripts/modules/upgrades.js?");

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"autoClick\": () => (/* binding */ autoClick),\n/* harmony export */   \"counter\": () => (/* binding */ counter)\n/* harmony export */ });\n/* harmony import */ var _Scripts_modules_onClickIncrement_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Scripts/modules/onClickIncrement.js */ \"./src/Scripts/modules/onClickIncrement.js\");\n/* harmony import */ var _Scripts_modules_upgrades_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Scripts/modules/upgrades.js */ \"./src/Scripts/modules/upgrades.js\");\n\n\n\n// guzik do klikania\nconst counterButtonElement = document.getElementById(\"counter-button\");\n\n// ulepszenia\nconst otwieraczUpgradeButton = document.getElementById(\"upgrade1\");\nconst mietekUpgradeButton = document.getElementById(\"upgrade2\");\nconst sebaUpgradeButton = document.getElementById(\"upgrade3\");\nconst grazynaUpgradeButton = document.getElementById(\"upgrade4\");\nconst gangUpgradeButton = document.getElementById(\"upgrade5\");\nconst monopolowyUpgradeButton = document.getElementById(\"upgrade6\");\nconst browarUpgradeButton = document.getElementById(\"upgrade7\");\nconst destylarniaUpgradeButton = document.getElementById(\"upgrade8\");\n\nlet counter = 0;\nlet autoClick = 0;\n\nif (counterButtonElement){\n    counterButtonElement.addEventListener('click', (event) => {\n        counter = (0,_Scripts_modules_onClickIncrement_js__WEBPACK_IMPORTED_MODULE_0__.onClickHandler)(counter);\n    });\n};\n\nif (otwieraczUpgradeButton) {\n    otwieraczUpgradeButton.addEventListener('click', (event) => {\n        counter = (0,_Scripts_modules_upgrades_js__WEBPACK_IMPORTED_MODULE_1__.otwieraczUpgrade)(counter, autoClick);\n    });\n}\n\nif (mietekUpgradeButton) {\n    mietekUpgradeButton.addEventListener('click', (event) => {\n        counter = (0,_Scripts_modules_upgrades_js__WEBPACK_IMPORTED_MODULE_1__.mietekUpgrade)(counter, autoClick);\n    });\n}\n\nif (sebaUpgradeButton) {\n    sebaUpgradeButton.addEventListener('click', (event) => {\n        counter = (0,_Scripts_modules_upgrades_js__WEBPACK_IMPORTED_MODULE_1__.sebaUpgrade)(counter, autoClick);\n    });\n}\n\nif (grazynaUpgradeButton) {\n    grazynaUpgradeButton.addEventListener('click', (event) => {\n        counter = (0,_Scripts_modules_upgrades_js__WEBPACK_IMPORTED_MODULE_1__.grazynaUpgrade)(counter, autoClick);\n    });\n}\n\nif (gangUpgradeButton) {\n    gangUpgradeButton.addEventListener('click', (event) => {\n        counter = (0,_Scripts_modules_upgrades_js__WEBPACK_IMPORTED_MODULE_1__.gangUpgrade)(counter, autoClick);\n    });\n}\n\nif (monopolowyUpgradeButton) {\n    monopolowyUpgradeButton.addEventListener('click', (event) => {\n        counter = (0,_Scripts_modules_upgrades_js__WEBPACK_IMPORTED_MODULE_1__.monopolowyUpgrade)(counter, autoClick);\n    });\n}\n\nif (browarUpgradeButton) {\n    browarUpgradeButton.addEventListener('click', (event) => {\n        counter = (0,_Scripts_modules_upgrades_js__WEBPACK_IMPORTED_MODULE_1__.browarUpgrade)(counter, autoClick);\n    });\n}\n\nif (destylarniaUpgradeButton) {\n    destylarniaUpgradeButton.addEventListener('click', (event) => {\n        counter = (0,_Scripts_modules_upgrades_js__WEBPACK_IMPORTED_MODULE_1__.destylarniaUpgrade)(counter, autoClick);\n    });\n}\n\nwindow.addEventListener('DOMContentLoaded', (event) => {\n    console.log('DOM fully loaded and parsed');\n});\n\ncounter = setInterval(() => {\n    (0,_Scripts_modules_upgrades_js__WEBPACK_IMPORTED_MODULE_1__.timer)(counter, autoClick);\n  }, 3000)\n\n//# sourceURL=webpack:///./src/main.js?");

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
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/main.js");
/******/ 	
/******/ })()
;