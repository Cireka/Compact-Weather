import React from "react";

const DataContext = React.createContext({
  Temp: 0,
  RealFeel: 0,
  Humidity: 0,
  Pressure: 0,
  Sunset: 0,
  Sunrise: 0,
});

export default DataContext;
