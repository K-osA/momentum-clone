function onGeoSuccess(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const weather = document.querySelector("#weather span:first-child");
      const city = document.querySelector("#weather span:last-child");
      weather.innerText = `${data.weather[0].main} / ${data.main.temp}\xB0C`;
      city.innerText = data.name;
    });
}
function onGeoError() {
  alert("Can't find you. No weather for you.");
}
const API_KEY = "eec77bae3d5f93e23958c1b338cd23a4";
navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoError);
