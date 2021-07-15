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

const header = document.querySelector('header')
const navHeight = header.offsetHeight

function changeHeaderWhenScroll() {
  if (window.scrollY >= navHeight) {
    //quando o scroll é maior que a altur do header
    header.classList.add('scroll') //coloca no header a classe scroll
  } else {
    //menor que a altura do header
    header.classList.remove('scroll') //remove a classe scroll do header
  }
}

//montando o slide de depoimentos

const swiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  pagination: {
    el: '.swiper-pagination'
  },
  mousewheel: true,
  keyboard: true,
  breakpoints: {
    727: {
      slidesPerView: 2,
      setWapperSize: true
    }
  }
})

//ScrollReveal = mostrar os objetos da pagina quando der um scroll

const scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 600,
  reset: true
})

scrollReveal.reveal(
  `
#home .text, #home .image,
#about .text, #about .image,
#services header, #services .card,
#testimonials header, #testimonials .testimonial  
#contact.text, #contact .links,
footer .brand, footer .social
`,
  { interval: 100 }
)

//botao de back- to-top
const backToTopButton = document.querySelector('.back-to-top')

function backToTop() {
  if (window.scrollY >= 560) {
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }
}

//menu ativo conforme a seçao visivel na pagina
const sections = document.querySelectorAll('main section[id]')

function activateMenuAtCurrentSection() {
  const checkpoint = window.pageYOffset + (window.innerHeight / 8) * 4

  for (const section of sections) {
    const sectionTop = section.offsetTop
    const sectionHeight = section.offsetHeight
    const sectionId = section.getAttribute('id')

    const checkpointStart = checkpoint >= sectionTop
    const checkpointEnd = checkpoint <= sectionTop + sectionHeight

    if (checkpointStart && checkpointEnd) {
      document
        .querySelector('nav ul li a[href*=' + sectionId + ']')
        .classList.add('active')
    } else {
      document
        .querySelector('nav ul li a[href*=' + sectionId + ']')
        .classList.remove('active')
    }
  }
}

//when Scroll
window.addEventListener('scroll', function () {
  changeHeaderWhenScroll()
  backToTop()
  activateMenuAtCurrentSection()
})
