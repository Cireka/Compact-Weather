import React from "react";

const DataContext = React.createContext({
  EntireData: [],
  updateCity: (city) => {},
  errorStatus: "",
});

export default DataContext;
