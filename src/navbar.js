export function setHamburgerState() {
  const hamburgerWrapper = document.getElementById('hamburger-wrapper')
  const hamburger = document.getElementById('hamburger')
  const links = document.querySelector('.nav-links')
  let isOpen = false
  hamburgerWrapper.addEventListener('click', () => {
    if (isOpen) {
      hamburger.classList.remove('open')
      links.style.top = '-6.5rem'
    } else {
      hamburger.classList.add('open')
      links.style.top = '4.5rem'
    }
    isOpen = !isOpen
  })
}