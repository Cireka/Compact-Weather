import ForecastBox from "Components/ForecastBox/ForecastBox";
import MIniForecastBox from "Components/MIniForecastBox/MIniForecastBox";
import { Fragment } from "react";
import style from "./Forecast.module.css";

const Forecast = () => {
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
          <ForecastBox />
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
