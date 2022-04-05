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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"clickAnimation\": () => (/* binding */ clickAnimation)\n/* harmony export */ });\n/* harmony import */ var _src_Scripts_Components_format_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../src/Scripts/Components/format.js */ \"./src/Scripts/Components/format.js\");\n\r\n\r\nfunction clickAnimation(e, extraMoneyPerClick, counterButtonElement){\r\n    const moneyOnClick = extraMoneyPerClick + 1;\r\n    let moneyOnClickFormated = (0,_src_Scripts_Components_format_js__WEBPACK_IMPORTED_MODULE_0__.format)(moneyOnClick);\r\n    moneyOnClickFormated = moneyOnClickFormated.replace('.',',')\r\n    \r\n    const x = e.clientX - e.target.offsetLeft;\r\n    const y = e.clientY - e.target.offsetTop;\r\n\r\n    const beerWrap = document.createElement('span');\r\n    beerWrap.classList.add('click');\r\n    beerWrap.style.left = x + 'px';\r\n    beerWrap.style.top = y + 'px';\r\n    counterButtonElement.appendChild(beerWrap);\r\n\r\n    const beer = document.createElement('span');\r\n    beer.classList.add('click-beer');\r\n    beerWrap.appendChild(beer);\r\n\r\n    const moneyClickWrap = document.createElement('div');\r\n    moneyClickWrap.classList.add('click');\r\n    moneyClickWrap.style.left = x + 'px';\r\n    moneyClickWrap.style.top = y + 'px';\r\n    counterButtonElement.appendChild(moneyClickWrap);\r\n\r\n    const moneyClick = document.createElement('span');\r\n    moneyClick.classList.add('moneyClick');\r\n    moneyClickWrap.appendChild(moneyClick);\r\n\r\n    moneyClick.textContent = '+' + moneyOnClickFormated;\r\n\r\n    setTimeout(() => {\r\n        moneyClickWrap.remove()\r\n    },1500);\r\n\r\n    setTimeout(() => {\r\n        beerWrap.remove()\r\n    },1000);\r\n}\n\n//# sourceURL=webpack:///./Layout/animation.js?");

/***/ }),

