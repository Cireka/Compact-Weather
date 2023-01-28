import style from "./MIniForecastBox.module.css";
import img from "../../public/Weather Icons/sun.png";
import Image from "next/image";

const MIniForecastBox = () => {
  return (
    <div className={style.MiniBoxParrent}>
      <h2>Tue</h2>
      <Image quality={100} className={style.icon} alt="icon" src={img} />
      <h2>15°</h2>
    </div>
  );
};

export default MIniForecastBox;
