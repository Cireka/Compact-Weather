import { Fragment } from "react";
import style from "./Navigation.module.css";

import { MdLocationPin } from "react-icons/md";
import { GiStripedSun } from "react-icons/gi";
import { FaMoon } from "react-icons/fa";
import { BsGridFill } from "react-icons/bs";
import { RxMagnifyingGlass } from "react-icons/rx";

import { useContext } from "react";
import DataContext from "Components/Context/weather-context";
import { useRef } from "react";
import { useState } from "react";
const Navigation = () => {
  const ctx = useContext(DataContext);
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
            <div className={style.dummyParrent}>
              <BsGridFill className={style.icon} />
            </div>
            <MdLocationPin className={style.LocationIcon} />
            <h2>
              <span className={style.Country}>{Location}</span>
            </h2>
          </div>
          <div className={style.NavMid}>
            <form className={style.Form} onSubmit={SubmitHandler}>
              <RxMagnifyingGlass type="submit" className={style.sarchIcon} />
              <input
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
            <div className={style.iconParrent}>
              <GiStripedSun className={style.icon} />
            </div>
            <div className={style.iconParrent}>
              <FaMoon className={style.icon} />
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Navigation;
