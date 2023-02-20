import DataContext from "./weather-context";
import { useEffect, useState } from "react";
import axios from "axios";
import useDarkMode from "use-dark-mode";

const WeatherDataProvider = (props) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [citySarch, setCitySarch] = useState("Tbilisi");
  const [wrongLocation, setWrongLOcation] = useState(true);
  const darkMode = useDarkMode(true, { storageProvider: null });

  const key1 = "6b080e7b3075932543b5156ad0e54213";
  const key2 = "b6f446df071d7989d0a2bf90a07912b1";
  const key3 = "d64167e5be9b86d7f9eaceafd657e860";
  const key4 = "a8895e0f9b0488fafd6f168b57eee099";

  const updateCity = (city) => {
    setCitySarch(city);
    setLoading(true);
  };

  const toggleDark = () => {
    darkMode.toggle();
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
        setWrongLOcation(true);
      } catch (error) {
        setWrongLOcation(false);
        console.error(error);
      }
    };
    if (loading) {
      fetchData();
    }
  }, [loading, citySarch]);

  const dataContext = {
    EntireData: data,
    updateCity: updateCity,
    errorStatus: wrongLocation,
    DarkMode: darkMode.value,
    toggleDarkMode: toggleDark,
  };

  return (
    <DataContext.Provider value={dataContext}>
      {props.children}
    </DataContext.Provider>
  );
};

export default WeatherDataProvider;
