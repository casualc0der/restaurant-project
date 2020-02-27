const aboutUs = () => {

  const aboutNode = document.getElementById('viewGrid');
  let aboutGrid = document.createElement('div');
  aboutGrid.id = 'aboutGrid';
  aboutNode.appendChild(aboutGrid);


};

const aboutUsContents = () => {
  const contentNode = document.getElementById('aboutGrid');
  let contentGrid = document.createElement('div');
  contentGrid.id = 'aboutGrid';
  contentGrid.innerHTML = 'about us';
  contentNode.appendChild(contentGrid);
}

export { aboutUs, aboutUsContents }
