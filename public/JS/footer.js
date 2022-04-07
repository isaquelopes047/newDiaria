

let closeButton = document.querySelector('.closeButton')
let openButton = document.querySelector('.openButton')

closeButton.addEventListener('click', () => {

    let containerFooter = document.querySelector('.footerFluter')
    containerFooter.style.height = '0px'
})

openButton.addEventListener('click', () => {
    
    let containerFooter = document.querySelector('.footerFluter')
    containerFooter.style.height = '200px'
    containerFooter.style.transitionDuration = "0.7s";
})