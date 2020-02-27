  
const startUp = () => { 

  const mainNode = document.getElementById('main-content');
  let heroImage = document.createElement('div');
  let viewGrid = document.createElement('div');
  let menuButton = document.createElement('button');
  let aboutUsButton = document.createElement('button');
  let homePageButton = document.createElement('button');
  heroImage.id = 'hero-image';
  viewGrid.id = 'viewGrid';
  menuButton.id = 'menuButton';
  menuButton.innerHTML = 'Menu';
  aboutUsButton.id = 'aboutUsButton';
  aboutUsButton.innerHTML = 'About Us';
  homePageButton.id = 'homePageButton';
  homePageButton.innerHTML = 'Home'

  mainNode.appendChild(heroImage);
  mainNode.appendChild(homePageButton);
  mainNode.appendChild(menuButton);
  mainNode.appendChild(aboutUsButton);
  mainNode.appendChild(viewGrid);
};


export { startUp };
