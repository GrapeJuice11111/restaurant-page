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

export { home }

