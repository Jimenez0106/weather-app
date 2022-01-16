import React from "react";
import { BsDroplet, BsDropletFill } from "react-icons/bs";

const Today = ({ weather, isFahrenheit, getDayName }) => {
  const todaysData = weather.current;
  const todaysForecast = weather.forecast.forecastday[0].day;
  const { name, region, country } = weather.location;
  const { icon, text } = weather.current.condition;

  //get the time of when the data was last updated
  const lastUpdated = (dateStr) => {
    const date = new Date(dateStr);
    const options = {
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    };
    const timeString = date.toLocaleString("en-US", options);
    return timeString;
  };

  return (
    <>
      {/* Location, Date, and Time banner */}
      <div className="Location fade-in-image">
        <h2>
          {`${
            name === region
              ? `${name}, ${country}`
              : `${name}, ${region === "" ? `${country}` : `${region}`}`
          }`}
        </h2>
        <h6>
          As of {getDayName(weather.forecast.forecastday[0].date, "en-US")}
          {", "}
          {lastUpdated(todaysData.last_updated)}
        </h6>
      </div>

      {/* Today's Weather Conditions */}
      <div className="TodayContainer fade-in-image">
        {/* Today's Image Section */}
        <div className="ImageContainer">
          <img
            className="TodayWeatherImage hvr-bob"
            src={icon}
            alt="condition icon"
          />
          <h6 className="TodayCondition">{text}</h6>
        </div>

        {/* Temperature and Precipitation Column */}
        <div className="TemperatureContainer">
          {/* Today's Temperature */}
          {isFahrenheit ? (
            <div className="Row">
              <h1 className="TodayTemperature">
                {Math.round(todaysData.temp_f)}
              </h1>
              <h2 className="DegreesMain">°F</h2>
            </div>
          ) : (
            <div className="Row">
              <h1 className="TodayTemperature">
                {Math.round(todaysData.temp_c)}
              </h1>
              <h2 className="DegreesMain">°C</h2>
            </div>
          )}
          {/* Min/Max Temperature */}
          <div className="MinMaxTempContainer">
            {isFahrenheit ? (
              <div className="Row">
                {/* Max Temperature F*/}
                <h5 className="MaxTemperature">
                  {Math.round(todaysForecast.maxtemp_f)}
                </h5>
                <h6 className="DegreesMax">°</h6>
              </div>
            ) : (
              <div className="Row">
                {/* Max Temperature C*/}
                <h5 className="MaxTemperature">
                  {Math.round(todaysForecast.maxtemp_c)}
                </h5>
                <h6 className="DegreesMax">°</h6>
              </div>
            )}
            {isFahrenheit ? (
              <div className="Row">
                {/* Min Temperature F*/}
                <h5 className="MinTemperature">
                  {Math.round(todaysForecast.mintemp_f)}
                </h5>
                <h6 className="DegreesMin">°</h6>
              </div>
            ) : (
              <div className="Row">
                {/* Min Temperature C*/}
                <h5 className="MinTemperature">
                  {Math.round(todaysForecast.mintemp_c)}
                </h5>
                <h6 className="DegreesMin">°</h6>
              </div>
            )}
          </div>

          {/* Precipitation Section */}
          <div className="PrecipitationContainer">
            <div>
              {todaysForecast.daily_chance_of_rain > 0 ? (
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
        <div className="ConditionsContainer d-none d-lg-flex">
          <ul className="ConditionTitle">
            <li>Pressure:</li>
            <li>Visibility:</li>
            <li>Humidity: </li>
            <li>Precipitation: </li>
            <li>Gust: </li>
          </ul>
          <ul className="ConditionStats">
            <li>{`${todaysData.pressure_in} in`}</li>
            <li>{`${todaysData.vis_miles} miles`}</li>
            <li>{`${todaysData.humidity}%`}</li>
            <li>{`${todaysForecast.totalprecip_in} in`}</li>
            <li>
              {`${todaysData.gust_mph} mph`} {` `} {todaysData.wind_dir}
            </li>
          </ul>
        </div>
      </div>

      {/* Mobile Additional Conditions */}
      <div className="ConditionsContainerMobile d-lg-none">
        <ul className="ConditionTitle">
          <li>Pressure:</li>
          <li>Visibility:</li>
          <li>Humidity: </li>
          <li>Precipitation: </li>
          <li>Gust: </li>
        </ul>
        <ul className="ConditionStats">
          <li>{`${todaysData.pressure_in} in`}</li>
          <li>{`${todaysData.vis_miles} miles`}</li>
          <li>{`${todaysData.humidity}%`}</li>
          <li>{`${todaysForecast.totalprecip_in} in`}</li>
          <li>
            {`${todaysData.gust_mph} mph`} {` `} {todaysData.wind_dir}
          </li>
        </ul>
      </div>
    </>
  );
};

export default Today;
