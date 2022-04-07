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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"clickAnimation\": () => (/* binding */ clickAnimation)\n/* harmony export */ });\n/* harmony import */ var _src_Scripts_Components_format_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../src/Scripts/Components/format.js */ \"./src/Scripts/Components/format.js\");\n\n\nfunction clickAnimation(e, extraMoneyPerClick, counterButtonElement){\n    const moneyOnClick = extraMoneyPerClick + 1;\n    const moneyOnClickFormated = (0,_src_Scripts_Components_format_js__WEBPACK_IMPORTED_MODULE_0__.format)(moneyOnClick);\n    \n    const x = e.clientX - e.target.offsetLeft;\n    const y = e.clientY - e.target.offsetTop;\n\n    const beerWrap = document.createElement('span');\n    beerWrap.classList.add('click');\n    beerWrap.style.left = x + 'px';\n    beerWrap.style.top = y + 'px';\n    counterButtonElement.appendChild(beerWrap);\n\n    const beer = document.createElement('span');\n    beer.classList.add('click-beer');\n    beerWrap.appendChild(beer);\n\n    const moneyClickWrap = document.createElement('div');\n    moneyClickWrap.classList.add('click');\n    moneyClickWrap.style.left = x + 'px';\n    moneyClickWrap.style.top = y + 'px';\n    counterButtonElement.appendChild(moneyClickWrap);\n\n    const moneyClick = document.createElement('span');\n    moneyClick.classList.add('moneyClick');\n    moneyClickWrap.appendChild(moneyClick);\n\n    moneyClick.textContent = '+' + moneyOnClickFormated;\n\n    setTimeout(() => {\n        moneyClickWrap.remove()\n    },1500);\n\n    setTimeout(() => {\n        beerWrap.remove()\n    },1000);\n}\n\n//# sourceURL=webpack:///./Layout/animation.js?");

/***/ }),