/***/ "./Layout/main.js":
/*!************************!*\
  !*** ./Layout/main.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _src_Scripts_Components_format_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../src/Scripts/Components/format.js */ \"./src/Scripts/Components/format.js\");\n/* harmony import */ var _src_Scripts_modules_catchbonusReworked__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src/Scripts/modules/catchbonusReworked.js */ \"./src/Scripts/modules/catchbonusReworked.js\");\n/* harmony import */ var _src_Scripts_modules_menu_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/Scripts/modules/menu.js */ \"./src/Scripts/modules/menu.js\");\n/* harmony import */ var _src_Scripts_modules_menu_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_src_Scripts_modules_menu_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _src_Scripts_modules_onClickIncrement_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/Scripts/modules/onClickIncrement.js */ \"./src/Scripts/modules/onClickIncrement.js\");\n/* harmony import */ var _src_Scripts_modules_upgrades_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../src/Scripts/modules/upgrades.js */ \"./src/Scripts/modules/upgrades.js\");\n/* harmony import */ var _animation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./animation */ \"./Layout/animation.js\");\n/* harmony import */ var _src_Scripts_modules_apiLogin_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../src/Scripts/modules/apiLogin.js */ \"./src/Scripts/modules/apiLogin.js\");\n/* harmony import */ var _src_Scripts_modules_mobileMenu_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../src/Scripts/modules/mobileMenu.js */ \"./src/Scripts/modules/mobileMenu.js\");\n/* harmony import */ var _src_Scripts_modules_mobileMenu_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_src_Scripts_modules_mobileMenu_js__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _src_Catalog_achievements_json__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../src/Catalog/achievements.json */ \"./src/Catalog/achievements.json\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nwindow.addEventListener('DOMContentLoaded', (event) => { console.log('DOM fully loaded and parsed'); });\r\n\r\n// guzik do klikania\r\nconst counterButtonElement = document.getElementById(\"counter-button\");\r\nconst clicker = document.querySelector('.clicker-img');\r\n\r\n// ulepszenia\r\nconst upgradeFromHtml = document.getElementsByClassName(\"menu__upgrades-list-item\");\r\n\r\nlet counter = 100000000;\r\nlet autoClick = 0;\r\nlet extraMoneyPerClick = 0;\r\n\r\n(0,_src_Scripts_modules_apiLogin_js__WEBPACK_IMPORTED_MODULE_6__.login)();\r\n\r\nif (upgradeFromHtml.length) {\r\n    for (let name = 0; name < upgradeFromHtml.length; name++) {\r\n        const upgradeDiv = upgradeFromHtml[name];\r\n        const upgradeId = upgradeDiv;\r\n\r\n        upgradeDiv.addEventListener('click', (event) => {\r\n            const result = (0,_src_Scripts_modules_upgrades_js__WEBPACK_IMPORTED_MODULE_4__.upgrade)(counter, autoClick, extraMoneyPerClick, upgradeId.id, upgradeDiv, _src_Catalog_achievements_json__WEBPACK_IMPORTED_MODULE_8__);\r\n            upgradeSound();\r\n            counter = result.counter;\r\n            autoClick = result.autoClick;\r\n            extraMoneyPerClick = result.extraMoneyPerClick;\r\n        });\r\n    }\r\n}\r\n\r\nif (counterButtonElement) {\r\n    counterButtonElement.addEventListener('click', (event) => {\r\n        counter = (0,_src_Scripts_modules_onClickIncrement_js__WEBPACK_IMPORTED_MODULE_3__.onClickHandler)(counter, extraMoneyPerClick);\r\n        clickSound();\r\n})\r\n}\r\n\r\nfunction clickSound() {\r\n    const sound = document.getElementById(\"click_sound\");\r\n    sound.preload = 'auto';\r\nsound.load();\r\n    sound.play();\r\n}\r\n\r\nfunction upgradeSound() {\r\n    const sound = document.getElementById(\"upgrade_sound\");\r\n    sound.play();\r\n    \r\n}\r\n\r\n(0,_src_Scripts_modules_catchbonusReworked__WEBPACK_IMPORTED_MODULE_1__.catchbonusstart)();\r\n\r\ndocument.getElementById(\"wrap\").addEventListener('click', (event) => {\r\n    if (event.target && event.target.matches(\".catchbonus\")) {\r\n        let result = (0,_src_Scripts_modules_catchbonusReworked__WEBPACK_IMPORTED_MODULE_1__.bonus)(counter, autoClick);\r\n        console.log(result)\r\n        if (result.autoClick) {\r\n            let oldAutoClick = (0,_src_Scripts_Components_format_js__WEBPACK_IMPORTED_MODULE_0__.format)(autoClick)\r\n            oldAutoClick = oldAutoClick.replace('.', ',')\r\n\r\n            setTimeout(() => {\r\n                autoClick = autoClick - oldAutoClick;\r\n                let autoClickFormat = (0,_src_Scripts_Components_format_js__WEBPACK_IMPORTED_MODULE_0__.format)(autoClick);\r\n                autoClickFormat = autoClickFormat.replace('.', ',');\r\n                //autoClick = autoClickFormat\r\n                document.getElementById('moneyPerSecond').innerHTML = 'Na sekunde: ' + autoClickFormat + ' $';\r\n                autoClickFormat = autoClickFormat.replace(',', '.')\r\n            }, 5000);\r\n            autoClick = result.autoClick\r\n        } else if (result.counter) {\r\n            counter = result.counter\r\n            //const this2 = document.getElementsByTagName('body');\r\n            const this2 = document.querySelector(\"body\");\r\n            let money = document.createElement('div');\r\n            money.classList.add('click');\r\n            // money.id='money';\r\n            //money.style.backgroundColor = \"grey\"\r\n            //money.style.fontSize = 'large'\r\n            money.style.left = 50 + '%';\r\n            money.style.top = 50 + '%';\r\n            this2.appendChild(money);\r\n\r\n            let moneyClick = document.createElement('span');\r\n            moneyClick.classList.add('moneyClick2');\r\n            money.appendChild(moneyClick);\r\n            let bonuscounter = (0,_src_Scripts_Components_format_js__WEBPACK_IMPORTED_MODULE_0__.format)(Math.floor(counter / 5))\r\n            bonuscounter = bonuscounter.replace('.', ',')\r\n\r\n\r\n\r\n            moneyClick.textContent = '+' + bonuscounter + ' $';\r\n\r\n\r\n            setTimeout(() => {\r\n                money.remove()\r\n            }, 1500);\r\n        }\r\n    }\r\n});\r\n\r\nsetInterval(() => {\r\n    counter = (0,_src_Scripts_modules_upgrades_js__WEBPACK_IMPORTED_MODULE_4__.timer)(counter, autoClick);\r\n    (0,_src_Scripts_modules_onClickIncrement_js__WEBPACK_IMPORTED_MODULE_3__.changeCounterElementText)(counter);\r\n}, 1000)\r\n\r\n\r\nif(clicker){\r\n    clicker.addEventListener('click', (e) => {\r\n        (0,_animation__WEBPACK_IMPORTED_MODULE_5__.clickAnimation)(e, extraMoneyPerClick, clicker);\r\n    })\r\n}\r\n\r\n\r\n\r\n\r\n// mobileHome.addEventListener('click', (e) => {\r\n//     changeToHome();\r\n// });\r\n\r\n// mobileUpgrade.addEventListener('click', (e) => {\r\n//     changeToUpgrade();\r\n// });\r\n\r\n// mobileAchievements.addEventListener('click', (e) => {\r\n//     changeToAchievements();\r\n// });\r\n\r\n// mobileStats.addEventListener('click', (e) => {\r\n//     changeToStats();\r\n// });\r\n\r\n// mobileHeaderBtn.addEventListener('click', (e) => {\r\n//     closeMenu();\r\n// });\n\n//# sourceURL=webpack:///./Layout/main.js?");

