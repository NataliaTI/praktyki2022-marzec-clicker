/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./Layout/animation.js":
/*!*****************************!*\
  !*** ./Layout/animation.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _src_Scripts_Components_format_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../src/Scripts/Components/format.js */ \"./src/Scripts/Components/format.js\");\n/* harmony import */ var _main_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main.js */ \"./Layout/main.js\");\n\r\n\r\n\r\nconst clicker = document.querySelector('.clicker-img');\r\n\r\nclicker.addEventListener('click', function(e) {\r\n    const cos = _main_js__WEBPACK_IMPORTED_MODULE_1__.extraMoneyPerClick + 1;\r\n    let cosFormated = (0,_src_Scripts_Components_format_js__WEBPACK_IMPORTED_MODULE_0__.format)(cos);\r\n    \r\n    let x = e.clientX - e.target.offsetLeft;\r\n    let y = e.clientY - e.target.offsetTop;\r\n\r\n    let ripples = document.createElement('span');\r\n    ripples.classList.add('click');\r\n    ripples.style.left = x + 'px';\r\n    ripples.style.top = y + 'px';\r\n    this.appendChild(ripples);\r\n\r\n    let beer = document.createElement('span');\r\n    beer.classList.add('test-click');\r\n    ripples.appendChild(beer);\r\n    \r\n\r\n    let money = document.createElement('div');\r\n    money.classList.add('click');\r\n    money.style.left = x + 'px';\r\n    money.style.top = y + 'px';\r\n    this.appendChild(money);\r\n\r\n    let moneyClick = document.createElement('span');\r\n    moneyClick.classList.add('moneyClick');\r\n    money.appendChild(moneyClick);\r\n    \r\n\r\n    moneyClick.textContent = '+' + cosFormated;\r\n\r\n    setTimeout(() => {\r\n        money.remove()\r\n    },1500);\r\n\r\n    setTimeout(() => {\r\n        ripples.remove()\r\n    },1000);\r\n})\n\n//# sourceURL=webpack:///./Layout/animation.js?");

/***/ }),

