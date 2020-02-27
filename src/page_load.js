  
const startUp = () => { 

  const mainNode = document.getElementById('main-content');
  let viewGrid = document.createElement('div');
  let tabsyTab1 = document.createElement('input');
  
  tabsyTab1.id = 'tab1'
  tabsyTab1.name = 'tab'
  tabsyTab1.checked = true;
  
  let tabsyLabel1 = document.createElement('label');
  tabsyLabel1.classList.add('tabButton');
  tabsyLabel1.setAttribute('for', 'tab1');
  tabsyLabel1.innerHTML = 'Tab One';
  
  let tabsyTabContent1 = document.createElement('div');
  tabsyTabContent1.classList.add('tab');

  let tabsyContent1 = document.createElement('div');
  tabsyContent1.classList.add('content');
  tabsyContent1.id = 'tabContent1'; 






  let tabsyTab2 = document.createElement('input');
  
  tabsyTab2.id = 'tab2'
  tabsyTab2.name = 'tab'
  tabsyTab2.checked = true;
  
  let tabsyLabel2 = document.createElement('label');
  tabsyLabel2.classList.add('tabButton');
  tabsyLabel2.setAttribute('for', 'tab2');
  tabsyLabel2.innerHTML = 'Tab Two';

  viewGrid.id = 'viewGrid';
  viewGrid.classList.add('tabsy');

  viewGrid.appendChild(tabsyTab1);
  viewGrid.appendChild(tabsyLabel1);
  
  viewGrid.appendChild(tabsyTab2);
  viewGrid.appendChild(tabsyLabel2);

  mainNode.appendChild(viewGrid);
};


export { startUp };
