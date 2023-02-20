import img from "../../public/Weather Icons/sun.png";
import Image from "next/image";
import style from "./ForecastBox.module.css";

const ForecastBox = (props) => {
  console.log(props.Icon);
  let iconLink = `http://openweathermap.org/img/wn/${props.Icon}@2x.png`;
  return (
    <div className={style.ForeCastBoxParrent}>
      <div className={style.TopParrent}>
        <h2>{props.Date}</h2>
      </div>
      <div className={style.TopParrent}>
        <div className={`${style.Colum} `}>
          <h1>{props.Temp}°C</h1>
          <div>
            <p>
              Real Feel <strong>{props.RealFeel}°</strong>
            </p>
            <p>
              Wind Speed <strong>{props.Wind} Km/H</strong>
            </p>
            <p>
              Visiblity <strong>{props.Visibility} Meteres</strong>
            </p>
          </div>
        </div>
        <div className={style.Colum}>
          <img className={style.Icon} src={iconLink} alt="Weather Icon" />
          <div>
            <p>
              Pressure <strong> {props.Pressure}MB</strong>
            </p>
            <p>
              Humidity <strong>{props.Humidity}%</strong>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForecastBox;
