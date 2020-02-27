//this will be the initial view controller

import { startUp } from './page_load';
import { menu, menuContents } from './menu.js';
import { aboutUs, aboutUsContents } from './about-us.js';
import { clearSection } from './clearSection.js';
import { homePage, homePageContents } from './home.js';

startUp();

const homeTrigger = document.getElementById('homePageButton')
const menuTrigger = document.getElementById('menuButton');
const aboutTrigger = document.getElementById('aboutUsButton');

homeTrigger.addEventListener('click', () => {
  
  clearSection();
  homePage();
  homePageContents();

})


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

