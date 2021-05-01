import React, { useState, useEffect } from "react";
import axios from "axios";

const Countries = ({ countries, filterString, handleShow }) => {
  const [selectedCountry, setSelectedCountry] = useState(filterString);

  const api_key = process.env.REACT_APP_API_KEY;
  const filteredElements = countries.filter((country) =>
    country.name.includes(filterString)
  );

  useEffect(() => {
    if (filteredElements.length === 1) {
      axios
        .get(
          `http://api.weatherstack.com/current?access_key=${api_key}&query=${filterString}`
        )
        .then((response) => {
          if (response.data.current) {
            const newElement = (filteredElements[0] = {
              ...filteredElements[0],
              temperature: response.data.current.temperature,
              wind_speed: response.data.current.wind_speed,
              weather_icons: response.data.current.weather_icons,
            });
            setSelectedCountry(newElement);
          }
        });
    }
  }, [filterString]);

  if (filterString.length > 0) {
    if (filteredElements.length > 10) {
      return <div>Too many matches, specity another filter</div>;
    } else if (filteredElements.length === 1) {
      return (
        <div>
          <h1>{selectedCountry.name}</h1>
          <div>capital {selectedCountry.capital}</div>
          <div>population {selectedCountry.population}</div>
          <h2>languages</h2>
          {selectedCountry.languages.map((language) => (
            <div key={language.name}>{language.name}</div>
          ))}
          <br />
          <div>
            <img width="250" alt="" src={selectedCountry.flag} />
          </div>
          <br />
          <h2>Weather in Helsinki</h2>
          <div>
            <b>temperature: </b>
            {selectedCountry.temperature}
          </div>
          <img src={selectedCountry.weather_icons} />
          <div>
            <b>wind: </b>
            {selectedCountry.wind_speed}
          </div>
        </div>
      );
    } else {
      return (
        <div>
          <br />
          {filteredElements.map((country, i) => (
            <div key={i}>
              {country.name}{" "}
              <input
                type="button"
                value="show"
                onClick={() => handleShow(country.name)}
              />
            </div>
          ))}
        </div>
      );
    }
  }

  return <div></div>;
};

export default Countries;
