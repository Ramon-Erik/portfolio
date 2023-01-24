const menu = document.getElementsByClassName('menu')[0]
const linha1 = document.getElementsByClassName('linha1')[0]
const linha2 = document.getElementsByClassName('linha2')[0]
const linha3 = document.getElementsByClassName('linha3')[0]
const nav = document.getElementsByTagName('nav')[0]

function mostrarOpc() {
    if (nav.style.display == 'none' || nav.style.display == '') {
        menu.style = 'background: #3e1b46; height: 50px; width: 50px'
        linha1.classList.add('rodar')
        linha2.style.display = 'none'
        linha3.classList.add('rodar-negativo')
        nav.style.display = 'block'
    } else {
        menu.style = ''
        nav.style.display = 'none'
        linha1.classList.remove('rodar')
        linha2.style.display = 'block'
        linha3.classList.remove('rodar-negativo')
    }
}
