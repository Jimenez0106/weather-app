import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import getBackground from "./data/BACKGROUND_SELECT";
import Header from "./components/navbar/Header";
import Today from "./components/today/Today";
import Forecasts from "./components/forecasts/Forecasts";
import Alerts from "./components/alerts/Alerts";
import Loading from "./components/Loading";
import Instructions from "./components/Instructions";
import Landing from "./components/Landing";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

const App = () => {
  const [weather, setWeather] = useState("");
  const [location, setLocation] = useState("");
  const [isFahrenheit, setFahrenheit] = useState(true);
  const [loading, setLoading] = useState(true);
  const [foundLocation, setFoundLocation] = useState(true);
  const [firstSearch, setFirstSearch] = useState(true);
  const weatherSearch = useRef();

  //sets weather forecast based on location set by user
  useEffect(() => {
    const fetchWeather = async (location) => {
      if (location === "") return;
      setLoading(true);
      try {
        const res = await axios.get(
          `https://api.weatherapi.com/v1/forecast.json?key=${process.env.REACT_APP_WEATHER_KEY}&q=${location}&days=5&aqi=no&alerts=yes`
        );
        if (res.data === undefined) return;
        setLoading(false);
        setWeather(res.data);
        setFoundLocation(true);
        getBackground(res.data);
      } catch (err) {
        setLoading(false);
        setFoundLocation(false);
      }
    };
    fetchWeather(location);
  }, [location]);

  // Get the day of the week
  const getDayName = (dateStr, locale) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString(locale, { weekday: "long" });
  };

  //change forecast date display.. "12-8" >>> "12/8"
  const getDayDate = (dayDate) => {
    return dayDate.substr(5).replace("-", "/");
  };

  //Get user's location by reverse geocoding
  const getCoordinates = () => {
    navigator.geolocation.getCurrentPosition(async (position) => {
      try {
        const res = await axios.get(
          `https://www.mapquestapi.com/geocoding/v1/reverse?key=${process.env.REACT_APP_MAP_KEY}&location=${position.coords.latitude},${position.coords.longitude}`
        );
        if (res.data === undefined) return;
        setLocation(res.data.results[0].locations[0].adminArea5);
        setFirstSearch(false);
      } catch (err) {
        setLoading(false);
        setFoundLocation(false);
        console.error(err);
      }
    });
  };

  //Search for city with input field
  const searchHandler = (e) => {
    e.preventDefault();
    const city = weatherSearch.current.value;
    if (city === "") return;
    setLocation(city);
    setFirstSearch(false);
  };

  //Alternate fahrenheit and celsius
  const fahrenheitToggler = () => {
    setFahrenheit(!isFahrenheit);
  };

  //Landing Page
  if (firstSearch) {
    return (
      <div className="App">
        <Header
          location={location}
          searchHandler={searchHandler}
          getInput={weatherSearch}
          fahrenheitToggler={fahrenheitToggler}
          isFahrenheit={isFahrenheit}
          getCoordinates={getCoordinates}
        />
        <Landing />
      </div>
    );
  }

  //Loading screen
  if (loading) {
    return (
      <div className="App">
        <Header
          location={location}
          searchHandler={searchHandler}
          getInput={weatherSearch}
          fahrenheitToggler={fahrenheitToggler}
          getCoordinates={getCoordinates}
          isFahrenheit={isFahrenheit}
        />
        <Loading />
      </div>
    );
  }

  //Location search failed
  if (!foundLocation) {
    return (
      <div className="App">
        <Header
          location={location}
          searchHandler={searchHandler}
          getInput={weatherSearch}
          fahrenheitToggler={fahrenheitToggler}
          getCoordinates={getCoordinates}
          isFahrenheit={isFahrenheit}
        />
        <Instructions />
      </div>
    );
  }

  //Main App
  return (
    <div className="App">
      <Header
        location={location}
        searchHandler={searchHandler}
        getInput={weatherSearch}
        fahrenheitToggler={fahrenheitToggler}
        getCoordinates={getCoordinates}
        isFahrenheit={isFahrenheit}
      />
      {/* Weather information found */}
      {weather === "" ? (
        ""
      ) : (
        <div className={getBackground(weather)}>
          <div className="Container">
            {/* Today's weather conditions container */}
            <Today
              weather={weather}
              location={location}
              isFahrenheit={isFahrenheit}
              getDayName={getDayName}
            />
          </div>
          {/* 3-day forecast weather conditions container */}
          <div className="ForecastsContainer">
            <Forecasts
              weather={weather.forecast.forecastday}
              isFahrenheit={isFahrenheit}
              getDayDate={getDayDate}
              getDayName={getDayName}
            />
          </div>
          {/* No Alerts Found for location */}
          {weather.alerts.alert.length === 0 ? (
            <div className="AlertsContainer">
              <div className="AlertButtonContainer">
                <Button disabled variant="danger" className="AlertsButtonNone">
                  No Alerts
                </Button>
              </div>
            </div>
          ) : (
            //Alerts found container
            <Alerts
              alerts={weather.alerts.alert}
              fahrenheitToggler={fahrenheitToggler}
              isFahrenheit={isFahrenheit}
            />
          )}
        </div>
      )}
    </div>
  );
};

export default App;
