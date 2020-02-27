import { tabOne } from './tab1.js';
import { tabTwo } from './tab2.js';

const startUp = () => { 
  
  const mainNode = document.getElementById('main-content');
  let viewGrid = document.createElement('div');

  viewGrid.id = 'viewGrid';
  viewGrid.classList.add('tabsy');
  mainNode.appendChild(viewGrid);
  tabOne(viewGrid);
  tabTwo(viewGrid); 
};


export { startUp };
