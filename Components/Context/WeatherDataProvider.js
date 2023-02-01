import DataContext from "./weather-context";
import { useEffect, useState } from "react";
import axios from "axios";

const WeatherDataProvider = (props) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [citySarch, setCitySarch] = useState("Moscow");

  const key1 = "6b080e7b3075932543b5156ad0e54213";
  const key2 = "b6f446df071d7989d0a2bf90a07912b1";
  const key3 = "d64167e5be9b86d7f9eaceafd657e860";
  const key4 = "a8895e0f9b0488fafd6f168b57eee099";

  const updateCity = (city) => {
    setCitySarch(city);
    setLoading(true);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const Weather = await axios.get(
          `https://api.openweathermap.org/data/2.5/forecast?q=${citySarch}&mode=JSON&appid=${key1}&units=metric`
        );
        const weatherData = Weather.data;
        setData(weatherData);
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    };
    if (loading) {
      fetchData();
    }
  }, [loading, citySarch]);

  console.log(data);

  const dataContext = {
    EntireData: data,
    updateCity: updateCity,
  };

  return (
    <DataContext.Provider value={dataContext}>
      {props.children}
    </DataContext.Provider>
  );
};

export default WeatherDataProvider;
