//this will be the initial view controller

import { startUp } from './page_load';
import { menu } from './menu.js';
import { aboutUs } from './about-us.js';
import { parties } from './parties.js';
import { clearSection } from './clearSection.js';

startUp();
menu();
aboutUs();
parties();


const menuTrigger = document.getElementById('tab1');

menuTrigger.addEventListener('click', () =>{
  
//  clearSection();
}
);
