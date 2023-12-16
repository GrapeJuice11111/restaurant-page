import { about } from './about.js'
import { menu } from './menu.js'
import { home } from './home.js'
import  './style.css';

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
                home();
                navBarHandler.navBarBtn1.classList.add("btn")

            }
            else if(document.contains(document.getElementById("aboutDivId"))){
                document.getElementById("aboutDivId").remove();
                navBarHandler.navBarBtn3.classList.remove("btn")
                home();
                navBarHandler.navBarBtn1.classList.add("btn")
            }
        })

        navBarHandler.navBarBtn2.addEventListener('click', function(){
            if(document.contains(document.getElementById("homeDivId"))){
                document.getElementById("homeDivId").remove();
                navBarHandler.navBarBtn1.classList.remove("btn")
                menu();
                navBarHandler.navBarBtn2.classList.add("btn")

            }
            else if(document.contains(document.getElementById("menuDivId"))){
                return;
            }
            else if(document.contains(document.getElementById("aboutDivId"))){
                document.getElementById("aboutDivId").remove();
                navBarHandler.navBarBtn3.classList.remove("btn")
                menu();
                navBarHandler.navBarBtn2.classList.add("btn")
            }
            });
            
            
        

        navBarHandler.navBarBtn3.addEventListener('click', function(){
            if(document.contains(document.getElementById("homeDivId"))){
                document.getElementById("homeDivId").remove();
                navBarHandler.navBarBtn1.classList.remove("btn")
                about();
                navBarHandler.navBarBtn3.classList.add("btn")
            }
            else if(document.contains(document.getElementById("menuDivId"))){
                document.getElementById("menuDivId").remove();
                navBarHandler.navBarBtn2.classList.remove("btn")
                about();
                navBarHandler.navBarBtn3.classList.add("btn")
            }
            else if(document.contains(document.getElementById("aboutDivId"))){
                return;
            }
        })
        
    }
    clickHandler();



    
    

}

screenController();
home();