import React from "react";

const AdditionalConditions = ({ todaysData, todaysForecast }) => {
  return (
    <>
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
    </>
  );
};

export default AdditionalConditions;