/***/ "./Layout/main.js":
/*!************************!*\
  !*** ./Layout/main.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"upgradeList\": () => (/* binding */ upgradeList)\n/* harmony export */ });\n/* harmony import */ var _src_Scripts_Components_format_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../src/Scripts/Components/format.js */ \"./src/Scripts/Components/format.js\");\n/* harmony import */ var _src_Scripts_Components_statistics_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src/Scripts/Components/statistics.js */ \"./src/Scripts/Components/statistics.js\");\n/* harmony import */ var _src_Scripts_modules_catchbonusReworked__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/Scripts/modules/catchbonusReworked */ \"./src/Scripts/modules/catchbonusReworked.js\");\n/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menu.js */ \"./Layout/menu.js\");\n/* harmony import */ var _src_Scripts_modules_onClickIncrement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../src/Scripts/modules/onClickIncrement.js */ \"./src/Scripts/modules/onClickIncrement.js\");\n/* harmony import */ var _src_Scripts_modules_upgrades_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../src/Scripts/modules/upgrades.js */ \"./src/Scripts/modules/upgrades.js\");\n/* harmony import */ var _animation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./animation */ \"./Layout/animation.js\");\n/* harmony import */ var _src_Scripts_modules_apiLogin_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../src/Scripts/modules/apiLogin.js */ \"./src/Scripts/modules/apiLogin.js\");\n/* harmony import */ var _mobileMenu_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./mobileMenu.js */ \"./Layout/mobileMenu.js\");\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module '../src/Catalog/achievements.json'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n/* harmony import */ var _src_Scripts_Components_sounds_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../src/Scripts/Components/sounds.js */ \"./src/Scripts/Components/sounds.js\");\n/* harmony import */ var _src_Scripts_modules_apiStatus_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../src/Scripts/modules/apiStatus.js */ \"./src/Scripts/modules/apiStatus.js\");\n/* harmony import */ var _src_Scripts_modules_Achievements_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../src/Scripts/modules/Achievements.js */ \"./src/Scripts/modules/Achievements.js\");\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nlet sumOfCatchedBonuses = 0;\nlet counter = 0;\nlet autoClick = 0;\nlet extraMoneyPerClick = 0;\n\nconst upgradeList = {\n    'otwieracz': {\n        currentCost: 15,\n        level: 0,\n        autoClickValue: 0,\n        extraMoneyPerClick: 0.5\n    },\n    'mietek': {\n        currentCost: 155,\n        level: 0,\n        autoClickValue: 10,\n        extraMoneyPerClick: 0\n    },\n    'seba': {\n        currentCost: 1600,\n        level: 0,\n        autoClickValue: 90,\n        extraMoneyPerClick: 9\n    },\n    'grazyna': {\n        currentCost: 7500,\n        level: 0,\n        autoClickValue: 299,\n        extraMoneyPerClick: 73\n    },\n    'gang': {\n        currentCost: 35000,\n        level: 0,\n        autoClickValue: 779,\n        extraMoneyPerClick: 133\n    },\n    'monopolowy': {\n        currentCost: 130000,\n        level: 0,\n        autoClickValue: 1818,\n        extraMoneyPerClick: 421\n    },\n    'browar': {\n        currentCost: 800000,\n        level: 0,\n        autoClickValue: 0,\n        extraMoneyPerClick: 3901\n    },\n    'destylarnia': {\n        currentCost: 4000000,\n        level: 0,\n        autoClickValue: 6213,\n        extraMoneyPerClick: 0\n    },\n    'current': {\n        currentAutoClickValue: 0,\n        currentExtraMoneyPerClick: 0\n    },\n}\n\n;(0,_src_Scripts_modules_apiLogin_js__WEBPACK_IMPORTED_MODULE_7__.login)();\n\nwindow.addEventListener('DOMContentLoaded', (event) => {\n\n    const menuDivList = document.querySelectorAll('.menu__div-list');\n    const buttons = document.querySelectorAll('.menu__item');\n    const counterButtonElement = document.getElementById(\"counter-button\");\n    const upgradeFromHtml = document.getElementsByClassName(\"menu-upgrades__list-item\");\n    const achievementWrap = document.getElementById(\"tab-achievements\");\n\n    (0,_src_Scripts_modules_Achievements_js__WEBPACK_IMPORTED_MODULE_12__.achievementShow)(Object(function webpackMissingModule() { var e = new Error(\"Cannot find module '../src/Catalog/achievements.json'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), achievementWrap);\n\n    _src_Scripts_modules_apiStatus_js__WEBPACK_IMPORTED_MODULE_11__.loadGameState.then((gameState) => {\n\n        // na podstawie obiektu gameState w zaznaczonym poniżej warunku\n        // trzeba zaktualizować zmienne odpowiedzialne za\n        // aktualny stan gry np. counter, ulepszenia, osiagniecia itd.\n        // N.\n        console.log('game state', gameState);\n        if (gameState) {\n\n            if (gameState.hasOwnProperty('points')) {\n                counter = gameState.points;\n            }\n\n        }\n\n        if (upgradeFromHtml.length) {\n            for (let name = 0; name < upgradeFromHtml.length; name++) {\n                const upgradeDiv = upgradeFromHtml[name];\n                const upgradeId = upgradeDiv;\n\n                upgradeDiv.addEventListener('click', (event) => {\n                    const result = (0,_src_Scripts_modules_upgrades_js__WEBPACK_IMPORTED_MODULE_5__.upgrade)(counter, autoClick, extraMoneyPerClick, upgradeId.id, upgradeDiv, Object(function webpackMissingModule() { var e = new Error(\"Cannot find module '../src/Catalog/achievements.json'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));\n                    counter = result.counter;\n                    autoClick = result.autoClick;\n                    extraMoneyPerClick = result.extraMoneyPerClick;\n                });\n            }\n        }\n\n        if (counterButtonElement) {\n            counterButtonElement.addEventListener('click', (event) => {\n                counter = (0,_src_Scripts_modules_onClickIncrement_js__WEBPACK_IMPORTED_MODULE_4__.onClickHandler)(counter, extraMoneyPerClick);\n                (0,_src_Scripts_Components_sounds_js__WEBPACK_IMPORTED_MODULE_10__.clickSound)(\"click_sound\");\n            });\n        };\n\n        if (counterButtonElement) {\n            counterButtonElement.addEventListener('click', (e) => {\n                (0,_animation__WEBPACK_IMPORTED_MODULE_6__.clickAnimation)(e, extraMoneyPerClick, counterButtonElement);\n            })\n        }\n\n        document.getElementById(\"wrap\").addEventListener('click', (event) => {\n            if (event.target && event.target.matches(\".catchbonus\")) {\n                (0,_src_Scripts_Components_statistics_js__WEBPACK_IMPORTED_MODULE_1__.updateCatchedBonusesStat)();\n                let result = (0,_src_Scripts_modules_catchbonusReworked__WEBPACK_IMPORTED_MODULE_2__.bonus)(counter, autoClick);\n                if (result.autoClick) {\n                    let oldAutoClick = autoClick;\n                    autoClick = autoClick + autoClick + 10;\n                    setTimeout(() => {\n                        autoClick = autoClick - oldAutoClick;\n                        let autoClickFormat = (0,_src_Scripts_Components_format_js__WEBPACK_IMPORTED_MODULE_0__.format)(autoClick);\n                        document.getElementById('moneyPerSecond').innerHTML = 'Na sekundę: ' + autoClickFormat + ' $';\n                    }, 5000);\n                    autoClick = result.autoClick;\n                } else if (result.counter) {\n                    counter = result.counter;\n                }\n            }\n        });\n\n        (0,_src_Scripts_modules_catchbonusReworked__WEBPACK_IMPORTED_MODULE_2__.catchbonusstart)();\n\n        if (buttons.length && menuDivList.length) {\n            (0,_menu_js__WEBPACK_IMPORTED_MODULE_3__.changeMenuCategory)(buttons, menuDivList);\n        }\n\n        if (menuDivList.length) {\n            (0,_mobileMenu_js__WEBPACK_IMPORTED_MODULE_8__.changeMobileMenuCategory)(menuDivList);\n        }\n\n        setInterval(() => {\n            counter = (0,_src_Scripts_modules_upgrades_js__WEBPACK_IMPORTED_MODULE_5__.timer)(counter, autoClick);\n            (0,_src_Scripts_modules_onClickIncrement_js__WEBPACK_IMPORTED_MODULE_4__.changeCounterElementText)(counter);\n        }, 1000)\n\n        setInterval(() => {\n\n            // tutaj zamiast obiektu gameState napisanego z ręki trzeba zebrać dane związane ze stanem gry\n            // i przekazać je do funkcji saveGameState tak jak to się dzieje w tej chwili\n            // - N.        \n\n            const gameState = { \"startDataTime\": \"2022-04-06 13:06:01\", \"timeSpentPlaying\": \"92459750246436537\", \"clickCount\": 1000, \"clickPerSec\": autoClick, \"points\": counter, \"catchedBonuses\": 15, \"upgradeCount\": 1500, \"achievementsObtained\": [1, 2, 6, 12, 15], \"upgrades\": [{ \"id\": 1, \"quantity\": 500 }, { \"id\": 2, \"quantity\": 400 }, { \"id\": 3, \"quantity\": 300 }, { \"id\": 4, \"quantity\": 200 }, { \"id\": 5, \"quantity\": 100 }] };\n\n            console.log('%cmain.js line:109 gameState', 'color: #007acc;', gameState);\n\n            (0,_src_Scripts_modules_apiStatus_js__WEBPACK_IMPORTED_MODULE_11__.saveGameState)(gameState);\n        }, 60000);\n    });\n});\n\n//# sourceURL=webpack:///./Layout/main.js?");

