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

/***/ "./Layout/animation.js":
/*!*****************************!*\
  !*** ./Layout/animation.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _src_Scripts_Components_format_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../src/Scripts/Components/format.js */ \"./src/Scripts/Components/format.js\");\n/* harmony import */ var _main_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main.js */ \"./Layout/main.js\");\n\n\n\nconst clicker = document.querySelector('.clicker-img');\n\nclicker.addEventListener('click', function(e) {\n    const cos = _main_js__WEBPACK_IMPORTED_MODULE_1__.extraMoneyPerClick + 1;\n    let cosFormated = (0,_src_Scripts_Components_format_js__WEBPACK_IMPORTED_MODULE_0__.format)(cos);\n    \n    let x = e.clientX - e.target.offsetLeft;\n    let y = e.clientY - e.target.offsetTop;\n\n    let ripples = document.createElement('span');\n    ripples.classList.add('click');\n    ripples.style.left = x + 'px';\n    ripples.style.top = y + 'px';\n    this.appendChild(ripples);\n\n    let beer = document.createElement('span');\n    beer.classList.add('test-click');\n    ripples.appendChild(beer);\n    \n\n    let money = document.createElement('div');\n    money.classList.add('click');\n    money.style.left = x + 'px';\n    money.style.top = y + 'px';\n    this.appendChild(money);\n\n    let moneyClick = document.createElement('span');\n    moneyClick.classList.add('moneyClick');\n    money.appendChild(moneyClick);\n    \n\n    moneyClick.textContent = '+' + cosFormated;\n\n    setTimeout(() => {\n        money.remove()\n    },1500);\n\n    setTimeout(() => {\n        ripples.remove()\n    },1000);\n})\n\n//# sourceURL=webpack:///./Layout/animation.js?");

/***/ }),