/***/ }),

/***/ "./src/Scripts/Components/alert.js":
/*!*****************************************!*\
  !*** ./src/Scripts/Components/alert.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"showContent\": () => (/* binding */ showContent)\n/* harmony export */ });\nfunction showContent(alertmessage, text, icon) {\r\n    const temp = document.getElementsByTagName(\"template\")[0];\r\n    const clon = temp.content.cloneNode(true);\r\n    const poptext = document.getElementById('PopUpText');\r\n\r\n    clon.querySelector(\"#achievementPopUp .title\").textContent = text;\r\n    clon.querySelector(\"#achievementPopUp .PUT\").textContent = alertmessage;    \r\n    clon.querySelector(\"#achievementPopUp .icon\").src = ('../Images/' + icon);\r\n    document.body.appendChild(clon);\r\n\r\n    setTimeout(() => {\r\n       deleteContent(clon)\r\n    }, 5000);\r\n\r\n    const closePopUpButtons = document.querySelectorAll('[data-close-button]')\r\n\r\n    closePopUpButtons.forEach(button => {\r\n        button.addEventListener('click', () => {\r\n            const close = button.closest('.achievement')\r\n            // console.log(close)\r\n            deleteContent(clon)\r\n        })\r\n    })\r\n}\r\nfunction deleteContent(clon) {\r\n    document.getElementById(\"achievementPopUp\").remove()\r\n};\n\n//# sourceURL=webpack:///./src/Scripts/Components/alert.js?");

/***/ }),

/***/ "./src/Scripts/Components/format.js":
/*!******************************************!*\
  !*** ./src/Scripts/Components/format.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"format\": () => (/* binding */ format),\n/* harmony export */   \"round\": () => (/* binding */ round)\n/* harmony export */ });\nconst pow = Math.pow,\r\nfloor = Math.floor,\r\nabs = Math.abs,\r\nlog = Math.log;\r\n\r\nconst abbrev = [\"k\",\"m\",\"b\",\"t\",\"aa\",\"ab\",\"ac\",\"ad\",\"ae\",\"af\",\"ag\",\"ah\",\"ai\",\"aj\",\"ak\",\"al\",\"am\",\"an\",\"ao\",\"ap\",\"ar\",\"as\",\"at\",\"au\",\"aw\",\"az\",\"ba\",];\r\n\r\nfunction round(n, precision) {\r\n  const prec = Math.pow(10, precision + 1);\r\n  return Math.floor(n * prec) / prec;\r\n}\r\n\r\nfunction format(n) {\r\n  let base = floor(log(abs(n)) / log(1000));\r\n  const suffix = abbrev[Math.min(100, base - 1)];\r\n  base = abbrev.indexOf(suffix) + 1;\r\n  return suffix ? round(n / pow(1000, base), 2) + suffix : \"\" + n;\r\n}\n\n//# sourceURL=webpack:///./src/Scripts/Components/format.js?");