/***/ }),

/***/ "./Layout/menu.js":
/*!************************!*\
  !*** ./Layout/menu.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"changeMenuCategory\": () => (/* binding */ changeMenuCategory)\n/* harmony export */ });\nfunction changeMenuCategory(buttons, menuDivList){\n    buttons.forEach((button) => {\n        button.addEventListener('click', () => {\n    \n            const dataKey = button.getAttribute('data-key');\n            const menuCategoryId =  document.querySelector('#' + dataKey);\n    \n            for(let i = 0; i < buttons.length ;i++){\n                buttons[i].classList.remove('menu__item--active');\n                menuDivList[i].classList.remove('menu__div--active');\n            }\n            \n            button.classList.add('menu__item--active');\n            menuCategoryId.classList.add('menu__div--active');\n        })\n    })\n}\n\n//# sourceURL=webpack:///./Layout/menu.js?");

/***/ }),

/***/ "./Layout/mobileMenu.js":
/*!******************************!*\
  !*** ./Layout/mobileMenu.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"changeMobileMenuCategory\": () => (/* binding */ changeMobileMenuCategory)\n/* harmony export */ });\nconst navigation__list = document.querySelectorAll('.navigation__list');\nconst menu = document.querySelector('.menu');\nconst mobileButtons = document.querySelectorAll('.mobileMenu-btn');\nconst exitBtn = document.querySelectorAll('.exit-btn');\nconst mobileHome = document.querySelector('.mobileHome');\n\nfunction changeMobileMenuCategory(menuDivList){\n        navigation__list.forEach((item) => {\n        item.addEventListener('click', () => {\n    \n        for(let i = 0; i<navigation__list.length ;i++){\n            navigation__list[i].classList.remove('active');\n        }\n        item.classList.add('active');\n        })\n    })\n    \n    mobileButtons.forEach((button) => {\n        button.addEventListener('click', () => {\n            const dataKey = button.getAttribute('data-key');\n            const menuCategoryId =  document.querySelector('#' + dataKey);\n    \n            for(let i = 0; i < menuDivList.length ;i++){\n                menuDivList[i].classList.remove('menu__div--active');\n            }\n                        \n            menuCategoryId.classList.add('menu__div--active');\n            menu.classList.add('mobileMenu');\n    \n            exitBtn.forEach((exit) => {\n                exit.addEventListener('click', () => {\n                    \n                    for(let i=0; i < mobileButtons.length ;i++){\n                        mobileButtons[i].classList.remove('active');\n                    }\n                    menu.classList.remove('mobileMenu');\n                    mobileHome.classList.add('active');\n                })\n            })\n        })\n    })\n}\n\n//# sourceURL=webpack:///./Layout/mobileMenu.js?");

