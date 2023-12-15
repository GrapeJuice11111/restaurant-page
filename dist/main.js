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

    function picture() {
        backgroundPicture = document.createElement("img")
        backgroundPicture.classList.add("pictureAbout")
        backgroundPicture.setAttribute('src', '')
        backgroundPicture.setAttribute('alt', "aboutUsPicture")
    }
    
    function topHeader()
    {
        upperHeading = document.createElement("h1")
        upperHeading.classList.add("upperHeadingAbout")
        upperHeading.textContent = "LemonLush"
    }

    function body(){
        middleBody = document.createElement("article")
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
    }


    function bottom(){
        lowerBottom = document.createAttribute("div")
        lowerBottomParagraph = document.createAttribute("p")
        lowerBottom.classList.add("lowerBottomAbout")
        lowerBottom.textContent = "Location"
        lowerBottomParagraph.textContent = "Lower East Side neighborhood in New York City"
    }

    return {
        picture, topHeader, body, bottom
    }   

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
    content.appendChild(menuDiv)

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
            let execution = true;
            if(execution === true){
                execution = false;
                (0,_home_js__WEBPACK_IMPORTED_MODULE_2__.home)();
            }
        })

        navBarHandler.navBarBtn2.addEventListener('click', function(){
            let execution = true;
            if(execution === true){
                execution = false;
                (0,_menu_js__WEBPACK_IMPORTED_MODULE_1__.menu)();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFZ0I7Ozs7Ozs7Ozs7Ozs7Ozs7QUM5Q2hCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRWU7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoRGY7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNlOzs7Ozs7OztVQ3hFZjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7QUNOa0M7QUFDRjtBQUNBOzs7QUFHaEM7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsOENBQUk7QUFDcEI7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLDhDQUFJO0FBQ3BCO0FBQ0EsU0FBUztBQUNUO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0EsK0NBQStDO0FBQy9DO0FBQ0E7O0FBRUE7O0FBRUEsbUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvYWJvdXQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2hvbWUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL21lbnUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGFib3V0ID0gZnVuY3Rpb24oKSB7XG5cbiAgICBmdW5jdGlvbiBwaWN0dXJlKCkge1xuICAgICAgICBiYWNrZ3JvdW5kUGljdHVyZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIilcbiAgICAgICAgYmFja2dyb3VuZFBpY3R1cmUuY2xhc3NMaXN0LmFkZChcInBpY3R1cmVBYm91dFwiKVxuICAgICAgICBiYWNrZ3JvdW5kUGljdHVyZS5zZXRBdHRyaWJ1dGUoJ3NyYycsICcnKVxuICAgICAgICBiYWNrZ3JvdW5kUGljdHVyZS5zZXRBdHRyaWJ1dGUoJ2FsdCcsIFwiYWJvdXRVc1BpY3R1cmVcIilcbiAgICB9XG4gICAgXG4gICAgZnVuY3Rpb24gdG9wSGVhZGVyKClcbiAgICB7XG4gICAgICAgIHVwcGVySGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKVxuICAgICAgICB1cHBlckhlYWRpbmcuY2xhc3NMaXN0LmFkZChcInVwcGVySGVhZGluZ0Fib3V0XCIpXG4gICAgICAgIHVwcGVySGVhZGluZy50ZXh0Q29udGVudCA9IFwiTGVtb25MdXNoXCJcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBib2R5KCl7XG4gICAgICAgIG1pZGRsZUJvZHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYXJ0aWNsZVwiKVxuICAgICAgICBtaWRkbGVCb2R5LmNsYXNzTGlzdC5hZGQoXCJtaWRkbGVCb2R5QWJvdXRcIilcbiAgICAgICAgbWlkZGxlQm9keS50ZXh0Q29udGVudCA9IGAgT3BlbmluZyBhbmQgQ2xvc2luZyBIb3VycyBmb3IgTGVtb25hZGVsdXNoXG4gICAgICAgIE1vbmRheSB0byBGcmlkYXk6XG4gICAgICAgIE9wZW5pbmcgSG91cnM6IDggQU1cbiAgICAgICAgQ2xvc2luZyBIb3VyczogNyBQTVxuICAgICAgICBTYXR1cmRheTpcbiAgICAgICAgT3BlbmluZyBIb3VyczogOSBBTVxuICAgICAgICBDbG9zaW5nIEhvdXJzOiA2IFBNXG4gICAgICAgIFN1bmRheTpcbiAgICAgICAgT3BlbmluZyBIb3VyczogMTAgQU0gXG4gICAgICAgIENsb3NpbmcgSG91cnM6IDUgUE0gYFxuICAgIH1cblxuXG4gICAgZnVuY3Rpb24gYm90dG9tKCl7XG4gICAgICAgIGxvd2VyQm90dG9tID0gZG9jdW1lbnQuY3JlYXRlQXR0cmlidXRlKFwiZGl2XCIpXG4gICAgICAgIGxvd2VyQm90dG9tUGFyYWdyYXBoID0gZG9jdW1lbnQuY3JlYXRlQXR0cmlidXRlKFwicFwiKVxuICAgICAgICBsb3dlckJvdHRvbS5jbGFzc0xpc3QuYWRkKFwibG93ZXJCb3R0b21BYm91dFwiKVxuICAgICAgICBsb3dlckJvdHRvbS50ZXh0Q29udGVudCA9IFwiTG9jYXRpb25cIlxuICAgICAgICBsb3dlckJvdHRvbVBhcmFncmFwaC50ZXh0Q29udGVudCA9IFwiTG93ZXIgRWFzdCBTaWRlIG5laWdoYm9yaG9vZCBpbiBOZXcgWW9yayBDaXR5XCJcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBwaWN0dXJlLCB0b3BIZWFkZXIsIGJvZHksIGJvdHRvbVxuICAgIH0gICBcblxufVxuXG5leHBvcnQgeyBhYm91dCB9XG5cbiIsImNvbnN0IGhvbWUgPSBmdW5jdGlvbigpIHtcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKVxuICAgIGNvbnN0IGhvbWVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChob21lRGl2KVxuXG4gICAgZnVuY3Rpb24gcGljdHVyZSgpIHtcbiAgICAgICAgY29uc3QgYmFja2dyb3VuZFBpY3R1cmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpXG4gICAgICAgIGJhY2tncm91bmRQaWN0dXJlLmNsYXNzTGlzdC5hZGQoXCJwaWN0dXJlXCIpXG4gICAgICAgIGJhY2tncm91bmRQaWN0dXJlLnNldEF0dHJpYnV0ZSgnc3JjJywgJy4vbGVtb25hZGVsdXNoLmpwZWcnKVxuICAgICAgICBiYWNrZ3JvdW5kUGljdHVyZS5zZXRBdHRyaWJ1dGUoJ2FsdCcsIFwiTGVtb25hZGUgUGljdHVyZVwiKVxuICAgICAgICBob21lRGl2LmFwcGVuZENoaWxkKGJhY2tncm91bmRQaWN0dXJlKTtcbiAgICB9XG4gICAgcGljdHVyZSgpO1xuICAgIFxuICAgIGZ1bmN0aW9uIHRvcEhlYWRlcigpXG4gICAge1xuICAgICAgICBjb25zdCB1cHBlckhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIilcbiAgICAgICAgdXBwZXJIZWFkaW5nLmNsYXNzTGlzdC5hZGQoXCJ1cHBlckhlYWRpbmdIb21lXCIpXG4gICAgICAgIHVwcGVySGVhZGluZy50ZXh0Q29udGVudCA9IFwiTGVtb25MdXNoXCJcbiAgICAgICAgaG9tZURpdi5hcHBlbmRDaGlsZCh1cHBlckhlYWRpbmcpO1xuICAgICAgICBcbiAgICAgICAgXG4gICAgfVxuICAgIHRvcEhlYWRlcigpO1xuXG4gICAgZnVuY3Rpb24gYm9keSgpe1xuICAgICAgICBjb25zdCBtaWRkbGVCb2R5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFydGljbGVcIilcbiAgICAgICAgbWlkZGxlQm9keS5jbGFzc0xpc3QuYWRkKFwibWlkZGxlQm9keUhvbWVcIilcbiAgICAgICAgbWlkZGxlQm9keS50ZXh0Q29udGVudCA9IFwiIEltbWVyc2UgeW91cnNlbGYgaW4gdGhlIGRlbGlnaHRmdWwgd29ybGQgb2YgTGVtb25hZGVMdXNoIENyYWZ0ZWQgZnJvbSBoYW5kcGlja2VkLCBzdW4ta2lzc2VkIGxlbW9ucywgb3VyIHJlZnJlc2hpbmcgY29uY29jdGlvbiBvZmZlcnMgYSBidXJzdCBvZiBuYXR1cmFsIGZsYXZvciB0aGF0IHRyYW5zcG9ydHMgeW91IHRvIHZpYnJhbnQgbGVtb24gb3JjaGFyZHMuIE1ldGljdWxvdXNseSBiYWxhbmNlZCB3aXRoIHRoZSBwZXJmZWN0IHN3ZWV0bmVzcywgZWFjaCBzaXAgaXMgYSBzeW1waG9ueSBvZiB0YXN0ZSwgcmFuZ2luZyBmcm9tIGNsYXNzaWMgdG8gbWludC1pbmZ1c2VkIGFuZCBiZXJyeS1idXJzdC4gRW1icmFjaW5nIGZhcm0tdG8tY3VwIGZyZXNobmVzcywgb3VyIGxvY2FsbHkgc291cmNlZCBpbmdyZWRpZW50cyBlbnN1cmUgdGhhdCBldmVyeSBnbGFzcyBzdXBwb3J0cyBsb2NhbCBmYXJtZXJzLiBJZGVhbCBmb3IgYW55IG9jY2FzaW9uLCBiZSBpdCBieSB0aGUgcG9vbCwgaW4gdGhlIHBhcmssIG9yIGF0IGEgc3VtbWVyIHNvaXLDqWUsIEFsaWNlIExlbW9uYWRlIGVsZXZhdGVzIGV2ZXJ5IG1vbWVudC4gSm9pbiB0aGUgQWxpY2UgTGVtb25hZGUgQ2x1YiBmb3IgZXhjbHVzaXZlIHBlcmtzIGFuZCB2aXNpdCBvdXIgc3RhbmQgYXQgTmV3IFlvcmsgQ2l0eSB0byBpbmR1bGdlIGluIHRoZSBwdXJlIGpveSBvZiBMZW1vbmFkZUx1c2ghXCJcbiAgICAgICAgaG9tZURpdi5hcHBlbmRDaGlsZChtaWRkbGVCb2R5KTtcbiAgICB9XG4gICAgYm9keSgpO1xuXG5cbiAgICBmdW5jdGlvbiBib3R0b20oKXtcbiAgICAgICAgY29uc3QgbG93ZXJCb3R0b20gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4gICAgICAgIGxvd2VyQm90dG9tLmNsYXNzTGlzdC5hZGQoXCJsb3dlckJvdHRvbUhvbWVcIilcbiAgICAgICAgbG93ZXJCb3R0b20udGV4dENvbnRlbnQgPSBcIkVtYmFyayBvbiBhIHJlZnJlc2hpbmcgam91cm5leSBhdCBMZW1vbmFkZWx1c2gsIGxvY2F0ZWQgaW4gdGhlIGhlYXJ0IG9mIE5ldyBZb3JrIENpdHkuIEZyb20gMTAgQU0gdG8gNiBQTSBkYWlseSwgaW1tZXJzZSB5b3Vyc2VsZiBpbiB0aGUgYnVzdGxpbmcgY2l0eXNjYXBlIGFzIHlvdSBzaXAgb24gdGhlIHN1bnNoaW5lLWluZnVzZWQgY3JlYXRpb25zIG9mIExlbW9uYWRlbHVzaC4gV2hldGhlciB5b3Ugc3RhcnQgeW91ciBkYXkgd2l0aCBhIHJldml0YWxpemluZyBtb3JuaW5nIHNpcCBvciB1bndpbmQgaW4gdGhlIGxhdGUgYWZ0ZXJub29uIGJyZWV6ZSBhbWlkc3QgdGhlIGljb25pYyBza3lsaW5lLCB0aGUgZW5jaGFudGluZyBob3VycyBhdCBvdXIgTmV3IFlvcmsgQ2l0eSBsb2NhdGlvbiBvZmZlciBhIGRlbGlnaHRmdWwgZXNjYXBlIGludG8gdGhlIHdvcmxkIG9mIExlbW9uYWRlbHVzaC5cIlxuICAgICAgICBob21lRGl2LmFwcGVuZENoaWxkKGxvd2VyQm90dG9tKTtcbiAgICB9IFxuICAgIGJvdHRvbSgpXG5cbiAgICByZXR1cm4ge1xuICAgICAgICBwaWN0dXJlLCB0b3BIZWFkZXIsIGJvZHksIGJvdHRvbVxuICAgIH0gICBcblxufVxuXG5leHBvcnQgeyBob21lIH1cblxuIiwiY29uc3QgbWVudSA9IGZ1bmN0aW9uKCkge1xuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpXG4gICAgY29uc3QgbWVudURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKG1lbnVEaXYpXG5cbiAgICBmdW5jdGlvbiB0b3BIZWFkZXIoKVxuICAgIHtcbiAgICAgICAgY29uc3QgdXBwZXJIZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpXG4gICAgICAgIHVwcGVySGVhZGluZy5jbGFzc0xpc3QuYWRkKFwidXBwZXJIZWFkaW5nTWVudVwiKVxuICAgICAgICB1cHBlckhlYWRpbmcudGV4dENvbnRlbnQgPSBcIk1lbnVcIlxuICAgICAgICBtZW51RGl2LmFwcGVuZENoaWxkKHVwcGVySGVhZGluZylcbiAgICB9XG4gICAgICAgIHRvcEhlYWRlcigpO1xuICAgIGZ1bmN0aW9uIG1lbnVDb250ZW50KCl7XG5cbiAgICAgICAgZnVuY3Rpb24gbWVudTEoKSB7XG4gICAgICAgICAgICBjb25zdCBtZW51Qm9keTEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYXJ0aWNsZVwiKVxuICAgICAgICAgICAgY29uc3QgbWVudUhlYWRpbmcxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpXG4gICAgICAgICAgICBjb25zdCBtZW51UGFyYWdyYXBoMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpXG4gICAgICAgICAgICBtZW51SGVhZGluZzEudGV4dENvbnRlbnQgPSBcIkNsYXNzaWMgQ2l0cnVzIFNwbGFzaFwiXG4gICAgICAgICAgICBtZW51UGFyYWdyYXBoMS50ZXh0Q29udGVudCA9IFwiRnJlc2hseSBzcXVlZXplZCBsZW1vbnMsIHB1cmUgY2FuZSBzdWdhciwgYW5kIGEgaGludCBvZiBsZW1vbiB6ZXN0LiBBIHRpbWVsZXNzLCByZWZyZXNoaW5nIGZhdm9yaXRlIHRoYXQgY2FwdHVyZXMgdGhlIGVzc2VuY2Ugb2YgcHVyZSBjaXRydXMuXCJcbiAgICAgICAgICAgIG1lbnVEaXYuYXBwZW5kQ2hpbGQobWVudUJvZHkxKVxuICAgICAgICAgICAgbWVudUJvZHkxLmFwcGVuZENoaWxkKG1lbnVIZWFkaW5nMSlcbiAgICAgICAgICAgIG1lbnVCb2R5MS5hcHBlbmRDaGlsZChtZW51UGFyYWdyYXBoMSlcbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIG1lbnUyKCkge1xuICAgICAgICAgICAgY29uc3QgbWVudUJvZHkyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFydGljbGVcIilcbiAgICAgICAgICAgIGNvbnN0IG1lbnVIZWFkaW5nMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKVxuICAgICAgICAgICAgY29uc3QgbWVudVBhcmFncmFwaDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKVxuICAgICAgICAgICAgbWVudUhlYWRpbmcyLnRleHRDb250ZW50ID0gXCJCZXJyeSBCbGlzcyBCdXJzdFwiXG4gICAgICAgICAgICBtZW51UGFyYWdyYXBoMi50ZXh0Q29udGVudCA9IFwiQSBtZWRsZXkgb2YgbWl4ZWQgYmVycmllcyBibGVuZGVkIHdpdGggb3VyIHNpZ25hdHVyZSBsZW1vbmFkZSwgY3JlYXRpbmcgYSBzd2VldCBhbmQgdGFydCBmdXNpb24gZm9yIGEgYnVyc3Qgb2YgZnJ1aXR5IGdvb2RuZXNzLlwiXG4gICAgICAgICAgICBtZW51RGl2LmFwcGVuZENoaWxkKG1lbnVCb2R5MilcbiAgICAgICAgICAgIG1lbnVCb2R5Mi5hcHBlbmRDaGlsZChtZW51SGVhZGluZzIpXG4gICAgICAgICAgICBtZW51Qm9keTIuYXBwZW5kQ2hpbGQobWVudVBhcmFncmFwaDIpXG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBtZW51Mygpe1xuICAgICAgICAgICAgY29uc3QgbWVudUJvZHkzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFydGljbGVcIilcbiAgICAgICAgICAgIGNvbnN0IG1lbnVIZWFkaW5nMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKVxuICAgICAgICAgICAgY29uc3QgbWVudVBhcmFncmFwaDMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKVxuICAgICAgICAgICAgbWVudUhlYWRpbmczLnRleHRDb250ZW50ID0gXCJNaW50eSBMZW1vbiBSZWZyZXNoZXJcIlxuICAgICAgICAgICAgbWVudVBhcmFncmFwaDMudGV4dENvbnRlbnQgPSBcIkludmlnb3JhdGUgeW91ciBzZW5zZXMgd2l0aCB0aGlzIGNvb2xpbmcgYmxlbmQgb2YgbGVtb25hZGUgaW5mdXNlZCB3aXRoIGZyZXNobHkgY3J1c2hlZCBtaW50IGxlYXZlcywgcHJvdmlkaW5nIGEgcmV2aXRhbGl6aW5nIHR3aXN0LlwiXG4gICAgICAgICAgICBtZW51RGl2LmFwcGVuZENoaWxkKG1lbnVCb2R5MylcbiAgICAgICAgICAgIG1lbnVCb2R5My5hcHBlbmRDaGlsZChtZW51SGVhZGluZzMpXG4gICAgICAgICAgICBtZW51Qm9keTMuYXBwZW5kQ2hpbGQobWVudVBhcmFncmFwaDMpXG4gICAgICAgIH1cblxuXG4gICAgICAgIGZ1bmN0aW9uIG1lbnU0KCl7XG4gICAgICAgICAgICBjb25zdCBtZW51Qm9keTQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYXJ0aWNsZVwiKVxuICAgICAgICAgICAgY29uc3QgbWVudUhlYWRpbmc0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpXG4gICAgICAgICAgICBjb25zdCBtZW51UGFyYWdyYXBoNCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpXG4gICAgICAgICAgICBtZW51SGVhZGluZzQudGV4dENvbnRlbnQgPSBcIlRyb3BpY2FsIFBpbmVhcHBsZSBQYXJhZGlzZVwiXG4gICAgICAgICAgICBtZW51UGFyYWdyYXBoNC50ZXh0Q29udGVudCA9IFwiRXNjYXBlIHRvIGEgdHJvcGljYWwgcGFyYWRpc2Ugd2l0aCBvdXIgZXhvdGljIGJsZW5kIG9mIHBpbmVhcHBsZSBhbmQgbGVtb25hZGUsIGRlbGl2ZXJpbmcgYSBzd2VldCBhbmQgdGFuZ3kgZmxhdm9yIHRoYXQgdHJhbnNwb3J0cyB5b3UgdG8gc3Vubnkgc2hvcmVzLlwiXG4gICAgICAgICAgICBtZW51RGl2LmFwcGVuZENoaWxkKG1lbnVCb2R5NClcbiAgICAgICAgICAgIG1lbnVCb2R5NC5hcHBlbmRDaGlsZChtZW51SGVhZGluZzQpXG4gICAgICAgICAgICBtZW51Qm9keTQuYXBwZW5kQ2hpbGQobWVudVBhcmFncmFwaDQpXG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBtZW51MSxtZW51MixtZW51MyxtZW51NFxuICAgICAgICB9XG4gICAgfVxuICAgIG1lbnVDb250ZW50KCkubWVudTEoKTtcbiAgICBtZW51Q29udGVudCgpLm1lbnUyKClcbiAgICBtZW51Q29udGVudCgpLm1lbnUzKClcbiAgICBtZW51Q29udGVudCgpLm1lbnU0KClcblxuXG59XG4gICAgXG5leHBvcnQgeyBtZW51IH1cblxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBhYm91dCB9IGZyb20gJy4vYWJvdXQuanMnXG5pbXBvcnQgeyBtZW51IH0gZnJvbSAnLi9tZW51LmpzJ1xuaW1wb3J0IHsgaG9tZSB9IGZyb20gJy4vaG9tZS5qcydcblxuXG5jb25zdCAgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50JylcblxuZnVuY3Rpb24gc2NyZWVuQ29udHJvbGxlcigpIHtcbiAgICBcblxuICAgIChmdW5jdGlvbiBzdGFpY0hlYWRpbmcoKXtcbiAgICAgIGNvbnN0ICBtYWluSGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2hlYWRlcicpXG4gICAgICAgIG1haW5IZWFkaW5nLnRleHRDb250ZW50ID0gXCJMZW1vbkx1c2hcIlxuICAgICAgICBjb250ZW50LmFwcGVuZENoaWxkKG1haW5IZWFkaW5nKVxuICAgIH0pKClcblxuICAgIGZ1bmN0aW9uIG5hdkJhcigpe1xuICAgICAgIGNvbnN0IG1haW5OYXZCYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCduYXYnKVxuICAgICAgIGNvbnN0IG5hdkJhckJ0bjEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICAgICAgICBuYXZCYXJCdG4xLnRleHRDb250ZW50ID0gXCJIb21lXCJcbiAgICAgICAgY29uc3QgbmF2QmFyQnRuMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gICAgICAgIG5hdkJhckJ0bjIudGV4dENvbnRlbnQgPSBcIk1lbnVcIlxuICAgICAgICBjb25zdCBuYXZCYXJCdG4zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgICAgICAgbmF2QmFyQnRuMy50ZXh0Q29udGVudCA9IFwiQWJvdXQgVXNcIlxuICAgICAgICBtYWluTmF2QmFyLmFwcGVuZENoaWxkKG5hdkJhckJ0bjEpXG4gICAgICAgIG1haW5OYXZCYXIuYXBwZW5kQ2hpbGQobmF2QmFyQnRuMilcbiAgICAgICAgbWFpbk5hdkJhci5hcHBlbmRDaGlsZChuYXZCYXJCdG4zKVxuICAgICAgICBjb250ZW50LmFwcGVuZENoaWxkKG1haW5OYXZCYXIpO1xuXG5cbiAgICAgICAgXG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIG5hdkJhckJ0bjEsIG5hdkJhckJ0bjIsIG5hdkJhckJ0bjNcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNsaWNrSGFuZGxlcigpe1xuICAgICAgICBjb25zdCBuYXZCYXJIYW5kbGVyID0gbmF2QmFyKClcbiAgICAgICAgbmF2QmFySGFuZGxlci5uYXZCYXJCdG4xLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIGxldCBleGVjdXRpb24gPSB0cnVlO1xuICAgICAgICAgICAgaWYoZXhlY3V0aW9uID09PSB0cnVlKXtcbiAgICAgICAgICAgICAgICBleGVjdXRpb24gPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBob21lKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG5cbiAgICAgICAgbmF2QmFySGFuZGxlci5uYXZCYXJCdG4yLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIGxldCBleGVjdXRpb24gPSB0cnVlO1xuICAgICAgICAgICAgaWYoZXhlY3V0aW9uID09PSB0cnVlKXtcbiAgICAgICAgICAgICAgICBleGVjdXRpb24gPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBtZW51KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfVxuICAgIGNsaWNrSGFuZGxlcigpO1xuXG5cblxuICAgIGZ1bmN0aW9uIHN0YXRpY0Zvb3Rlcigpe1xuICAgICAgICBjb25zdCBmb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9vdGVyXCIpXG4gICAgICAgIGZvb3Rlci50ZXh0Q29udGVudCA9IFwiTGVtb25MdXNoICYjMTY5OyAyMDIzXCJcbiAgICB9XG4gICAgc3RhdGljRm9vdGVyKCk7XG5cbn1cblxuc2NyZWVuQ29udHJvbGxlcigpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==