import ForecastBox from "Components/ForecastBox/ForecastBox";
import MIniForecastBox from "Components/MIniForecastBox/MIniForecastBox";
import { Fragment } from "react";
import style from "./Forecast.module.css";
import { useContext } from "react";
import DataContext from "Components/Context/weather-context";
import WeatherChart from "Components/Chart/WeatherChart";

const Forecast = () => {
  const ctx = useContext(DataContext);
  let Data = ctx.EntireData;

  function TimeConvertor(timestamp) {
    const date = new Date(timestamp * 1000);
    const daysOfWeek = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    return daysOfWeek[date.getUTCDay()];
  }
  return (
    <Fragment>
      <section className={style.ForecastSection}>
        <div className={style.ForecastContainer}>
          <div className={style.leftForecastParrent}>
            <h2>Forecast For Next 5 Days</h2>
          </div>
        </div>
        <div className={style.DataBoxParrent}>
          {Data.list
            ?.filter((item, index) => {
              return index % 8 === 0;
            })
            .map((data) => {
              let Temp = data.main.temp;
              let Sunset = data.city?.sunset;
              let Sunrise = data.city?.sunrise;
              let RealFeel = data.main.feels_like;
              let Humidity = data.main.humidity;
              let Pressure = data.main.pressure;
              let Wind = data.wind.speed;
              let Date = data.dt;
              let Visiblity = data.visibility;
              let icon = data.weather[0].icon;

              return (
                <ForecastBox
                  Icon={icon}
                  Sunrise={"Error"}
                  Sunset={"Error"}
                  Temp={Temp}
                  RealFeel={RealFeel}
                  Humidity={Humidity}
                  Pressure={Pressure}
                  Wind={Wind}
                  Visibility={Visiblity}
                  Date={`${TimeConvertor(Date)}`}
                  key={Math.random()}
                />
              );
            })}
        </div>
        <div className={style.ChartParrent}>
          <WeatherChart />
        </div>
      </section>
    </Fragment>
  );
};

export default Forecast;
