import Landing from "Components/Landing/Landing";
import { Fragment } from "react";
import WeatherDataProvider from "Components/Context/WeatherDataProvider";

export default function Home() {
  return (
    <Fragment>
      <WeatherDataProvider />
      <Landing />
    </Fragment>
  );
}