/***/ }),

/***/ "./src/Scripts/Components/alert.js":
/*!*****************************************!*\
  !*** ./src/Scripts/Components/alert.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"showContent\": () => (/* binding */ showContent)\n/* harmony export */ });\nfunction showContent(alertmessage, text, icon) {\n    const temp = document.getElementById('alertTemplate');\n    const clon = temp.content.cloneNode(true);\n\n    clon.querySelector(\"#achievementPopUp .alert__info\").textContent = text;\n    clon.querySelector(\"#achievementPopUp .alert__text\").textContent = alertmessage;\n    clon.querySelector(\"#achievementPopUp .alert__icon\").src = ('../Images/' + icon);\n    document.body.appendChild(clon);\n\n    const timer = setTimeout(() => {\n       deleteContent()\n    }, 5000);\n\n    const closePopUpButtons = document.querySelectorAll('[data-close-button]');\n\n    closePopUpButtons.forEach(button => {\n        button.addEventListener('click', () => {\n            const close = button.closest(\".alert\");\n            deleteContent()\n            clearTimeout(timer)\n        })\n    })\n}\n\nfunction deleteContent() {\n    document.getElementById(\"achievementPopUp\").remove()\n};\n\n//# sourceURL=webpack:///./src/Scripts/Components/alert.js?");

/***/ }),

/***/ "./src/Scripts/Components/format.js":
/*!******************************************!*\
  !*** ./src/Scripts/Components/format.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"format\": () => (/* binding */ format),\n/* harmony export */   \"round\": () => (/* binding */ round)\n/* harmony export */ });\nconst pow = Math.pow,\nfloor = Math.floor,\nabs = Math.abs,\nlog = Math.log;\n\nconst abbrev = [\"k\",\"m\",\"b\",\"t\",\"aa\",\"ab\",\"ac\",\"ad\",\"ae\",\"af\",\"ag\",\"ah\",\"ai\",\"aj\",\"ak\",\"al\",\"am\",\"an\",\"ao\",\"ap\",\"ar\",\"as\",\"at\",\"au\",\"aw\",\"az\",\"ba\",];\n\nfunction round(n, precision) {\n  const prec = Math.pow(10, precision + 1);\n  return Math.floor(n * prec) / prec;\n}\n\nfunction format(n) {\n  let base = floor(log(abs(n)) / log(1000));\n  const suffix = abbrev[Math.min(100, base - 1)];\n  base = abbrev.indexOf(suffix) + 1;\n  let rep = suffix ? round(n / pow(1000, base), 2) + suffix : \"\" + n;\n  return rep = rep.replace('.',',')\n}\n\n//# sourceURL=webpack:///./src/Scripts/Components/format.js?");

/***/ }),

/***/ "./src/Scripts/Components/sounds.js":
/*!******************************************!*\
  !*** ./src/Scripts/Components/sounds.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"clickSound\": () => (/* binding */ clickSound)\n/* harmony export */ });\nfunction clickSound(motive) {\n    const sound = document.getElementById(motive);\n    sound.preload = 'auto';\n\n    sound.load();\n    if (sound.duration > 0 && !sound.paused) {\n        sound.stop();\n\n    }\n    sound.play();\n\n}\n\n\n//# sourceURL=webpack:///./src/Scripts/Components/sounds.js?");

/***/ }),

