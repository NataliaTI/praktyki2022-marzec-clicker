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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"clickAnimation\": () => (/* binding */ clickAnimation)\n/* harmony export */ });\n/* harmony import */ var _src_Scripts_Components_format_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../src/Scripts/Components/format.js */ \"./src/Scripts/Components/format.js\");\n\n\nfunction clickAnimation(e, extraMoneyPerClick, counterButtonElement){\n    const moneyOnClick = extraMoneyPerClick + 1;\n    let moneyOnClickFormated = (0,_src_Scripts_Components_format_js__WEBPACK_IMPORTED_MODULE_0__.format)(moneyOnClick);\n    moneyOnClickFormated = moneyOnClickFormated.replace('.',',')\n    \n    const x = e.clientX - e.target.offsetLeft;\n    const y = e.clientY - e.target.offsetTop;\n\n    const beerWrap = document.createElement('span');\n    beerWrap.classList.add('click');\n    beerWrap.style.left = x + 'px';\n    beerWrap.style.top = y + 'px';\n    counterButtonElement.appendChild(beerWrap);\n\n    const beer = document.createElement('span');\n    beer.classList.add('click-beer');\n    beerWrap.appendChild(beer);\n\n    const moneyClickWrap = document.createElement('div');\n    moneyClickWrap.classList.add('click');\n    moneyClickWrap.style.left = x + 'px';\n    moneyClickWrap.style.top = y + 'px';\n    counterButtonElement.appendChild(moneyClickWrap);\n\n    const moneyClick = document.createElement('span');\n    moneyClick.classList.add('moneyClick');\n    moneyClickWrap.appendChild(moneyClick);\n\n    moneyClick.textContent = '+' + moneyOnClickFormated;\n\n    setTimeout(() => {\n        moneyClickWrap.remove()\n    },1500);\n\n    setTimeout(() => {\n        beerWrap.remove()\n    },1000);\n}\n\n//# sourceURL=webpack:///./Layout/animation.js?");

/***/ }),

