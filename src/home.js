const homePage = () => { 

  let homeNode = document.getElementById('viewGrid');
  let homeGrid = document.createElement('div');
  homeGrid.id = 'homeGrid';
  homeNode.appendChild(homeGrid);
};

const homePageContents = () => {

 
  const blurb = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';

  let contentNode = document.getElementById('homeGrid');
  
  let homeTitle = document.createElement('h1');
  let information = document.createElement('p');

  homeTitle.innerHTML = 'Welcome to the Restaurant!';
  information.innerHTML = blurb;
  contentNode.appendChild(homeTitle);
  contentNode.appendChild(information);

}

export { homePage, homePageContents }