/***/ "./src/Scripts/Components/statistics.js":
/*!**********************************************!*\
  !*** ./src/Scripts/Components/statistics.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"updateAchievementStat\": () => (/* binding */ updateAchievementStat),\n/* harmony export */   \"updateCatchedBonusesStat\": () => (/* binding */ updateCatchedBonusesStat),\n/* harmony export */   \"updateUpgradeStat\": () => (/* binding */ updateUpgradeStat)\n/* harmony export */ });\nconst counterButtonElementStats = document.getElementById('counter-button');\nlet sumOfClicks = 0;\n\nfunction clickCounter()\n{\n    sumOfClicks ++;\n    document.getElementById('stat1').innerHTML = sumOfClicks;\n}\ncounterButtonElementStats.onclick = clickCounter;\n\n \nsetInterval(() => {\n\nconst dateOne = new Date(\"2022-03-29 10:00:00\"); \nconst dateTwo = new Date(); \n\nlet seconds = Math.abs(dateTwo-dateOne)/1000;\nlet minutes = parseInt(seconds/60);\nlet hours = parseInt(minutes/60);\nlet days = parseInt(hours/24);\nlet months = parseInt(days/30);\nlet years = parseInt(months/12);\n\nseconds = parseInt((seconds-minutes*60));\nminutes = parseInt((minutes-hours*60));\nhours = parseInt((hours-days*24));\ndays = parseInt((days-months*30));\nmonths = parseInt((months-years*12));\n    document.getElementById('stat4').innerHTML = years + \"l \" + months + \"m \" + days + \"d \" + hours + \"g \" + minutes + \"m \" + seconds + \"s\";\n}, 1000)\n\nlet sumOfUpgrades = 0; \n function updateUpgradeStat(value)\n {       \n            sumOfUpgrades ++;\n            document.getElementById('stat2').innerHTML = sumOfUpgrades; \n }\n\n let achievementCounter = 0;\n function updateAchievementStat()\n {\n            achievementCounter ++;\n            document.getElementById('stat6').innerHTML = achievementCounter + \"/32\" ;\n }\n\n let sumOfCatchedBonuses = 0;\n function updateCatchedBonusesStat()\n {\n            sumOfCatchedBonuses++;\n            document.getElementById('stat5').innerHTML = sumOfCatchedBonuses;\n }\n\n\n//# sourceURL=webpack:///./src/Scripts/Components/statistics.js?");

/***/ }),

/***/ "./src/Scripts/modules/Achievements.js":
/*!*********************************************!*\
  !*** ./src/Scripts/modules/Achievements.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"achievementShow\": () => (/* binding */ achievementShow),\n/* harmony export */   \"osiagniecia\": () => (/* binding */ osiagniecia)\n/* harmony export */ });\n/* harmony import */ var _Components_alert_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Components/alert.js */ \"./src/Scripts/Components/alert.js\");\n/* harmony import */ var _Components_statistics_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Components/statistics.js */ \"./src/Scripts/Components/statistics.js\");\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module '../../Catalog/achievements.json'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n/* harmony import */ var _Components_sounds_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Components/sounds.js */ \"./src/Scripts/Components/sounds.js\");\n\n\n\n\n\nfunction osiagniecia(upgradeLevel, upgradeName, achivementList) {\n    const achievementLevel = Object.keys(achivementList);\n\n    achievementLevel.forEach(achievementKey => {\n        if (achivementList[achievementKey].level == upgradeLevel && achivementList[achievementKey].upgradeName == upgradeName) {\n            (0,_Components_statistics_js__WEBPACK_IMPORTED_MODULE_1__.updateAchievementStat)();\n\n            const achievement = document.getElementById(achievementKey);\n            const name = achivementList[achievementKey].class;\n            const header = achivementList[achievementKey].achievementHeader;\n            const description = achivementList[achievementKey].achievementDescription;\n            const achievementImage = achivementList[achievementKey].iconName;\n\n            achievement.querySelector('.headline').innerHTML = header;\n            achievement.querySelector('.specification').innerHTML = description;\n\n            achievement.querySelector('.achievements-look').classList.add(name);\n            (0,_Components_alert_js__WEBPACK_IMPORTED_MODULE_0__.showContent)(header, description, achievementImage);\n            (0,_Components_sounds_js__WEBPACK_IMPORTED_MODULE_3__.clickSound)(\"achievement_sound\");\n        }\n    });\n}\n\nfunction achievementShow(achievementList, achievementWrap) {\n\n    const stencil = document.getElementById(\"achievement-show\");\n    const achievements = Object.keys(Object(function webpackMissingModule() { var e = new Error(\"Cannot find module '../../Catalog/achievements.json'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));\n\n    achievements.forEach(achievementKey => {\n\n        const clone = stencil.content.cloneNode(true);\n        const header = achievementList[achievementKey].achievementHeader;\n        const description = achievementList[achievementKey].achievementDescription;\n        const unlocked = achievementList[achievementKey].unlocked;\n\n        if (unlocked) {\n\n            clone.querySelector(\".headline\").textContent = header;\n            clone.querySelector(\".specification\").textContent = description;\n            clone.querySelector(\".achievements-look\").classList.add(achievementList[achievementKey].class);\n\n        }\n        achievementWrap.appendChild(clone);\n\n        const cloneQuerySelector = document.getElementById(\"achievementKey\");\n        cloneQuerySelector.id = achievementKey;        \n    })\n}\n\n//# sourceURL=webpack:///./src/Scripts/modules/Achievements.js?");

