
const parties = () => {

  const contentNode = document.getElementById('tabContent3');
  let contentGrid = document.createElement('p');
  contentGrid.id = 'contentGrid';
  contentGrid.innerHTML = 'parties';
  contentNode.appendChild(contentGrid);
}
export { parties }
