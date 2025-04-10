import { useState } from "react";
import { fetchWeather } from "./services/weatherApi";
import { fetchTimezone } from "./services/timezoneApi";
import WeatherCard from "./components/WeatherCard";
import { WeatherDetails } from "./components/WeatherDetails";
import LoadingAnimation from "./components/LoadingAnimation";
import { Typewriter } from 'react-simple-typewriter'

function App() {
  const [city, setCity] = useState("");
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false); // NEW STATE

  const handleSearch = async () => {
    setLoading(true); // Start loading
    try {
      const weatherData = await fetchWeather(city);
      const timeInCity = await fetchTimezone(weatherData.coords.lat, weatherData.coords.lon);

      setData({
        ...weatherData,
        cityTime: timeInCity.time,
      });
    } catch (error) {
      console.error("Search failed:", error);
    } finally {
      setLoading(false); // Stop loading
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleSearch();
      event.preventDefault();
    }
  };

  return (
    <div className="w-full h-screen bg-gray-100 flex justify-center">
      <div className="flex justify-center flex-col">
        <div className="w-full flex justify-between items-center">
          <h1 className="text-4xl font-bold text-montserrat text-gray-800 mb-4">
            <span>&gt; </span>
            <Typewriter
              words={['Weather', 'Everywhere']}
              loop={true}
              cursor
              cursorStyle='_'
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={10000}
            />
          </h1>
          <input
            type="text"
            className="border border-gray-300 rounded-md py-2 px-4 mb-4 font-montserrat bg-gray-100 drop-shadow-md"
            placeholder="Search..."
            value={city}
            onChange={(e) => setCity(e.target.value)}
            onKeyDown={handleKeyDown}
          />
        </div>

        <div className="bg-gray-100 h-[720px] w-[600px] rounded-2xl shadow-md drop-shadow-xl text-white p-6">
          {loading ? (
            <LoadingAnimation />
          ) : (
            data && (
              <>
                <WeatherCard {...data} />
                <WeatherDetails wind={data.wind} humidity={data.humidity} />
              </>
            )
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
