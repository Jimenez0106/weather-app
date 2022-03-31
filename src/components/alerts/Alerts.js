import React, { useState } from "react";
import { Button } from "react-bootstrap";
import Alert from "./Alert";

const Alerts = ({ alerts }) => {
  const [showAlerts, setAlerts] = useState(false);
  return (
    <div className="AlertsContainer">
      <div className="AlertButtonContainer">
        {/* Alert Button Animations */}
        <Button
          className={
            showAlerts ? "AlertsButton" : "AlertsButton bouncy hvr-grow"
          }
          onClick={() => {
            setAlerts(!showAlerts);
          }}
        >
          {!showAlerts ? "Alerts" : "Hide"}
        </Button>
      </div>
      {/* Creation of Alerts */}
      {showAlerts ? (
        <div className="slide">
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