/***/ "./Layout/main.js":
/*!************************!*\
  !*** ./Layout/main.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"autoClick\": () => (/* binding */ autoClick),\n/* harmony export */   \"counter\": () => (/* binding */ counter),\n/* harmony export */   \"extraMoneyPerClick\": () => (/* binding */ extraMoneyPerClick)\n/* harmony export */ });\n/* harmony import */ var _src_Scripts_Components_format_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../src/Scripts/Components/format.js */ \"./src/Scripts/Components/format.js\");\n/* harmony import */ var _src_Scripts_modules_catchbonusReworked__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src/Scripts/modules/catchbonusReworked.js */ \"./src/Scripts/modules/catchbonusReworked.js\");\n/* harmony import */ var _src_Scripts_modules_menu_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/Scripts/modules/menu.js */ \"./src/Scripts/modules/menu.js\");\n/* harmony import */ var _src_Scripts_modules_menu_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_src_Scripts_modules_menu_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _src_Scripts_modules_onClickIncrement_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/Scripts/modules/onClickIncrement.js */ \"./src/Scripts/modules/onClickIncrement.js\");\n/* harmony import */ var _src_Scripts_modules_upgrades_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../src/Scripts/modules/upgrades.js */ \"./src/Scripts/modules/upgrades.js\");\n/* harmony import */ var _animation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./animation */ \"./Layout/animation.js\");\n/* harmony import */ var _src_Scripts_modules_apiLogin_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../src/Scripts/modules/apiLogin.js */ \"./src/Scripts/modules/apiLogin.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n// guzik do klikania\r\nconst counterButtonElement = document.getElementById(\"counter-button\");\r\n\r\n// ulepszenia\r\nconst upgradeFromHtml = document.getElementsByClassName(\"menu__upgrades-list-item\");\r\n\r\nlet counter = 0;\r\nlet autoClick = 0;\r\nlet extraMoneyPerClick = 0;\r\n\r\n(0,_src_Scripts_modules_apiLogin_js__WEBPACK_IMPORTED_MODULE_6__.login)();\r\n\r\nif (upgradeFromHtml.length) {\r\n    for (let name = 0; name < upgradeFromHtml.length; name++) {\r\n        const upgradeDiv = upgradeFromHtml[name];\r\n        let upgradeId = upgradeDiv;\r\n        upgradeId.id;\r\n\r\n        upgradeDiv.addEventListener('click', (event) => {\r\n            const result = (0,_src_Scripts_modules_upgrades_js__WEBPACK_IMPORTED_MODULE_4__.upgrade)(counter, autoClick, extraMoneyPerClick, upgradeId.id, upgradeDiv);\r\n            \r\n            counter = result.counter;\r\n            autoClick = result.autoClick;\r\n            extraMoneyPerClick = result.extraMoneyPerClick;\r\n        });\r\n    }\r\n}\r\n\r\nif (counterButtonElement) {\r\n    counterButtonElement.addEventListener('click', (event) => {\r\n        counter = (0,_src_Scripts_modules_onClickIncrement_js__WEBPACK_IMPORTED_MODULE_3__.onClickHandler)(counter);\r\n    });\r\n};\r\n\r\n(0,_src_Scripts_modules_catchbonusReworked__WEBPACK_IMPORTED_MODULE_1__.catchbonusstart)();\r\n\r\ndocument.getElementById(\"wrap\").addEventListener('click', (event) => {\r\n    if (event.target && event.target.matches(\".catchbonus\")) {\r\n        let result = (0,_src_Scripts_modules_catchbonusReworked__WEBPACK_IMPORTED_MODULE_1__.bonus)(counter, autoClick);\r\n        console.log(result)\r\n        if (result.autoClick) {\r\n            const oldAutoClick = autoClick\r\n\r\n            setTimeout(() => {\r\n                autoClick = autoClick - oldAutoClick;\r\n                let autoClickFormat = (0,_src_Scripts_Components_format_js__WEBPACK_IMPORTED_MODULE_0__.format)(autoClick)\r\n                //autoClick = autoClickFormat\r\n                document.getElementById('moneyPerSecond').innerHTML ='Na sekunde: ' + autoClickFormat +' $';\r\n            }, 5000);\r\n            autoClick = result.autoClick\r\n        }else if (result.counter) {                \r\n            counter = result.counter\r\n        }\r\n    } \r\n});\r\n\r\nwindow.addEventListener('DOMContentLoaded', (event) => { console.log('DOM fully loaded and parsed'); });\r\n\r\nsetInterval(() => {\r\n    counter = (0,_src_Scripts_modules_upgrades_js__WEBPACK_IMPORTED_MODULE_4__.timer)(counter, autoClick);\r\n    // changeCounterElementText(counter)\r\n}, 1000)\r\nsetInterval(() => {\r\n    ;(0,_src_Scripts_modules_onClickIncrement_js__WEBPACK_IMPORTED_MODULE_3__.changeCounterElementText)(counter)\r\n}, 1)\n\n//# sourceURL=webpack:///./Layout/main.js?");

/***/ }),

/***/ "./src/Scripts/Components/format.js":
/*!******************************************!*\
  !*** ./src/Scripts/Components/format.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"format\": () => (/* binding */ format)\n/* harmony export */ });\nlet pow = Math.pow,\r\nfloor = Math.floor,\r\nabs = Math.abs,\r\nlog = Math.log;\r\n\r\nlet abbrev = [\"k\",\"m\",\"b\",\"t\",\"aa\",\"ab\",\"ac\",\"ad\",\"ae\",\"af\",\"ag\",\"ah\",\"ai\",\"aj\",\"ak\",\"al\",\"am\",\"an\",\"ao\",\"ap\",\"ar\",\"as\",\"at\",\"au\",\"aw\",\"az\",\"ba\",];\r\n\r\nfunction round(n, precision) {\r\n  let prec = Math.pow(10, precision + 1);\r\n  return Math.floor(n * prec) / prec;\r\n}\r\n\r\nfunction format(n) {\r\n  let base = floor(log(abs(n)) / log(1000));\r\n  let suffix = abbrev[Math.min(100, base - 1)];\r\n  base = abbrev.indexOf(suffix) + 1;\r\n  return suffix ? round(n / pow(1000, base), 2) + suffix : \"\" + n;\r\n}\n\n//# sourceURL=webpack:///./src/Scripts/Components/format.js?");

