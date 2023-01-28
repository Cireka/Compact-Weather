import Forecast from "Components/Forecast/Forecast";
import Navigation from "Components/Navigation/Navigation";
import { Fragment } from "react";

const Landing = () => {
  return (
    <Fragment>
      <Navigation />
      <Forecast />
    </Fragment>
  );
};

export default Landing;
