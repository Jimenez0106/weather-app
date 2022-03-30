import React from "react";
import {
  Nav,
  Navbar,
  Form,
  FormControl,
  Button,
  OverlayTrigger,
  Tooltip,
} from "react-bootstrap";
import logo from "../images/Waterdrop.png";
import textLogo from "../images/Dripdrop.png";
import { BiSearchAlt2, BiCurrentLocation } from "react-icons/bi";

const Header = ({
  searchHandler,
  fahrenheitToggler,
  getInput,
  getCoordinates,
  isFahrenheit,
}) => {
  return (
    <>
      <Navbar
        className="justify-content-center d-md-none"
        bg="myColor"
        variant="dark"
        style={{ height: "50px" }}
      >
        <Navbar.Brand>
          <div className="AppLogo">
            <img src={logo} alt="Logo" width="50px" height="50px" />
            <img src={textLogo} alt="Logo Text" width="100%" height="50px" />
          </div>
        </Navbar.Brand>
      </Navbar>
      <Navbar className="Navbar shadow" bg="myColor" variant="dark" expand="lg">
        {/* Header Title and Logo */}
        <Navbar.Brand>
          <div className="AppLogo">
            <img
              className="d-none d-md-block"
              src={logo}
              alt="Logo"
              width="50px"
              height="50px"
            />
            <img
              className="d-none d-md-block mb-2"
              src={textLogo}
              alt="Logo Text"
              width="100%"
              height="50px"
            />
          </div>
        </Navbar.Brand>
        {/* Input Field, Search Button, Location Button */}
        <Nav className="m-auto">
          <Form
            className="d-flex"
            onSubmit={(e) => {
              if (e.key === "Enter") return searchHandler;
              e.preventDefault();
            }}
          >
            {/* Input Field */}
            <FormControl
              size="md"
              type="text"
              placeholder="Find your city..."
              className="me-1"
              ref={getInput}
            />
            {/* Search Button */}
            <OverlayTrigger
              key="bottom"
              placement="bottom"
              overlay={<Tooltip id={`Search Tooltip`}>Search</Tooltip>}
            >
              <Button
                variant="light"
                className="me-1"
                size="sm"
                type="submit"
                onClick={searchHandler}
              >
                <BiSearchAlt2 size={16} />
              </Button>
            </OverlayTrigger>

            {/* Location Button */}
            <OverlayTrigger
              key="bottom"
              placement="bottom"
              overlay={
                <Tooltip id={`Search Tooltip`}>Use your location</Tooltip>
              }
            >
              <Button size="sm" variant="light" onClick={getCoordinates}>
                <BiCurrentLocation size={16} />
              </Button>
            </OverlayTrigger>
          </Form>
        </Nav>
        {/* Fahrenheit Toggle */}
        <Form style={{ marginRight: "20px" }}>
          <div className="Row">
            <p className="FCToggleText">F°</p>
            <Form.Check
              className="FCToggle"
              size="lg"
              type="switch"
              onClick={fahrenheitToggler}
            />
            <p className="FCToggleText">C°</p>
          </div>
        </Form>
      </Navbar>
    </>
  );
};

export default Header;
