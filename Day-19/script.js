//will do soon
document.addEventListener("DOMContentLoaded", () => {
  const cityInput = document.getElementById("city-input");
  const weatherBtn = document.getElementById("get-weather-btn");
  const weatherInfo = document.getElementById("weather-info");
  const cityNameDisplay = document.getElementById("city-name");
  const temperatureDisplay = document.getElementById("temperature");
  const descriptionDisplay = document.getElementById("description");
  const errorMsg = document.getElementById("error-message");

  const API_KEY = "......";
  weatherBtn.addEventListener("click", () => {
    city = cityInput.value.trim();
    if (!city) return;
  });
});
