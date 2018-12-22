// Fill in form
const countryDrop = document.getElementById("country");
const citiesDrop = document.getElementById("cities");
const citiesArea = document.querySelector(".cities-dd");
let localData;

(async function getData() {
  await fetch("../data/data.json")
    .then(blob => blob.json())
    .then(data => (localData = data));
  showCountries(localData);
})();

function showCountries(localData) {
  const countries = Object.keys(localData);

  countries.forEach(country => {
    let option = document.createElement("option");
    option.text = `${country.replace("-", " ")}`;
    option.value = `${country}`;
    countryDrop.appendChild(option);
  });
}

function showCities(e) {
  let country = e.target.value;

  country
    ? citiesArea.classList.add("active")
    : citiesArea.classList.remove("active");

  if (!country) return;

  let cities = localData[`${country}`].cities;

  cities.forEach(city => {
    let option = document.createElement("option");
    option.text = `${city.replace("-", " ")}`;
    option.value = `${city}`;
    citiesDrop.appendChild(option);
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

countryDrop.addEventListener("change", showCities);
