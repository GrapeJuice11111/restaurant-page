/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/about.js":
/*!**********************!*\
  !*** ./src/about.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   about: () => (/* binding */ about)
/* harmony export */ });
const about = function() {
    const content = document.querySelector('#content')
    const aboutDiv = document.createElement("div")
    aboutDiv.setAttribute("id","aboutDivId")
    content.appendChild(aboutDiv)



    function picture() {
        const backgroundPicture = document.createElement("img")
        backgroundPicture.classList.add("pictureAbout")
        backgroundPicture.setAttribute('src', '')
        backgroundPicture.setAttribute('alt', "aboutUsPicture")
        aboutDiv.appendChild(backgroundPicture)
    }
    picture();
    
    function topHeader()
    {
        const upperHeading = document.createElement("h1")
        upperHeading.classList.add("upperHeadingAbout")
        upperHeading.textContent = "LemonLush"
        aboutDiv.appendChild(upperHeading)
    }
    topHeader();

    function body(){
        const middleBody = document.createElement("article")
        middleBody.classList.add("middleBodyAbout")
        middleBody.textContent = ` Opening and Closing Hours for Lemonadelush
        Monday to Friday:
        Opening Hours: 8 AM
        Closing Hours: 7 PM
        Saturday:
        Opening Hours: 9 AM
        Closing Hours: 6 PM
        Sunday:
        Opening Hours: 10 AM 
        Closing Hours: 5 PM `
        aboutDiv.appendChild(middleBody)
    }
    body();

    function bottom(){
        const lowerBottom = document.createElement('article')
        const lowerBottomHeading = document.createElement("div")
        const lowerBottomParagraph = document.createElement("p")
        lowerBottom.classList.add("lowerBottomAbout")
        lowerBottom.textContent = "Location"
        lowerBottomParagraph.textContent = "Lower East Side neighborhood in New York City"
        aboutDiv.appendChild(lowerBottom)
        lowerBottom.appendChild(lowerBottomHeading)
        lowerBottom.appendChild(lowerBottomParagraph)
    }
    

    bottom();

}





/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   home: () => (/* binding */ home)
/* harmony export */ });
const home = function() {
    const content = document.querySelector('#content')
    const homeDiv = document.createElement("div")
    homeDiv.setAttribute("id","homeDivId")
    content.appendChild(homeDiv)

    function picture() {
        const backgroundPicture = document.createElement("img")
        backgroundPicture.classList.add("picture")
        backgroundPicture.setAttribute('src', './lemonadelush.jpeg')
        backgroundPicture.setAttribute('alt', "Lemonade Picture")
        homeDiv.appendChild(backgroundPicture);
    }
    picture();
    
    function topHeader()
    {
        const upperHeading = document.createElement("h1")
        upperHeading.classList.add("upperHeadingHome")
        upperHeading.textContent = "LemonLush"
        homeDiv.appendChild(upperHeading);
        
        
    }
    topHeader();

    function body(){
        const middleBody = document.createElement("article")
        middleBody.classList.add("middleBodyHome")
        middleBody.textContent = " Immerse yourself in the delightful world of LemonadeLush Crafted from handpicked, sun-kissed lemons, our refreshing concoction offers a burst of natural flavor that transports you to vibrant lemon orchards. Meticulously balanced with the perfect sweetness, each sip is a symphony of taste, ranging from classic to mint-infused and berry-burst. Embracing farm-to-cup freshness, our locally sourced ingredients ensure that every glass supports local farmers. Ideal for any occasion, be it by the pool, in the park, or at a summer soirée, Alice Lemonade elevates every moment. Join the Alice Lemonade Club for exclusive perks and visit our stand at New York City to indulge in the pure joy of LemonadeLush!"
        homeDiv.appendChild(middleBody);
    }
    body();


    function bottom(){
        const lowerBottom = document.createElement("div")
        lowerBottom.classList.add("lowerBottomHome")
        lowerBottom.textContent = "Embark on a refreshing journey at Lemonadelush, located in the heart of New York City. From 10 AM to 6 PM daily, immerse yourself in the bustling cityscape as you sip on the sunshine-infused creations of Lemonadelush. Whether you start your day with a revitalizing morning sip or unwind in the late afternoon breeze amidst the iconic skyline, the enchanting hours at our New York City location offer a delightful escape into the world of Lemonadelush."
        homeDiv.appendChild(lowerBottom);
    } 
    bottom()

    return {
        picture, topHeader, body, bottom
    }   

}





