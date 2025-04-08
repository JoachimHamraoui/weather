const apiKey = process.env.REACT_APP_API_KEY;

export const fetchWeather = async (city) => {
    try {
        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`
        );
        const data = await response.json();

        

        return data;
    } catch (error) {
        console.log(error);
    }
};