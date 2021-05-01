import React, { useState, useEffect } from "react";
import Countries from "./components/Country";
import axios from "axios";

const App = () => {
  const [countries, setCountries] = useState([]);
  const [filterString, setFilterString] = useState([]);

  useEffect(() => {
    axios.get("https://restcountries.eu/rest/v2/all").then((response) => {
      setCountries(response.data);
    });
  }, []);

  const handleCountryNameChange = (event) => {
    setFilterString(event.target.value);
  };

  const handleCountrySelect = (name) => {
    setFilterString(name);
  };

  return (
    <div>
      <div>find countries</div>
      <input onChange={handleCountryNameChange} />
      <Countries
        countries={countries}
        filterString={filterString}
        handleShow={handleCountrySelect}
      />
    </div>
  );
};

export default App;
