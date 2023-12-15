import { about } from './about.js'
import { menu } from './menu.js'
import { home } from './home.js'


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
                home();
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
                menu();
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
            about();
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