/***/ }),

/***/ "./src/Scripts/modules/apiLogin.js":
/*!*****************************************!*\
  !*** ./src/Scripts/modules/apiLogin.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"login\": () => (/* binding */ login)\n/* harmony export */ });\nfunction login(params) {\n    if(!localStorage.getItem(\"Token\")){\n        fetch('https://praktyki-trol-clicker-api.herokuapp.com/login')\n        .then(response => response.json())\n        .then(data => data.Data.Token)\n        .then(token => {\n            localStorage.setItem(\"Token\", token);\n        });\n    }\n}\n\n//# sourceURL=webpack:///./src/Scripts/modules/apiLogin.js?");

/***/ }),

/***/ "./src/Scripts/modules/apiStatus.js":
/*!******************************************!*\
  !*** ./src/Scripts/modules/apiStatus.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"loadGameState\": () => (/* binding */ loadGameState),\n/* harmony export */   \"saveGameState\": () => (/* binding */ saveGameState)\n/* harmony export */ });\n/* harmony import */ var _Components_alert__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Components/alert */ \"./src/Scripts/Components/alert.js\");\n\n\nconst loadGameState = fetch('https://praktyki-trol-clicker-api.herokuapp.com/game-states', {\n    headers: {\n        'Content-Type': 'application/json',\n        'Authorization': 'Bearer '+localStorage.getItem(\"Token\")\n    }\n})\n.then(response => {\n    if (response.status == 200) {\n        return response.json();\n    } else {\n        return false;\n    }    \n})\n.then(data => {\n    if (data && data.hasOwnProperty('Data')) {\n        return data.Data;\n    } else {\n        return false;\n    }\n});\n\n\nasync function saveGameState(gameState) {\n    fetch('https://praktyki-trol-clicker-api.herokuapp.com/game-states', {\n        method: 'PUT',\n        headers: {\n            'Content-Type': 'application/json',\n            'Authorization': 'Bearer '+localStorage.getItem(\"Token\")\n        },\n        body: JSON.stringify(gameState),\n    })\n    .then(response => response.json())\n    .then(data => {\n        console.log('Success:', data);\n        (0,_Components_alert__WEBPACK_IMPORTED_MODULE_0__.showContent)('Gra zapisana', '', '');\n    })\n    .catch((error) => {\n        console.error('Error:', error);\n    });\n}\n\n//# sourceURL=webpack:///./src/Scripts/modules/apiStatus.js?");

/***/ }),

