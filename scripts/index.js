// Fill in form
const countryDrop = document.getElementById("country");
const citiesDrop = document.getElementById("cities");
let localData;

(async function getData() {
  await fetch("../data/data.json")
    .then(blob => blob.json())
    .then(data => (localData = data));
  locationPick(localData);
})();

function locationPick(localData) {
  const countries = Object.keys(localData);

  countries.forEach(country => {
    let option = document.createElement("option");
    option.text = `${country.replace("-", " ")}`;
    option.value = `${country}`;
    countryDrop.appendChild(option);
  });
}

// Tabs functionality
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
