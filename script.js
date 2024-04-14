//SIDE MENU OPEN-CLOSE
const navLinks = document.querySelector('.js-nav-links')
const closeMark = document.querySelector('.js-fa-xmark')
const openMark = document.querySelector('.js-fa-bars')

openMark.addEventListener('click', () => {
  navLinks.style.right = 0
})

closeMark.addEventListener('click', () => {
  navLinks.style.right = -200 + 'px'
})

