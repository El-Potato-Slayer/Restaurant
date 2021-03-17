export function hamburgerMenu() {
  const hamburgerWrapper = document.getElementById('hamburger-wrapper')
  const hamburger = document.getElementById('hamburger')
  let isOpen = false
  hamburgerWrapper.addEventListener('click', () => {
    isOpen ? hamburger.classList.add('open') : hamburger.classList.remove('open')
    isOpen = !isOpen
  })
}