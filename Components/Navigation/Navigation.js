import { Fragment } from "react";
import style from "./Navigation.module.css";
import { MdLocationPin } from "react-icons/md";
import { GiStripedSun } from "react-icons/gi";
import { FaMoon } from "react-icons/fa";
import { RxMagnifyingGlass } from "react-icons/rx";
import { useContext } from "react";
import DataContext from "Components/Context/weather-context";
import { useRef } from "react";
import { useState } from "react";
import { motion } from "framer-motion";

const Navigation = () => {
  const ctx = useContext(DataContext);
  const [isOn, setIsOn] = useState(false);

  const toggleSwitch = () => {
    ctx.toggleDarkMode();
    setIsOn(!isOn);
  };
  const spring = {
    type: "spring",
    stiffness: 700,
    damping: 30,
  };

  const [inputValue, setInputValue] = useState(``);
  const ref = useRef();
  const inputChangeHandler = () => {
    setInputValue(`${ref.current.value}`);
  };

  const SubmitHandler = (event) => {
    event.preventDefault();
    ctx.updateCity(inputValue);
    setInputValue("");
  };
  const ErrorStatus = ctx.errorStatus;
  const Data = ctx.EntireData;
  const Location = Data.city?.name;

  return (
    <Fragment>
      <section className={style.NavigationSection}>
        <div className={style.NavContainer}>
          <div className={style.NavLeft}>
            <MdLocationPin className={style.LocationIcon} />
            <h2>
              <span
                className={ctx.DarkMode ? style.Country : style.CountryLight}
              >
                {Location}
              </span>
            </h2>
          </div>
          <div className={style.NavMid}>
            <form className={style.Form} onSubmit={SubmitHandler}>
              <RxMagnifyingGlass type="submit" className={style.sarchIcon} />
              <input
                className={
                  ctx.DarkMode ? style.SarchInput : style.SarchInputLight
                }
                ref={ref}
                onChange={inputChangeHandler}
                placeholder="Search city..."
                value={inputValue}
                type="search"
              />

              <h1
                className={`${
                  ErrorStatus ? style.ErrorMsgNone : style.ErrorMsg
                }`}
              >
                Location not found. Please check your spelling and try again.
              </h1>
            </form>
          </div>
          <div className={style.NavRight}>
            <div
              className={style.switch}
              data-ison={isOn}
              onClick={toggleSwitch}
            >
              <FaMoon color="#F4F1C9" className={style.iconMoon} />
              <GiStripedSun color="f2cd5c" className={style.iconSun} />
              <motion.div className={style.handle} layout transition={spring} />
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Navigation;
