  
const startUp = () => { 

  const mainNode = document.getElementById('main-content');
  let viewGrid = document.createElement('div');
  let menuButton = document.createElement('button');
  let aboutUsButton = document.createElement('button');
  viewGrid.id = 'viewGrid';
  menuButton.id = 'menuButton';
  menuButton.innerHTML = 'Menu';
  aboutUsButton.id = 'aboutUsButton';
  aboutUsButton.innerHTML = 'About Us';
  mainNode.appendChild(menuButton);
  mainNode.appendChild(aboutUsButton);
  mainNode.appendChild(viewGrid);
};


export { startUp };
