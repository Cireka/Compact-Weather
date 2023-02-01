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
    console.log(event);
    ctx.updateCity(inputValue);
  };
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
              Tbilisi, <span className={style.Country}>Georgia</span>
            </h2>
          </div>
          <div className={style.NavMid}>
            <form onSubmit={SubmitHandler}>
              <RxMagnifyingGlass type="submit" className={style.sarchIcon} />
              <input
                ref={ref}
                onChange={inputChangeHandler}
                placeholder="Search city..."
                type="search"
              />
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
