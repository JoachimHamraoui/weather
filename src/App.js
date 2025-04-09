import { useEffect, useState } from "react";
import { fetchWeather } from "./services/weatherApi";
import WeatherCard from "./components/WeatherCard";
import clear_icon from "./assets/clear.png";
import cloud_icon from "./assets/cloud.png";
import drizzle_icon from "./assets/drizzle.png";
import humidity_icon from "./assets/humidity.png";
import rain_icon from "./assets/rain.png";
import snow_icon from "./assets/snow.png";
import wind_icon from "./assets/wind.png";
function App() {
  const [city, setCity] = useState("");
  const [data, setData] = useState(null);

  const handleSearch = async () => {
    try {
      const data = await fetchWeather(city);
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

      const icon = icons[data.weather[0].icon];

      setData({
        city: data.name,
        country: data.sys.country,
        temperature: Math.floor(data.main.temp),
        description: data.weather[0].description,
        icon: icon,
      });
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleSearch();
      event.preventDefault();
      console.log(data);
    }
  };

  useEffect(() => {
    if (data) {
      console.log(data);
    }
  }, []);
  return (
    <div className="w-full h-screen bg-gray-100 flex justify-center">
      <div className="flex justify-center flex-col">
        <div className="w-full flex justify-between items-center">
          <h1 className="text-4xl font-bold text-montserrat text-gray-800 mb-4">
            Weather_
          </h1>
          <input
            type="text"
            className="border border-gray-300 rounded-md py-2 px-4 mb-4 font-montserrat"
            placeholder="Search..."
            value={city}
            onChange={(e) => setCity(e.target.value)}
            onKeyDown={handleKeyDown}
          />
        </div>
        <div className="bg-blue-600 h-[720px] w-[600px] rounded-2xl shadow-md drop-shadow-xl text-white p-6">
          {data && <WeatherCard {...data} />}
        </div>
      </div>
    </div>
  );
}

export default App;