/***/ "./Layout/main.js":
/*!************************!*\
  !*** ./Layout/main.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"autoClick\": () => (/* binding */ autoClick),\n/* harmony export */   \"counter\": () => (/* binding */ counter),\n/* harmony export */   \"extraMoneyPerClick\": () => (/* binding */ extraMoneyPerClick)\n/* harmony export */ });\n/* harmony import */ var _src_Scripts_modules_onClickIncrement_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../src/Scripts/modules/onClickIncrement.js */ \"./src/Scripts/modules/onClickIncrement.js\");\n/* harmony import */ var _src_Scripts_modules_upgrades_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src/Scripts/modules/upgrades.js */ \"./src/Scripts/modules/upgrades.js\");\n/* harmony import */ var _animation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./animation */ \"./Layout/animation.js\");\n/* harmony import */ var _src_Scripts_modules_catchbonusReworked_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/Scripts/modules/catchbonusReworked.js */ \"./src/Scripts/modules/catchbonusReworked.js\");\n/* harmony import */ var _src_Scripts_modules_mobileMenu_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../src/Scripts/modules/mobileMenu.js */ \"./src/Scripts/modules/mobileMenu.js\");\n// import { format } from \"../src/Scripts/Components/format.js\"\n// import { bonus } from \"../src/Scripts/modules/catchbonusReworked\";\n// import {} from '../src/Scripts/modules/menu.js';\n\n\n\n\n// import { login } from '../src/Scripts/modules/apiLogin.js';\n\n\n// guzik do klikania\nconst counterButtonElement = document.getElementById(\"counter-button\");\n\n// ulepszenia\nconst upgradeFromHtml = document.getElementsByClassName(\"menu__upgrades-list-item\");\n\nlet counter = 1000;\nlet autoClick = 0;\nlet extraMoneyPerClick = 0;\n\n// login();\n\nif (upgradeFromHtml.length) {\n    for (let name = 0; name < upgradeFromHtml.length; name++) {\n        const upgradeDiv = upgradeFromHtml[name];\n        const upgradeId = upgradeDiv;\n\n        upgradeDiv.addEventListener('click', (event) => {\n            const result = (0,_src_Scripts_modules_upgrades_js__WEBPACK_IMPORTED_MODULE_1__.upgrade)(counter, autoClick, extraMoneyPerClick, upgradeId.id, upgradeDiv);\n            \n            counter = result.counter;\n            autoClick = result.autoClick;\n            extraMoneyPerClick = result.extraMoneyPerClick;\n        });\n    }\n}\n\nif (counterButtonElement) {\n    counterButtonElement.addEventListener('click', (event) => {\n        counter = (0,_src_Scripts_modules_onClickIncrement_js__WEBPACK_IMPORTED_MODULE_0__.onClickHandler)(counter);\n    });\n};\n\n(0,_src_Scripts_modules_catchbonusReworked_js__WEBPACK_IMPORTED_MODULE_3__.catchbonusstart)();\n\ndocument.getElementById(\"wrap\").addEventListener('click', (event) => {\n    if (event.target && event.target.matches(\".catchbonus\")) {\n        let result = bonus(counter, autoClick);\n        console.log(result)\n        if (result.autoClick) {\n            autoClick = result.autoClick\n        }else if (result.counter) {                \n            counter = result.counter\n        }\n    } \n});\n\nwindow.addEventListener('DOMContentLoaded', (event) => { console.log('DOM fully loaded and parsed'); });\n\nsetInterval(() => {\n    counter = (0,_src_Scripts_modules_upgrades_js__WEBPACK_IMPORTED_MODULE_1__.timer)(counter, autoClick);\n    (0,_src_Scripts_modules_onClickIncrement_js__WEBPACK_IMPORTED_MODULE_0__.changeCounterElementText)(counter);\n}, 1000)\n\n_src_Scripts_modules_mobileMenu_js__WEBPACK_IMPORTED_MODULE_4__.mobileHome.addEventListener('click', (e) => {\n    ;(0,_src_Scripts_modules_mobileMenu_js__WEBPACK_IMPORTED_MODULE_4__.changeToHome)();\n});\n\n_src_Scripts_modules_mobileMenu_js__WEBPACK_IMPORTED_MODULE_4__.mobileUpgrade.addEventListener('click', (e) => {\n(0,_src_Scripts_modules_mobileMenu_js__WEBPACK_IMPORTED_MODULE_4__.changeToUpgrade)();\n});\n\n_src_Scripts_modules_mobileMenu_js__WEBPACK_IMPORTED_MODULE_4__.mobileAchievements.addEventListener('click', (e) => {\n    (0,_src_Scripts_modules_mobileMenu_js__WEBPACK_IMPORTED_MODULE_4__.changeToAchievements)();\n});\n\n_src_Scripts_modules_mobileMenu_js__WEBPACK_IMPORTED_MODULE_4__.mobileStats.addEventListener('click', (e) => {\n    (0,_src_Scripts_modules_mobileMenu_js__WEBPACK_IMPORTED_MODULE_4__.changeToStats)();\n});\n\n_src_Scripts_modules_mobileMenu_js__WEBPACK_IMPORTED_MODULE_4__.mobileHeaderBtn.addEventListener('click', (e) => {\n    (0,_src_Scripts_modules_mobileMenu_js__WEBPACK_IMPORTED_MODULE_4__.closeMenu)();\n});\n\n//# sourceURL=webpack:///./Layout/main.js?");

/***/ }),

/***/ "./src/Scripts/Components/format.js":
/*!******************************************!*\
  !*** ./src/Scripts/Components/format.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"format\": () => (/* binding */ format)\n/* harmony export */ });\nlet pow = Math.pow,\nfloor = Math.floor,\nabs = Math.abs,\nlog = Math.log;\n\nlet abbrev = [\"k\",\"m\",\"b\",\"t\",\"aa\",\"ab\",\"ac\",\"ad\",\"ae\",\"af\",\"ag\",\"ah\",\"ai\",\"aj\",\"ak\",\"al\",\"am\",\"an\",\"ao\",\"ap\",\"ar\",\"as\",\"at\",\"au\",\"aw\",\"az\",\"ba\",];\n\nfunction round(n, precision) {\n  let prec = Math.pow(10, precision + 1);\n  return Math.floor(n * prec) / prec;\n}\n\nfunction format(n) {\n  let base = floor(log(abs(n)) / log(1000));\n  let suffix = abbrev[Math.min(100, base - 1)];\n  base = abbrev.indexOf(suffix) + 1;\n  return suffix ? round(n / pow(1000, base), 2) + suffix : \"\" + n;\n}\n\n//# sourceURL=webpack:///./src/Scripts/Components/format.js?");

