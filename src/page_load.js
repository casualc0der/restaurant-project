import { tabOne } from './tab1.js';
import { tabTwo } from './tab2.js';
import { tabThree } from './tab3.js';
const startUp = () => { 
  
  const mainNode = document.getElementById('main-content');
  let viewGrid = document.createElement('div');
<<<<<<< HEAD

  viewGrid.id = 'viewGrid';
  viewGrid.classList.add('tabsy');
=======
  let menuButton = document.createElement('button');
  let aboutUsButton = document.createElement('button');
  viewGrid.id = 'viewGrid';
  menuButton.id = 'menuButton';
  menuButton.innerHTML = 'Menu';
  aboutUsButton.id = 'aboutUsButton';
  aboutUsButton.innerHTML = 'About Us';
  mainNode.appendChild(menuButton);
  mainNode.appendChild(aboutUsButton);
>>>>>>> parent of 90319f9... Add tabsy-css
  mainNode.appendChild(viewGrid);
  tabOne(viewGrid);
  tabTwo(viewGrid); 
  tabThree(viewGrid);
};


export { startUp };
