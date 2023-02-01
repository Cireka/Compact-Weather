import React from "react";

const DataContext = React.createContext({
  EntireData: [],
  updateCity: (city) => {},
});

export default DataContext;
