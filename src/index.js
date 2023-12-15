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
            let execution = true;
            if(execution === true){
                execution = false;
                home();
            }
        })

        navBarHandler.navBarBtn2.addEventListener('click', function(){
            let execution = true;
            if(execution === true){
                execution = false;
                menu();
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