/***/ "./src/Scripts/modules/catchbonusReworked.js":
/*!***************************************************!*\
  !*** ./src/Scripts/modules/catchbonusReworked.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"bonus\": () => (/* binding */ bonus),\n/* harmony export */   \"catchbonusstart\": () => (/* binding */ catchbonusstart)\n/* harmony export */ });\n/* harmony import */ var _Components_format_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Components/format.js */ \"./src/Scripts/Components/format.js\");\n\n\nlet catchbonusaddable = Boolean(true);\n\nfunction getRandomcoordinates() {\n    const mincoordinates = 135;\n    const windowHeight = window.innerHeight - mincoordinates;\n    const windowWidth = window.innerWidth - mincoordinates;\n\n    return{\n        'Height' : Math.floor (Math.random()*(windowHeight - mincoordinates + 1)+ mincoordinates),\n        'Width' : Math.floor (Math.random()*(windowWidth - mincoordinates + 1)+ mincoordinates),\n    } \n  }\n  function makediv(coordinates){ \n    if(catchbonusaddable == true ){\n        const cnt = document.querySelector(\".wrap\");\n        const catchbonus = document.createElement(\"div\");\n        catchbonus.id=\"catchbonus\";\n        catchbonus.classList.add(\"catchbonus\")\n        cnt.appendChild(catchbonus);\n        catchbonus.style.top = coordinates.Height + 'px';\n        catchbonus.style.left = coordinates.Width + 'px';\n        catchbonusaddable = false\n        catchbonus.addEventListener('click', () => {\n            removebonus(catchbonus);\n            catchbonusaddable = true\n        })\n        setTimeout(() => {\n            removebonus(catchbonus);\n            catchbonusaddable = true\n          }, 8000);\n    }\n  }\n  function catchbonusstart(){\n  setInterval(() => {\n    let coordinates = getRandomcoordinates();\n    makediv(coordinates);\n    catchbonusaddable = false\n  }, 10000)\n  // 600000\n}\n  function removebonus(catchbonus){\n    catchbonus.remove();\n    catchbonusaddable = true\n  }\n    const bonusList = [{\n        type: \"counterValue\"\n      }, {\n        type: \"autoClick\",\n        time: 5000\n      }]\n      function bonus(counter, autoClick) {\n        let randombonus = Math.floor (Math.random()*((bonusList.length-1) + (bonusList.length-1)));\n        console.log(bonusList.length)\n        const bonus = bonusList[randombonus];\n        if (bonus.type == 'counterValue')  {\n          const testcounter = counter\n          counter = counter + Math.floor(counter / 5)+10;  \n          const this2 = document.querySelector(\"body\");\n          let money = document.createElement('div');\n          money.classList.add('click');\n          money.style.left = 50 + '%';\n          money.style.top = 50 + '%';\n          this2.appendChild(money);\n\n          let moneyClick = document.createElement('span');\n          moneyClick.classList.add('moneyClick2');\n          money.appendChild(moneyClick);\n          \n          let bonuscounter = (0,_Components_format_js__WEBPACK_IMPORTED_MODULE_0__.format)(Math.floor(testcounter / 5)+10)\n          moneyClick.textContent = '+' + bonuscounter + ' $';\n          setTimeout(() => {\n            money.remove()\n        }, 1500);\n          return { counter };\n      \n         }else {     \n          let oldAutoClick = (0,_Components_format_js__WEBPACK_IMPORTED_MODULE_0__.format)(autoClick+10);\n          autoClick = autoClick + autoClick +10;\n          let autoClickFormat = (0,_Components_format_js__WEBPACK_IMPORTED_MODULE_0__.format)(autoClick);\n          const this2 = document.querySelector(\"body\");\n          let money = document.createElement('div');\n          money.classList.add('click');\n          money.style.left = 50 + '%';\n          money.style.top = 50 + '%';\n          this2.appendChild(money);\n\n          let moneyClick = document.createElement('span');\n          moneyClick.classList.add('moneyClick2');\n          money.appendChild(moneyClick);\n  \n          moneyClick.textContent = '+'+ oldAutoClick + ' $ na sekundę przez 10 sekund';\n           document.getElementById('moneyPerSecond').innerHTML ='Na sekundę: ' + autoClickFormat +' $';\n           setTimeout(() => {\n            money.remove()\n        },1500);\n\n          document.getElementById('moneyPerSecond').innerHTML ='Na sekundę: ' + autoClickFormat +' $';\n\n          return { autoClick };\n        }\n      }\n\n//# sourceURL=webpack:///./src/Scripts/modules/catchbonusReworked.js?");

/***/ }),

/***/ "./src/Scripts/modules/onClickIncrement.js":
/*!*************************************************!*\
  !*** ./src/Scripts/modules/onClickIncrement.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"changeCounterElementText\": () => (/* binding */ changeCounterElementText),\n/* harmony export */   \"counterElement\": () => (/* binding */ counterElement),\n/* harmony export */   \"onClickHandler\": () => (/* binding */ onClickHandler)\n/* harmony export */ });\n/* harmony import */ var _Components_format_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Components/format.js */ \"./src/Scripts/Components/format.js\");\n\n\nconst counterElement = document.getElementById(\"counter\");\nconst mobileHeaderH2 = document.querySelector('.mobile__header--h2');\n\nlet returnedFormatedValue = counter;\n\nfunction changeCounterElementText(counter) {\n  returnedFormatedValue = (0,_Components_format_js__WEBPACK_IMPORTED_MODULE_0__.format)(counter);\n  \n  mobileHeaderH2.textContent = returnedFormatedValue + \" $\";\n  counterElement.textContent = returnedFormatedValue + \" $\";\n}\n\nfunction onClickHandler(counter, extraMoneyPerClick) {\n  counter += extraMoneyPerClick;\n  counter++;\n  changeCounterElementText(counter);\n\n  return counter;\n}\n\n//# sourceURL=webpack:///./src/Scripts/modules/onClickIncrement.js?");