/***/ }),

/***/ "./src/Scripts/modules/apiLogin.js":
/*!*****************************************!*\
  !*** ./src/Scripts/modules/apiLogin.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"login\": () => (/* binding */ login)\n/* harmony export */ });\nfunction login(params) {\r\n    if(!localStorage.getItem(\"Token\")){\r\n        fetch('http://praktyki-trol-clicker-api.herokuapp.com/login').then(response => response.json())\r\n        .then(data => data.Data.Token).then(token => {\r\n            localStorage.setItem(\"Token\", token);\r\n            //let tok = localStorage.getItem(\"Token\");           \r\n            //console.log(tok);\r\n        });\r\n    }else{\r\n        //console.log(\"test\");    \r\n    }\r\n}\r\n//TEST\r\n/*\r\nfetch('https://api.github.com/users/NataliaTi/repos').then(\r\n    resp => resp.json() // this returns a promise\r\n    ).then(repos => {\r\n        for (const repo of repos) {\r\n            document.write(repo.name);\r\n        }\r\n    }).catch(ex => {\r\n        document.write(ex);\r\n    })\r\n*/\r\n\n\n//# sourceURL=webpack:///./src/Scripts/modules/apiLogin.js?");

/***/ }),

/***/ "./src/Scripts/modules/catchbonusReworked.js":
/*!***************************************************!*\
  !*** ./src/Scripts/modules/catchbonusReworked.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"bonus\": () => (/* binding */ bonus),\n/* harmony export */   \"catchbonusstart\": () => (/* binding */ catchbonusstart)\n/* harmony export */ });\n/* harmony import */ var _Components_format_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Components/format.js */ \"./src/Scripts/Components/format.js\");\n\r\n//import {autoClickFormat} from '../modules/upgrades.js';\r\nlet catchbonusaddable = Boolean(true);\r\n\r\nfunction getRandomcoordinates() {\r\n    const mincoordinates = 135\r\n    const windowHeight = window.innerHeight - mincoordinates\r\n    const windowWidth = window.innerWidth - mincoordinates\r\n\r\n    return{\r\n        'Height' : Math.floor (Math.random()*(windowHeight - mincoordinates + 1)+ mincoordinates),\r\n        'Width' : Math.floor (Math.random()*(windowWidth - mincoordinates + 1)+ mincoordinates),\r\n    } \r\n  }\r\n  function makediv(coordinates){ \r\n    if(catchbonusaddable == true ){\r\n        const cnt = document.querySelector(\".wrap\");\r\n        const catchbonus = document.createElement(\"div\");\r\n        catchbonus.id=\"catchbonus\";\r\n        catchbonus.classList.add(\"catchbonus\")\r\n        cnt.appendChild(catchbonus);\r\n        catchbonus.style.top = coordinates.Height + 'px';\r\n        catchbonus.style.left = coordinates.Width + 'px';\r\n        catchbonusaddable = false\r\n        catchbonus.addEventListener('click', () => {\r\n            removebonus(catchbonus);\r\n            catchbonusaddable = true\r\n        })\r\n        setTimeout(() => {\r\n                removebonus(catchbonus);\r\n                catchbonusaddable = true\r\n             }, 5000);\r\n    }\r\n  }\r\n  function catchbonusstart(){\r\n    console.log(counter)\r\n  setInterval(() => {\r\n    let coordinates = getRandomcoordinates();\r\n    makediv(coordinates);\r\n    catchbonusaddable = false\r\n\r\n  }, 10000)\r\n}\r\n  function removebonus(catchbonus){\r\n    catchbonus.remove();\r\n    catchbonusaddable = true\r\n    \r\n    }\r\n    const bonusList = [{\r\n        type: \"counterValue\"\r\n      }, {\r\n        type: \"autoClick\",\r\n        time: 5000\r\n      }]\r\n      function bonus(counter, autoClick, e) {\r\n        const max = 1;\r\n        const min = 0 \r\n        let randombonus = Math.floor (Math.random()*(max - min + 1)+ min);\r\n        const bonus = bonusList[randombonus];\r\n      console.log(bonus.type);\r\n        if (bonus.type == 'counterValue')  {\r\n            console.log(counter)\r\n          counter = counter + Math.floor(counter/5); \r\n          console.log(counter)\r\n          return { counter };\r\n      \r\n         }else {     \r\n          autoClick = autoClick + autoClick  \r\n          let autoClickFormat = (0,_Components_format_js__WEBPACK_IMPORTED_MODULE_0__.format)(autoClick)\r\n           document.getElementById('moneyPerSecond').innerHTML ='Na sekunde: ' + autoClickFormat +' $';\r\n\r\n            return { autoClick };\r\n        }\r\n      }\r\n    \r\n  \n\n//# sourceURL=webpack:///./src/Scripts/modules/catchbonusReworked.js?");

