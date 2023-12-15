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

export { about }

