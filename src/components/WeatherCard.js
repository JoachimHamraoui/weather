import Lottie from "lottie-react";

export default function WeatherCard({city, country, temperature, description, icon, cityTime}) {
    return (
        <div className="w-full flex flex-col text-gray-800">
            <h2 className="w-full text-3xl font-montserrat font-bold mb-4">{city}, {country}</h2>
            <p className="text-xl font-montserrat -mt-2">Local time {cityTime}</p>
            <div className="w-[360px] m-auto mt-4 mb-8">
                <Lottie animationData={icon} loop={true} />
            </div>
            <p className="text-5xl font-montserrat mx-auto">{temperature}<span className="text-2xl"> °C</span></p>
        </div>
    );
}