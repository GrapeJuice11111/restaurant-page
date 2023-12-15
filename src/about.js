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

export { about }

