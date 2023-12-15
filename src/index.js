import { about } from './about.js'
import { menu } from './menu.js'
import { home } from './home.js'



(function screenController() {
    
    (function staicHeading(){
        mainHeading = document.createElement('header')
        mainHeading.textContent = "LemonLush"
    })()

    (function navBar(){
        mainNavBar = document.createElement('nav')
        navBarBtn1 = document.createElement('button')
        navBarBtn1.textContent = "Home"
        navBarBtn2 = document.createElement('button')
        navBarBtn2.textContent = "Menu"
        navBarBtn3 = document.createElement('button')
        navBarBtn3.textContent = "About Us"
        

        return {
            navBarBtn1, navBarBtn2, navBarBtn3
        }
    })()


})()