/***/ "./Layout/main.js":
/*!************************!*\
  !*** ./Layout/main.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _src_Scripts_Components_format_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../src/Scripts/Components/format.js */ \"./src/Scripts/Components/format.js\");\n/* harmony import */ var _src_Scripts_modules_catchbonusReworked__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src/Scripts/modules/catchbonusReworked */ \"./src/Scripts/modules/catchbonusReworked.js\");\n/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu.js */ \"./Layout/menu.js\");\n/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_menu_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _src_Scripts_modules_onClickIncrement_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/Scripts/modules/onClickIncrement.js */ \"./src/Scripts/modules/onClickIncrement.js\");\n/* harmony import */ var _src_Scripts_modules_upgrades_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../src/Scripts/modules/upgrades.js */ \"./src/Scripts/modules/upgrades.js\");\n/* harmony import */ var _animation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./animation */ \"./Layout/animation.js\");\n/* harmony import */ var _src_Scripts_modules_apiLogin_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../src/Scripts/modules/apiLogin.js */ \"./src/Scripts/modules/apiLogin.js\");\n/* harmony import */ var _mobileMenu_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./mobileMenu.js */ \"./Layout/mobileMenu.js\");\n/* harmony import */ var _mobileMenu_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_mobileMenu_js__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _src_Catalog_achievements_json__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../src/Catalog/achievements.json */ \"./src/Catalog/achievements.json\");\n\n\n\n\n\n\n\n\n\n\nlet sumOfCatchedBonuses = 0;\nlet counter = 2220;\nlet autoClick = 0;\nlet extraMoneyPerClick = 0;\nconst menuDivList = document.querySelectorAll('.menu__div-list');\nconst buttons = document.querySelectorAll('.menu-item');\n\nwindow.addEventListener('DOMContentLoaded', (event) => {\n    const counterButtonElement = document.getElementById(\"counter-button\");\n    const upgradeFromHtml = document.getElementsByClassName(\"menu__upgrades-list-item\");\n\n    if (upgradeFromHtml.length) {\n        for (let name = 0; name < upgradeFromHtml.length; name++) {\n            const upgradeDiv = upgradeFromHtml[name];\n            const upgradeId = upgradeDiv;\n            \n            upgradeDiv.addEventListener('click', (event) => {\n                const result = (0,_src_Scripts_modules_upgrades_js__WEBPACK_IMPORTED_MODULE_4__.upgrade)(counter, autoClick, extraMoneyPerClick, upgradeId.id, upgradeDiv, _src_Catalog_achievements_json__WEBPACK_IMPORTED_MODULE_8__);\n                counter = result.counter;\n                autoClick = result.autoClick;\n                extraMoneyPerClick = result.extraMoneyPerClick;\n                upgradeSound();\n            });\n        }\n    }\n\n    if (counterButtonElement) {\n        counterButtonElement.addEventListener('click', (event) => {\n            counter = (0,_src_Scripts_modules_onClickIncrement_js__WEBPACK_IMPORTED_MODULE_3__.onClickHandler)(counter, extraMoneyPerClick);\n            clickSound();\n        });\n    };\n\n    if(counterButtonElement){\n        counterButtonElement.addEventListener('click', (e) => {\n            (0,_animation__WEBPACK_IMPORTED_MODULE_5__.clickAnimation)(e, extraMoneyPerClick, counterButtonElement);\n        })\n    }\n\n    console.log('DOM fully loaded and parsed'); \n});\n\nfunction clickSound() {\n    const sound = document.getElementById(\"click_sound\");\n    sound.preload = 'auto';\n    sound.load();\n    sound.play();\n}\nfunction upgradeSound() {\n    const sound = document.getElementById(\"upgrade_sound\");\n    sound.play();\n}\n\n(0,_src_Scripts_modules_apiLogin_js__WEBPACK_IMPORTED_MODULE_6__.login)();\n(0,_src_Scripts_modules_catchbonusReworked__WEBPACK_IMPORTED_MODULE_1__.catchbonusstart)();\n\ndocument.getElementById(\"wrap\").addEventListener('click', (event) => {\n    if (event.target && event.target.matches(\".catchbonus\")) {\n        sumOfCatchedBonuses++;\n        document.getElementById('stat5').innerHTML = sumOfCatchedBonuses;\n        let result = (0,_src_Scripts_modules_catchbonusReworked__WEBPACK_IMPORTED_MODULE_1__.bonus)(counter, autoClick);\n        console.log(result)\n        if (result.autoClick) {\n            let oldAutoClick = (0,_src_Scripts_Components_format_js__WEBPACK_IMPORTED_MODULE_0__.format)(autoClick)\n            oldAutoClick = oldAutoClick.replace('.', ',')\n            setTimeout(() => {\n                autoClick = autoClick - oldAutoClick;\n                let autoClickFormat = (0,_src_Scripts_Components_format_js__WEBPACK_IMPORTED_MODULE_0__.format)(autoClick);\n                autoClickFormat = autoClickFormat.replace('.', ',');\n                document.getElementById('moneyPerSecond').innerHTML = 'Na sekunde: ' + autoClickFormat + ' $';\n                autoClickFormat = autoClickFormat.replace(',', '.')\n            }, 5000);\n            autoClick = result.autoClick\n        } else if (result.counter) {\n            counter = result.counter\n            const this2 = document.querySelector(\"body\");\n            let money = document.createElement('div');\n            money.classList.add('click');\n            money.style.left = 50 + '%';\n            money.style.top = 50 + '%';\n            this2.appendChild(money);\n            let moneyClick = document.createElement('span');\n            moneyClick.classList.add('moneyClick2');\n            money.appendChild(moneyClick);\n            let bonuscounter = (0,_src_Scripts_Components_format_js__WEBPACK_IMPORTED_MODULE_0__.format)(Math.floor(counter / 5))\n            bonuscounter = bonuscounter.replace('.', ',')\n            moneyClick.textContent = '+' + bonuscounter + ' $';\n            setTimeout(() => {\n                money.remove()\n            }, 1500);\n        }\n    }\n});\n\nsetInterval(() => {\n    counter = (0,_src_Scripts_modules_upgrades_js__WEBPACK_IMPORTED_MODULE_4__.timer)(counter, autoClick);\n    (0,_src_Scripts_modules_onClickIncrement_js__WEBPACK_IMPORTED_MODULE_3__.changeCounterElementText)(counter);\n}, 1000)\n\n;(0,_menu_js__WEBPACK_IMPORTED_MODULE_2__.changeMenuCategory)(buttons, menuDivList);\n(0,_mobileMenu_js__WEBPACK_IMPORTED_MODULE_7__.changeMobileMenuCategory)(menuDivList);\n\n\n//# sourceURL=webpack:///./Layout/main.js?");

/***/ }),

/***/ "./Layout/menu.js":
/*!************************!*\
  !*** ./Layout/menu.js ***!
  \************************/
/***/ (() => {

eval("\nfunction changeMenuCategory(buttons, menuDivList){\n    buttons.forEach((button) => {\n        button.addEventListener('click', () => {\n    \n            const dataKey = button.getAttribute('data-key');\n            const menuCategoryId =  document.querySelector('#' + dataKey);\n    \n            for(let i = 0; i < buttons.length ;i++){\n                buttons[i].classList.remove('active--menu-item');\n                menuDivList[i].classList.remove('menu__div--active');\n            }\n            \n            button.classList.add('active--menu-item');\n            menuCategoryId.classList.add('menu__div--active');\n        })\n    })\n}\n\n\n\n//# sourceURL=webpack:///./Layout/menu.js?");

/***/ }),

/***/ "./Layout/mobileMenu.js":
/*!******************************!*\
  !*** ./Layout/mobileMenu.js ***!
  \******************************/
