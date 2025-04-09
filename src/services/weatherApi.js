import clear_icon from "../assets/clear.json";
import cloud_icon from "../assets/cloud.json";
import drizzle_icon from "../assets/drizzle.json";
import rain_icon from "../assets/rain.json";
import snow_icon from "../assets/snow.json";
const apiKey = process.env.REACT_APP_API_KEY;

const icons = {
  "01d": clear_icon,
  "01n": clear_icon,
  "02d": cloud_icon,
  "02n": cloud_icon,
  "03d": cloud_icon,
  "03n": cloud_icon,
  "04d": drizzle_icon,
  "04n": drizzle_icon,
  "09d": rain_icon,
  "09n": rain_icon,
  "10d": rain_icon,
  "10n": rain_icon,
  "13d": snow_icon,
  "13n": snow_icon,
};

export const fetchWeather = async (city) => {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`
    );
    const data = await response.json();

    const icon = icons[data.weather[0].icon];

    return {
      city: data.name,
      country: data.sys.country,
      temperature: Math.floor(data.main.temp),
      description: data.weather[0].description,
      icon,
      humidity: data.main.humidity,
      wind: data.wind.speed,
      coords: data.coord, // keep this to fetch timezone later
    };
  } catch (error) {
    console.error("Weather fetch error:", error);
    throw error;
  }
};
