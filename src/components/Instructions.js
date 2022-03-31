import React from "react";

const Instructions = () => {
  return (
    <div className="BackgroundDefault">
      <div className="LoadingScreen">
        <h1 style={{ textAlign: "center" }}>Location not found</h1>
        <p>
          To get the most accurate search results include things like city,
          state, zip-code or country.
        </p>
        <ul>
          Examples:
          <li>"Tokyo Japan"</li>
          <li>"new york 11725"</li>
          <li>"Santo Domingo"</li>
        </ul>
      </div>
    </div>
  );
};

export default Instructions;
