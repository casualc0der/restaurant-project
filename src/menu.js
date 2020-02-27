const menu = () => {

  const contentNode = document.getElementById('tabContent1');
  let contentGrid = document.createElement('div');
  contentGrid.id = 'contentGrid';
  contentGrid.classList.add('content');
  contentGrid.innerHTML = 'menu';
  contentNode.appendChild(contentGrid);
}
export { menu }