/***/ (() => {

eval("\n\nconst navigation__list = document.querySelectorAll('.navigation__list');\nconst menuDivList = document.querySelectorAll('.menu__div-list');\nconst menu = document.querySelector('.menu');\nconst mobileButtons = document.querySelectorAll('.mobileMenu-btn');\nconst exitBtn = document.querySelectorAll('.exit-btn');\nconst mobileHome = document.querySelector('.mobileHome');\n\nfunction changeMobileMenuCategory(menuDivList){\n    navigation__list.forEach((item) => {\n        item.addEventListener('click', () => {\n    \n        for(let i = 0; i<navigation__list.length ;i++){\n            navigation__list[i].classList.remove('active');\n        }\n        item.classList.add('active');\n        })\n    })\n    \n    \n    \n    mobileButtons.forEach((button) => {\n        button.addEventListener('click', () => {\n            const dataKey = button.getAttribute('data-key');\n    \n            const menuCategoryId =  document.querySelector('#' + dataKey);\n    \n            for(let i = 0; i < menuDivList.length ;i++){\n                menuDivList[i].classList.remove('menu__div--active');\n            }\n                        \n            menuCategoryId.classList.add('menu__div--active');\n            menu.classList.add('mobileMenu');\n    \n            exitBtn.forEach((exit) => {\n                exit.addEventListener('click', () => {\n                    \n                    for(let i=0; i < mobileButtons.length ;i++){\n                        mobileButtons[i].classList.remove('active');\n                    }\n                    menu.classList.remove('mobileMenu');\n                    mobileHome.classList.add('active');\n                })\n            })\n        })\n    })\n}\n\n\n\n\n//# sourceURL=webpack:///./Layout/mobileMenu.js?");

/***/ }),

/***/ "./src/Scripts/Components/alert.js":
/*!*****************************************!*\
  !*** ./src/Scripts/Components/alert.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"showContent\": () => (/* binding */ showContent)\n/* harmony export */ });\nfunction showContent(alertmessage, text, icon) {\n    const temp = document.getElementsByTagName(\"template\")[0];\n    const clon = temp.content.cloneNode(true);\n    const poptext = document.getElementById('PopUpText');\n\n    clon.querySelector(\"#achievementPopUp .title\").textContent = text;\n    clon.querySelector(\"#achievementPopUp .PUT\").textContent = alertmessage;    \n    clon.querySelector(\"#achievementPopUp .icon\").src = ('../Images/' + icon);\n    document.body.appendChild(clon);\n\n    setTimeout(() => {\n       deleteContent(clon)\n    }, 5000);\n\n    const closePopUpButtons = document.querySelectorAll('[data-close-button]')\n\n    closePopUpButtons.forEach(button => {\n        button.addEventListener('click', () => {\n            const close = button.closest('.achievement')\n            // console.log(close)\n            deleteContent(clon)\n        })\n    })\n}\nfunction deleteContent(clon) {\n    document.getElementById(\"achievementPopUp\").remove()\n};\n\n//# sourceURL=webpack:///./src/Scripts/Components/alert.js?");

/***/ }),

/***/ "./src/Scripts/Components/format.js":
/*!******************************************!*\
  !*** ./src/Scripts/Components/format.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"format\": () => (/* binding */ format),\n/* harmony export */   \"round\": () => (/* binding */ round)\n/* harmony export */ });\nconst pow = Math.pow,\nfloor = Math.floor,\nabs = Math.abs,\nlog = Math.log;\n\nconst abbrev = [\"k\",\"m\",\"b\",\"t\",\"aa\",\"ab\",\"ac\",\"ad\",\"ae\",\"af\",\"ag\",\"ah\",\"ai\",\"aj\",\"ak\",\"al\",\"am\",\"an\",\"ao\",\"ap\",\"ar\",\"as\",\"at\",\"au\",\"aw\",\"az\",\"ba\",];\n\nfunction round(n, precision) {\n  const prec = Math.pow(10, precision + 1);\n  return Math.floor(n * prec) / prec;\n}\n\nfunction format(n) {\n  let base = floor(log(abs(n)) / log(1000));\n  const suffix = abbrev[Math.min(100, base - 1)];\n  base = abbrev.indexOf(suffix) + 1;\n  return suffix ? round(n / pow(1000, base), 2) + suffix : \"\" + n;\n}\n\n//# sourceURL=webpack:///./src/Scripts/Components/format.js?");

/***/ }),