/***/ }),

/***/ "./src/Scripts/modules/upgrades.js":
/*!*****************************************!*\
  !*** ./src/Scripts/modules/upgrades.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"timer\": () => (/* binding */ timer),\n/* harmony export */   \"upgrade\": () => (/* binding */ upgrade)\n/* harmony export */ });\n/* harmony import */ var _Components_format_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Components/format.js */ \"./src/Scripts/Components/format.js\");\n/* harmony import */ var _Achievements_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Achievements.js */ \"./src/Scripts/modules/Achievements.js\");\n/* harmony import */ var _Components_statistics_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Components/statistics.js */ \"./src/Scripts/Components/statistics.js\");\n/* harmony import */ var _Layout_main_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../Layout/main.js */ \"./Layout/main.js\");\n/* harmony import */ var _Components_sounds_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Components/sounds.js */ \"./src/Scripts/Components/sounds.js\");\n\n\n\n\n\n\n\nconst mobileHeaderH2 = document.querySelector('.mobile__header--h2');\nlet upgradeCostFormat = 0;\nlet returnedFormatedValue = 0;\nlet autoClickFormat;\n\nfunction upgrade(counter, autoClick, extraMoneyPerClick, upgradeName, upgradeDiv, achivementList) {\n    const upgrade = _Layout_main_js__WEBPACK_IMPORTED_MODULE_3__.upgradeList[upgradeName];\n    if (counter >= upgrade.currentCost) {\n        counter -= upgrade.currentCost;\n    \n        upgrade.currentCost *= 1.15;\n        upgrade.currentCost = (0,_Components_format_js__WEBPACK_IMPORTED_MODULE_0__.round)(upgrade.currentCost, -1);\n        upgrade.level++;\n        (0,_Components_statistics_js__WEBPACK_IMPORTED_MODULE_2__.updateUpgradeStat)();\n        _Layout_main_js__WEBPACK_IMPORTED_MODULE_3__.upgradeList.current.currentAutoClickValue += upgrade.autoClickValue;\n        _Layout_main_js__WEBPACK_IMPORTED_MODULE_3__.upgradeList.current.currentExtraMoneyPerClick += upgrade.extraMoneyPerClick;\n        (0,_Components_sounds_js__WEBPACK_IMPORTED_MODULE_4__.clickSound)(\"upgrade_sound\");\n        (0,_Achievements_js__WEBPACK_IMPORTED_MODULE_1__.osiagniecia)(upgrade.level, upgradeName, achivementList);\n\n        autoClick = _Layout_main_js__WEBPACK_IMPORTED_MODULE_3__.upgradeList.current.currentAutoClickValue;\n        extraMoneyPerClick = _Layout_main_js__WEBPACK_IMPORTED_MODULE_3__.upgradeList.current.currentExtraMoneyPerClick;\n\n        returnedFormatedValue = (0,_Components_format_js__WEBPACK_IMPORTED_MODULE_0__.format)(counter);\n        upgradeCostFormat = (0,_Components_format_js__WEBPACK_IMPORTED_MODULE_0__.format)(upgrade.currentCost);\n        autoClickFormat = (0,_Components_format_js__WEBPACK_IMPORTED_MODULE_0__.format)(autoClick);\n\n        document.getElementById('counter').innerHTML = returnedFormatedValue + ' $';\n        document.getElementById('moneyPerSecond').innerHTML = 'Na sekunde: ' + autoClickFormat + ' $';\n        document.getElementById('stat3').innerHTML = autoClickFormat;\n        upgradeDiv.querySelector('.upgradeLevel').innerHTML = upgrade.level;\n        upgradeDiv.querySelector('.upgradeCost').innerHTML = upgradeCostFormat + ' $';\n        mobileHeaderH2.textContent = returnedFormatedValue + \" $\";\n    }\n\n    return { counter, autoClick, extraMoneyPerClick };\n}\n\nconst timer = (counter, autoClick) => counter + autoClick;\n\n//# sourceURL=webpack:///./src/Scripts/modules/upgrades.js?");

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