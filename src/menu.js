const menu = () => {

  const menuNode = document.getElementById('viewGrid');
  let menuGrid = document.createElement('div');
  menuGrid.id = 'menuGrid';
  menuNode.appendChild(menuGrid);

};

const menuContents = () => {

  const contentNode = document.getElementById('menuGrid');
  let contentGrid = document.createElement('div');
  contentGrid.id = 'contentGrid';
  contentNode.appendChild(contentGrid);
  let menuTitle = document.createElement('h1');
  menuTitle.innerHTML = 'Menu'
  contentGrid.appendChild(menuTitle);

  const meal = (name, description, price) => {
  
    return {name:name, description: description, price: price}
  }

const menu = [
  meal('Fish and Chips', 'Yummy!','£10.50'),
  meal('Gammon and Eggs', 'Noice!', '£9.50'),
  meal('Jacket Potato', 'The Classic', '£6.50'),
]

menu.forEach((e) => {
  
  let mealNode = document.createElement('ul');
  mealNode.classList.add('menuItem');
  mealNode.style.listStyleType = 'none';
  let nameOfDish = document.createElement('li');
  let descriptionOfDish = document.createElement('li');
  let priceOfDish = document.createElement('li');

  nameOfDish.innerHTML = e.name;
  descriptionOfDish.innerHTML = e.description;
  priceOfDish.innerHTML = e.price;

  mealNode.appendChild(nameOfDish);
  mealNode.appendChild(descriptionOfDish);
  mealNode.appendChild(priceOfDish);
  contentNode.appendChild(mealNode);  

})
}
export { menu, menuContents }
