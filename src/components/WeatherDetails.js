import React from "react";
import Wind from "../assets/wind.json";
import Humidity from "../assets/humidity.json";
import Lottie from "lottie-react";

export const WeatherDetails = ({ wind, humidity }) => {
  return (
    <div className="w-full flex flex-row text-gray-800 items-center mt-12">
      <div className="w-full flex flex-col items-center">
        <div className="w-[48px] m-auto">
          <Lottie animationData={Wind} loop={true} />
        </div>
        <p className="text-md font-montserrat">{wind} m/s</p>
      </div>
      <div className="w-full flex flex-col items-center">
        <div className="w-[48px] m-auto">
          <Lottie animationData={Humidity} loop={true} />
        </div>
        <p className="text-md font-montserrat">{humidity} %</p>
      </div>
    </div>
  );
};
