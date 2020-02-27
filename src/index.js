//this will be the initial view controller

import { startUp } from './page_load';
import { menu } from './menu.js';
import { aboutUs } from './about-us.js';
import { clearSection } from './clearSection.js';

startUp();
const menuTrigger = document.getElementById('menuButton');
const aboutTrigger = document.getElementById('aboutUsButton');
menuTrigger.addEventListener('click', () =>{
  
  clearSection();
  menu()
}
);
aboutTrigger.addEventListener('click', () =>{
  
  clearSection();
  aboutUs()
}
);

