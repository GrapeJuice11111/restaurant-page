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
    
export { menu }

