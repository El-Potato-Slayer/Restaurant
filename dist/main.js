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

/***/ "./src/homepage.js":
/*!*************************!*\
  !*** ./src/homepage.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"intro\": () => (/* binding */ intro),\n/* harmony export */   \"cardSection\": () => (/* binding */ cardSection)\n/* harmony export */ });\nfunction intro() {\r\n  const container = document.getElementById('content').appendChild(document.createElement('div'))\r\n  container.classList.add('nav-content')\r\n  const section = container.appendChild(document.createElement('section'))\r\n  section.classList.add('intro', 'relative', 'text-white')\r\n  const h1 = section.appendChild(document.createElement('h1'))\r\n  h1.innerHTML = 'Le Poes'\r\n  const h2 = section.appendChild(document.createElement('h2'))\r\n  h2.innerHTML = 'A Taste Of France'\r\n  const rosemary = section.appendChild(document.createElement('img'))\r\n  rosemary.id = 'rosemary1'\r\n  rosemary.src = './assets/images/rosemary.png'\r\n  const tomatoes = section.appendChild(document.createElement('img'))\r\n  tomatoes.id = 'tomatoes'\r\n  tomatoes.src = './assets/images/tomatoes.png'\r\n  const onions = section.appendChild(document.createElement('img'))\r\n  onions.id = 'onions'\r\n  onions.src = './assets/images/onions.png'\r\n  const garlic = section.appendChild(document.createElement('img'))\r\n  garlic.id = 'garlic'\r\n  garlic.src = './assets/images/garlic.png'\r\n  const dish = section.appendChild(document.createElement('img'))\r\n  dish.id = 'dish'\r\n  dish.src = './assets/images/dish.png'\r\n}\r\n\r\nfunction cardSection() {\r\n  const container = document.getElementsByClassName('nav-content')[0]\r\n  const section = container.appendChild(document.createElement('div'))\r\n  section.classList.add('h-screen', 'bg-dark', 'px-32', 'flex', 'xy-center', 'relative')\r\n  const card = section.appendChild(document.createElement('div'))\r\n  card.classList.add('card', 'h-80')\r\n  const img = card.appendChild(document.createElement('div').appendChild(document.createElement('img')))\r\n  img.classList.add('w-full', 'h-full', 'object-cover')\r\n  img.src = './assets/images/ratatouille.jpg'\r\n  const cardTextContainer = card.appendChild(document.createElement('div'))\r\n  cardTextContainer.classList.add('bg-white', 'px-32', 'flex', 'flex-col', 'justify-center')\r\n  const cardTitle = cardTextContainer.appendChild(document.createElement('h2'))\r\n  cardTitle.innerHTML = 'About Us'\r\n  cardTitle.classList.add('text-4xl', 'mb-8', 'font-bold')\r\n  const cardText = cardTextContainer.appendChild(document.createElement('p'))\r\n  cardText.innerHTML = 'Located in Champs-Élysées, Paris, we aim to provide the real French experience. Le Poes serves the most exquisite French cuisines. From our food, to the wine, and even to the wood we use to cook our food. All of our ingredients are locally sourced, and we inspect all of them to ensure they are of the highest of quality.'\r\n  const thyme = section.appendChild(document.createElement('img'))\r\n  thyme.id = 'thyme'\r\n  thyme.src = './assets/images/thyme.png'\r\n  thyme.classList.add('absolute')\r\n}\n\n//# sourceURL=webpack://restaurant/./src/homepage.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _homepage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./homepage */ \"./src/homepage.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n/* harmony import */ var _parallax__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./parallax */ \"./src/parallax.js\");\n/* harmony import */ var _tab__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tab */ \"./src/tab.js\");\n\r\n\r\n\r\n\r\n\r\n(0,_homepage__WEBPACK_IMPORTED_MODULE_0__.intro)()\r\n;(0,_homepage__WEBPACK_IMPORTED_MODULE_0__.cardSection)()\r\n;(0,_parallax__WEBPACK_IMPORTED_MODULE_2__.parallax)()\r\n;(0,_menu__WEBPACK_IMPORTED_MODULE_1__.menu)()\r\n;(0,_tab__WEBPACK_IMPORTED_MODULE_3__.updateContent)()\r\n\n\n//# sourceURL=webpack://restaurant/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"menu\": () => (/* binding */ menu)\n/* harmony export */ });\nlet menuItems = [\r\n  { title: 'Soupe à l’oignon', description: 'A traditional French soup made of caramelized onions and beef stock, served with savory croutons and melted cheese on a toasted, crispy baguette slice.', price: '20€', image: './assets/images/soup.png'},\r\n  { title: 'Poulet Basquaise', description: 'A classic French Basque dish. Chicken is slowly pot roasted in a pepper sauce called piperade, made from melted red and green peppers, shallots, garlic and tomatoes. Served with either sauté potatoes or boiled rice.', price: '40€', image: './assets/images/butter-chicken.png'},\r\n  { title: 'Le Bifteck', description: 'A French beef cut. This steak is beautifully marbled and balanced between the fat and meat ratio. Sauces include pepper sauce, cheese sauce, borderlaise sauce or plain. Available in 300g, 500g, and 1kg.', price: '40€/60€/85€', image: './assets/images/steak.png'},\r\n  { title: 'Homard Thermidor', description: 'Tender lobster meat cooked the right way. The lobster is served with linguine, smothered in a rich buttery, white sauce. Available in 300g, 500g, and 1kg servings.', price: '50€/65€/100€', image: './assets/images/lobster.png'}\r\n]\r\n\r\nfunction menu() {\r\n  const container = document.getElementById('content').appendChild(document.createElement('div'))\r\n  container.classList.add('nav-content')\r\n  createMenuItems(container, menuItems)\r\n}\r\n\r\nfunction createMenuItems(container, menu) {\r\n  menu.forEach(menuItem => {\r\n    const row = container.appendChild(document.createElement('div'))\r\n    row.classList.add('menu', 'grid', 'grid-cols-2', 'items-center', 'px-60', 'pb-20')\r\n    const menuText = row.appendChild(document.createElement('div'))\r\n    menuText.classList.add('menu-text', 'text-white', 'flex', 'flex-col', 'justify-center')\r\n    const title = menuText.appendChild(document.createElement('h4'))\r\n    title.classList.add('text-4xl', 'mb-8')\r\n    title.innerHTML = `${menuItem.title}`\r\n    const description = menuText.appendChild(document.createElement('p'))\r\n    description.innerHTML = `${menuItem.description}`\r\n    const price = menuText.appendChild(document.createElement('p'))\r\n    price.classList.add('font-bold', 'text-lg', 'text-gray-300', 'mt-8')\r\n    price.innerHTML = `Price: ${menuItem.price}`\r\n    const imgContainer = row.appendChild(document.createElement('div'))\r\n    imgContainer.classList.add('menu-picture', 'flex', 'justify-center')\r\n    const img = imgContainer.appendChild(document.createElement('img'))\r\n    img.classList.add('w-3/6', 'h-full')\r\n    img.src = `${menuItem.image}`\r\n  })\r\n  // for (let i = 0; i < 4; i++) {\r\n  //   const menuItem = container.appendChild(document.createElement('div'))\r\n  //   menuItem.classList.add('menu', 'grid', 'grid-cols-2', 'items-center', 'px-60', 'pb-20')\r\n  //   const menuText = menuItem.appendChild(document.createElement('div'))\r\n  //   menuText.classList.add('menu-text', 'text-white', 'flex', 'flex-col', 'justify-center')\r\n  // }\r\n}\n\n//# sourceURL=webpack://restaurant/./src/menu.js?");

