import React from "react";
import {
  Nav,
  Navbar,
  Form,
  FormControl,
  Button,
  OverlayTrigger,
  Tooltip,
  Image,
} from "react-bootstrap";
import logo from "../../images/Waterdrop.png";
import textLogo from "../../images/Dripdrop.png";
import { BiSearchAlt2, BiCurrentLocation } from "react-icons/bi";
import MobileHeader from "./MobileHeader";

const Header = ({
  searchHandler,
  fahrenheitToggler,
  getInput,
  getCoordinates,
}) => {
  return (
    <>
      <MobileHeader logo={logo} textLogo={textLogo} />
      <Navbar className="Navbar shadow" bg="myColor" variant="dark" expand="lg">
        {/* Header Title and Logo */}
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
              placeholder="Search Locations..."
              className="me-1"
              ref={getInput}
            />

            {/* Search Button */}
            <OverlayTrigger
              key="search"
              placement="right"
              overlay={<Tooltip id={`Search Tooltip`}>Search</Tooltip>}
            >
              <Button
                variant="light"
                className="me-1"
                size="sm"
                type="submit"
                onClick={searchHandler}
                aria-label="search"
              >
                <BiSearchAlt2 size={16} />
              </Button>
            </OverlayTrigger>

            {/* Location Button */}
            <OverlayTrigger
              key="location"
              placement="right"
              overlay={
                <Tooltip id={`Search Tooltip`}>Use your location</Tooltip>
              }
            >
              <Button
                size="sm"
                variant="light"
                onClick={getCoordinates}
                aria-label="Use your location"
              >
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
              placeholder="Fahrenheit Toggler"
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
