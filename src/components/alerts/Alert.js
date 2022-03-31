import React, { useState } from "react";
import { AiOutlineWarning } from "react-icons/ai";

const Alert = ({ alert }) => {
  const [displayInfo, setDisplayInfo] = useState(false);
  const { headline, areas, desc } = alert;
  return (
    <div
      className="Alert"
      onClick={() => {
        setDisplayInfo(!displayInfo);
      }}
    >
      <div>
        <AiOutlineWarning size={26} color="red" />
      </div>
      {/* Show Alert Title & Location. Description when clicked */}
      {displayInfo ? (
        <div>
          <h6 className="AlertHeadlineTitle">{headline}</h6>
          <h6 className="AlertHeadlineTitle">{areas}</h6>
          <p className="AlertDescription"> {desc}</p>
        </div>
      ) : (
        <div>
          <h6 className="AlertHeadlineTitle">{headline}</h6>
          <h6 className="AlertHeadlineTitle">{areas}</h6>
        </div>
      )}
    </div>
  );
};

export default Alert;
