import ForecastBox from "Components/ForecastBox/ForecastBox";
import { Fragment } from "react";
import style from "./Forecast.module.css";
import { useContext } from "react";
import DataContext from "Components/Context/weather-context";
import WeatherChart from "Components/Chart/WeatherChart";
import { useState } from "react";

const Forecast = () => {
  const ctx = useContext(DataContext);
  let Data = ctx.EntireData;

  const [data, setDataToShow] = useState("Temp");

  let TempDataSet = {
    label: `Fluctuation Of Avrage Temperature Over Next 5 Days`,
    data: Data.list?.map((item) => {
      return item.main.temp;
    }),

    fill: false,
    borderColor: "rgb(75, 192, 192)",
    tension: 0.1,
  };

  let WindDataSet = {
    label: `Fluctuation Of Avrage Wind Speed Over Next 5 Days`,
    data: Data.list?.map((item) => {
      return item.wind.speed;
    }),

    fill: false,
    borderColor: "rgb(255, 165, 0)",
    tension: 0.1,
  };

  let HumidityDataSet = {
    label: `Fluctuation Of Avrage Humidity Over Next 5 Days`,
    data: Data.list?.map((item) => {
      return item.main.humidity;
    }),

    fill: false,
    borderColor: "rgb(106, 90, 205)",
    tension: 0.1,
  };

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

  const TempStatsHandler = () => {
    setDataToShow("Temp");
  };
  const WindStatsHandler = () => {
    setDataToShow("Wind");
  };
  const HumidStatsHandler = () => {
    setDataToShow("Humid");
  };
  return (
    <Fragment>
      <section className={style.ForecastSection}>
        <div className={style.ForecastContainer}>
          <div className={style.leftForecastParrent}>
            <h2>Forecast For Next 5 Days</h2>
          </div>
        </div>
        <div className={style.DataBoxContainer}>
          <div className={style.DataBoxParrent}>
            {Data.list
              ?.filter((item, index) => {
                return index % 8 === 0;
              })
              .map((data) => {
                let Temp = data.main.temp;

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
        </div>
        <div className={style.ChartContainer}>
          <div className={style.ChartParrent}>
            {ctx.DarkMode && (
              <div className={style.statButtonsParrent}>
                <button
                  className={data === "Temp" ? style.Toggle : ""}
                  onClick={TempStatsHandler}
                >
                  Avrage Temperature
                </button>
                <button
                  className={data === "Wind" ? style.Toggle : ""}
                  onClick={WindStatsHandler}
                >
                  Avrage WindSpeed
                </button>
                <button
                  className={data === "Humid" ? style.Toggle : ""}
                  onClick={HumidStatsHandler}
                >
                  Avrage Humidity
                </button>
              </div>
            )}
            {!ctx.DarkMode && (
              <div className={style.statButtonsParrent}>
                <button
                  className={
                    data === "Temp" ? style.ToggleLight : style.ToggleDefault
                  }
                  onClick={TempStatsHandler}
                >
                  Avrage Temperature
                </button>
                <button
                  className={
                    data === "Wind" ? style.ToggleLight : style.ToggleDefault
                  }
                  onClick={WindStatsHandler}
                >
                  Avrage WindSpeed
                </button>
                <button
                  className={
                    data === "Humid" ? style.ToggleLight : style.ToggleDefault
                  }
                  onClick={HumidStatsHandler}
                >
                  Avrage Humidity
                </button>
              </div>
            )}
            {data === "Temp" && (
              <WeatherChart
                Title={"Fluctuation Of Avrage Temperature Over Next 5 Days"}
                Data={Data}
                symbol={"°C"}
                DataSet={TempDataSet}
              />
            )}
            {data === "Wind" && (
              <WeatherChart
                Title={"Fluctuation Of Avrage Temperature Over Next 5 Days"}
                Data={Data}
                symbol={" Km/h"}
                DataSet={WindDataSet}
              />
            )}
            {data === "Humid" && (
              <WeatherChart
                Title={"Fluctuation Of Avrage Temperature Over Next 5 Days"}
                Data={Data}
                symbol={"%"}
                DataSet={HumidityDataSet}
              />
            )}
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Forecast;