/***/ }),

/***/ "./src/Scripts/modules/menu.js":
/*!*************************************!*\
  !*** ./src/Scripts/modules/menu.js ***!
  \*************************************/
/***/ (() => {

eval("const btnUpgrades = document.querySelector(\".upgrades\");\r\nconst btnAchievements = document.querySelector(\".achievements\");\r\nconst btnStats = document.querySelector(\".stats\");\r\nconst menuDivUpgrades = document.querySelector('.menu-div-upgrades');\r\nconst menuDivAchievements = document.querySelector('.menu-div-achievements');\r\nconst menuDivStats = document.querySelector('.menu-div-stats');\r\n\r\nbtnUpgrades.addEventListener(\"click\", function(){\r\n    btnUpgrades.classList.add('active--menu-item');\r\n    btnAchievements.classList.remove('active--menu-item');\r\n    btnStats.classList.remove('active--menu-item');\r\n\r\n    menuDivUpgrades.classList.add('menu__div--active');\r\n    menuDivAchievements.classList.remove('menu__div--active');\r\n    menuDivStats.classList.remove('menu__div--active');\r\n})\r\n\r\nbtnAchievements.addEventListener(\"click\", function(){\r\n    btnAchievements.classList.add('active--menu-item');\r\n    btnUpgrades.classList.remove('active--menu-item');\r\n    btnStats.classList.remove('active--menu-item');\r\n\r\n    menuDivAchievements.classList.add('menu__div--active');\r\n    menuDivUpgrades.classList.remove('menu__div--active');\r\n    menuDivStats.classList.remove('menu__div--active');\r\n\r\n})\r\n\r\nbtnStats.addEventListener(\"click\", function(){\r\n    btnStats.classList.add('active--menu-item');\r\n    btnAchievements.classList.remove('active--menu-item');\r\n    btnUpgrades.classList.remove('active--menu-item');\r\n\r\n    menuDivStats.classList.add('menu__div--active');\r\n    menuDivAchievements.classList.remove('menu__div--active');\r\n    menuDivUpgrades.classList.remove('menu__div--active');\r\n})\n\n//# sourceURL=webpack:///./src/Scripts/modules/menu.js?");

/***/ }),

