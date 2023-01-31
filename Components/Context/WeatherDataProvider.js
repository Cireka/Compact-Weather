import DataContext from "./weather-context";
import { useEffect, useState } from "react";
import axios from "axios";

const WeatherDataProvider = (props) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const key1 = "6b080e7b3075932543b5156ad0e54213";
  const key2 = "b6f446df071d7989d0a2bf90a07912b1";
  const key3 = "d64167e5be9b86d7f9eaceafd657e860";
  const key4 = "a8895e0f9b0488fafd6f168b57eee099";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const Cords = await axios.get(
          `http://api.openweathermap.org/geo/1.0/direct?q=London&limit=1&appid=${key1}`
        );
        const Weather = await axios.get(
          `https://api.openweathermap.org/data/2.5/forecast?lat=57&lon=-2.15&appid=${key1}&units=metric`
        );
        const all = [Cords, Weather];

        const weatherData = all.map((i) => {
          return i.data;
        });
        setData(weatherData);
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    };
    if (loading) {
      fetchData();
    }
  }, [loading]);

  console.log(data);

  const dataContext = {
    Temp: data[1]?.list[0].main.temp,
    RealFeel: data[1]?.list[0].main.feels_like,
    Humidity: data[1]?.list[0].main.humidity,
    Pressure: data[1]?.list[0].main.pressure,
    Sunset: data[1]?.city.sunset,
    Sunrise: data[1]?.city.sunrise,
  };

  return (
    <DataContext.Provider value={dataContext}>
      {props.children}
    </DataContext.Provider>
  );
};

export default WeatherDataProvider;