/***/ }),

/***/ "./src/Scripts/modules/catchbonusReworked.js":
/*!***************************************************!*\
  !*** ./src/Scripts/modules/catchbonusReworked.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"bonus\": () => (/* binding */ bonus),\n/* harmony export */   \"catchbonusstart\": () => (/* binding */ catchbonusstart)\n/* harmony export */ });\n/* harmony import */ var _Components_format_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Components/format.js */ \"./src/Scripts/Components/format.js\");\n/* harmony import */ var _modules_upgrades_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../modules/upgrades.js */ \"./src/Scripts/modules/upgrades.js\");\n\n\nlet catchbonusaddable = Boolean(true);\n\nfunction getRandomcoordinates() {\n    const mincoordinates = 135\n    const windowHeight = window.innerHeight - mincoordinates\n    const windowWidth = window.innerWidth - mincoordinates\n\n    return{\n        'Height' : Math.floor (Math.random()*(windowHeight - mincoordinates + 1)+ mincoordinates),\n        'Width' : Math.floor (Math.random()*(windowWidth - mincoordinates + 1)+ mincoordinates),\n    } \n  }\n  function makediv(coordinates){ \n    if(catchbonusaddable == true ){\n        const cnt = document.querySelector(\".wrap\");\n        const catchbonus = document.createElement(\"div\");\n        catchbonus.id=\"catchbonus\";\n        catchbonus.classList.add(\"catchbonus\")\n        cnt.appendChild(catchbonus);\n        catchbonus.style.top = coordinates.Height + 'px';\n        catchbonus.style.left = coordinates.Width + 'px';\n        catchbonusaddable = false\n        catchbonus.addEventListener('click', () => {\n            removebonus(catchbonus);\n            catchbonusaddable = true\n        })\n        setTimeout(() => {\n                removebonus(catchbonus);\n                catchbonusaddable = true\n             }, 5000);\n    }\n  }\n  function catchbonusstart(){\n    console.log(counter)\n  setInterval(() => {\n    let coordinates = getRandomcoordinates();\n    makediv(coordinates);\n    catchbonusaddable = false\n\n  }, 10000)\n}\n  function removebonus(catchbonus){\n    catchbonus.remove();\n    catchbonusaddable = true\n    \n    }\n    const bonusList = [{\n        type: \"counterValue\"\n      }, {\n        type: \"autoClick\",\n        time: 5000\n      }]\n      function bonus(counter, autoClick, e) {\n        const max = 1;\n        const min = 0 \n        let randombonus = Math.floor (Math.random()*(max - min + 1)+ min);\n        const bonus = bonusList[randombonus];\n      console.log(bonus.type);\n        if (bonus.type == 'counterValue')  {\n            console.log(counter)\n          counter = counter + Math.floor(counter/5); \n          console.log(counter)\n          return { counter };\n      \n         }else {     \n          autoClick = autoClick + autoClick  \n          let autoClickFormat = (0,_Components_format_js__WEBPACK_IMPORTED_MODULE_0__.format)(autoClick)\n           document.getElementById('moneyPerSecond').innerHTML ='Na sekunde: ' + autoClickFormat +' $';\n\n            return { autoClick };\n        }\n      }\n\n//# sourceURL=webpack:///./src/Scripts/modules/catchbonusReworked.js?");

/***/ }),