/***/ "./src/Scripts/modules/Achievements.js":
/*!*********************************************!*\
  !*** ./src/Scripts/modules/Achievements.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"osiagniecia\": () => (/* binding */ osiagniecia)\n/* harmony export */ });\n/* harmony import */ var _Components_alert_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Components/alert.js */ \"./src/Scripts/Components/alert.js\");\n\n\nlet achievementCounter = 0;\n\nfunction osiagniecia(upgradeLevel, upgradeName, achivementList) {\n    const achievementLevel = Object.keys(achivementList);\n\n    achievementLevel.forEach(achievementKey => {\n        if (achivementList[achievementKey].level == upgradeLevel && achivementList[achievementKey].upgradeName == upgradeName) {\n            const szklana = achivementList[achievementKey].upgradeName;\n            const achievement = document.getElementById(achievementKey);\n            const upgradeLevel = achivementList[achievementKey].level;\n            const name = achivementList[achievementKey].locked;\n            const header = achivementList[achievementKey].achievementHeader;\n            const description = achivementList[achievementKey].achievementDescription;\n            const achievementImage = achivementList[achievementKey].iconName;\n\n            achievementCounter++\n            document.getElementById('stat6').innerHTML = achievementCounter + '/xyz';\n            document.getElementById('headline' + szklana + upgradeLevel).innerHTML = header;\n            document.getElementById('specification' + szklana + upgradeLevel).innerHTML = description;\n\n            achievement.querySelector('.achievements-look').classList.add(name);\n            console.log(achievement.querySelector('.achievements-look'))\n            ;(0,_Components_alert_js__WEBPACK_IMPORTED_MODULE_0__.showContent)(header, description, achievementImage);\n            achievementSound();\n         }\n     });\n}\n\nfunction achievementSound() {\n    const sound = document.getElementById(\"achievement_sound\");\n    sound.play();\n}\n\n//# sourceURL=webpack:///./src/Scripts/modules/Achievements.js?");

/***/ }),

/***/ "./src/Scripts/modules/apiLogin.js":
/*!*****************************************!*\
  !*** ./src/Scripts/modules/apiLogin.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"login\": () => (/* binding */ login)\n/* harmony export */ });\nfunction login(params) {\n    if(!localStorage.getItem(\"Token\")){\n        fetch('https://praktyki-trol-clicker-api.herokuapp.com/login').then(response => response.json())\n        .then(data => data.Data.Token).then(token => {\n            localStorage.setItem(\"Token\", token);\n        });\n    }\n}\n\n//# sourceURL=webpack:///./src/Scripts/modules/apiLogin.js?");

/***/ }),

/***/ "./src/Scripts/modules/catchbonusReworked.js":
/*!***************************************************!*\
  !*** ./src/Scripts/modules/catchbonusReworked.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"bonus\": () => (/* binding */ bonus),\n/* harmony export */   \"catchbonusstart\": () => (/* binding */ catchbonusstart)\n/* harmony export */ });\n/* harmony import */ var _Components_format_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Components/format.js */ \"./src/Scripts/Components/format.js\");\n\n\nlet catchbonusaddable = Boolean(true);\n\nfunction getRandomcoordinates() {\n    const mincoordinates = 135;\n    const windowHeight = window.innerHeight - mincoordinates;\n    const windowWidth = window.innerWidth - mincoordinates;\n\n    return{\n        'Height' : Math.floor (Math.random()*(windowHeight - mincoordinates + 1)+ mincoordinates),\n        'Width' : Math.floor (Math.random()*(windowWidth - mincoordinates + 1)+ mincoordinates),\n    } \n  }\n  function makediv(coordinates){ \n    if(catchbonusaddable == true ){\n        const cnt = document.querySelector(\".wrap\");\n        const catchbonus = document.createElement(\"div\");\n        catchbonus.id=\"catchbonus\";\n        catchbonus.classList.add(\"catchbonus\")\n        cnt.appendChild(catchbonus);\n        catchbonus.style.top = coordinates.Height + 'px';\n        catchbonus.style.left = coordinates.Width + 'px';\n        catchbonusaddable = false\n        catchbonus.addEventListener('click', () => {\n            removebonus(catchbonus);\n            catchbonusaddable = true\n        })\n        setTimeout(() => {\n            removebonus(catchbonus);\n            catchbonusaddable = true\n          }, 5000);\n    }\n  }\n  function catchbonusstart(){\n  setInterval(() => {\n    let coordinates = getRandomcoordinates();\n    makediv(coordinates);\n    catchbonusaddable = false\n\n  }, 10000)\n}\n  function removebonus(catchbonus){\n    catchbonus.remove();\n    catchbonusaddable = true\n    \n    }\n    const bonusList = [{\n        type: \"counterValue\"\n      }, {\n        type: \"autoClick\",\n        time: 5000\n      }]\n      function bonus(counter, autoClick) {\n        const max = 1;\n        const min = 0 \n        let randombonus = Math.floor (Math.random()*(max - min + 1)+ min);\n        const bonus = bonusList[randombonus];\n        console.log(bonus.type);\n        if (bonus.type == 'counterValue')  {\n          counter = counter + Math.floor(counter/5);  \n          console.log(Math.floor(counter/5))\n          return { counter };\n      \n         }else {     \n          let oldAutoClick = (0,_Components_format_js__WEBPACK_IMPORTED_MODULE_0__.format)(autoClick);\n          oldAutoClick = oldAutoClick.replace('.',',');\n          autoClick = autoClick + autoClick;\n          let autoClickFormat = (0,_Components_format_js__WEBPACK_IMPORTED_MODULE_0__.format)(autoClick);\n          autoClickFormat = autoClickFormat.replace('.',',')\n          const this2 = document.querySelector(\"body\");\n          let money = document.createElement('div');\n          money.classList.add('click');\n          money.style.fontSize = 'large'\n          money.style.left = 50 + '%';\n          money.style.top = 50 + '%';\n          this2.appendChild(money);\n\n          let moneyClick = document.createElement('span');\n          moneyClick.classList.add('moneyClick2');\n          money.appendChild(moneyClick);\n  \n          moneyClick.textContent = '+'+ oldAutoClick + ' $ na sekunde przez xyz sekund';\n           document.getElementById('moneyPerSecond').innerHTML ='Na sekunde: ' + autoClickFormat +' $';\n           setTimeout(() => {\n            money.remove()\n        },1500);\n\n          document.getElementById('moneyPerSecond').innerHTML ='Na sekunde: ' + autoClickFormat +' $';\n\n          return autoClick;\n        }\n      }\n\n//# sourceURL=webpack:///./src/Scripts/modules/catchbonusReworked.js?");

