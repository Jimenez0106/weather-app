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
          <Image src={logo} alt="Logo" width="50px" height="50px" />
          <Image src={textLogo} alt="Logo Text" width="100%" height="50px" />
        </div>
      </Navbar.Brand>
    </Navbar>
  );
};

export default MobileHeader;
