import React, { useState } from "react";
import Alert from "./Alert";

const Alerts = ({ alerts, fahrenheitToggler, isFahrenheit }) => {
  const [isAlerts, setAlerts] = useState(false);
  return (
    <div className="AlertsContainer">
      <div className="AlertButtonContainer">
        {/* Animate Button if there are Alerts */}
        <button
          className={isAlerts ? "AlertsButton" : "AlertsButton bouncy"}
          onClick={() => {
            setAlerts(!isAlerts);
          }}
        >
          Alerts
        </button>
      </div>
      {/* Creation of Alerts */}
      {isAlerts ? (
        <div>
          {alerts.map((alert, index) => {
            return <Alert key={index} alert={alert} />;
          })}
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Alerts;
