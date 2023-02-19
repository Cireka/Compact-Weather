import React from "react";

const DataContext = React.createContext({
  EntireData: [],
  updateCity: (city) => {},
  toggleDarkMode: () => {},
  errorStatus: "",
  DarkMode: "true",
});

export default DataContext;
