import React from "react";
import { Image } from "react-bootstrap";
import { BsDroplet, BsDropletFill } from "react-icons/bs";
import AdditionalConditions from "./AdditionalConditions";

const CurrentWeather = ({
  weather,
  isFahrenheit,
  todaysData,
  todaysForecast,
}) => {
  const { icon, text } = weather.current.condition;

  return (
    <div className="TodayContainer fade-in-image">
      {/* Today's Image Section */}
      <div className="ImageContainer">
        <Image
          className="TodayWeatherImage hvr-float"
          src={icon}
          alt="condition icon"
        />
        <h6 className="TodayCondition">{text}</h6>
      </div>

      {/* Temperature and Precipitation Column */}
      <div className="TemperatureContainer">
        {/* Today's Current Temperature */}
        {isFahrenheit ? (
          <div className="Row">
            {/* Current Temperature F */}
            <h1 className="TodayTemperature">
              {Math.round(todaysData.temp_f)}
            </h1>
            <h2 className="DegreesMain">°F</h2>
          </div>
        ) : (
          <div className="Row">
            {/* Current Temperature C */}
            <h1 className="TodayTemperature">
              {Math.round(todaysData.temp_c)}
            </h1>
            <h2 className="DegreesMain">°C</h2>
          </div>
        )}

        {/* Today's Min/Max Temperature */}
        <div className="MinMaxTempContainer">
          {isFahrenheit ? (
            <>
              <div className="Row">
                {/* Max Temperature F*/}
                <h5 className="MaxTemperature">
                  {Math.round(todaysForecast.maxtemp_f)}°
                </h5>
              </div>
              <div className="Row">
                {/* Min Temperature F*/}
                <h5 className="MinTemperature">
                  {Math.round(todaysForecast.mintemp_f)}°
                </h5>
              </div>
            </>
          ) : (
            <>
              <div className="Row">
                {/* Max Temperature C*/}
                <h5 className="MaxTemperature">
                  {Math.round(todaysForecast.maxtemp_c)}°
                </h5>
              </div>
              <div className="Row">
                {/* Min Temperature C*/}
                <h5 className="MinTemperature">
                  {Math.round(todaysForecast.mintemp_c)}°
                </h5>
              </div>
            </>
          )}
        </div>

        {/* Precipitation Section */}
        <div className="PrecipitationContainer">
          <div>
            {todaysForecast.daily_chance_of_rain ? (
              <BsDropletFill color="blue" size={16} />
            ) : (
              <BsDroplet color="blue" size={16} />
            )}
          </div>
          <div className="Precipitation">
            {todaysForecast.daily_chance_of_rain}% |{" "}
            {todaysForecast.totalprecip_in} in
          </div>
        </div>
      </div>

      {/* Additional Conditions Section */}
      <div className="ConditionsContainer d-none d-md-flex">
        <AdditionalConditions
          todaysData={todaysData}
          todaysForecast={todaysForecast}
        />
      </div>
    </div>
  );
};

export default CurrentWeather;