/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   menu: () => (/* binding */ menu)
/* harmony export */ });
const menu = function() {
    const content = document.querySelector('#content')
    const menuDiv = document.createElement("div")
    menuDiv.setAttribute("id","menuDivId");
    content.appendChild(menuDiv);

    function topHeader()
    {
        const upperHeading = document.createElement("h1")
        upperHeading.classList.add("upperHeadingMenu")
        upperHeading.textContent = "Menu"
        menuDiv.appendChild(upperHeading)
    }
        topHeader();
    function menuContent(){

        function menu1() {
            const menuBody1 = document.createElement("article")
            const menuHeading1 = document.createElement("h3")
            const menuParagraph1 = document.createElement("p")
            menuHeading1.textContent = "Classic Citrus Splash"
            menuParagraph1.textContent = "Freshly squeezed lemons, pure cane sugar, and a hint of lemon zest. A timeless, refreshing favorite that captures the essence of pure citrus."
            menuDiv.appendChild(menuBody1)
            menuBody1.appendChild(menuHeading1)
            menuBody1.appendChild(menuParagraph1)
        }

        function menu2() {
            const menuBody2 = document.createElement("article")
            const menuHeading2 = document.createElement("h3")
            const menuParagraph2 = document.createElement("p")
            menuHeading2.textContent = "Berry Bliss Burst"
            menuParagraph2.textContent = "A medley of mixed berries blended with our signature lemonade, creating a sweet and tart fusion for a burst of fruity goodness."
            menuDiv.appendChild(menuBody2)
            menuBody2.appendChild(menuHeading2)
            menuBody2.appendChild(menuParagraph2)
        }

        function menu3(){
            const menuBody3 = document.createElement("article")
            const menuHeading3 = document.createElement("h3")
            const menuParagraph3 = document.createElement("p")
            menuHeading3.textContent = "Minty Lemon Refresher"
            menuParagraph3.textContent = "Invigorate your senses with this cooling blend of lemonade infused with freshly crushed mint leaves, providing a revitalizing twist."
            menuDiv.appendChild(menuBody3)
            menuBody3.appendChild(menuHeading3)
            menuBody3.appendChild(menuParagraph3)
        }


        function menu4(){
            const menuBody4 = document.createElement("article")
            const menuHeading4 = document.createElement("h3")
            const menuParagraph4 = document.createElement("p")
            menuHeading4.textContent = "Tropical Pineapple Paradise"
            menuParagraph4.textContent = "Escape to a tropical paradise with our exotic blend of pineapple and lemonade, delivering a sweet and tangy flavor that transports you to sunny shores."
            menuDiv.appendChild(menuBody4)
            menuBody4.appendChild(menuHeading4)
            menuBody4.appendChild(menuParagraph4)
        }
        
        return {
            menu1,menu2,menu3,menu4
        }
    }
    menuContent().menu1();
    menuContent().menu2()
    menuContent().menu3()
    menuContent().menu4()


}
    




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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _about_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./about.js */ "./src/about.js");
/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu.js */ "./src/menu.js");
/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home.js */ "./src/home.js");





const  content = document.querySelector('#content')

function screenController() {
    

    (function staicHeading(){
      const  mainHeading = document.createElement('header')
        mainHeading.textContent = "LemonLush"
        content.appendChild(mainHeading)
    })()

    function navBar(){
       const mainNavBar = document.createElement('nav')
       const navBarBtn1 = document.createElement('button')
        navBarBtn1.textContent = "Home"
        const navBarBtn2 = document.createElement('button')
        navBarBtn2.textContent = "Menu"
        const navBarBtn3 = document.createElement('button')
        navBarBtn3.textContent = "About Us"
        mainNavBar.appendChild(navBarBtn1)
        mainNavBar.appendChild(navBarBtn2)
        mainNavBar.appendChild(navBarBtn3)
        content.appendChild(mainNavBar);
        navBarBtn1.classList.add("btn");


        

        return {
            navBarBtn1, navBarBtn2, navBarBtn3
        }
    }

    function clickHandler(){
        const navBarHandler = navBar()
        navBarHandler.navBarBtn1.addEventListener('click', function(){
            if(document.contains(document.getElementById("homeDivId"))){
                return;
            }
            else if(document.contains(document.getElementById("menuDivId"))){
                document.getElementById("menuDivId").remove();
                navBarHandler.navBarBtn2.classList.remove("btn")
                ;(0,_home_js__WEBPACK_IMPORTED_MODULE_2__.home)();
                navBarHandler.navBarBtn1.classList.add("btn")

            }
            else if(document.contains(document.getElementById("aboutDivId"))){
                document.getElementById("aboutDivId").remove();
                navBarHandler.navBarBtn3.classList.remove("btn")
                ;(0,_home_js__WEBPACK_IMPORTED_MODULE_2__.home)();
                navBarHandler.navBarBtn1.classList.add("btn")
            }
        })

        navBarHandler.navBarBtn2.addEventListener('click', function(){
            if(document.contains(document.getElementById("homeDivId"))){
                document.getElementById("homeDivId").remove();
                navBarHandler.navBarBtn1.classList.remove("btn")
                ;(0,_menu_js__WEBPACK_IMPORTED_MODULE_1__.menu)();
                navBarHandler.navBarBtn2.classList.add("btn")

            }
            else if(document.contains(document.getElementById("menuDivId"))){
                return;
            }
            else if(document.contains(document.getElementById("aboutDivId"))){
                document.getElementById("aboutDivId").remove();
                navBarHandler.navBarBtn3.classList.remove("btn")
                ;(0,_menu_js__WEBPACK_IMPORTED_MODULE_1__.menu)();
                navBarHandler.navBarBtn2.classList.add("btn")
            }
            });
            
            
        

        navBarHandler.navBarBtn3.addEventListener('click', function(){
            if(document.contains(document.getElementById("homeDivId"))){
                document.getElementById("homeDivId").remove();
                navBarHandler.navBarBtn1.classList.remove("btn")
                ;(0,_about_js__WEBPACK_IMPORTED_MODULE_0__.about)();
                navBarHandler.navBarBtn3.classList.add("btn")
            }
            else if(document.contains(document.getElementById("menuDivId"))){
                document.getElementById("menuDivId").remove();
                navBarHandler.navBarBtn2.classList.remove("btn")
                ;(0,_about_js__WEBPACK_IMPORTED_MODULE_0__.about)();
                navBarHandler.navBarBtn3.classList.add("btn")
            }
            else if(document.contains(document.getElementById("aboutDivId"))){
                return;
            }
        })
        
    }
    clickHandler();



    function staticFooter(){
        const footer = document.createElement("footer")
        footer.textContent = "LemonLush &#169; 2023"
    }
    staticFooter();

}

