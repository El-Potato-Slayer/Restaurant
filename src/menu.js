let menuItems = [
  { title: 'Soupe à l’oignon', description: 'A traditional French soup made of caramelized onions and beef stock, served with savory croutons and melted cheese on a toasted, crispy baguette slice.', price: '20€', image: './assets/images/soup.png'},
  { title: 'Poulet Basquaise', description: 'A classic French Basque dish. Chicken is slowly pot roasted in a pepper sauce called piperade, made from melted red and green peppers, shallots, garlic and tomatoes. Served with either sauté potatoes or boiled rice.', price: '40€', image: './assets/images/butter-chicken.png'},
  { title: 'Le Bifteck', description: 'A French beef cut. This steak is beautifully marbled and balanced between the fat and meat ratio. Sauces include pepper sauce, cheese sauce, borderlaise sauce or plain. Available in 300g, 500g, and 1kg.', price: '40€/60€/85€', image: './assets/images/steak.png'},
  { title: 'Homard Thermidor', description: 'Tender lobster meat cooked the right way. The lobster is served with linguine, smothered in a rich buttery, white sauce. Available in 300g, 500g, and 1kg servings.', price: '50€/65€/100€', image: './assets/images/lobster.png'}
]

export function menu() {
  const container = document.getElementById('content').appendChild(document.createElement('div'))
  container.classList.add('nav-content', 'menu')
  createMenuItems(container, menuItems)
}

function createMenuItems(container, menu) {
  menu.forEach(menuItem => {
    const row = container.appendChild(document.createElement('div'))
    row.classList.add('menu-item', 'grid', 'grid-cols-2', 'items-center', 'px-60', 'pb-20')
    const menuText = row.appendChild(document.createElement('div'))
    menuText.classList.add('menu-text', 'text-white', 'flex', 'flex-col', 'justify-center')
    const title = menuText.appendChild(document.createElement('h4'))
    title.classList.add('text-4xl', 'mb-8')
    title.innerHTML = `${menuItem.title}`
    const description = menuText.appendChild(document.createElement('p'))
    description.innerHTML = `${menuItem.description}`
    const price = menuText.appendChild(document.createElement('p'))
    price.classList.add('font-bold', 'text-lg', 'text-gray-300', 'mt-8')
    price.innerHTML = `Price: ${menuItem.price}`
    const imgContainer = row.appendChild(document.createElement('div'))
    imgContainer.classList.add('menu-picture', 'flex', 'justify-center')
    const img = imgContainer.appendChild(document.createElement('img'))
    img.classList.add('w-3/6', 'h-full')
    img.src = `${menuItem.image}`
  })
  // for (let i = 0; i < 4; i++) {
  //   const menuItem = container.appendChild(document.createElement('div'))
  //   menuItem.classList.add('menu', 'grid', 'grid-cols-2', 'items-center', 'px-60', 'pb-20')
  //   const menuText = menuItem.appendChild(document.createElement('div'))
  //   menuText.classList.add('menu-text', 'text-white', 'flex', 'flex-col', 'justify-center')
  // }
}