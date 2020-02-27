
const tabThree = (x) => {

  let tabsyTab3 = document.createElement('input');
  
  tabsyTab3.type = 'radio';
  tabsyTab3.id = 'tab3'
  tabsyTab3.name = 'tab'
  tabsyTab3.checked = true;

  let tabsyLabel3 = document.createElement('label');
  tabsyLabel3.classList.add('tabButton');
  tabsyLabel3.setAttribute('for', 'tab3');
  tabsyLabel3.id = 'tab3';
  tabsyLabel3.innerHTML = 'Parties';
  
  let tabsyTabContent3 = document.createElement('div');
  tabsyTabContent3.classList.add('tab');

  let tabsyContent3 = document.createElement('div');
  tabsyContent3.classList.add('content');
  tabsyContent3.id = 'tabContent3'; 

  x.appendChild(tabsyTab3);
  x.appendChild(tabsyLabel3);
  x.appendChild(tabsyTabContent3);
  tabsyTabContent3.appendChild(tabsyContent3);

}

export { tabThree }
