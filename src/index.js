//this will be the initial view controller
import './tabsy.css';
import { startUp } from './page_load';
import { menu } from './menu.js';
import { aboutUs } from './about-us.js';
import { clearSection } from './clearSection.js';

startUp();
menu();
aboutUs();

const menuTrigger = document.getElementById('tab1');

menuTrigger.addEventListener('click', () =>{
  
//  clearSection();
}
);
