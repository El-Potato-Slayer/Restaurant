export function updateContent() {
  const navLinks = document.querySelectorAll('.nav-link') 
  const pages = document.querySelectorAll('.nav-content')
  
  navLinks.forEach((navLink, index) => {
    navLink.addEventListener('click', () => {
      
      pages.forEach(page => {
        page.classList.add('hidden')
      })

      navLinks.forEach(t => {
        t.classList.remove('active-link')
      })

      navLink.classList.add('active-link')
  
      pages[index].classList.remove('hidden')
      pages[index].classList.add('block')
    })
  })
}