/***/ "./src/Scripts/modules/onClickIncrement.js":
/*!*************************************************!*\
  !*** ./src/Scripts/modules/onClickIncrement.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"changeCounterElementText\": () => (/* binding */ changeCounterElementText),\n/* harmony export */   \"onClickHandler\": () => (/* binding */ onClickHandler)\n/* harmony export */ });\n/* harmony import */ var _Components_format_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Components/format.js */ \"./src/Scripts/Components/format.js\");\n/* harmony import */ var _Layout_main_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../Layout/main.js */ \"./Layout/main.js\");\n\r\n\r\n\r\nconst counterElement = document.getElementById(\"counter\");\r\n\r\nlet returnedFormatedValue = counter;\r\n\r\nfunction changeCounterElementText(value){\r\n  returnedFormatedValue = (0,_Components_format_js__WEBPACK_IMPORTED_MODULE_0__.format)(value);\r\n\r\n  counterElement.textContent = returnedFormatedValue + \" $\";\r\n\r\n  mobileHeaderH2.textContent = returnedFormatedValue + ' $';\r\n}\r\n\r\nfunction onClickHandler(counter) {\r\n  counter += _Layout_main_js__WEBPACK_IMPORTED_MODULE_1__.extraMoneyPerClick;\r\n  counter++;\r\n  changeCounterElementText(counter);\r\n  return counter;\r\n  \r\n}\r\n\r\n\n\n//# sourceURL=webpack:///./src/Scripts/modules/onClickIncrement.js?");

/***/ }),

