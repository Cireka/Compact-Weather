import ForecastBox from "Components/ForecastBox/ForecastBox";
import MIniForecastBox from "Components/MIniForecastBox/MIniForecastBox";
import { Fragment } from "react";
import style from "./Forecast.module.css";
import { useContext } from "react";
import DataContext from "Components/Context/weather-context";

const Forecast = () => {
  const ctx = useContext(DataContext);

  let Data = ctx.EntireData;

  // let Temp = Data.list?.[0].main.temp;
  // let Sunset = Data.city?.sunset;
  // let Sunrise = Data.city?.sunrise;
  // let RealFeel = Data.list?.[0].main.feels_like;
  // let Humidity = Data.list?.[0].main.humidity;
  // let Pressure = Data.list?.[0].main.pressure;
  // let WeekDay = Data.list?.[0].dt_txt;
  console.log(Data);

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
            <h2>Today</h2>
            <h2>Tomorow</h2>
            <h2>Next 7 Days</h2>
          </div>
          {/* <div className={style.rightForecastParrent}>
            <h2>Chance Of Rain</h2>
          </div> */}
        </div>
        <div className={style.DataBoxParrent}>
          {Data.list
            ?.filter((item, index) => {
              return index % 8 === 0;
            })
            .map((data) => {
              console.log(data);
              let Temp = data.main.temp;
              let Sunset = data.city?.sunset;
              let Sunrise = data.city?.sunrise;
              let RealFeel = data.main.feels_like;
              let Humidity = data.main.humidity;
              let Pressure = data.main.pressure;
              let Wind = data.wind.speed;
              let Date = data.dt;
              let Visiblity = data.visibility;

              return (
                <ForecastBox
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
      </section>
    </Fragment>
  );
};

export default Forecast;
