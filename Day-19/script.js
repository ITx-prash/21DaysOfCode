//will do soon
document.addEventListener("DOMContentLoaded", () => {
  const cityInput = document.getElementById("city-input");
  const weatherBtn = document.getElementById("get-weather-btn");
  const weatherInfo = document.getElementById("weather-info");
  const cityNameDisplay = document.getElementById("city-name");
  const temperatureDisplay = document.getElementById("temperature");
  const descriptionDisplay = document.getElementById("description");
  const errorMsg = document.getElementById("error-message");

  const API_KEY = "ffa9a0bb71f31edb9e401c4a3424576e"; //API key for openweathermap.org and it is free but it is recommended to hold it in a .env file (environment variable)

  weatherBtn.addEventListener("click", () => {
    city = cityInput.value.trim();

    if (!city) return; //checks for "falsy" values
  });
  function fetchWeatherData(city) {
    //..
  }
  function displayWeatherData(params) {
    //..
  }
});
