const navLinks = document.querySelector('nav')
const header = document.querySelector('header')

let clickState = true

const menuIconHandler = event => {

    if (clickState) {
        navLinks.className = "show"
        header.className = "maximuize"
    } else {
        navLinks.className = ""
        header.className = ""

    }
    clickState = !clickState
}



const closeMenu = event => {
    clickState = true;
    navLinks.className = ""
    header.className = ""
}