import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { ButtonPrymary as Button } from "./components/Buttons";
import { LinkContainer } from "react-router-bootstrap";
import "./css/Header.css";
import logo from "../../assets/spa.png";

const header = () => {
  return (
    <Navbar
      variant="dark"
      expand="lg"
      className="px-3 bg-navbar"
    >
      <LinkContainer to="/">
        <Navbar.Brand>
          <img className="logo" src={logo} alt="logo" width={250} />
        </Navbar.Brand>
      </LinkContainer>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
        <Nav className="mr-auto">
          <LinkContainer to="/hechizos">
            <Nav.Link>
              <Button text="Hechizos" />
            </Nav.Link>
          </LinkContainer>
          <LinkContainer to="/posiones">
            <Nav.Link>
              <Button text="Posiones" />
            </Nav.Link>
          </LinkContainer>
          <LinkContainer to="/personajes">
            <Nav.Link>
              <Button text="Personajes" />
            </Nav.Link>
          </LinkContainer>
          <LinkContainer to="/libros">
            <Nav.Link>
              <Button text="Libros" />
            </Nav.Link>
          </LinkContainer>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default header;
