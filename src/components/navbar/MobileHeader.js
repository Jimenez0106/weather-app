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
          <Image src={logo} alt="Logo" height="50px" width="auto" />
          <Image src={textLogo} alt="Logo Text" height="50px" width="auto" />
        </div>
      </Navbar.Brand>
    </Navbar>
  );
};

export default MobileHeader;
