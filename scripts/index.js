function openTab(e, tabName) {
  const tabInfo = document.getElementsByClassName("tab-info");
  const tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tabInfo[i].className = tabInfo[i].className.replace(" active", "");
    tablinks[i].className = tablinks[i].className.replace(" active", "");
    tabInfo[i].id === tabName ? tabInfo[i].classList.add("active") : null;
  }
  e.currentTarget.className += " active";
}
