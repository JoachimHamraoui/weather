import { useEffect, useState } from "react";
import { fetchWeather } from "./services/weatherApi";
import WeatherCard from "./components/WeatherCard";

function App() {
  const [city, setCity] = useState("");
  const [data, setData] = useState(null);

  const handleSearch = async () => {
    try {
      const data = await fetchWeather(city);
      setData({
        city: data.name,
        country: data.sys.country,
        temperature: Math.floor(data.main.temp),
        description: data.weather[0].description,
        icon: `http://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`,
      });
      // console.log(data);
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