/***/ "./src/Scripts/modules/mobileMenu.js":
/*!*******************************************!*\
  !*** ./src/Scripts/modules/mobileMenu.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"changeToAchievements\": () => (/* binding */ changeToAchievements),\n/* harmony export */   \"changeToHome\": () => (/* binding */ changeToHome),\n/* harmony export */   \"changeToStats\": () => (/* binding */ changeToStats),\n/* harmony export */   \"changeToUpgrade\": () => (/* binding */ changeToUpgrade),\n/* harmony export */   \"closeMenu\": () => (/* binding */ closeMenu),\n/* harmony export */   \"menu\": () => (/* binding */ menu),\n/* harmony export */   \"mobileAchievements\": () => (/* binding */ mobileAchievements),\n/* harmony export */   \"mobileHeader\": () => (/* binding */ mobileHeader),\n/* harmony export */   \"mobileHeaderBtn\": () => (/* binding */ mobileHeaderBtn),\n/* harmony export */   \"mobileHeaderH2\": () => (/* binding */ mobileHeaderH2),\n/* harmony export */   \"mobileHome\": () => (/* binding */ mobileHome),\n/* harmony export */   \"mobileStats\": () => (/* binding */ mobileStats),\n/* harmony export */   \"mobileUpgrade\": () => (/* binding */ mobileUpgrade)\n/* harmony export */ });\nconst navigation__list = document.querySelectorAll('.navigation__list');\n\n        function activeLink() {\n            navigation__list.forEach((item) => item.classList.remove('active'));\n            this.classList.add('active');\n        }\n        navigation__list.forEach((item) => item.addEventListener('click', activeLink));\n\n\nconst mobileHome = document.querySelector('.mobileHome');\nconst mobileUpgrade = document.querySelector('.mobileUpgrade');\nconst mobileAchievements = document.querySelector('.mobileAchievement');\nconst mobileStats = document.querySelector('.mobileStats');\nconst menu = document.querySelector('.menu');\nconst mobileHeader = document.querySelector('.mobile_header');\nconst mobileHeaderBtn = document.querySelector('.mobile_header-btn');\nconst mobileHeaderH2 = document.querySelector('.mobile_header-h2');\n\n\n\nconst menuDivUpgrades = document.querySelector('.menu-div-upgrades');\nconst menuDivAchievements = document.querySelector('.menu-div-achievements');\nconst menuDivStats = document.querySelector('.menu-div-stats');\n\n\nfunction changeToHome (){\n    menu.classList.remove('mobileMenu');\n}\n\nfunction changeToUpgrade(){\n    menuDivUpgrades.classList.add('menu__div--active');\n    menuDivAchievements.classList.remove('menu__div--active');\n    menuDivStats.classList.remove('menu__div--active');\n\n    menu.classList.add('mobileMenu');\n}\n\nfunction changeToAchievements(){\n    menuDivAchievements.classList.add('menu__div--active');\n    menuDivUpgrades.classList.remove('menu__div--active');\n    menuDivStats.classList.remove('menu__div--active');\n\n    menu.classList.add('mobileMenu');\n}\n\nfunction changeToStats(){\n    menuDivStats.classList.add('menu__div--active');\n    menuDivAchievements.classList.remove('menu__div--active');\n    menuDivUpgrades.classList.remove('menu__div--active');\n\n    menu.classList.add('mobileMenu');\n}\n\nfunction closeMenu(){\n    menu.classList.remove('mobileMenu');\n    mobileHome.classList.add('active');\n    mobileAchievements.classList.remove('active');\n    mobileUpgrade.classList.remove('active');\n    mobileStats.classList.remove('active');\n}\n\n\n// mobileHome.addEventListener('click', function(){\n//     menu.classList.remove('mobileMenu');\n// })\n\n// mobileUpgrade.addEventListener('click', function(){\n//     // btnUpgrades.classList.add('active--menu-item');\n//     // btnAchievements.classList.remove('active--menu-item');\n//     // btnStats.classList.remove('active--menu-item');\n\n//     menuDivUpgrades.classList.add('menu__div--active');\n//     menuDivAchievements.classList.remove('menu__div--active');\n//     menuDivStats.classList.remove('menu__div--active');\n\n//     menu.classList.add('mobileMenu');\n    \n// })\n\n// mobileAchievements.addEventListener('click', function(){\n//     // btnAchievements.classList.add('active--menu-item');\n//     // btnUpgrades.classList.remove('active--menu-item');\n//     // btnStats.classList.remove('active--menu-item');\n\n//     menuDivAchievements.classList.add('menu__div--active');\n//     menuDivUpgrades.classList.remove('menu__div--active');\n//     menuDivStats.classList.remove('menu__div--active');\n\n//     menu.classList.add('mobileMenu');\n// })\n\n// mobileStats.addEventListener('click', function(){\n//     // btnStats.classList.add('active--menu-item');\n//     // btnAchievements.classList.remove('active--menu-item');\n//     // btnUpgrades.classList.remove('active--menu-item');\n\n//     menuDivStats.classList.add('menu__div--active');\n//     menuDivAchievements.classList.remove('menu__div--active');\n//     menuDivUpgrades.classList.remove('menu__div--active');\n\n//     menu.classList.add('mobileMenu');\n// })\n\n// mobileHeaderBtn.addEventListener('click', function(){\n//     menu.classList.remove('mobileMenu');\n//     mobileHome.classList.add('active');\n//     mobileAchievements.classList.remove('active');\n//     mobileUpgrade.classList.remove('active');\n//     mobileStats.classList.remove('active');\n// })\n\n\n\n//# sourceURL=webpack:///./src/Scripts/modules/mobileMenu.js?");