/***/ "./src/Scripts/modules/upgrades.js":
/*!*****************************************!*\
  !*** ./src/Scripts/modules/upgrades.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"autoClickFormat\": () => (/* binding */ autoClickFormat),\n/* harmony export */   \"timer\": () => (/* binding */ timer),\n/* harmony export */   \"updateList\": () => (/* binding */ updateList),\n/* harmony export */   \"upgrade\": () => (/* binding */ upgrade)\n/* harmony export */ });\n/* harmony import */ var _Components_format_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Components/format.js */ \"./src/Scripts/Components/format.js\");\n\r\n\r\nlet upgradeCostFormat = 0;\r\nlet returnedFormatedValue = 0;\r\nlet autoClickFormat;\r\n\r\nconst updateList = {\r\n    'otwieracz': {\r\n        currentCost: 10,\r\n        cost: 40,\r\n        level: 0,\r\n        autoClickValue: 0,\r\n        extraMoneyPerClick: 1\r\n    },\r\n    'mietek': {\r\n        currentCost: 150,\r\n        cost: 150,\r\n        level: 0,\r\n        autoClickValue: 15,\r\n        extraMoneyPerClick: 0\r\n    },\r\n    'seba': {\r\n        currentCost: 1200,\r\n        cost: 700,\r\n        level: 0,\r\n        autoClickValue: 100,\r\n        extraMoneyPerClick: 10\r\n    },\r\n    'grazyna': {\r\n        currentCost: 5000,\r\n        cost: 3000,\r\n        level: 0,\r\n        autoClickValue: 223,\r\n        extraMoneyPerClick: 150\r\n    },\r\n    'gang': {\r\n        currentCost: 30000,\r\n        cost: 20000,\r\n        level: 0,\r\n        autoClickValue: 640,\r\n        extraMoneyPerClick: 300\r\n    },\r\n    'monopolowy': {\r\n        currentCost: 115000,\r\n        cost: 150000,\r\n        level: 0,\r\n        autoClickValue: 1230,\r\n        extraMoneyPerClick: 900\r\n    },\r\n    'browar': {\r\n        currentCost: 750000,\r\n        cost: 1250000,\r\n        level: 0,\r\n        autoClickValue: 0,\r\n        extraMoneyPerClick: 4000\r\n    },\r\n    'destylarnia': {\r\n        currentCost: 4000000,\r\n        cost: 4000000,\r\n        level: 0,\r\n        autoClickValue: 4300,\r\n        extraMoneyPerClick: 0  \r\n    },\r\n    'current': {\r\n        currentAutoClickValue: 0,\r\n        currentExtraMoneyPerClick: 0\r\n    },\r\n}\r\n\r\nfunction upgrade(counter, autoClick, extraMoneyPerClick, upgradeName, upgradeDiv) {\r\n    const upgrade = updateList[upgradeName];\r\n    if (counter >= upgrade.currentCost) {\r\n        counter -= upgrade.currentCost;\r\n\r\n        upgrade.currentCost += upgrade.cost;\r\n        upgrade.level++;\r\n        updateList.current.currentAutoClickValue += upgrade.autoClickValue;\r\n        updateList.current.currentExtraMoneyPerClick += upgrade.extraMoneyPerClick;\r\n\r\n        autoClick = updateList.current.currentAutoClickValue;  \r\n        extraMoneyPerClick = updateList.current.currentExtraMoneyPerClick;\r\n\r\n        returnedFormatedValue = (0,_Components_format_js__WEBPACK_IMPORTED_MODULE_0__.format)(counter);\r\n        upgradeCostFormat = (0,_Components_format_js__WEBPACK_IMPORTED_MODULE_0__.format)(upgrade.currentCost);\r\n        autoClickFormat = (0,_Components_format_js__WEBPACK_IMPORTED_MODULE_0__.format)(autoClick);\r\n             \r\n        document.getElementById('counter').innerHTML = returnedFormatedValue + ' $';\r\n        document.getElementById('moneyPerSecond').innerHTML = 'Na sekunde: ' + autoClick + ' $';\r\n\r\n        upgradeDiv.querySelector('.upgradeLevel').innerHTML = upgrade.level;\r\n        upgradeDiv.querySelector('.upgradeCost').innerHTML = upgradeCostFormat + ' $';\r\n    }\r\n\r\n    return { counter, autoClick, extraMoneyPerClick };\r\n}\r\n\r\nconst timer = (counter, autoClick) => counter + autoClick;\r\n\r\n/* achievementPopUp();\r\nfunction achievementPopUp()  {\r\n    console.log(document.getElementById('PopUpText'));\r\n    document.getElementById('PopUpText').innerHTML = \"Co dwa otwieracze to nie jeden\";\r\n    document.getElementById(\"achievementPopUp\").src = \"dualies.png\";\r\n    const elem = document.getElementById('achievementPopUp');\r\n} */\r\n\r\n//showContent();\r\n//if achievement == true {\r\n\r\nfunction showContent(alertmessage, text, icon) {\r\n\r\n    const temp = document.getElementsByTagName(\"template\")[0];\r\n    const clon = temp.content.cloneNode(true);\r\n    const poptext = document.getElementById('PopUpText');\r\n\r\n    clon.querySelector(\"#achievementPopUp .title\").textContent = text;\r\n    clon.querySelector(\"#achievementPopUp .PUT\").textContent = alertmessage,\r\n    console.log(clon.querySelector(\"#achievementPopUp .title\"));\r\n    clon.querySelector(\"#achievementPopUp .icon\").src = ('../Images/' + icon);\r\n    document.body.appendChild(clon);\r\n\r\n}\r\n\r\nfunction hideContent() {\r\n\r\n}\r\nwindow.addEventListener('DOMContentLoaded', function(){\r\n    // achievementPopUp();\r\n    //do showContent wpisuj co chcesz zeby alert oddal, pierwsze to text, drugie nazwa pliku z folderu images (NIE DAWAJ PELNEJ SCIEZKI TYLKO NP. KAPSEL.PNG)\r\n    showContent('Odblokowano osiągnięcie!', 'Co dwa otwieracze to nie jeden!', 'dualies.png');\r\n});\r\n\r\nconst closeSaveButtons = document.querySelectorAll ('[data-close-button]');\r\n\r\ncloseSaveButtons.forEach(button => {\r\n    button.addEventListener('click', () => {\r\n        const save = button.closest('.save');\r\n        closeSave(save);\r\n    })\r\n})\r\n\r\nfunction closeSave(save) {\r\n    if (save == null) return;\r\n    save.classList.remove('active');\r\n    overlay.classList.remove('active');\r\n}\n\n//# sourceURL=webpack:///./src/Scripts/modules/upgrades.js?");

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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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