/***/ }),

/***/ "./src/Scripts/modules/Achievements.js":
/*!*********************************************!*\
  !*** ./src/Scripts/modules/Achievements.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"osiagniecia\": () => (/* binding */ osiagniecia)\n/* harmony export */ });\n/* harmony import */ var _Components_alert_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Components/alert.js */ \"./src/Scripts/Components/alert.js\");\n\r\n\r\nfunction osiagniecia(upgradeLevel, upgradeName, achivementList ) {\r\n    const achievementLevel = Object.keys(achivementList);\r\n        achievementLevel.forEach(achievementKey => {\r\n            if (achivementList[achievementKey].level == upgradeLevel && achivementList[achievementKey].upgradeName == upgradeName) {\r\n                const header = achivementList[achievementKey].achievementHeader;\r\n                const description = achivementList[achievementKey].achievementDescription;\r\n                const achievementImage = achivementList[achievementKey].iconName;\r\n            \r\n                (0,_Components_alert_js__WEBPACK_IMPORTED_MODULE_0__.showContent)(header, description, achievementImage);\r\n                achievementSound();\r\n            }\r\n        });\r\n    }\r\n\r\n\r\n    function achievementSound() {\r\n        const sound = document.getElementById(\"achievement_sound\");\r\n        sound.play();\r\n    }\n\n//# sourceURL=webpack:///./src/Scripts/modules/Achievements.js?");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"bonus\": () => (/* binding */ bonus),\n/* harmony export */   \"catchbonusstart\": () => (/* binding */ catchbonusstart)\n/* harmony export */ });\n/* harmony import */ var _Components_format_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Components/format.js */ \"./src/Scripts/Components/format.js\");\n\r\n\r\nlet catchbonusaddable = Boolean(true);\r\n\r\nfunction getRandomcoordinates() {\r\n    const mincoordinates = 135;\r\n    const windowHeight = window.innerHeight - mincoordinates;\r\n    const windowWidth = window.innerWidth - mincoordinates;\r\n\r\n    return{\r\n        'Height' : Math.floor (Math.random()*(windowHeight - mincoordinates + 1)+ mincoordinates),\r\n        'Width' : Math.floor (Math.random()*(windowWidth - mincoordinates + 1)+ mincoordinates),\r\n    } \r\n  }\r\n  function makediv(coordinates){ \r\n    if(catchbonusaddable == true ){\r\n        const cnt = document.querySelector(\".wrap\");\r\n        const catchbonus = document.createElement(\"div\");\r\n        catchbonus.id=\"catchbonus\";\r\n        catchbonus.classList.add(\"catchbonus\")\r\n        cnt.appendChild(catchbonus);\r\n        catchbonus.style.top = coordinates.Height + 'px';\r\n        catchbonus.style.left = coordinates.Width + 'px';\r\n        catchbonusaddable = false\r\n        catchbonus.addEventListener('click', () => {\r\n            removebonus(catchbonus);\r\n            catchbonusaddable = true\r\n        })\r\n        setTimeout(() => {\r\n            removebonus(catchbonus);\r\n            catchbonusaddable = true\r\n          }, 5000);\r\n    }\r\n  }\r\n  function catchbonusstart(){\r\n  setInterval(() => {\r\n    let coordinates = getRandomcoordinates();\r\n    makediv(coordinates);\r\n    catchbonusaddable = false\r\n\r\n  }, 10000)\r\n}\r\n  function removebonus(catchbonus){\r\n    catchbonus.remove();\r\n    catchbonusaddable = true\r\n    \r\n    }\r\n    const bonusList = [{\r\n        type: \"counterValue\"\r\n      }, {\r\n        type: \"autoClick\",\r\n        time: 5000\r\n      }]\r\n      function bonus(counter, autoClick) {\r\n        const max = 1;\r\n        const min = 0 \r\n        let randombonus = Math.floor (Math.random()*(max - min + 1)+ min);\r\n        const bonus = bonusList[randombonus];\r\n        console.log(bonus.type);\r\n        if (bonus.type == 'counterValue')  {\r\n          counter = counter + Math.floor(counter/5);  \r\n          console.log(Math.floor(counter/5))\r\n          return { counter };\r\n      \r\n         }else {     \r\n          let oldAutoClick = (0,_Components_format_js__WEBPACK_IMPORTED_MODULE_0__.format)(autoClick);\r\n          oldAutoClick = oldAutoClick.replace('.',',');\r\n          autoClick = autoClick + autoClick;\r\n          let autoClickFormat = (0,_Components_format_js__WEBPACK_IMPORTED_MODULE_0__.format)(autoClick);\r\n          autoClickFormat = autoClickFormat.replace('.',',')\r\n          const this2 = document.querySelector(\"body\");\r\n          let money = document.createElement('div');\r\n          money.classList.add('click');\r\n          money.style.fontSize = 'large'\r\n          money.style.left = 50 + '%';\r\n          money.style.top = 50 + '%';\r\n          this2.appendChild(money);\r\n\r\n          let moneyClick = document.createElement('span');\r\n          moneyClick.classList.add('moneyClick2');\r\n          money.appendChild(moneyClick);\r\n  \r\n          moneyClick.textContent = '+'+ oldAutoClick + ' $ na sekunde przez xyz sekund';\r\n           document.getElementById('moneyPerSecond').innerHTML ='Na sekunde: ' + autoClickFormat +' $';\r\n           setTimeout(() => {\r\n            money.remove()\r\n        },1500);\r\n\r\n          document.getElementById('moneyPerSecond').innerHTML ='Na sekunde: ' + autoClickFormat +' $';\r\n\r\n          return autoClick;\r\n        }\r\n      }\n\n//# sourceURL=webpack:///./src/Scripts/modules/catchbonusReworked.js?");

