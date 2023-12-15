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
            }
            else if(document.contains(document.getElementById("aboutDivId"))){
                document.getElementById("aboutDivId").remove();
            }
            else{
                (0,_home_js__WEBPACK_IMPORTED_MODULE_2__.home)();
            }
        })

        navBarHandler.navBarBtn2.addEventListener('click', function(){
            if(document.contains(document.getElementById("homeDivId"))){
                document.getElementById("homeDivId").remove();
            }
            else if(document.contains(document.getElementById("menuDivId"))){
                return;
            }
            else if(document.contains(document.getElementById("aboutDivId"))){
                document.getElementById("aboutDivId").remove();
            }
            else{
                (0,_menu_js__WEBPACK_IMPORTED_MODULE_1__.menu)();
            }
            });
            
            
        

        navBarHandler.navBarBtn3.addEventListener('click', function(){
            if(document.contains(document.getElementById("homeDivId"))){
                document.getElementById("homeDivId").remove();
            }
            else if(document.contains(document.getElementById("menuDivId"))){
                document.getElementById("menuDivId").remove();
            }
            else if(document.contains(document.getElementById("aboutDivId"))){
                return;
            }
            else {
            (0,_about_js__WEBPACK_IMPORTED_MODULE_0__.about)();
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
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFZ0I7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1RGhCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFZTs7Ozs7Ozs7Ozs7Ozs7OztBQ2pEZjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDZTs7Ozs7Ozs7VUN6RWY7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7O0FDTmtDO0FBQ0Y7QUFDQTs7O0FBR2hDOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsOENBQUk7QUFDcEI7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsOENBQUk7QUFDcEI7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLGdEQUFLO0FBQ2pCO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQSwrQ0FBK0M7QUFDL0M7QUFDQTs7QUFFQTs7QUFFQSxtQiIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9hYm91dC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaG9tZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbWVudS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgYWJvdXQgPSBmdW5jdGlvbigpIHtcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKVxuICAgIGNvbnN0IGFib3V0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICAgIGFib3V0RGl2LnNldEF0dHJpYnV0ZShcImlkXCIsXCJhYm91dERpdklkXCIpXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChhYm91dERpdilcblxuXG5cbiAgICBmdW5jdGlvbiBwaWN0dXJlKCkge1xuICAgICAgICBjb25zdCBiYWNrZ3JvdW5kUGljdHVyZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIilcbiAgICAgICAgYmFja2dyb3VuZFBpY3R1cmUuY2xhc3NMaXN0LmFkZChcInBpY3R1cmVBYm91dFwiKVxuICAgICAgICBiYWNrZ3JvdW5kUGljdHVyZS5zZXRBdHRyaWJ1dGUoJ3NyYycsICcnKVxuICAgICAgICBiYWNrZ3JvdW5kUGljdHVyZS5zZXRBdHRyaWJ1dGUoJ2FsdCcsIFwiYWJvdXRVc1BpY3R1cmVcIilcbiAgICAgICAgYWJvdXREaXYuYXBwZW5kQ2hpbGQoYmFja2dyb3VuZFBpY3R1cmUpXG4gICAgfVxuICAgIHBpY3R1cmUoKTtcbiAgICBcbiAgICBmdW5jdGlvbiB0b3BIZWFkZXIoKVxuICAgIHtcbiAgICAgICAgY29uc3QgdXBwZXJIZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpXG4gICAgICAgIHVwcGVySGVhZGluZy5jbGFzc0xpc3QuYWRkKFwidXBwZXJIZWFkaW5nQWJvdXRcIilcbiAgICAgICAgdXBwZXJIZWFkaW5nLnRleHRDb250ZW50ID0gXCJMZW1vbkx1c2hcIlxuICAgICAgICBhYm91dERpdi5hcHBlbmRDaGlsZCh1cHBlckhlYWRpbmcpXG4gICAgfVxuICAgIHRvcEhlYWRlcigpO1xuXG4gICAgZnVuY3Rpb24gYm9keSgpe1xuICAgICAgICBjb25zdCBtaWRkbGVCb2R5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFydGljbGVcIilcbiAgICAgICAgbWlkZGxlQm9keS5jbGFzc0xpc3QuYWRkKFwibWlkZGxlQm9keUFib3V0XCIpXG4gICAgICAgIG1pZGRsZUJvZHkudGV4dENvbnRlbnQgPSBgIE9wZW5pbmcgYW5kIENsb3NpbmcgSG91cnMgZm9yIExlbW9uYWRlbHVzaFxuICAgICAgICBNb25kYXkgdG8gRnJpZGF5OlxuICAgICAgICBPcGVuaW5nIEhvdXJzOiA4IEFNXG4gICAgICAgIENsb3NpbmcgSG91cnM6IDcgUE1cbiAgICAgICAgU2F0dXJkYXk6XG4gICAgICAgIE9wZW5pbmcgSG91cnM6IDkgQU1cbiAgICAgICAgQ2xvc2luZyBIb3VyczogNiBQTVxuICAgICAgICBTdW5kYXk6XG4gICAgICAgIE9wZW5pbmcgSG91cnM6IDEwIEFNIFxuICAgICAgICBDbG9zaW5nIEhvdXJzOiA1IFBNIGBcbiAgICAgICAgYWJvdXREaXYuYXBwZW5kQ2hpbGQobWlkZGxlQm9keSlcbiAgICB9XG4gICAgYm9keSgpO1xuXG4gICAgZnVuY3Rpb24gYm90dG9tKCl7XG4gICAgICAgIGNvbnN0IGxvd2VyQm90dG9tID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYXJ0aWNsZScpXG4gICAgICAgIGNvbnN0IGxvd2VyQm90dG9tSGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgICAgICAgY29uc3QgbG93ZXJCb3R0b21QYXJhZ3JhcGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKVxuICAgICAgICBsb3dlckJvdHRvbS5jbGFzc0xpc3QuYWRkKFwibG93ZXJCb3R0b21BYm91dFwiKVxuICAgICAgICBsb3dlckJvdHRvbS50ZXh0Q29udGVudCA9IFwiTG9jYXRpb25cIlxuICAgICAgICBsb3dlckJvdHRvbVBhcmFncmFwaC50ZXh0Q29udGVudCA9IFwiTG93ZXIgRWFzdCBTaWRlIG5laWdoYm9yaG9vZCBpbiBOZXcgWW9yayBDaXR5XCJcbiAgICAgICAgYWJvdXREaXYuYXBwZW5kQ2hpbGQobG93ZXJCb3R0b20pXG4gICAgICAgIGxvd2VyQm90dG9tLmFwcGVuZENoaWxkKGxvd2VyQm90dG9tSGVhZGluZylcbiAgICAgICAgbG93ZXJCb3R0b20uYXBwZW5kQ2hpbGQobG93ZXJCb3R0b21QYXJhZ3JhcGgpXG4gICAgfVxuICAgIFxuXG4gICAgYm90dG9tKCk7XG5cbn1cblxuZXhwb3J0IHsgYWJvdXQgfVxuXG4iLCJjb25zdCBob21lID0gZnVuY3Rpb24oKSB7XG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50JylcbiAgICBjb25zdCBob21lRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICAgIGhvbWVEaXYuc2V0QXR0cmlidXRlKFwiaWRcIixcImhvbWVEaXZJZFwiKVxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoaG9tZURpdilcblxuICAgIGZ1bmN0aW9uIHBpY3R1cmUoKSB7XG4gICAgICAgIGNvbnN0IGJhY2tncm91bmRQaWN0dXJlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKVxuICAgICAgICBiYWNrZ3JvdW5kUGljdHVyZS5jbGFzc0xpc3QuYWRkKFwicGljdHVyZVwiKVxuICAgICAgICBiYWNrZ3JvdW5kUGljdHVyZS5zZXRBdHRyaWJ1dGUoJ3NyYycsICcuL2xlbW9uYWRlbHVzaC5qcGVnJylcbiAgICAgICAgYmFja2dyb3VuZFBpY3R1cmUuc2V0QXR0cmlidXRlKCdhbHQnLCBcIkxlbW9uYWRlIFBpY3R1cmVcIilcbiAgICAgICAgaG9tZURpdi5hcHBlbmRDaGlsZChiYWNrZ3JvdW5kUGljdHVyZSk7XG4gICAgfVxuICAgIHBpY3R1cmUoKTtcbiAgICBcbiAgICBmdW5jdGlvbiB0b3BIZWFkZXIoKVxuICAgIHtcbiAgICAgICAgY29uc3QgdXBwZXJIZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpXG4gICAgICAgIHVwcGVySGVhZGluZy5jbGFzc0xpc3QuYWRkKFwidXBwZXJIZWFkaW5nSG9tZVwiKVxuICAgICAgICB1cHBlckhlYWRpbmcudGV4dENvbnRlbnQgPSBcIkxlbW9uTHVzaFwiXG4gICAgICAgIGhvbWVEaXYuYXBwZW5kQ2hpbGQodXBwZXJIZWFkaW5nKTtcbiAgICAgICAgXG4gICAgICAgIFxuICAgIH1cbiAgICB0b3BIZWFkZXIoKTtcblxuICAgIGZ1bmN0aW9uIGJvZHkoKXtcbiAgICAgICAgY29uc3QgbWlkZGxlQm9keSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhcnRpY2xlXCIpXG4gICAgICAgIG1pZGRsZUJvZHkuY2xhc3NMaXN0LmFkZChcIm1pZGRsZUJvZHlIb21lXCIpXG4gICAgICAgIG1pZGRsZUJvZHkudGV4dENvbnRlbnQgPSBcIiBJbW1lcnNlIHlvdXJzZWxmIGluIHRoZSBkZWxpZ2h0ZnVsIHdvcmxkIG9mIExlbW9uYWRlTHVzaCBDcmFmdGVkIGZyb20gaGFuZHBpY2tlZCwgc3VuLWtpc3NlZCBsZW1vbnMsIG91ciByZWZyZXNoaW5nIGNvbmNvY3Rpb24gb2ZmZXJzIGEgYnVyc3Qgb2YgbmF0dXJhbCBmbGF2b3IgdGhhdCB0cmFuc3BvcnRzIHlvdSB0byB2aWJyYW50IGxlbW9uIG9yY2hhcmRzLiBNZXRpY3Vsb3VzbHkgYmFsYW5jZWQgd2l0aCB0aGUgcGVyZmVjdCBzd2VldG5lc3MsIGVhY2ggc2lwIGlzIGEgc3ltcGhvbnkgb2YgdGFzdGUsIHJhbmdpbmcgZnJvbSBjbGFzc2ljIHRvIG1pbnQtaW5mdXNlZCBhbmQgYmVycnktYnVyc3QuIEVtYnJhY2luZyBmYXJtLXRvLWN1cCBmcmVzaG5lc3MsIG91ciBsb2NhbGx5IHNvdXJjZWQgaW5ncmVkaWVudHMgZW5zdXJlIHRoYXQgZXZlcnkgZ2xhc3Mgc3VwcG9ydHMgbG9jYWwgZmFybWVycy4gSWRlYWwgZm9yIGFueSBvY2Nhc2lvbiwgYmUgaXQgYnkgdGhlIHBvb2wsIGluIHRoZSBwYXJrLCBvciBhdCBhIHN1bW1lciBzb2lyw6llLCBBbGljZSBMZW1vbmFkZSBlbGV2YXRlcyBldmVyeSBtb21lbnQuIEpvaW4gdGhlIEFsaWNlIExlbW9uYWRlIENsdWIgZm9yIGV4Y2x1c2l2ZSBwZXJrcyBhbmQgdmlzaXQgb3VyIHN0YW5kIGF0IE5ldyBZb3JrIENpdHkgdG8gaW5kdWxnZSBpbiB0aGUgcHVyZSBqb3kgb2YgTGVtb25hZGVMdXNoIVwiXG4gICAgICAgIGhvbWVEaXYuYXBwZW5kQ2hpbGQobWlkZGxlQm9keSk7XG4gICAgfVxuICAgIGJvZHkoKTtcblxuXG4gICAgZnVuY3Rpb24gYm90dG9tKCl7XG4gICAgICAgIGNvbnN0IGxvd2VyQm90dG9tID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICAgICAgICBsb3dlckJvdHRvbS5jbGFzc0xpc3QuYWRkKFwibG93ZXJCb3R0b21Ib21lXCIpXG4gICAgICAgIGxvd2VyQm90dG9tLnRleHRDb250ZW50ID0gXCJFbWJhcmsgb24gYSByZWZyZXNoaW5nIGpvdXJuZXkgYXQgTGVtb25hZGVsdXNoLCBsb2NhdGVkIGluIHRoZSBoZWFydCBvZiBOZXcgWW9yayBDaXR5LiBGcm9tIDEwIEFNIHRvIDYgUE0gZGFpbHksIGltbWVyc2UgeW91cnNlbGYgaW4gdGhlIGJ1c3RsaW5nIGNpdHlzY2FwZSBhcyB5b3Ugc2lwIG9uIHRoZSBzdW5zaGluZS1pbmZ1c2VkIGNyZWF0aW9ucyBvZiBMZW1vbmFkZWx1c2guIFdoZXRoZXIgeW91IHN0YXJ0IHlvdXIgZGF5IHdpdGggYSByZXZpdGFsaXppbmcgbW9ybmluZyBzaXAgb3IgdW53aW5kIGluIHRoZSBsYXRlIGFmdGVybm9vbiBicmVlemUgYW1pZHN0IHRoZSBpY29uaWMgc2t5bGluZSwgdGhlIGVuY2hhbnRpbmcgaG91cnMgYXQgb3VyIE5ldyBZb3JrIENpdHkgbG9jYXRpb24gb2ZmZXIgYSBkZWxpZ2h0ZnVsIGVzY2FwZSBpbnRvIHRoZSB3b3JsZCBvZiBMZW1vbmFkZWx1c2guXCJcbiAgICAgICAgaG9tZURpdi5hcHBlbmRDaGlsZChsb3dlckJvdHRvbSk7XG4gICAgfSBcbiAgICBib3R0b20oKVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgcGljdHVyZSwgdG9wSGVhZGVyLCBib2R5LCBib3R0b21cbiAgICB9ICAgXG5cbn1cblxuZXhwb3J0IHsgaG9tZSB9XG5cbiIsImNvbnN0IG1lbnUgPSBmdW5jdGlvbigpIHtcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKVxuICAgIGNvbnN0IG1lbnVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4gICAgbWVudURpdi5zZXRBdHRyaWJ1dGUoXCJpZFwiLFwibWVudURpdklkXCIpO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQobWVudURpdik7XG5cbiAgICBmdW5jdGlvbiB0b3BIZWFkZXIoKVxuICAgIHtcbiAgICAgICAgY29uc3QgdXBwZXJIZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpXG4gICAgICAgIHVwcGVySGVhZGluZy5jbGFzc0xpc3QuYWRkKFwidXBwZXJIZWFkaW5nTWVudVwiKVxuICAgICAgICB1cHBlckhlYWRpbmcudGV4dENvbnRlbnQgPSBcIk1lbnVcIlxuICAgICAgICBtZW51RGl2LmFwcGVuZENoaWxkKHVwcGVySGVhZGluZylcbiAgICB9XG4gICAgICAgIHRvcEhlYWRlcigpO1xuICAgIGZ1bmN0aW9uIG1lbnVDb250ZW50KCl7XG5cbiAgICAgICAgZnVuY3Rpb24gbWVudTEoKSB7XG4gICAgICAgICAgICBjb25zdCBtZW51Qm9keTEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYXJ0aWNsZVwiKVxuICAgICAgICAgICAgY29uc3QgbWVudUhlYWRpbmcxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpXG4gICAgICAgICAgICBjb25zdCBtZW51UGFyYWdyYXBoMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpXG4gICAgICAgICAgICBtZW51SGVhZGluZzEudGV4dENvbnRlbnQgPSBcIkNsYXNzaWMgQ2l0cnVzIFNwbGFzaFwiXG4gICAgICAgICAgICBtZW51UGFyYWdyYXBoMS50ZXh0Q29udGVudCA9IFwiRnJlc2hseSBzcXVlZXplZCBsZW1vbnMsIHB1cmUgY2FuZSBzdWdhciwgYW5kIGEgaGludCBvZiBsZW1vbiB6ZXN0LiBBIHRpbWVsZXNzLCByZWZyZXNoaW5nIGZhdm9yaXRlIHRoYXQgY2FwdHVyZXMgdGhlIGVzc2VuY2Ugb2YgcHVyZSBjaXRydXMuXCJcbiAgICAgICAgICAgIG1lbnVEaXYuYXBwZW5kQ2hpbGQobWVudUJvZHkxKVxuICAgICAgICAgICAgbWVudUJvZHkxLmFwcGVuZENoaWxkKG1lbnVIZWFkaW5nMSlcbiAgICAgICAgICAgIG1lbnVCb2R5MS5hcHBlbmRDaGlsZChtZW51UGFyYWdyYXBoMSlcbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIG1lbnUyKCkge1xuICAgICAgICAgICAgY29uc3QgbWVudUJvZHkyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFydGljbGVcIilcbiAgICAgICAgICAgIGNvbnN0IG1lbnVIZWFkaW5nMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKVxuICAgICAgICAgICAgY29uc3QgbWVudVBhcmFncmFwaDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKVxuICAgICAgICAgICAgbWVudUhlYWRpbmcyLnRleHRDb250ZW50ID0gXCJCZXJyeSBCbGlzcyBCdXJzdFwiXG4gICAgICAgICAgICBtZW51UGFyYWdyYXBoMi50ZXh0Q29udGVudCA9IFwiQSBtZWRsZXkgb2YgbWl4ZWQgYmVycmllcyBibGVuZGVkIHdpdGggb3VyIHNpZ25hdHVyZSBsZW1vbmFkZSwgY3JlYXRpbmcgYSBzd2VldCBhbmQgdGFydCBmdXNpb24gZm9yIGEgYnVyc3Qgb2YgZnJ1aXR5IGdvb2RuZXNzLlwiXG4gICAgICAgICAgICBtZW51RGl2LmFwcGVuZENoaWxkKG1lbnVCb2R5MilcbiAgICAgICAgICAgIG1lbnVCb2R5Mi5hcHBlbmRDaGlsZChtZW51SGVhZGluZzIpXG4gICAgICAgICAgICBtZW51Qm9keTIuYXBwZW5kQ2hpbGQobWVudVBhcmFncmFwaDIpXG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBtZW51Mygpe1xuICAgICAgICAgICAgY29uc3QgbWVudUJvZHkzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFydGljbGVcIilcbiAgICAgICAgICAgIGNvbnN0IG1lbnVIZWFkaW5nMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKVxuICAgICAgICAgICAgY29uc3QgbWVudVBhcmFncmFwaDMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKVxuICAgICAgICAgICAgbWVudUhlYWRpbmczLnRleHRDb250ZW50ID0gXCJNaW50eSBMZW1vbiBSZWZyZXNoZXJcIlxuICAgICAgICAgICAgbWVudVBhcmFncmFwaDMudGV4dENvbnRlbnQgPSBcIkludmlnb3JhdGUgeW91ciBzZW5zZXMgd2l0aCB0aGlzIGNvb2xpbmcgYmxlbmQgb2YgbGVtb25hZGUgaW5mdXNlZCB3aXRoIGZyZXNobHkgY3J1c2hlZCBtaW50IGxlYXZlcywgcHJvdmlkaW5nIGEgcmV2aXRhbGl6aW5nIHR3aXN0LlwiXG4gICAgICAgICAgICBtZW51RGl2LmFwcGVuZENoaWxkKG1lbnVCb2R5MylcbiAgICAgICAgICAgIG1lbnVCb2R5My5hcHBlbmRDaGlsZChtZW51SGVhZGluZzMpXG4gICAgICAgICAgICBtZW51Qm9keTMuYXBwZW5kQ2hpbGQobWVudVBhcmFncmFwaDMpXG4gICAgICAgIH1cblxuXG4gICAgICAgIGZ1bmN0aW9uIG1lbnU0KCl7XG4gICAgICAgICAgICBjb25zdCBtZW51Qm9keTQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYXJ0aWNsZVwiKVxuICAgICAgICAgICAgY29uc3QgbWVudUhlYWRpbmc0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpXG4gICAgICAgICAgICBjb25zdCBtZW51UGFyYWdyYXBoNCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpXG4gICAgICAgICAgICBtZW51SGVhZGluZzQudGV4dENvbnRlbnQgPSBcIlRyb3BpY2FsIFBpbmVhcHBsZSBQYXJhZGlzZVwiXG4gICAgICAgICAgICBtZW51UGFyYWdyYXBoNC50ZXh0Q29udGVudCA9IFwiRXNjYXBlIHRvIGEgdHJvcGljYWwgcGFyYWRpc2Ugd2l0aCBvdXIgZXhvdGljIGJsZW5kIG9mIHBpbmVhcHBsZSBhbmQgbGVtb25hZGUsIGRlbGl2ZXJpbmcgYSBzd2VldCBhbmQgdGFuZ3kgZmxhdm9yIHRoYXQgdHJhbnNwb3J0cyB5b3UgdG8gc3Vubnkgc2hvcmVzLlwiXG4gICAgICAgICAgICBtZW51RGl2LmFwcGVuZENoaWxkKG1lbnVCb2R5NClcbiAgICAgICAgICAgIG1lbnVCb2R5NC5hcHBlbmRDaGlsZChtZW51SGVhZGluZzQpXG4gICAgICAgICAgICBtZW51Qm9keTQuYXBwZW5kQ2hpbGQobWVudVBhcmFncmFwaDQpXG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBtZW51MSxtZW51MixtZW51MyxtZW51NFxuICAgICAgICB9XG4gICAgfVxuICAgIG1lbnVDb250ZW50KCkubWVudTEoKTtcbiAgICBtZW51Q29udGVudCgpLm1lbnUyKClcbiAgICBtZW51Q29udGVudCgpLm1lbnUzKClcbiAgICBtZW51Q29udGVudCgpLm1lbnU0KClcblxuXG59XG4gICAgXG5leHBvcnQgeyBtZW51IH1cblxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBhYm91dCB9IGZyb20gJy4vYWJvdXQuanMnXG5pbXBvcnQgeyBtZW51IH0gZnJvbSAnLi9tZW51LmpzJ1xuaW1wb3J0IHsgaG9tZSB9IGZyb20gJy4vaG9tZS5qcydcblxuXG5jb25zdCAgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50JylcblxuZnVuY3Rpb24gc2NyZWVuQ29udHJvbGxlcigpIHtcbiAgICBcblxuICAgIChmdW5jdGlvbiBzdGFpY0hlYWRpbmcoKXtcbiAgICAgIGNvbnN0ICBtYWluSGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2hlYWRlcicpXG4gICAgICAgIG1haW5IZWFkaW5nLnRleHRDb250ZW50ID0gXCJMZW1vbkx1c2hcIlxuICAgICAgICBjb250ZW50LmFwcGVuZENoaWxkKG1haW5IZWFkaW5nKVxuICAgIH0pKClcblxuICAgIGZ1bmN0aW9uIG5hdkJhcigpe1xuICAgICAgIGNvbnN0IG1haW5OYXZCYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCduYXYnKVxuICAgICAgIGNvbnN0IG5hdkJhckJ0bjEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICAgICAgICBuYXZCYXJCdG4xLnRleHRDb250ZW50ID0gXCJIb21lXCJcbiAgICAgICAgY29uc3QgbmF2QmFyQnRuMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gICAgICAgIG5hdkJhckJ0bjIudGV4dENvbnRlbnQgPSBcIk1lbnVcIlxuICAgICAgICBjb25zdCBuYXZCYXJCdG4zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgICAgICAgbmF2QmFyQnRuMy50ZXh0Q29udGVudCA9IFwiQWJvdXQgVXNcIlxuICAgICAgICBtYWluTmF2QmFyLmFwcGVuZENoaWxkKG5hdkJhckJ0bjEpXG4gICAgICAgIG1haW5OYXZCYXIuYXBwZW5kQ2hpbGQobmF2QmFyQnRuMilcbiAgICAgICAgbWFpbk5hdkJhci5hcHBlbmRDaGlsZChuYXZCYXJCdG4zKVxuICAgICAgICBjb250ZW50LmFwcGVuZENoaWxkKG1haW5OYXZCYXIpO1xuXG5cbiAgICAgICAgXG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIG5hdkJhckJ0bjEsIG5hdkJhckJ0bjIsIG5hdkJhckJ0bjNcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNsaWNrSGFuZGxlcigpe1xuICAgICAgICBjb25zdCBuYXZCYXJIYW5kbGVyID0gbmF2QmFyKClcbiAgICAgICAgbmF2QmFySGFuZGxlci5uYXZCYXJCdG4xLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIGlmKGRvY3VtZW50LmNvbnRhaW5zKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaG9tZURpdklkXCIpKSl7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZihkb2N1bWVudC5jb250YWlucyhkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1lbnVEaXZJZFwiKSkpe1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWVudURpdklkXCIpLnJlbW92ZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZihkb2N1bWVudC5jb250YWlucyhkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFib3V0RGl2SWRcIikpKXtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFib3V0RGl2SWRcIikucmVtb3ZlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNle1xuICAgICAgICAgICAgICAgIGhvbWUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcblxuICAgICAgICBuYXZCYXJIYW5kbGVyLm5hdkJhckJ0bjIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpe1xuICAgICAgICAgICAgaWYoZG9jdW1lbnQuY29udGFpbnMoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJob21lRGl2SWRcIikpKXtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImhvbWVEaXZJZFwiKS5yZW1vdmUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYoZG9jdW1lbnQuY29udGFpbnMoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtZW51RGl2SWRcIikpKXtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmKGRvY3VtZW50LmNvbnRhaW5zKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWJvdXREaXZJZFwiKSkpe1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWJvdXREaXZJZFwiKS5yZW1vdmUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2V7XG4gICAgICAgICAgICAgICAgbWVudSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIFxuICAgICAgICBcblxuICAgICAgICBuYXZCYXJIYW5kbGVyLm5hdkJhckJ0bjMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpe1xuICAgICAgICAgICAgaWYoZG9jdW1lbnQuY29udGFpbnMoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJob21lRGl2SWRcIikpKXtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImhvbWVEaXZJZFwiKS5yZW1vdmUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYoZG9jdW1lbnQuY29udGFpbnMoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtZW51RGl2SWRcIikpKXtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1lbnVEaXZJZFwiKS5yZW1vdmUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYoZG9jdW1lbnQuY29udGFpbnMoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhYm91dERpdklkXCIpKSl7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBhYm91dCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICBcbiAgICB9XG4gICAgY2xpY2tIYW5kbGVyKCk7XG5cblxuXG4gICAgZnVuY3Rpb24gc3RhdGljRm9vdGVyKCl7XG4gICAgICAgIGNvbnN0IGZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb290ZXJcIilcbiAgICAgICAgZm9vdGVyLnRleHRDb250ZW50ID0gXCJMZW1vbkx1c2ggJiMxNjk7IDIwMjNcIlxuICAgIH1cbiAgICBzdGF0aWNGb290ZXIoKTtcblxufVxuXG5zY3JlZW5Db250cm9sbGVyKCk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9