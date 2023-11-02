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



  const key1 = process.env.NEXT_PUBLIC_KEY1;
  const key2 = process.env.NEXT_PUBLIC_KEY2;
  const key3 = process.env.NEXT_PUBLIC_KEY3;
  const key4 = process.env.NEXT_PUBLIC_KEY4;

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
