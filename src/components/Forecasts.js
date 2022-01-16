import React from "react";
import ForecastDay from "./Forecast";

const Forecasts = ({ weather, isFahrenheit, getDayDate, getDayName }) => {
  return (
    <div className="DayContainer fade-in-image">
      {weather.map((day, index) => {
        return (
          <ForecastDay
            key={index}
            day={day}
            isFahrenheit={isFahrenheit}
            getDayDate={getDayDate}
            getDayName={getDayName}
          />
        );
      })}
    </div>
  );
};

export default Forecasts;
