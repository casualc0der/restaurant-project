const menu = () => {

  const contentNode = document.getElementById('tabContent1');
  let contentGrid = document.createElement('p');
  contentGrid.id = 'contentGrid';
  contentGrid.innerHTML = 'menu';
  contentNode.appendChild(contentGrid);
}
export { menu }
