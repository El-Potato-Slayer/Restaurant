export function updateContent(params) {
  const navLinks = document.querySelectorAll('.nav-link') 
  const pages = document.querySelectorAll('.nav-content')
  
  navLinks.forEach((tab, index) => {
    tab.addEventListener('click', () => {
      
      pages.forEach(page => {
        page.classList.add('hidden')
      })
  
      pages[index].classList.remove('hidden')
      pages[index].classList.add('block')
    })
  })
}