/***/ }),

/***/ "./src/Scripts/modules/onClickIncrement.js":
/*!*************************************************!*\
  !*** ./src/Scripts/modules/onClickIncrement.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"changeCounterElementText\": () => (/* binding */ changeCounterElementText),\n/* harmony export */   \"counterElement\": () => (/* binding */ counterElement),\n/* harmony export */   \"onClickHandler\": () => (/* binding */ onClickHandler)\n/* harmony export */ });\n/* harmony import */ var _Components_format_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Components/format.js */ \"./src/Scripts/Components/format.js\");\n\n\nconst mobileHeaderH2 = document.querySelector('.mobile_header-h2');\n\nconst counterElement = document.getElementById(\"counter\");\n\nlet returnedFormatedValue = counter;\n\nfunction changeCounterElementText(counter) {\n  returnedFormatedValue = (0,_Components_format_js__WEBPACK_IMPORTED_MODULE_0__.format)(counter);\n  returnedFormatedValue = returnedFormatedValue.replace('.', ',')\n  \n  mobileHeaderH2.textContent = returnedFormatedValue + \" $\";\n  counterElement.textContent = returnedFormatedValue + \" $\";\n}\n\nfunction onClickHandler(counter, extraMoneyPerClick) {\n  counter += extraMoneyPerClick;\n  counter++;\n  changeCounterElementText(counter);\n\n  return counter;\n\n}\n\n\n//# sourceURL=webpack:///./src/Scripts/modules/onClickIncrement.js?");

/***/ }),

/***/ "./src/Scripts/modules/upgrades.js":
/*!*****************************************!*\
  !*** ./src/Scripts/modules/upgrades.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"timer\": () => (/* binding */ timer),\n/* harmony export */   \"upgrade\": () => (/* binding */ upgrade)\n/* harmony export */ });\n/* harmony import */ var _Components_format_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Components/format.js */ \"./src/Scripts/Components/format.js\");\n/* harmony import */ var _Achievements_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Achievements.js */ \"./src/Scripts/modules/Achievements.js\");\n\n\n\n\nlet sumOfUpgrades = 0;\nlet upgradeCostFormat = 0;\nlet returnedFormatedValue = 0;\nlet autoClickFormat;\n\nconst upgradeList = {\n    'otwieracz': {\n        currentCost: 10,\n        level: 0,\n        autoClickValue: 0,\n        extraMoneyPerClick: 1\n    },\n    'mietek': {\n        currentCost: 150,\n        level: 0,\n        autoClickValue: 15,\n        extraMoneyPerClick: 0\n    },\n    'seba': {\n        currentCost: 1200,\n        level: 0,\n        autoClickValue: 100,\n        extraMoneyPerClick: 10\n    },\n    'grazyna': {\n        currentCost: 5000,\n        level: 0,\n        autoClickValue: 223,\n        extraMoneyPerClick: 150\n    },\n    'gang': {\n        currentCost: 30000,\n        level: 0,\n        autoClickValue: 640,\n        extraMoneyPerClick: 300\n    },\n    'monopolowy': {\n        currentCost: 115000,\n        level: 0,\n        autoClickValue: 1230,\n        extraMoneyPerClick: 900\n    },\n    'browar': {\n        currentCost: 750000,\n        level: 0,\n        autoClickValue: 0,\n        extraMoneyPerClick: 4000\n    },\n    'destylarnia': {\n        currentCost: 4000000,\n        level: 0,\n        autoClickValue: 4300,\n        extraMoneyPerClick: 0\n    },\n    'current': {\n        currentAutoClickValue: 0,\n        currentExtraMoneyPerClick: 0\n    },\n}\n\nfunction upgrade(counter, autoClick, extraMoneyPerClick, upgradeName, upgradeDiv, achivementList) {\n    const upgrade = upgradeList[upgradeName];\n    if (counter >= upgrade.currentCost) {\n        counter -= upgrade.currentCost;\n\n        upgrade.currentCost *= 1.15;\n        upgrade.currentCost = (0,_Components_format_js__WEBPACK_IMPORTED_MODULE_0__.round)(upgrade.currentCost, -1);\n        upgrade.level++;\n        sumOfUpgrades++;\n        upgradeList.current.currentAutoClickValue += upgrade.autoClickValue;\n        upgradeList.current.currentExtraMoneyPerClick += upgrade.extraMoneyPerClick;\n\n        (0,_Achievements_js__WEBPACK_IMPORTED_MODULE_1__.osiagniecia)(upgrade.level, upgradeName, achivementList);\n\n        autoClick = upgradeList.current.currentAutoClickValue;\n        extraMoneyPerClick = upgradeList.current.currentExtraMoneyPerClick;\n\n        returnedFormatedValue = (0,_Components_format_js__WEBPACK_IMPORTED_MODULE_0__.format)(counter);\n        returnedFormatedValue = returnedFormatedValue.replace('.', ',')\n        upgradeCostFormat = (0,_Components_format_js__WEBPACK_IMPORTED_MODULE_0__.format)(upgrade.currentCost);\n        upgradeCostFormat = upgradeCostFormat.replace('.', ',')\n        autoClickFormat = (0,_Components_format_js__WEBPACK_IMPORTED_MODULE_0__.format)(autoClick);\n        autoClickFormat = autoClickFormat.replace('.', ',')\n\n        document.getElementById('counter').innerHTML = returnedFormatedValue + ' $';\n        document.getElementById('moneyPerSecond').innerHTML = 'Na sekunde: ' + autoClickFormat + ' $';\n        document.getElementById('stat2').innerHTML = sumOfUpgrades;\n        document.getElementById('stat3').innerHTML = autoClickFormat;\n        upgradeDiv.querySelector('.upgradeLevel').innerHTML = upgrade.level;\n        upgradeDiv.querySelector('.upgradeCost').innerHTML = upgradeCostFormat + ' $';\n    }\n\n    return { counter, autoClick, extraMoneyPerClick };\n}\n\nconst timer = (counter, autoClick) => counter + autoClick;\n\n//# sourceURL=webpack:///./src/Scripts/modules/upgrades.js?");

