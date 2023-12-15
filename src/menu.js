const menu = function() {

    function topHeader()
    {
        upperHeading = document.createElement("h1")
        upperHeading.classList.add("upperHeadingMenu")
        upperHeading.textContent = "Menu"
    }

    function menuContent(){

        function menu1(){
            menuBody1 = document.createElement("article")
            menuHeading1 = document.createElement("h3")
            menuParagraph1 = document.createElement("p")
            menuParagraph1.textContent = "Classic Citrus Splash"
            menuHeading1.textContent = "Freshly squeezed lemons, pure cane sugar, and a hint of lemon zest. A timeless, refreshing favorite that captures the essence of pure citrus."
        }

        function menu2(){
            menuBody2 = document.createElement("article")
            menuHeading2 = document.createElement("h3")
            menuParagraph2 = document.createElement("p")
            menuParagraph2.textContent = "Berry Bliss Burst"
            menuHeading2.textContent = "A medley of mixed berries blended with our signature lemonade, creating a sweet and tart fusion for a burst of fruity goodness."
        }

        function menu3(){
            menuBody3 = document.createElement("article")
            menuHeading3 = document.createElement("h3")
            menuParagraph3 = document.createElement("p")
            menuParagraph3.textContent = "Minty Lemon Refresher"
            menuHeading3.textContent = "Invigorate your senses with this cooling blend of lemonade infused with freshly crushed mint leaves, providing a revitalizing twist."
        }


        function menu4(){
            menuBody4 = document.createElement("article")
            menuHeading4 = document.createElement("h3")
            menuParagraph4 = document.createElement("p")
            menuParagraph4.textContent = "Tropical Pineapple Paradise"
            menuHeading4.textContent = "Escape to a tropical paradise with our exotic blend of pineapple and lemonade, delivering a sweet and tangy flavor that transports you to sunny shores."
        }

        return {
            menu1,
            menu2,
            menu3, 
            menu4
        }

    }



}
    
export { menu }

