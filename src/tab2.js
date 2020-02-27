
const tabTwo = (x) => {

  let tabsyTab2 = document.createElement('input');
  
  tabsyTab2.type = 'radio';
  tabsyTab2.id = 'tab2'
  tabsyTab2.name = 'tab'
  tabsyTab2.checked = true;

  let tabsyLabel2 = document.createElement('label');
  tabsyLabel2.classList.add('tabButton');
  tabsyLabel2.setAttribute('for', 'tab2');
  tabsyLabel2.id = 'tab2';
  tabsyLabel2.innerHTML = 'Tab Two';
  
  let tabsyTabContent2 = document.createElement('div');
  tabsyTabContent2.classList.add('tab');

  let tabsyContent2 = document.createElement('div');
  tabsyContent2.classList.add('content');
  tabsyContent2.id = 'tabContent2'; 

  x.appendChild(tabsyTab2);
  x.appendChild(tabsyLabel2);
  x.appendChild(tabsyTabContent2);
  tabsyTabContent2.appendChild(tabsyContent2);

}

export { tabTwo }

