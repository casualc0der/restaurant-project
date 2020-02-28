import burger from './burger.jpg'

const startUp = () => { 

  const mainNode = document.getElementById('main-content');
  let heroImage = document.createElement('div');
  let navBar = document.createElement('nav');
  navBar.id = 'navBar';
  let viewGrid = document.createElement('div');
  


  let menuButton = document.createElement('button');
  let aboutUsButton = document.createElement('button');
  let homePageButton = document.createElement('button');
  heroImage.id = 'hero-image';
  const myHeroImage = new Image();
  myHeroImage.src = burger;
  myHeroImage.id = 'myHeroImage';
  viewGrid.id = 'viewGrid';
  menuButton.id = 'menuButton';
  menuButton.innerHTML = 'Menu';
  aboutUsButton.id = 'aboutUsButton';
  aboutUsButton.innerHTML = 'About Us';
  homePageButton.id = 'homePageButton';
  homePageButton.innerHTML = 'Home'

  const navNode = document.getElementById('navBar')


  navBar.appendChild(homePageButton);
  navBar.appendChild(menuButton);
  navBar.appendChild(aboutUsButton);
  mainNode.appendChild(heroImage);
//  mainNode.appendChild(myHeroImage);
  mainNode.appendChild(navBar);
  mainNode.appendChild(viewGrid);
};


export { startUp };
