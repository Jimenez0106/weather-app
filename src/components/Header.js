import React from "react";
import { Nav, Navbar, Form, FormControl, Button } from "react-bootstrap";
import logo from "../images/Waterdrop.png";
import { BiSearchAlt2, BiCurrentLocation } from "react-icons/bi";

const Header = ({
  searchHandler,
  fahrenheitToggler,
  getInput,
  getCoordinates,
}) => {
  return (
    <Navbar bg="myColor" variant="dark" expand="sm">
      {/* Header Title and Logo */}
      <Navbar.Brand>
        <div className="AppLogo">
          <img
            className="d-none d-sm-block"
            src={logo}
            alt="logo"
            width="60px"
            height="60px"
          />
          <title className="AppTitle d-none d-sm-block">Weather App</title>
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
            type="text"
            placeholder="Find your city..."
            className="me-1"
            ref={getInput}
          />
          {/* Search Button */}
          <Button
            className="me-1"
            variant="outline-info"
            size="sm"
            type="submit"
            onClick={searchHandler}
          >
            <BiSearchAlt2 size={16} />
          </Button>
          {/* Location Button */}
          <Button size="sm" variant="outline-info" onClick={getCoordinates}>
            <BiCurrentLocation size={16} />
          </Button>
        </Form>
      </Nav>
      {/* Fahrenheit Toggle Button */}
      <Button
        className="ToggleHeaderFCButton me-4  d-none d-lg-flex"
        variant="outline-info"
        onClick={fahrenheitToggler}
      >
        F/C
      </Button>
    </Navbar>
  );
};

export default Header;
