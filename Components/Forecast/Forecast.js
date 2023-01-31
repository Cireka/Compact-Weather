import ForecastBox from "Components/ForecastBox/ForecastBox";
import MIniForecastBox from "Components/MIniForecastBox/MIniForecastBox";
import { Fragment } from "react";
import style from "./Forecast.module.css";
import { useContext } from "react";
import DataContext from "Components/Context/weather-context";

const Forecast = () => {
  const ctx = useContext(DataContext);

  let Temp = ctx.Temp;
  let Sunset = ctx.Sunset;
  let Sunrise = ctx.Sunrise;

  let SunsetConverted = new Date(Sunset * 1000)
    .toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    })
    .toUpperCase();

  const sunTimeConvertor = (time) => {
    return new Date(time * 1000)
      .toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      })
      .toUpperCase();
  };
  return (
    <Fragment>
      <section className={style.ForecastSection}>
        <div className={style.ForecastContainer}>
          <div className={style.leftForecastParrent}>
            <h2>Today</h2>
            <h2>Tomorow</h2>
            <h2>Next 7 Days</h2>
          </div>
          <div className={style.rightForecastParrent}>
            <h2>Chance Of Rain</h2>
          </div>
        </div>
        <div className={style.DataBoxParrent}>
          <ForecastBox
            Sunrise={`${sunTimeConvertor(Sunrise)}`}
            Sunset={`${sunTimeConvertor(Sunset)}`}
            Temp={Temp}
          />
          <MIniForecastBox />
          <MIniForecastBox />
          <MIniForecastBox />
          <MIniForecastBox />
          <MIniForecastBox />
          <MIniForecastBox />
        </div>
      </section>
    </Fragment>
  );
};

export default Forecast;
