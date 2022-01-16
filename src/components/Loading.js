import React from "react";
import { Spinner } from "react-bootstrap";

const Loading = () => {
  return (
    <div className="BackgroundDefault">
      <div className="LoadingScreen">
        <Spinner
          className="Spinner3"
          animation="grow"
          variant="light"
          size="lg"
        />
        <Spinner
          className="Spinner2"
          animation="grow"
          variant="light"
          size="lg"
        />
        <Spinner
          className="Spinner1"
          animation="grow"
          variant="light"
          size="lg"
        />
      </div>
    </div>
  );
};

export default Loading;