/***/ }),

/***/ "./src/Scripts/modules/menu.js":
/*!*************************************!*\
  !*** ./src/Scripts/modules/menu.js ***!
  \*************************************/
/***/ (() => {

eval("const buttons = document.querySelectorAll('.menu-item');\r\nconst menuDivList = document.querySelectorAll('.menu__div-list');\r\n\r\nbuttons.forEach((button) => {\r\n    button.addEventListener('click', () => {\r\n\r\n        const dataKey = button.getAttribute('data-key');\r\n\r\n        console.log(dataKey);\r\n\r\n        let menuCategoryId =  document.querySelector('#' + dataKey);\r\n\r\n        console.log(menuCategoryId);\r\n\r\n        for(let i = 0; i < buttons.length ;i++){\r\n            buttons[i].classList.remove('active--menu-item');\r\n            menuDivList[i].classList.remove('menu__div--active');\r\n        }\r\n        \r\n        button.classList.add('active--menu-item');\r\n        menuCategoryId.classList.add('menu__div--active');\r\n    })\r\n})\n\n//# sourceURL=webpack:///./src/Scripts/modules/menu.js?");

/***/ }),

/***/ "./src/Scripts/modules/mobileMenu.js":
/*!*******************************************!*\
  !*** ./src/Scripts/modules/mobileMenu.js ***!
  \*******************************************/
