const aboutUs = () => {

  const aboutNode = document.getElementById('viewGrid');
  let aboutGrid = document.createElement('div');
  aboutGrid.id = 'aboutGrid';
  aboutNode.appendChild(aboutGrid);


};

const aboutUsContents = () => {

  const blurb = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';


  const contentNode = document.getElementById('aboutGrid');
  let contentGrid = document.createElement('div');
  contentGrid.id = 'aboutGrid';
  contentNode.appendChild(contentGrid);
  let aboutTitle = document.createElement('h1');
  let information = document.createElement('p');
    
  aboutTitle.innerHTML = 'About Us';
  information.innerHTML = blurb;
  contentGrid.appendChild(aboutTitle);
  contentGrid.appendChild(information);
}

export { aboutUs, aboutUsContents }