/***/ }),

/***/ "./src/Catalog/achievements.json":
/*!***************************************!*\
  !*** ./src/Catalog/achievements.json ***!
  \***************************************/
/***/ ((module) => {

"use strict";
eval("module.exports = JSON.parse('{\"otwieracz1\":{\"level\":1,\"upgradeName\":\"otwieracz\",\"iconName\":\"../../Public/Images/ikona-otwieracz.png\",\"unlocked\":false,\"achievementHeader\":\"Pierwszy otwieracz\",\"achievementDescription\":\"Zakupiłeś swój pierwszy otwieracz!\",\"locked\":\"achievements-otwieracz\"},\"otwieracz10\":{\"level\":10,\"upgradeName\":\"otwieracz\",\"iconName\":\"../../Public/Images/ikona-otwieracz.png\",\"unlocked\":false,\"achievementHeader\":\"Dziesiąty otwieracz\",\"achievementDescription\":\"Zakupiłeś dziesiąty otwieracz!\",\"locked\":\"achievements-otwieracz\"},\"otwieracz100\":{\"level\":100,\"upgradeName\":\"otwieracz\",\"iconName\":\"../../Public/Images/ikona-otwieracz.png\",\"unlocked\":false,\"achievementHeader\":\"Setny otwieracz\",\"achievementDescription\":\"Masz już sto otwieraczy!\",\"locked\":\"achievements-otwieracz\"},\"otwieracz1000\":{\"level\":1000,\"upgradeName\":\"otwieracz\",\"iconName\":\"../../Public/Images/ikona-otwieracz.png\",\"unlocked\":false,\"achievementHeader\":\"Tysięczny otwieracz\",\"achievementDescription\":\"Masz już tysiąc otwieraczy\",\"locked\":\"achievements-otwieracz\"},\"mietek1\":{\"level\":1,\"upgradeName\":\"mietek\",\"iconName\":\"../../Public/Images/ikona-mietek.png\",\"unlocked\":false,\"achievementHeader\":\"Pierwszy menelik\",\"achievementDescription\":\"Załatwiłeś sobie pierwszego zaufanego menela\",\"locked\":\"achievements-mietek\"},\"mietek10\":{\"level\":10,\"upgradeName\":\"mietek\",\"iconName\":\"../../Public/Images/ikona-mietek.png\",\"unlocked\":false,\"achievementHeader\":\"Dziesiąty menelik\",\"achievementDescription\":\"Załatwiłeś sobie już dziesiątego zaufanego menela\",\"locked\":\"achievements-mietek\"},\"mietek100\":{\"level\":100,\"upgradeName\":\"mietek\",\"iconName\":\"../../Public/Images/ikona-mietek.png\",\"unlocked\":false,\"achievementHeader\":\"Setny menelik\",\"achievementDescription\":\"Masz już stu zaufanych menelów\",\"locked\":\"achievements-mietek\"},\"mietek1000\":{\"level\":1000,\"upgradeName\":\"mietek\",\"iconName\":\"../../Public/Images/ikona-mietek.png\",\"unlocked\":false,\"achievementHeader\":\"tysięczny menelik\",\"achievementDescription\":\"Masz już tysięczną armię zaufanych meneli\",\"locked\":\"achievements-mietek\"},\"seba1\":{\"level\":1,\"upgradeName\":\"seba\",\"iconName\":\"../../Public/Images/ikona-dostawa.png\",\"unlocked\":false,\"achievementHeader\":\"Pierwszy rycerz ortalionu\",\"achievementDescription\":\"Odnalazłeś pierwszego prawdziwego Sebastiana\",\"locked\":\"achievements-seba\"},\"seba10\":{\"level\":10,\"upgradeName\":\"seba\",\"iconName\":\"../../Public/Images/ikona-dostawa.png\",\"unlocked\":false,\"achievementHeader\":\"Dziesiąty rycerz ortalionu\",\"achievementDescription\":\"Odnalazłeś dziesiątego prawdziwego Sebastiana\",\"locked\":\"achievements-seba\"},\"seba100\":{\"level\":100,\"upgradeName\":\"seba\",\"iconName\":\"../../Public/Images/ikona-dostawa.png\",\"unlocked\":false,\"achievementHeader\":\"Setny rycerz ortalionu\",\"achievementDescription\":\"Masz już sto prawdziwych rycerzy ortalionu w swoich szeregach\",\"locked\":\"achievements-seba\"},\"seba1000\":{\"level\":1000,\"upgradeName\":\"seba\",\"iconName\":\"../../Public/Images/ikona-dostawa.png\",\"unlocked\":false,\"achievementHeader\":\"Tysięczny rycerz ortalionu\",\"achievementDescription\":\"Masz już tysięczną armię prawdziwych rycerzy ortalionu w swoich szeregach\",\"locked\":\"achievements-seba\"},\"ekspedientka1\":{\"level\":1,\"upgradeName\":\"grazyna\",\"iconName\":\"../../Public/Images/ikona-ekspedientka.png\",\"unlocked\":false,\"achievementHeader\":\"Pierwsza Grażynka\",\"achievementDescription\":\"Pierwsza kasjerka Grażynka sprzedaje twój browar\",\"locked\":\"achievements-ekspedientka\"},\"ekspedientka10\":{\"level\":10,\"upgradeName\":\"grazyna\",\"iconName\":\"../../Public/Images/ikona-ekspedientka.png\",\"unlocked\":false,\"achievementHeader\":\"Dziesiąta Grażynka\",\"achievementDescription\":\"Dziesiąta kasjerka Grażynka sprzedaje twój browar \",\"locked\":\"achievements-ekspedientka\"},\"ekspedientka100\":{\"level\":100,\"upgradeName\":\"grazyna\",\"iconName\":\"../../Public/Images/ikona-ekspedientka.png\",\"unlocked\":false,\"achievementHeader\":\"Setna Grażynka\",\"achievementDescription\":\"Setna kasjerka Grażynka sprzedaje twój browar\",\"locked\":\"achievements-ekspedientka\"},\"ekspedientka1000\":{\"level\":1000,\"upgradeName\":\"grazyna\",\"iconName\":\"../../Public/Images/ikona-ekspedientka.png\",\"unlocked\":false,\"achievementHeader\":\"Tysięczna Grażynka\",\"achievementDescription\":\"Tysiąć Grażynek sprzedaje już twoje piwo\",\"locked\":\"achievements-ekspedientka\"},\"gang1\":{\"level\":1,\"upgradeName\":\"gang\",\"iconName\":\"../../Public/Images/ikona-hurtownia.png\",\"unlocked\":false,\"achievementHeader\":\"Pierwsze piwko gangu z podstawówki\",\"achievementDescription\":\"pierwsze piwko szóstoklasistów\",\"locked\":\"achievements-gang\"},\"gang10\":{\"level\":10,\"upgradeName\":\"gang\",\"iconName\":\"../../Public/Images/ikona-hurtownia.png\",\"unlocked\":false,\"achievementHeader\":\"Dziesiąte piwko gangu z podstawówki\",\"achievementDescription\":\"Dziesiąty piwko szóstoklasistów\",\"locked\":\"achievements-gang\"},\"gang100\":{\"level\":100,\"upgradeName\":\"gang\",\"iconName\":\"../../Public/Images/ikona-hurtownia.png\",\"unlocked\":false,\"achievementHeader\":\"Setne piwko gangu z podstawówki\",\"achievementDescription\":\"Gang z podstawówki zakupił już swojego tysięcznego browara\",\"locked\":\"achievements-gang\"},\"gang1000\":{\"level\":1000,\"upgradeName\":\"gang\",\"iconName\":\"../../Public/Images/ikona-hurtownia.png\",\"unlocked\":false,\"achievementHeader\":\"Jak oni szybko dorastają\",\"achievementDescription\":\"Gang z podstawówki zakupił już swojego tysięcznego browara\",\"locked\":\"achievements-gang\"},\"monopolowy1\":{\"level\":1,\"upgradeName\":\"monopolowy\",\"iconName\":\"../../Public/Images/ikona-monopolowy.png\",\"unlocked\":false,\"achievementHeader\":\"Pierwszy sklep monopolowy\",\"achievementDescription\":\"To początek czegoś wielkiego\",\"locked\":\"achievements-monopolowy\"},\"monopolowy10\":{\"level\":10,\"upgradeName\":\"monopolowy\",\"iconName\":\"../../Public/Images/ikona-monopolowy.png\",\"unlocked\":false,\"achievementHeader\":\"Dziesiąty sklep monopolowy\",\"achievementDescription\":\"Rozpoczyna się twój monopol\",\"locked\":\"achievements-monopolowy\"},\"monopolowy100\":{\"level\":100,\"upgradeName\":\"monopolowy\",\"iconName\":\"../../Public/Images/ikona-monopolowy.png\",\"unlocked\":false,\"achievementHeader\":\"Setny sklep monopolowy\",\"achievementDescription\":\"Masz już wielką franczyzę monopolową\",\"locked\":\"achievements-monopolowy\"},\"monopolowy1000\":{\"level\":1000,\"upgradeName\":\"monopolowy\",\"iconName\":\"../../Public/Images/ikona-monopolowy.png\",\"unlocked\":false,\"achievementHeader\":\"Tysięczny sklep monopolowy\",\"achievementDescription\":\"Jesteś już najbardzej znanym sklepem monopolowym w polsce\",\"locked\":\"achievements-monopolowy\"},\"browar1\":{\"level\":1,\"upgradeName\":\"browar\",\"iconName\":\"../../Public/Images/ikona-browar.png\",\"unlocked\":false,\"achievementHeader\":\"Pierwszy browar\",\"achievementDescription\":\"Rozpocznij własną manufakturę piwną\",\"locked\":\"achievements-browar\"},\"browar10\":{\"level\":10,\"upgradeName\":\"browar\",\"iconName\":\"../../Public/Images/ikona-browar.png\",\"unlocked\":false,\"achievementHeader\":\"Schodzi jak świeże bułeczki\",\"achievementDescription\":\"Postaw już 10 rozlewni piwa\",\"locked\":\"achievements-browar\"},\"browar100\":{\"level\":100,\"upgradeName\":\"browar\",\"iconName\":\"../../Public/Images/ikona-browar.png\",\"unlocked\":false,\"achievementHeader\":\"Rozpocznasz produkcję międzynarodową\",\"achievementDescription\":\"Twoje browary sprzedają się za granicą jak Wachu na komendzie\",\"locked\":\"achievements-browar\"},\"browar1000\":{\"level\":1000,\"upgradeName\":\"browar\",\"iconName\":\"../../Public/Images/ikona-browar.png\",\"unlocked\":false,\"achievementHeader\":\"Monopol browarowy\",\"achievementDescription\":\"Jesteś w stanie uzupełnić zapotrzebowanie świata na piwo\",\"locked\":\"achievements-browar\"},\"destylarnia1\":{\"level\":1,\"upgradeName\":\"destylarnia\",\"iconName\":\"../../Public/Images/ikona-destylarnia.png\",\"unlocked\":false,\"achievementHeader\":\"Pierwsza destylarnia\",\"achievementDescription\":\"Rozpocznij produkcję alkoholi wysoko procentowych\",\"locked\":\"achievements-destylarnia\"},\"destylarnia10\":{\"level\":10,\"upgradeName\":\"destylarnia\",\"iconName\":\"../../Public/Images/ikona-destylarnia.png\",\"unlocked\":false,\"achievementHeader\":\"Dziesiąta destylarnia\",\"achievementDescription\":\"Rozpocznij produkcję na wielką skalę\",\"locked\":\"achievements-destylarnia\"},\"destylarnia100\":{\"level\":100,\"upgradeName\":\"destylarnia\",\"iconName\":\"../../Public/Images/ikona-destylarnia.png\",\"unlocked\":false,\"achievementHeader\":\"Setna destylarnia\",\"achievementDescription\":\"Bądż jedną z bardziej rozpoznawanych marek alkoholowych na świecie\",\"locked\":\"achievements-destylarnia\"},\"destylarnia1000\":{\"level\":1000,\"upgradeName\":\"destylarnia\",\"iconName\":\"../../Public/Images/ikona-destylarnia.png\",\"unlocked\":false,\"achievementHeader\":\"Tysięczna destylarnia\",\"achievementDescription\":\"Przejmij pałeczkę marki królowej alkoholów\",\"locked\":\"achievements-destylarnia\"}}');\n\n//# sourceURL=webpack:///./src/Catalog/achievements.json?");

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
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./Layout/main.js");
/******/ 	
/******/ })()
;