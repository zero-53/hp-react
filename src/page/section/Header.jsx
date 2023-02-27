import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { ButtonPrymary as Button } from "./components/Buttons";
import { LinkContainer } from "react-router-bootstrap";
import "./css/Header.css";
import logo from "../../assets/spa.png";

/**
 * Devuelve un componente Navbar con un componente Navbar.Brand que contiene una imagen, un componente
 * Navbar.Toggle y un componente Navbar.Collapse que contiene un componente Nav con cuatro componentes
 * LinkContainer, cada uno de los cuales contiene un componente Nav.Link que contiene un componente
 * Button .
 * @returns Un componente Navbar con Navbar.Brand, Navbar.Toggle y Navbar.Collapse.
 */
const header = () => {
  return (
    <Navbar
      variant="dark"
      expand="lg"
      className="px-3 bg-navbar"
    >
      <LinkContainer to="/hp-react/">
        <Navbar.Brand>
          <img className="logo" src={logo} alt="logo" width={250} />
        </Navbar.Brand>
      </LinkContainer>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
        <Nav className="mr-auto">
          <LinkContainer to="/hp-react/hechizos">
            <Nav.Link>
              <Button text="Hechizos" />
            </Nav.Link>
          </LinkContainer>
          <LinkContainer to="/hp-react/personajes">
            <Nav.Link>
              <Button text="Personajes" />
            </Nav.Link>
          </LinkContainer>
          <LinkContainer to="/hp-react/libros">
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
