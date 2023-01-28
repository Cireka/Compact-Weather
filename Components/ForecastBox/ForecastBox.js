import img from "../../public/Weather Icons/sun.png";
import Image from "next/image";
import style from "./ForecastBox.module.css";

const ForecastBox = () => {
  return (
    <div className={style.ForeCastBoxParrent}>
      <div className={style.TopParrent}>
        <h2>Monday</h2>
        <h2>11:42 Pm</h2>
      </div>
      <div className={style.TopParrent}>
        <div className={style.Colum}>
          <h1>16°</h1>
          <div>
            <p>
              Real Feel <strong>18*</strong>
            </p>
            <p>
              Wind <strong>5-8Km/h</strong>
            </p>
            <p>
              Pressure <strong> 100MB</strong>
            </p>
            <p>
              Humidity <strong>51%</strong>
            </p>
          </div>
        </div>
        <div className={style.Colum}>
          <Image className={style.Icon} alt="Weather Icon" src={img} />
          <div>
            <p>
              SunSet <strong>10:00 Pm</strong>
            </p>
            <p>
              SunRise <strong>10:00 Am</strong>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForecastBox;
