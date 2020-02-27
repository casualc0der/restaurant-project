const tabOne = (x) => {

  let tabsyTab1 = document.createElement('input');
  
  tabsyTab1.type = 'radio';
  tabsyTab1.id = 'tab1';
  tabsyTab1.name = 'tab'
  tabsyTab1.checked = true;

  let tabsyLabel1 = document.createElement('label');
  tabsyLabel1.classList.add('tabButton');
  tabsyLabel1.setAttribute('for', 'tab1');
  tabsyLabel1.id = 'tab1';
  tabsyLabel1.innerHTML = 'Menu';
  
  let tabsyTabContent1 = document.createElement('div');
  tabsyTabContent1.classList.add('tab');

  let tabsyContent1 = document.createElement('div');
  tabsyContent1.classList.add('content');
  tabsyContent1.id = 'tabContent1'; 

  x.appendChild(tabsyTab1);
  x.appendChild(tabsyLabel1);
  x.appendChild(tabsyTabContent1);
  tabsyTabContent1.appendChild(tabsyContent1);

}

export { tabOne }
