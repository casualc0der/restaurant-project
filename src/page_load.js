  
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

  viewGrid.id = 'viewGrid';
  viewGrid.classList.add('tabsy');

  viewGrid.appendChild(tabsyTab1);
  viewGrid.appendChild(tabsyLabel1);
  mainNode.appendChild(viewGrid);
};


export { startUp };
