import { useEffect, useState } from "react";
import { fetchWeather } from "./services/weatherApi";

function App() {
  const [city, setCity] = useState("");
  const [data, setData] = useState(null);

  const handleSearch = async () => {
    try {
      const data = await fetchWeather(city);
      setData(data);
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
        <div className="bg-blue-600 h-[720px] w-[600px] rounded-2xl shadow-md drop-shadow-xl"></div>
      </div>
    </div>
  );
}

export default App;