/***/ (() => {

eval("const navigation__list = document.querySelectorAll('.navigation__list');\r\n\r\nfunction activeLink() {\r\n    navigation__list.forEach((item) => item.classList.remove('active'));\r\n    this.classList.add('active');\r\n}\r\nnavigation__list.forEach((item) => item.addEventListener('click', activeLink));\r\n\r\nconst menu = document.querySelector('.menu');\r\nconst mobileButtons = document.querySelectorAll('.mobileMenu-btn');\r\nconst menuDivList = document.querySelectorAll('.menu__div-list');\r\nconst exitBtn = document.querySelectorAll('.exit-btn');\r\nconst mobileHome = document.querySelector('.mobileHome');\r\n\r\nmobileButtons.forEach((button) => {\r\n    button.addEventListener('click', () => {\r\n        const dataKey = button.getAttribute('data-key');\r\n\r\n        console.log(dataKey);\r\n\r\n        let menuCategoryId =  document.querySelector('#' + dataKey);\r\n\r\n        console.log(menuCategoryId);\r\n\r\n        for(let i = 0; i < menuDivList.length ;i++){\r\n            menuDivList[i].classList.remove('menu__div--active');\r\n        }\r\n                    \r\n        menuCategoryId.classList.add('menu__div--active');\r\n        menu.classList.add('mobileMenu');\r\n\r\n        exitBtn.forEach((exit) => {\r\n            exit.addEventListener('click', () => {\r\n                \r\n                for(let i=0; i < mobileButtons.length ;i++){\r\n                    mobileButtons[i].classList.remove('active');\r\n                }\r\n                menu.classList.remove('mobileMenu');\r\n                mobileHome.classList.add('active');\r\n            })\r\n        })\r\n    })\r\n})\n\n//# sourceURL=webpack:///./src/Scripts/modules/mobileMenu.js?");

/***/ }),

/***/ "./src/Scripts/modules/onClickIncrement.js":
/*!*************************************************!*\
  !*** ./src/Scripts/modules/onClickIncrement.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"changeCounterElementText\": () => (/* binding */ changeCounterElementText),\n/* harmony export */   \"counterElement\": () => (/* binding */ counterElement),\n/* harmony export */   \"onClickHandler\": () => (/* binding */ onClickHandler)\n/* harmony export */ });\n/* harmony import */ var _Components_format_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Components/format.js */ \"./src/Scripts/Components/format.js\");\n\r\n\r\nconst mobileHeaderH2 = document.querySelector('.mobile_header-h2');\r\n\r\nconst counterElement = document.getElementById(\"counter\");\r\n\r\nlet returnedFormatedValue = counter;\r\n\r\nfunction changeCounterElementText(counter) {\r\n  returnedFormatedValue = (0,_Components_format_js__WEBPACK_IMPORTED_MODULE_0__.format)(counter);\r\n  returnedFormatedValue = returnedFormatedValue.replace('.', ',')\r\n  \r\n  mobileHeaderH2.textContent = returnedFormatedValue + \" $\";\r\n  counterElement.textContent = returnedFormatedValue + \" $\";\r\n}\r\n\r\nfunction onClickHandler(counter, extraMoneyPerClick) {\r\n  counter += extraMoneyPerClick;\r\n  counter++;\r\n  changeCounterElementText(counter);\r\n\r\n  return counter;\r\n\r\n}\r\n\n\n//# sourceURL=webpack:///./src/Scripts/modules/onClickIncrement.js?");

/***/ }),

