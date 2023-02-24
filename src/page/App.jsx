import React from "react";
import { Container } from "react-bootstrap";
import { Hero } from "./section/Hero";
import { House } from "./section/House";
import { HomePersonajes } from "./section/HomePersonajes";

import "./css/App.css";
import { SuscriForm } from "./section/SuscriForm";
import { Footer } from "./section/footer";

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
      <Footer />
    </div>
  );
}

export default App;
