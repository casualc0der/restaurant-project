const aboutUs  = () => {

  const contentNode = document.getElementById('tabContent2');
  let contentGrid = document.createElement('p');
  contentGrid.id = 'contentGrid';
  contentGrid.innerHTML = 'about';
  contentNode.appendChild(contentGrid);
}
export { aboutUs }