/***/ }),

/***/ "./src/Scripts/modules/onClickIncrement.js":
/*!*************************************************!*\
  !*** ./src/Scripts/modules/onClickIncrement.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"changeCounterElementText\": () => (/* binding */ changeCounterElementText),\n/* harmony export */   \"onClickHandler\": () => (/* binding */ onClickHandler)\n/* harmony export */ });\n/* harmony import */ var _Components_format_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Components/format.js */ \"./src/Scripts/Components/format.js\");\n/* harmony import */ var _Layout_main_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../Layout/main.js */ \"./Layout/main.js\");\n\n\n\nconst mobileHeaderH2 = document.querySelector('.mobile_header-h2');\n\n\nconst counterElement = document.getElementById(\"counter\");\n\nlet returnedFormatedValue = counter;\n\nfunction changeCounterElementText(value){\n  returnedFormatedValue = (0,_Components_format_js__WEBPACK_IMPORTED_MODULE_0__.format)(value);\n\n  counterElement.textContent = returnedFormatedValue + \" $\";\n\n  mobileHeaderH2.textContent = returnedFormatedValue + ' $';\n}\n\nfunction onClickHandler(counter) {\n  counter += _Layout_main_js__WEBPACK_IMPORTED_MODULE_1__.extraMoneyPerClick;\n  counter++;\n  changeCounterElementText(counter);\n\n  return counter;  \n}\n\n//# sourceURL=webpack:///./src/Scripts/modules/onClickIncrement.js?");

/***/ }),

