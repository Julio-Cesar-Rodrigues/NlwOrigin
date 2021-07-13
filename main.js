//abrir e fechar o menu quando clicar no icoone

const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

//busca os dois toggles "menu e close"
for (const element of toggle) {
  //adiciona um evento de click no toggle
  element.addEventListener('click', function () {
    nav.classList.toggle('show') //adciona ou retira a lista de classe show quando clicar no toggle (menu e close)
  })
}

//quando clicar em um item do menu, esconder o menu
const links = document.querySelectorAll('nav ul li a')

for (const link of links) {
  link.addEventListener('click', function () {
    nav.classList.remove('show') //remove a classe show
  })
}

//sombra da pagina quando ele ser um scroll

const height = document.querySelector('header')
const navHeight = header.offsetHeight

window.addEventListener('scroll', function () {
  if (window.scrollY >= navHeight) {
    //quando o scroll é maior que a altur do header
    header.classList.add('scroll') //coloca no header a classe scroll
  } else {
    //menor que a altura do header
    header.classList.remove('scroll') //remove a classe scroll do header
  }
})

//montando o slide de depoimentos

const swiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  pagination: {
    el: '.swiper-pagination'
  },
  mousewheel: true,
  keyboard: true
})
