import img from "../../public/Weather Icons/sun.png";
import Image from "next/image";
import style from "./ForecastBox.module.css";

const ForecastBox = (props) => {
  return (
    <div className={style.ForeCastBoxParrent}>
      <div className={style.TopParrent}>
        <h2>Monday</h2>
        <h2>11:42 Pm</h2>
      </div>
      <div className={style.TopParrent}>
        <div className={`${style.Colum} ${style.Test}`}>
          <h1>{props.Temp}°</h1>
          <div>
            <p>
              Real Feel <strong>{props.RealFeel}</strong>
            </p>
            <p>
              Wind <strong>{props.Wind}</strong>
            </p>
            <p>
              Pressure <strong> 100MB</strong>
            </p>
            <p>
              Humidity <strong>{props.Humidity}</strong>
            </p>
          </div>
        </div>
        <div className={style.Colum}>
          <Image className={style.Icon} alt="Weather Icon" src={img} />
          <div>
            <p>
              SunSet <strong>{props.Sunset} </strong>
            </p>
            <p>
              SunRise <strong>{props.Sunrise}</strong>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForecastBox;