/***/ "./src/Scripts/modules/upgrades.js":
/*!*****************************************!*\
  !*** ./src/Scripts/modules/upgrades.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"autoClickFormat\": () => (/* binding */ autoClickFormat),\n/* harmony export */   \"timer\": () => (/* binding */ timer),\n/* harmony export */   \"updateList\": () => (/* binding */ updateList),\n/* harmony export */   \"upgrade\": () => (/* binding */ upgrade)\n/* harmony export */ });\n/* harmony import */ var _Components_format_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Components/format.js */ \"./src/Scripts/Components/format.js\");\n/* harmony import */ var _Achievements_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Achievements.js */ \"./src/Scripts/modules/Achievements.js\");\n\r\n\r\n\r\n\r\nlet sumOfUpgrades = 0;\r\nlet upgradeCostFormat = 0;\r\nlet returnedFormatedValue = 0;\r\nlet autoClickFormat;\r\n\r\nconst updateList = {\r\n    'otwieracz': {\r\n        currentCost: 10,\r\n        level: 0,\r\n        autoClickValue: 0,\r\n        extraMoneyPerClick: 1\r\n    },\r\n    'mietek': {\r\n        currentCost: 150,\r\n        level: 0,\r\n        autoClickValue: 15,\r\n        extraMoneyPerClick: 0\r\n    },\r\n    'seba': {\r\n        currentCost: 1200,\r\n        level: 0,\r\n        autoClickValue: 100,\r\n        extraMoneyPerClick: 10\r\n    },\r\n    'grazyna': {\r\n        currentCost: 5000,\r\n        level: 0,\r\n        autoClickValue: 223,\r\n        extraMoneyPerClick: 150\r\n    },\r\n    'gang': {\r\n        currentCost: 30000,\r\n        level: 0,\r\n        autoClickValue: 640,\r\n        extraMoneyPerClick: 300\r\n    },\r\n    'monopolowy': {\r\n        currentCost: 115000,\r\n        level: 0,\r\n        autoClickValue: 1230,\r\n        extraMoneyPerClick: 900\r\n    },\r\n    'browar': {\r\n        currentCost: 750000,\r\n        level: 0,\r\n        autoClickValue: 0,\r\n        extraMoneyPerClick: 4000\r\n    },\r\n    'destylarnia': {\r\n        currentCost: 4000000,\r\n        level: 0,\r\n        autoClickValue: 4300,\r\n        extraMoneyPerClick: 0\r\n    },\r\n    'current': {\r\n        currentAutoClickValue: 0,\r\n        currentExtraMoneyPerClick: 0\r\n    },\r\n}\r\n\r\nfunction upgrade(counter, autoClick, extraMoneyPerClick, upgradeName, upgradeDiv, achivementList) {\r\n    const upgrade = updateList[upgradeName];\r\n    if (counter >= upgrade.currentCost) {\r\n        counter -= upgrade.currentCost;\r\n        \r\n        upgrade.currentCost *= 1.15;\r\n        upgrade.currentCost = (0,_Components_format_js__WEBPACK_IMPORTED_MODULE_0__.round)(upgrade.currentCost, -1);\r\n        upgrade.level++;\r\n        sumOfUpgrades++;\r\n        updateList.current.currentAutoClickValue += upgrade.autoClickValue;\r\n        updateList.current.currentExtraMoneyPerClick += upgrade.extraMoneyPerClick;\r\n        \r\n        (0,_Achievements_js__WEBPACK_IMPORTED_MODULE_1__.osiagniecia)(upgrade.level, upgradeName, achivementList);\r\n\r\n        autoClick = updateList.current.currentAutoClickValue;\r\n        extraMoneyPerClick = updateList.current.currentExtraMoneyPerClick;\r\n\r\n        returnedFormatedValue = (0,_Components_format_js__WEBPACK_IMPORTED_MODULE_0__.format)(counter);\r\n        returnedFormatedValue = returnedFormatedValue.replace('.', ',')\r\n        upgradeCostFormat = (0,_Components_format_js__WEBPACK_IMPORTED_MODULE_0__.format)(upgrade.currentCost);\r\n        upgradeCostFormat = upgradeCostFormat.replace('.', ',')\r\n        autoClickFormat = (0,_Components_format_js__WEBPACK_IMPORTED_MODULE_0__.format)(autoClick);\r\n        autoClickFormat = autoClickFormat.replace('.', ',')\r\n\r\n        document.getElementById('counter').innerHTML = returnedFormatedValue + ' $';\r\n        document.getElementById('moneyPerSecond').innerHTML = 'Na sekunde: ' + autoClickFormat + ' $';\r\n        document.getElementById('stat2').innerHTML = sumOfUpgrades;\r\n        document.getElementById('stat3').innerHTML = autoClickFormat;\r\n        upgradeDiv.querySelector('.upgradeLevel').innerHTML = upgrade.level;\r\n        upgradeDiv.querySelector('.upgradeCost').innerHTML = upgradeCostFormat + ' $';\r\n    }\r\n\r\n    return { counter, autoClick, extraMoneyPerClick };\r\n}\r\n\r\nconst timer = (counter, autoClick) => counter + autoClick;\n\n//# sourceURL=webpack:///./src/Scripts/modules/upgrades.js?");

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