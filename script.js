const nav = document.getElementsByTagName('nav')[0]
const imgMainLogo = document.getElementById('main-logo')
function scrolling(){
    nav.classList.toggle('scrolling', scrollY > 0)
    imgMainLogo.src = 'imagens/logo-ramon-2.pngi'
}

window.addEventListener('scroll',  scrolling)