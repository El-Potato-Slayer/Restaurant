export function parallax() {
  window.addEventListener('scroll', () => {
    // const dish = document.getElementById('dish')
    // const onions = document.getElementById('onions')
    // const tomatoes = document.getElementById('tomatoes')
    // const rosemary = document.getElementById('rosemary1')
    // const thyme = document.getElementById('thyme')
    let scroll = window.pageYOffset;
  
    // dish.style.transform = `translateY(${scroll * -0.85}px)`
    // onions.style.transform = `translateY(${scroll * -0.4}px)`
    // tomatoes.style.transform = `translateY(${scroll * -0.5}px)`
    // rosemary.style.transform = `translateY(${scroll * -0.6}px)`
    // thyme.style.transform = `translate(0, ${scroll * -0.3}px) rotate(20deg)`

    
    const menuItems = document.querySelectorAll('.menu-picture img')
    for (let i = 0; i < menuItems.length; i++) {
      menuItems[i].style.transform = `rotate(${scroll * 0.1}deg)`
    }
  })
}