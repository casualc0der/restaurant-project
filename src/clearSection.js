const clearSection = () => {

  const section = document.getElementById('viewGrid');
  while (section.firstChild) {
    section.removeChild(section.lastChild);

  }
}

export { clearSection };
