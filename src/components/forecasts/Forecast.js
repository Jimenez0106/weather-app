import React from "react";
import { Card, Image } from "react-bootstrap";
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
    <Card
      className="hvr-bounce-to-left"
      style={{
        backgroundColor: "rgba(255,255,255,0.05)",
        borderRadius: "15px",
        maxWidth: "500px",
        boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
        padding: "5px",
      }}
    >
      <div className="Justify hvr-bounce-to-left">
        {/* Date of Forecast */}
        <div className="Date">
          {getDayName(day.date, "en-US").substr(0, 3)} {getDayDate(day.date)}
        </div>
        {/* Forecasted Min/Max Temperature */}
        <div className="ForecastMinMaxTempContainer">
          <div className="Row">
            {isFahrenheit ? (
              <div className="ForecastMinMaxTempContainer">
                {/* Max Temperature F*/}
                <div className="Row">
                  <h5 className="ForecastMaxTemperature">
                    {Math.round(maxtemp_f)}°
                  </h5>
                </div>

                {/* Min Temperature F*/}
                <div className="Row">
                  <h5 className="ForecastMinTemperature">
                    {Math.round(mintemp_f)}°
                  </h5>
                </div>
              </div>
            ) : (
              <div className="ForecastMinMaxTempContainer">
                {/* Max Temperature C*/}
                <div className="Row">
                  <h5 className="ForecastMaxTemperature">
                    {Math.round(maxtemp_c)}°
                  </h5>
                </div>

                {/* Min Temperature C*/}
                <div className="Row">
                  <h5 className="ForecastMinTemperature">
                    {Math.round(mintemp_c)}°
                  </h5>
                </div>
              </div>
            )}
          </div>
        </div>
        {/* Condition Image */}
        <Image
          className="ForecastImage hvr-float"
          src={day.day.condition.icon}
          alt="Weather Forecast Condition"
        />

        {/* Precipitation Chance */}
        <div className="PrecipitationContainer">
          {daily_chance_of_rain > 0 ? (
            <BsDropletFill color="blue" size={16} />
          ) : (
            <BsDroplet color="blue" size={16} />
          )}
          <div className="Precipitation">
            {daily_chance_of_rain}% | {totalprecip_in} in
          </div>
        </div>
      </div>
    </Card>
  );
};

export default Forecast;