screenController();
(0,_home_js__WEBPACK_IMPORTED_MODULE_2__.home)();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFZ0I7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1RGhCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFZTs7Ozs7Ozs7Ozs7Ozs7OztBQ2pEZjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDZTs7Ozs7Ozs7VUN6RWY7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7O0FDTmtDO0FBQ0Y7QUFDQTs7O0FBR2hDOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsK0NBQUk7QUFDcEI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsK0NBQUk7QUFDcEI7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsK0NBQUk7QUFDcEI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsK0NBQUk7QUFDcEI7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsaURBQUs7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixpREFBSztBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQSwrQ0FBK0M7QUFDL0M7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLDhDQUFJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2Fib3V0LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9ob21lLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9tZW51LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBhYm91dCA9IGZ1bmN0aW9uKCkge1xuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpXG4gICAgY29uc3QgYWJvdXREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4gICAgYWJvdXREaXYuc2V0QXR0cmlidXRlKFwiaWRcIixcImFib3V0RGl2SWRcIilcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGFib3V0RGl2KVxuXG5cblxuICAgIGZ1bmN0aW9uIHBpY3R1cmUoKSB7XG4gICAgICAgIGNvbnN0IGJhY2tncm91bmRQaWN0dXJlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKVxuICAgICAgICBiYWNrZ3JvdW5kUGljdHVyZS5jbGFzc0xpc3QuYWRkKFwicGljdHVyZUFib3V0XCIpXG4gICAgICAgIGJhY2tncm91bmRQaWN0dXJlLnNldEF0dHJpYnV0ZSgnc3JjJywgJycpXG4gICAgICAgIGJhY2tncm91bmRQaWN0dXJlLnNldEF0dHJpYnV0ZSgnYWx0JywgXCJhYm91dFVzUGljdHVyZVwiKVxuICAgICAgICBhYm91dERpdi5hcHBlbmRDaGlsZChiYWNrZ3JvdW5kUGljdHVyZSlcbiAgICB9XG4gICAgcGljdHVyZSgpO1xuICAgIFxuICAgIGZ1bmN0aW9uIHRvcEhlYWRlcigpXG4gICAge1xuICAgICAgICBjb25zdCB1cHBlckhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIilcbiAgICAgICAgdXBwZXJIZWFkaW5nLmNsYXNzTGlzdC5hZGQoXCJ1cHBlckhlYWRpbmdBYm91dFwiKVxuICAgICAgICB1cHBlckhlYWRpbmcudGV4dENvbnRlbnQgPSBcIkxlbW9uTHVzaFwiXG4gICAgICAgIGFib3V0RGl2LmFwcGVuZENoaWxkKHVwcGVySGVhZGluZylcbiAgICB9XG4gICAgdG9wSGVhZGVyKCk7XG5cbiAgICBmdW5jdGlvbiBib2R5KCl7XG4gICAgICAgIGNvbnN0IG1pZGRsZUJvZHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYXJ0aWNsZVwiKVxuICAgICAgICBtaWRkbGVCb2R5LmNsYXNzTGlzdC5hZGQoXCJtaWRkbGVCb2R5QWJvdXRcIilcbiAgICAgICAgbWlkZGxlQm9keS50ZXh0Q29udGVudCA9IGAgT3BlbmluZyBhbmQgQ2xvc2luZyBIb3VycyBmb3IgTGVtb25hZGVsdXNoXG4gICAgICAgIE1vbmRheSB0byBGcmlkYXk6XG4gICAgICAgIE9wZW5pbmcgSG91cnM6IDggQU1cbiAgICAgICAgQ2xvc2luZyBIb3VyczogNyBQTVxuICAgICAgICBTYXR1cmRheTpcbiAgICAgICAgT3BlbmluZyBIb3VyczogOSBBTVxuICAgICAgICBDbG9zaW5nIEhvdXJzOiA2IFBNXG4gICAgICAgIFN1bmRheTpcbiAgICAgICAgT3BlbmluZyBIb3VyczogMTAgQU0gXG4gICAgICAgIENsb3NpbmcgSG91cnM6IDUgUE0gYFxuICAgICAgICBhYm91dERpdi5hcHBlbmRDaGlsZChtaWRkbGVCb2R5KVxuICAgIH1cbiAgICBib2R5KCk7XG5cbiAgICBmdW5jdGlvbiBib3R0b20oKXtcbiAgICAgICAgY29uc3QgbG93ZXJCb3R0b20gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhcnRpY2xlJylcbiAgICAgICAgY29uc3QgbG93ZXJCb3R0b21IZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICAgICAgICBjb25zdCBsb3dlckJvdHRvbVBhcmFncmFwaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpXG4gICAgICAgIGxvd2VyQm90dG9tLmNsYXNzTGlzdC5hZGQoXCJsb3dlckJvdHRvbUFib3V0XCIpXG4gICAgICAgIGxvd2VyQm90dG9tLnRleHRDb250ZW50ID0gXCJMb2NhdGlvblwiXG4gICAgICAgIGxvd2VyQm90dG9tUGFyYWdyYXBoLnRleHRDb250ZW50ID0gXCJMb3dlciBFYXN0IFNpZGUgbmVpZ2hib3Job29kIGluIE5ldyBZb3JrIENpdHlcIlxuICAgICAgICBhYm91dERpdi5hcHBlbmRDaGlsZChsb3dlckJvdHRvbSlcbiAgICAgICAgbG93ZXJCb3R0b20uYXBwZW5kQ2hpbGQobG93ZXJCb3R0b21IZWFkaW5nKVxuICAgICAgICBsb3dlckJvdHRvbS5hcHBlbmRDaGlsZChsb3dlckJvdHRvbVBhcmFncmFwaClcbiAgICB9XG4gICAgXG5cbiAgICBib3R0b20oKTtcblxufVxuXG5leHBvcnQgeyBhYm91dCB9XG5cbiIsImNvbnN0IGhvbWUgPSBmdW5jdGlvbigpIHtcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKVxuICAgIGNvbnN0IGhvbWVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4gICAgaG9tZURpdi5zZXRBdHRyaWJ1dGUoXCJpZFwiLFwiaG9tZURpdklkXCIpXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChob21lRGl2KVxuXG4gICAgZnVuY3Rpb24gcGljdHVyZSgpIHtcbiAgICAgICAgY29uc3QgYmFja2dyb3VuZFBpY3R1cmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpXG4gICAgICAgIGJhY2tncm91bmRQaWN0dXJlLmNsYXNzTGlzdC5hZGQoXCJwaWN0dXJlXCIpXG4gICAgICAgIGJhY2tncm91bmRQaWN0dXJlLnNldEF0dHJpYnV0ZSgnc3JjJywgJy4vbGVtb25hZGVsdXNoLmpwZWcnKVxuICAgICAgICBiYWNrZ3JvdW5kUGljdHVyZS5zZXRBdHRyaWJ1dGUoJ2FsdCcsIFwiTGVtb25hZGUgUGljdHVyZVwiKVxuICAgICAgICBob21lRGl2LmFwcGVuZENoaWxkKGJhY2tncm91bmRQaWN0dXJlKTtcbiAgICB9XG4gICAgcGljdHVyZSgpO1xuICAgIFxuICAgIGZ1bmN0aW9uIHRvcEhlYWRlcigpXG4gICAge1xuICAgICAgICBjb25zdCB1cHBlckhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIilcbiAgICAgICAgdXBwZXJIZWFkaW5nLmNsYXNzTGlzdC5hZGQoXCJ1cHBlckhlYWRpbmdIb21lXCIpXG4gICAgICAgIHVwcGVySGVhZGluZy50ZXh0Q29udGVudCA9IFwiTGVtb25MdXNoXCJcbiAgICAgICAgaG9tZURpdi5hcHBlbmRDaGlsZCh1cHBlckhlYWRpbmcpO1xuICAgICAgICBcbiAgICAgICAgXG4gICAgfVxuICAgIHRvcEhlYWRlcigpO1xuXG4gICAgZnVuY3Rpb24gYm9keSgpe1xuICAgICAgICBjb25zdCBtaWRkbGVCb2R5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFydGljbGVcIilcbiAgICAgICAgbWlkZGxlQm9keS5jbGFzc0xpc3QuYWRkKFwibWlkZGxlQm9keUhvbWVcIilcbiAgICAgICAgbWlkZGxlQm9keS50ZXh0Q29udGVudCA9IFwiIEltbWVyc2UgeW91cnNlbGYgaW4gdGhlIGRlbGlnaHRmdWwgd29ybGQgb2YgTGVtb25hZGVMdXNoIENyYWZ0ZWQgZnJvbSBoYW5kcGlja2VkLCBzdW4ta2lzc2VkIGxlbW9ucywgb3VyIHJlZnJlc2hpbmcgY29uY29jdGlvbiBvZmZlcnMgYSBidXJzdCBvZiBuYXR1cmFsIGZsYXZvciB0aGF0IHRyYW5zcG9ydHMgeW91IHRvIHZpYnJhbnQgbGVtb24gb3JjaGFyZHMuIE1ldGljdWxvdXNseSBiYWxhbmNlZCB3aXRoIHRoZSBwZXJmZWN0IHN3ZWV0bmVzcywgZWFjaCBzaXAgaXMgYSBzeW1waG9ueSBvZiB0YXN0ZSwgcmFuZ2luZyBmcm9tIGNsYXNzaWMgdG8gbWludC1pbmZ1c2VkIGFuZCBiZXJyeS1idXJzdC4gRW1icmFjaW5nIGZhcm0tdG8tY3VwIGZyZXNobmVzcywgb3VyIGxvY2FsbHkgc291cmNlZCBpbmdyZWRpZW50cyBlbnN1cmUgdGhhdCBldmVyeSBnbGFzcyBzdXBwb3J0cyBsb2NhbCBmYXJtZXJzLiBJZGVhbCBmb3IgYW55IG9jY2FzaW9uLCBiZSBpdCBieSB0aGUgcG9vbCwgaW4gdGhlIHBhcmssIG9yIGF0IGEgc3VtbWVyIHNvaXLDqWUsIEFsaWNlIExlbW9uYWRlIGVsZXZhdGVzIGV2ZXJ5IG1vbWVudC4gSm9pbiB0aGUgQWxpY2UgTGVtb25hZGUgQ2x1YiBmb3IgZXhjbHVzaXZlIHBlcmtzIGFuZCB2aXNpdCBvdXIgc3RhbmQgYXQgTmV3IFlvcmsgQ2l0eSB0byBpbmR1bGdlIGluIHRoZSBwdXJlIGpveSBvZiBMZW1vbmFkZUx1c2ghXCJcbiAgICAgICAgaG9tZURpdi5hcHBlbmRDaGlsZChtaWRkbGVCb2R5KTtcbiAgICB9XG4gICAgYm9keSgpO1xuXG5cbiAgICBmdW5jdGlvbiBib3R0b20oKXtcbiAgICAgICAgY29uc3QgbG93ZXJCb3R0b20gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4gICAgICAgIGxvd2VyQm90dG9tLmNsYXNzTGlzdC5hZGQoXCJsb3dlckJvdHRvbUhvbWVcIilcbiAgICAgICAgbG93ZXJCb3R0b20udGV4dENvbnRlbnQgPSBcIkVtYmFyayBvbiBhIHJlZnJlc2hpbmcgam91cm5leSBhdCBMZW1vbmFkZWx1c2gsIGxvY2F0ZWQgaW4gdGhlIGhlYXJ0IG9mIE5ldyBZb3JrIENpdHkuIEZyb20gMTAgQU0gdG8gNiBQTSBkYWlseSwgaW1tZXJzZSB5b3Vyc2VsZiBpbiB0aGUgYnVzdGxpbmcgY2l0eXNjYXBlIGFzIHlvdSBzaXAgb24gdGhlIHN1bnNoaW5lLWluZnVzZWQgY3JlYXRpb25zIG9mIExlbW9uYWRlbHVzaC4gV2hldGhlciB5b3Ugc3RhcnQgeW91ciBkYXkgd2l0aCBhIHJldml0YWxpemluZyBtb3JuaW5nIHNpcCBvciB1bndpbmQgaW4gdGhlIGxhdGUgYWZ0ZXJub29uIGJyZWV6ZSBhbWlkc3QgdGhlIGljb25pYyBza3lsaW5lLCB0aGUgZW5jaGFudGluZyBob3VycyBhdCBvdXIgTmV3IFlvcmsgQ2l0eSBsb2NhdGlvbiBvZmZlciBhIGRlbGlnaHRmdWwgZXNjYXBlIGludG8gdGhlIHdvcmxkIG9mIExlbW9uYWRlbHVzaC5cIlxuICAgICAgICBob21lRGl2LmFwcGVuZENoaWxkKGxvd2VyQm90dG9tKTtcbiAgICB9IFxuICAgIGJvdHRvbSgpXG5cbiAgICByZXR1cm4ge1xuICAgICAgICBwaWN0dXJlLCB0b3BIZWFkZXIsIGJvZHksIGJvdHRvbVxuICAgIH0gICBcblxufVxuXG5leHBvcnQgeyBob21lIH1cblxuIiwiY29uc3QgbWVudSA9IGZ1bmN0aW9uKCkge1xuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpXG4gICAgY29uc3QgbWVudURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgICBtZW51RGl2LnNldEF0dHJpYnV0ZShcImlkXCIsXCJtZW51RGl2SWRcIik7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChtZW51RGl2KTtcblxuICAgIGZ1bmN0aW9uIHRvcEhlYWRlcigpXG4gICAge1xuICAgICAgICBjb25zdCB1cHBlckhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIilcbiAgICAgICAgdXBwZXJIZWFkaW5nLmNsYXNzTGlzdC5hZGQoXCJ1cHBlckhlYWRpbmdNZW51XCIpXG4gICAgICAgIHVwcGVySGVhZGluZy50ZXh0Q29udGVudCA9IFwiTWVudVwiXG4gICAgICAgIG1lbnVEaXYuYXBwZW5kQ2hpbGQodXBwZXJIZWFkaW5nKVxuICAgIH1cbiAgICAgICAgdG9wSGVhZGVyKCk7XG4gICAgZnVuY3Rpb24gbWVudUNvbnRlbnQoKXtcblxuICAgICAgICBmdW5jdGlvbiBtZW51MSgpIHtcbiAgICAgICAgICAgIGNvbnN0IG1lbnVCb2R5MSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhcnRpY2xlXCIpXG4gICAgICAgICAgICBjb25zdCBtZW51SGVhZGluZzEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIilcbiAgICAgICAgICAgIGNvbnN0IG1lbnVQYXJhZ3JhcGgxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIilcbiAgICAgICAgICAgIG1lbnVIZWFkaW5nMS50ZXh0Q29udGVudCA9IFwiQ2xhc3NpYyBDaXRydXMgU3BsYXNoXCJcbiAgICAgICAgICAgIG1lbnVQYXJhZ3JhcGgxLnRleHRDb250ZW50ID0gXCJGcmVzaGx5IHNxdWVlemVkIGxlbW9ucywgcHVyZSBjYW5lIHN1Z2FyLCBhbmQgYSBoaW50IG9mIGxlbW9uIHplc3QuIEEgdGltZWxlc3MsIHJlZnJlc2hpbmcgZmF2b3JpdGUgdGhhdCBjYXB0dXJlcyB0aGUgZXNzZW5jZSBvZiBwdXJlIGNpdHJ1cy5cIlxuICAgICAgICAgICAgbWVudURpdi5hcHBlbmRDaGlsZChtZW51Qm9keTEpXG4gICAgICAgICAgICBtZW51Qm9keTEuYXBwZW5kQ2hpbGQobWVudUhlYWRpbmcxKVxuICAgICAgICAgICAgbWVudUJvZHkxLmFwcGVuZENoaWxkKG1lbnVQYXJhZ3JhcGgxKVxuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gbWVudTIoKSB7XG4gICAgICAgICAgICBjb25zdCBtZW51Qm9keTIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYXJ0aWNsZVwiKVxuICAgICAgICAgICAgY29uc3QgbWVudUhlYWRpbmcyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpXG4gICAgICAgICAgICBjb25zdCBtZW51UGFyYWdyYXBoMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpXG4gICAgICAgICAgICBtZW51SGVhZGluZzIudGV4dENvbnRlbnQgPSBcIkJlcnJ5IEJsaXNzIEJ1cnN0XCJcbiAgICAgICAgICAgIG1lbnVQYXJhZ3JhcGgyLnRleHRDb250ZW50ID0gXCJBIG1lZGxleSBvZiBtaXhlZCBiZXJyaWVzIGJsZW5kZWQgd2l0aCBvdXIgc2lnbmF0dXJlIGxlbW9uYWRlLCBjcmVhdGluZyBhIHN3ZWV0IGFuZCB0YXJ0IGZ1c2lvbiBmb3IgYSBidXJzdCBvZiBmcnVpdHkgZ29vZG5lc3MuXCJcbiAgICAgICAgICAgIG1lbnVEaXYuYXBwZW5kQ2hpbGQobWVudUJvZHkyKVxuICAgICAgICAgICAgbWVudUJvZHkyLmFwcGVuZENoaWxkKG1lbnVIZWFkaW5nMilcbiAgICAgICAgICAgIG1lbnVCb2R5Mi5hcHBlbmRDaGlsZChtZW51UGFyYWdyYXBoMilcbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIG1lbnUzKCl7XG4gICAgICAgICAgICBjb25zdCBtZW51Qm9keTMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYXJ0aWNsZVwiKVxuICAgICAgICAgICAgY29uc3QgbWVudUhlYWRpbmczID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpXG4gICAgICAgICAgICBjb25zdCBtZW51UGFyYWdyYXBoMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpXG4gICAgICAgICAgICBtZW51SGVhZGluZzMudGV4dENvbnRlbnQgPSBcIk1pbnR5IExlbW9uIFJlZnJlc2hlclwiXG4gICAgICAgICAgICBtZW51UGFyYWdyYXBoMy50ZXh0Q29udGVudCA9IFwiSW52aWdvcmF0ZSB5b3VyIHNlbnNlcyB3aXRoIHRoaXMgY29vbGluZyBibGVuZCBvZiBsZW1vbmFkZSBpbmZ1c2VkIHdpdGggZnJlc2hseSBjcnVzaGVkIG1pbnQgbGVhdmVzLCBwcm92aWRpbmcgYSByZXZpdGFsaXppbmcgdHdpc3QuXCJcbiAgICAgICAgICAgIG1lbnVEaXYuYXBwZW5kQ2hpbGQobWVudUJvZHkzKVxuICAgICAgICAgICAgbWVudUJvZHkzLmFwcGVuZENoaWxkKG1lbnVIZWFkaW5nMylcbiAgICAgICAgICAgIG1lbnVCb2R5My5hcHBlbmRDaGlsZChtZW51UGFyYWdyYXBoMylcbiAgICAgICAgfVxuXG5cbiAgICAgICAgZnVuY3Rpb24gbWVudTQoKXtcbiAgICAgICAgICAgIGNvbnN0IG1lbnVCb2R5NCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhcnRpY2xlXCIpXG4gICAgICAgICAgICBjb25zdCBtZW51SGVhZGluZzQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIilcbiAgICAgICAgICAgIGNvbnN0IG1lbnVQYXJhZ3JhcGg0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIilcbiAgICAgICAgICAgIG1lbnVIZWFkaW5nNC50ZXh0Q29udGVudCA9IFwiVHJvcGljYWwgUGluZWFwcGxlIFBhcmFkaXNlXCJcbiAgICAgICAgICAgIG1lbnVQYXJhZ3JhcGg0LnRleHRDb250ZW50ID0gXCJFc2NhcGUgdG8gYSB0cm9waWNhbCBwYXJhZGlzZSB3aXRoIG91ciBleG90aWMgYmxlbmQgb2YgcGluZWFwcGxlIGFuZCBsZW1vbmFkZSwgZGVsaXZlcmluZyBhIHN3ZWV0IGFuZCB0YW5neSBmbGF2b3IgdGhhdCB0cmFuc3BvcnRzIHlvdSB0byBzdW5ueSBzaG9yZXMuXCJcbiAgICAgICAgICAgIG1lbnVEaXYuYXBwZW5kQ2hpbGQobWVudUJvZHk0KVxuICAgICAgICAgICAgbWVudUJvZHk0LmFwcGVuZENoaWxkKG1lbnVIZWFkaW5nNClcbiAgICAgICAgICAgIG1lbnVCb2R5NC5hcHBlbmRDaGlsZChtZW51UGFyYWdyYXBoNClcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIG1lbnUxLG1lbnUyLG1lbnUzLG1lbnU0XG4gICAgICAgIH1cbiAgICB9XG4gICAgbWVudUNvbnRlbnQoKS5tZW51MSgpO1xuICAgIG1lbnVDb250ZW50KCkubWVudTIoKVxuICAgIG1lbnVDb250ZW50KCkubWVudTMoKVxuICAgIG1lbnVDb250ZW50KCkubWVudTQoKVxuXG5cbn1cbiAgICBcbmV4cG9ydCB7IG1lbnUgfVxuXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IGFib3V0IH0gZnJvbSAnLi9hYm91dC5qcydcbmltcG9ydCB7IG1lbnUgfSBmcm9tICcuL21lbnUuanMnXG5pbXBvcnQgeyBob21lIH0gZnJvbSAnLi9ob21lLmpzJ1xuXG5cbmNvbnN0ICBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKVxuXG5mdW5jdGlvbiBzY3JlZW5Db250cm9sbGVyKCkge1xuICAgIFxuXG4gICAgKGZ1bmN0aW9uIHN0YWljSGVhZGluZygpe1xuICAgICAgY29uc3QgIG1haW5IZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaGVhZGVyJylcbiAgICAgICAgbWFpbkhlYWRpbmcudGV4dENvbnRlbnQgPSBcIkxlbW9uTHVzaFwiXG4gICAgICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQobWFpbkhlYWRpbmcpXG4gICAgfSkoKVxuXG4gICAgZnVuY3Rpb24gbmF2QmFyKCl7XG4gICAgICAgY29uc3QgbWFpbk5hdkJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ25hdicpXG4gICAgICAgY29uc3QgbmF2QmFyQnRuMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gICAgICAgIG5hdkJhckJ0bjEudGV4dENvbnRlbnQgPSBcIkhvbWVcIlxuICAgICAgICBjb25zdCBuYXZCYXJCdG4yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgICAgICAgbmF2QmFyQnRuMi50ZXh0Q29udGVudCA9IFwiTWVudVwiXG4gICAgICAgIGNvbnN0IG5hdkJhckJ0bjMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICAgICAgICBuYXZCYXJCdG4zLnRleHRDb250ZW50ID0gXCJBYm91dCBVc1wiXG4gICAgICAgIG1haW5OYXZCYXIuYXBwZW5kQ2hpbGQobmF2QmFyQnRuMSlcbiAgICAgICAgbWFpbk5hdkJhci5hcHBlbmRDaGlsZChuYXZCYXJCdG4yKVxuICAgICAgICBtYWluTmF2QmFyLmFwcGVuZENoaWxkKG5hdkJhckJ0bjMpXG4gICAgICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQobWFpbk5hdkJhcik7XG4gICAgICAgIG5hdkJhckJ0bjEuY2xhc3NMaXN0LmFkZChcImJ0blwiKTtcblxuXG4gICAgICAgIFxuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBuYXZCYXJCdG4xLCBuYXZCYXJCdG4yLCBuYXZCYXJCdG4zXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjbGlja0hhbmRsZXIoKXtcbiAgICAgICAgY29uc3QgbmF2QmFySGFuZGxlciA9IG5hdkJhcigpXG4gICAgICAgIG5hdkJhckhhbmRsZXIubmF2QmFyQnRuMS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICBpZihkb2N1bWVudC5jb250YWlucyhkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImhvbWVEaXZJZFwiKSkpe1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYoZG9jdW1lbnQuY29udGFpbnMoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtZW51RGl2SWRcIikpKXtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1lbnVEaXZJZFwiKS5yZW1vdmUoKTtcbiAgICAgICAgICAgICAgICBuYXZCYXJIYW5kbGVyLm5hdkJhckJ0bjIuY2xhc3NMaXN0LnJlbW92ZShcImJ0blwiKVxuICAgICAgICAgICAgICAgIGhvbWUoKTtcbiAgICAgICAgICAgICAgICBuYXZCYXJIYW5kbGVyLm5hdkJhckJ0bjEuY2xhc3NMaXN0LmFkZChcImJ0blwiKVxuXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmKGRvY3VtZW50LmNvbnRhaW5zKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWJvdXREaXZJZFwiKSkpe1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWJvdXREaXZJZFwiKS5yZW1vdmUoKTtcbiAgICAgICAgICAgICAgICBuYXZCYXJIYW5kbGVyLm5hdkJhckJ0bjMuY2xhc3NMaXN0LnJlbW92ZShcImJ0blwiKVxuICAgICAgICAgICAgICAgIGhvbWUoKTtcbiAgICAgICAgICAgICAgICBuYXZCYXJIYW5kbGVyLm5hdkJhckJ0bjEuY2xhc3NMaXN0LmFkZChcImJ0blwiKVxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuXG4gICAgICAgIG5hdkJhckhhbmRsZXIubmF2QmFyQnRuMi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICBpZihkb2N1bWVudC5jb250YWlucyhkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImhvbWVEaXZJZFwiKSkpe1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaG9tZURpdklkXCIpLnJlbW92ZSgpO1xuICAgICAgICAgICAgICAgIG5hdkJhckhhbmRsZXIubmF2QmFyQnRuMS5jbGFzc0xpc3QucmVtb3ZlKFwiYnRuXCIpXG4gICAgICAgICAgICAgICAgbWVudSgpO1xuICAgICAgICAgICAgICAgIG5hdkJhckhhbmRsZXIubmF2QmFyQnRuMi5jbGFzc0xpc3QuYWRkKFwiYnRuXCIpXG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYoZG9jdW1lbnQuY29udGFpbnMoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtZW51RGl2SWRcIikpKXtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmKGRvY3VtZW50LmNvbnRhaW5zKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWJvdXREaXZJZFwiKSkpe1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWJvdXREaXZJZFwiKS5yZW1vdmUoKTtcbiAgICAgICAgICAgICAgICBuYXZCYXJIYW5kbGVyLm5hdkJhckJ0bjMuY2xhc3NMaXN0LnJlbW92ZShcImJ0blwiKVxuICAgICAgICAgICAgICAgIG1lbnUoKTtcbiAgICAgICAgICAgICAgICBuYXZCYXJIYW5kbGVyLm5hdkJhckJ0bjIuY2xhc3NMaXN0LmFkZChcImJ0blwiKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIFxuICAgICAgICBcblxuICAgICAgICBuYXZCYXJIYW5kbGVyLm5hdkJhckJ0bjMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpe1xuICAgICAgICAgICAgaWYoZG9jdW1lbnQuY29udGFpbnMoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJob21lRGl2SWRcIikpKXtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImhvbWVEaXZJZFwiKS5yZW1vdmUoKTtcbiAgICAgICAgICAgICAgICBuYXZCYXJIYW5kbGVyLm5hdkJhckJ0bjEuY2xhc3NMaXN0LnJlbW92ZShcImJ0blwiKVxuICAgICAgICAgICAgICAgIGFib3V0KCk7XG4gICAgICAgICAgICAgICAgbmF2QmFySGFuZGxlci5uYXZCYXJCdG4zLmNsYXNzTGlzdC5hZGQoXCJidG5cIilcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYoZG9jdW1lbnQuY29udGFpbnMoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtZW51RGl2SWRcIikpKXtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1lbnVEaXZJZFwiKS5yZW1vdmUoKTtcbiAgICAgICAgICAgICAgICBuYXZCYXJIYW5kbGVyLm5hdkJhckJ0bjIuY2xhc3NMaXN0LnJlbW92ZShcImJ0blwiKVxuICAgICAgICAgICAgICAgIGFib3V0KCk7XG4gICAgICAgICAgICAgICAgbmF2QmFySGFuZGxlci5uYXZCYXJCdG4zLmNsYXNzTGlzdC5hZGQoXCJidG5cIilcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYoZG9jdW1lbnQuY29udGFpbnMoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhYm91dERpdklkXCIpKSl7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICBcbiAgICB9XG4gICAgY2xpY2tIYW5kbGVyKCk7XG5cblxuXG4gICAgZnVuY3Rpb24gc3RhdGljRm9vdGVyKCl7XG4gICAgICAgIGNvbnN0IGZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb290ZXJcIilcbiAgICAgICAgZm9vdGVyLnRleHRDb250ZW50ID0gXCJMZW1vbkx1c2ggJiMxNjk7IDIwMjNcIlxuICAgIH1cbiAgICBzdGF0aWNGb290ZXIoKTtcblxufVxuXG5zY3JlZW5Db250cm9sbGVyKCk7XG5ob21lKCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=