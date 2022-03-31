import React from "react";

const Banner = ({ weather, getDayName, todaysData }) => {
  const { name, region, country } = weather.location;
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
  );
};

export default Banner;
