import React from "react";
import { BsDroplet, BsDropletFill } from "react-icons/bs";

const Forecast = ({ day, isFahrenheit, getDayDate, getDayName }) => {
  const {
    maxtemp_f,
    maxtemp_c,
    mintemp_c,
    mintemp_f,
    daily_chance_of_rain,
    totalprecip_in,
  } = day.day;

  return (
    <div className="Justify">
      {/* Date of Forecast */}
      <div className="Date">
        {getDayName(day.date, "en-US").substr(0, 3)} {getDayDate(day.date)}
      </div>
      {/* Forecasted Min/Max Temperature */}
      <div className="ForecastMinMaxTempContainer">
        <div className="Row">
          {isFahrenheit ? (
            <div className="Row">
              {/* Max Temperature F*/}
              <h5 className="ForecastMaxTemperature">
                {Math.round(maxtemp_f)}
              </h5>
              <h6 className="ForecastDegreesMax">°</h6>
            </div>
          ) : (
            <div className="Row">
              {/* Max Temperature C*/}
              <h5 className="ForecastMaxTemperature">
                {Math.round(maxtemp_c)}
              </h5>
              <h6 className="ForecastDegreesMax">°</h6>
            </div>
          )}
        </div>
        <div>
          {isFahrenheit ? (
            <div className="Row">
              {/* Min Temperature F*/}
              <h5 className="ForecastMinTemperature">
                {Math.round(mintemp_f)}
              </h5>
              <h6 className="ForecastDegreesMin">°</h6>
            </div>
          ) : (
            <div className="Row">
              {/* Min Temperature C*/}
              <h5 className="ForecastMinTemperature">
                {Math.round(mintemp_c)}
              </h5>
              <h6 className="ForecastDegreesMin">°</h6>
            </div>
          )}
        </div>
      </div>
      {/* Condition Image */}
      <img
        className="ForecastImage hvr-bob"
        src={day.day.condition.icon}
        alt="Weather Forecast Condition"
      />
      {/* Precipitation Chance */}
      <div className="PrecipitationContainer">
        <div>
          {daily_chance_of_rain > 0 ? (
            <BsDropletFill color="blue" size={16} />
          ) : (
            <BsDroplet color="blue" size={16} />
          )}
        </div>
        <div className="Precipitation">
          {daily_chance_of_rain}% | {totalprecip_in} in
        </div>
      </div>
    </div>
  );
};

export default Forecast;