/***/ }),

/***/ "./src/parallax.js":
/*!*************************!*\
  !*** ./src/parallax.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"parallax\": () => (/* binding */ parallax)\n/* harmony export */ });\nfunction parallax() {\r\n  window.addEventListener('scroll', () => {\r\n    const dish = document.getElementById('dish')\r\n    const onions = document.getElementById('onions')\r\n    const tomatoes = document.getElementById('tomatoes')\r\n    const rosemary = document.getElementById('rosemary1')\r\n    const thyme = document.getElementById('thyme')\r\n    let scroll = window.pageYOffset;\r\n  \r\n    dish.style.transform = `translateY(${scroll * -0.85}px)`\r\n    onions.style.transform = `translateY(${scroll * -0.4}px)`\r\n    tomatoes.style.transform = `translateY(${scroll * -0.5}px)`\r\n    rosemary.style.transform = `translateY(${scroll * -0.6}px)`\r\n    thyme.style.transform = `translate(0, ${scroll * -0.3}px) rotate(20deg)`\r\n\r\n    \r\n    const menuItems = document.querySelectorAll('.menu-picture img')\r\n    for (let i = 0; i < menuItems.length; i++) {\r\n      menuItems[i].style.transform = `rotate(${scroll * 0.1}deg)`\r\n    }\r\n  })\r\n}\n\n//# sourceURL=webpack://restaurant/./src/parallax.js?");

/***/ }),

/***/ "./src/tab.js":
/*!********************!*\
  !*** ./src/tab.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"updateContent\": () => (/* binding */ updateContent)\n/* harmony export */ });\nfunction updateContent() {\r\n  const navLinks = document.querySelectorAll('.nav-link') \r\n  const pages = document.querySelectorAll('.nav-content')\r\n  \r\n  navLinks.forEach((navLink, index) => {\r\n    navLink.addEventListener('click', () => {\r\n      \r\n      pages.forEach(page => {\r\n        page.classList.add('hidden')\r\n      })\r\n\r\n      navLinks.forEach(t => {\r\n        t.classList.remove('active-link')\r\n      })\r\n\r\n      navLink.classList.add('active-link')\r\n  \r\n      pages[index].classList.remove('hidden')\r\n      pages[index].classList.add('block')\r\n    })\r\n  })\r\n}\n\n//# sourceURL=webpack://restaurant/./src/tab.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;