//will do soon
document.addEventListener("DOMContentLoaded", () => {
  const cityInput = document.getElementById("city-input");
  const weatherBtn = document.getElementById("get-weather-btn");
  const weatherInfo = document.getElementById("weather-info");
  const cityNameDisplay = document.getElementById("city-name");
  const temperatureDisplay = document.getElementById("temperature");
  const descriptionDisplay = document.getElementById("description");
  const errorMsg = document.getElementById("error-message");

  const API_KEY = "7b77d777dd1ec0570feaeccb2aa29e74";
  //we should use the environment variable here(recommended)
  weatherBtn.addEventListener("click", async () => {
    city = cityInput.value.trim();
    if (!city) return; //check for falsy values like empty string, null, undefined, 0, false, NaN
    //remember:
    //the server may throw the error i.e. we are unsure so use try catch
    //the server/db is always in another continent ;)
    // i.e. not immediate response so async await
    try {
      const data = await fetchWeatherData(city);
      displayWeatherData(data);
    } catch (error) {
      showerror();
    }
  });

  async function fetchWeatherData(city) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`;

    const response = await fetch(url);
    console.log(typeof response);
    console.log("Response", response);
    if (!response.ok) {
      throw new Error("City Not Found!");
    }
    const data = await response.json();
    return data;
  }

  function displayWeatherData(data) {
    console.log(data);
    weatherInfo.classList.remove("hidden");

    const { name, main, weather, sys, wind, clouds } = data;
    cityNameDisplay.textContent = `${name} (${sys.country})`;
    temperatureDisplay.textContent = `
        Temperature: ${main.temp}°C
        Feels like: ${main.feels_like}°C
        Min: ${main.temp_min}°C | Max: ${main.temp_max}°C
        Humidity: ${main.humidity}%
        Pressure: ${main.pressure} hPa
    `.trim();
    descriptionDisplay.textContent = `
        Weather: ${weather[0].description}
        Wind Speed: ${wind.speed} m/s
        Clouds: ${clouds.all}%
        Sunrise: ${new Date(sys.sunrise * 1000).toLocaleTimeString()}
        Sunset: ${new Date(sys.sunset * 1000).toLocaleTimeString()}
    `.trim();
  }
  function showerror() {
    weatherInfo.classList.add("hidden");
    errorMsg.classList.remove("hidden");
  }
  
});
