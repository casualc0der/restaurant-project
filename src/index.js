//this will be the initial view controller
import './tabsy.css';
import { startUp } from './page_load';
import { menu, menuContents } from './menu.js';
import { aboutUs, aboutUsContents } from './about-us.js';
import { clearSection } from './clearSection.js';

startUp();
const menuTrigger = document.getElementById('menuButton');
const aboutTrigger = document.getElementById('aboutUsButton');

menuTrigger.addEventListener('click', () =>{
  
  clearSection();
  menu();
  menuContents();
}
);
aboutTrigger.addEventListener('click', () =>{
  
  clearSection();
  aboutUs();
  aboutUsContents();
}
);

