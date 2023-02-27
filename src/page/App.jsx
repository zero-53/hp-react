import React from "react";
import { Container } from "react-bootstrap";
import { Hero } from "./section/Hero";
import { House } from "./section/House";
import { HomePersonajes } from "./section/HomePersonajes";

import "./css/App.css";
import { SuscriForm } from "./section/SuscriForm";

/**
 * La función App devuelve un div con el id de cuerpa, que contiene los componentes Hero, Container,
 * SuscriForm, HomePersonajes y Footer
 * @returns el div con el id de cuerpa.
 */
function App() {
  return (
    <div id="cuerpa">
      <Hero />
      <Container>
        <House />
      </Container>
      <SuscriForm />
      <Container>
        <HomePersonajes />
      </Container>
    </div>
  );
}

export default App;
