import React from "react";
import Banner from "./Banner";
import { Card } from "react-bootstrap";
import CurrentWeather from "./CurrentWeather";
import AdditionalConditions from "./AdditionalConditions";

const Today = ({ weather, isFahrenheit, getDayName }) => {
  const todaysData = weather.current;
  const todaysForecast = weather.forecast.forecastday[0].day;

  return (
    <>
      <Banner
        weather={weather}
        getDayName={getDayName}
        todaysData={todaysData}
      />
      {/* Content Container */}
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {/* Today's Weather Conditions Container */}
        <Card
          className="hvr-bounce-to-left"
          style={{
            backgroundColor: "rgba(255,255,255,0.05)",
            borderRadius: "15px",
            maxWidth: "500px",
            boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
          }}
        >
          <CurrentWeather
            weather={weather}
            isFahrenheit={isFahrenheit}
            todaysData={todaysData}
            todaysForecast={todaysForecast}
          />
          {/* Mobile Additional Conditions */}
          <div className="ConditionsContainerMobile d-md-none">
            <AdditionalConditions
              todaysData={todaysData}
              todaysForecast={todaysForecast}
            />
          </div>
        </Card>
      </div>
    </>
  );
};

export default Today;
