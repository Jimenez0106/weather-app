import React from "react";
import { Image, Navbar } from "react-bootstrap";

const MobileHeader = ({ logo, textLogo }) => {
  return (
    <Navbar
      className="justify-content-center d-md-none"
      bg="myColor"
      variant="dark"
      style={{ height: "50px" }}
    >
      <Navbar.Brand>
        <div className="AppLogo">
        <Image
              className="d-none d-md-block"
              src={logo}
              alt="Logo"
              width="auto"
              height="75px"
            />
            <Image
              className="d-none d-md-block mb-2"
              src={textLogo}
              alt="Logo Text"
              height="75px"
              width="auto"
            />
        </div>
      </Navbar.Brand>
    </Navbar>
  );
};

export default MobileHeader;
