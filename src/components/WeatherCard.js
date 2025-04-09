
export default function WeatherCard({city, country, temperature, description, icon}) {
    return (
        <div className="">
            <h2 className="w-full text-3xl font-montserrat font-bold mb-4">{city}, {country}</h2>
            <p className="w-full text-5xl font-montserrat mb-4">{temperature}°C</p>
            <img className="w-[400px] m-auto" src={icon} alt={description} />
        
        </div>
    );
}