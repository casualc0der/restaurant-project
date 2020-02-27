const menu = () => {

  const menuNode = document.getElementById('tabContent1');
  let menuGrid = document.createElement('div');
  menuGrid.id = 'menuGrid';
  menuNode.appendChild(menuGrid);
  


};

const menuContents = () => {

  const contentNode = document.getElementById('menuGrid');
  let contentGrid = document.createElement('div');
  contentGrid.id = 'contentGrid';
  contentGrid.innerHTML = 'menu';
  contentNode.appendChild(contentGrid);
}
export { menu, menuContents }