/***/ "./src/Scripts/modules/upgrades.js":
/*!*****************************************!*\
  !*** ./src/Scripts/modules/upgrades.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"autoClickFormat\": () => (/* binding */ autoClickFormat),\n/* harmony export */   \"timer\": () => (/* binding */ timer),\n/* harmony export */   \"upgrade\": () => (/* binding */ upgrade)\n/* harmony export */ });\n/* harmony import */ var _Components_format_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Components/format.js */ \"./src/Scripts/Components/format.js\");\n\n\nlet upgradeCostFormat = 0;\nlet returnedFormatedValue = 0;\nlet autoClickFormat;\n\nconst updateList = {\n    'otwieracz': {\n        cost: 40,\n        level: 1,\n        extraMoneyPerClick: 1\n    },\n    'mietek': {\n        cost: 150,\n        level: 1,\n        autoClickValue: 15,\n    },\n    'seba': {\n        cost: 700,\n        level: 1,\n        autoClickValue: 100,\n        extraMoneyPerClick: 9\n    },\n    'grazyna': {\n        cost: 3000,\n        level: 1,\n        autoClickValue: 223,\n        extraMoneyPerClick: 150\n    },\n    'gang': {\n        cost: 20000,\n        level: 1,\n        autoClickValue: 641,\n        extraMoneyPerClick: 300\n    },\n    'monopolowy': {\n        cost: 150000,\n        level: 1,\n        autoClickValue: 1234,\n        extraMoneyPerClick: 900\n    },\n    'browar': {\n        cost: 1250000,\n        level: 1,\n        extraMoneyPerClick: 4000\n    },\n    'destylarnia': {\n        cost: 4000000,\n        level: 1,\n        autoClickValue: 4300\n    },\n    'current': {\n        currentAutoClickValue: 0,\n        currentExtraMoneyPerClick: 0\n    },\n}\n\nfunction upgrade(counter, autoClick, extraMoneyPerClick, upgradeName, upgradeDiv) {\n    const upgrade = updateList[upgradeName];\n    if (counter >= upgrade.currentCost) {\n        counter -= upgrade.currentCost;\n\n        upgrade.currentCost += upgrade.cost;\n        upgrade.level++;\n        updateList.current.currentAutoClickValue += upgrade.autoClickValue;\n        updateList.current.currentExtraMoneyPerClick += upgrade.extraMoneyPerClick;\n\n        autoClick = updateList.current.currentAutoClickValue;  \n        extraMoneyPerClick = updateList.current.currentExtraMoneyPerClick;\n\n        returnedFormatedValue = (0,_Components_format_js__WEBPACK_IMPORTED_MODULE_0__.format)(counter);\n        upgradeCostFormat = (0,_Components_format_js__WEBPACK_IMPORTED_MODULE_0__.format)(upgrade.currentCost);\n        autoClickFormat = (0,_Components_format_js__WEBPACK_IMPORTED_MODULE_0__.format)(autoClick);\n             \n        document.getElementById('counter').innerHTML = returnedFormatedValue + ' $';\n        document.getElementById('moneyPerSecond').innerHTML = 'Na sekunde: ' + autoClick + ' $';\n\n        upgradeDiv.querySelector('.upgradeLevel').innerHTML = upgrade.level;\n        upgradeDiv.querySelector('.upgradeCost').innerHTML = upgradeCostFormat + ' $';\n    }\n\n    return { counter, autoClick, extraMoneyPerClick };\n}\n\nconst timer = (counter, autoClick) => counter + autoClick;\n\nfunction showContent(alertmessage, text, icon) {\n    const temp = document.getElementsByTagName(\"template\")[0];\n    const clon = temp.content.cloneNode(true);\n    const poptext = document.getElementById('PopUpText');\n\n    clon.querySelector(\"#achievementPopUp .title\").textContent = text;\n    clon.querySelector(\"#achievementPopUp .PUT\").textContent = alertmessage;    clon.querySelector(\"#achievementPopUp .icon\").src = ('../Images/' + icon);\n    document.body.appendChild(clon);\n\n    setTimeout(() => {\n        deleteContent(clon)\n    }, 5000);\n\n    const closePopUpButtons = document.querySelectorAll ('[data-close-button]')\n\n    closePopUpButtons.forEach(button => {\n        button.addEventListener('click', () => {\n            const close = button.closest('.achievement')\n            // console.log(close)\n            deleteContent(clon)\n        })         \n    })\n}\nfunction deleteContent(clon) {\n    document.getElementById(\"achievementPopUp\").remove()\n}; \n \nwindow.addEventListener('DOMContentLoaded', function(){\n    //do showContent wpisuj co chcesz zeby alert oddal, pierwsze to text, drugie nazwa pliku z folderu images (NIE DAWAJ PELNEJ SCIEZKI TYLKO NP. KAPSEL.PNG)\n    showContent('Odblokowano osiągnięcie!', 'Co dwa otwieracze to nie jeden!', 'dualies.png');\n});\n\n//# sourceURL=webpack:///./src/Scripts/modules/upgrades.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./Layout/main.js");
/******/ 	
/******/ })()
;