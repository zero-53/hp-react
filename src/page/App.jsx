import React from "react";
import { Container } from "react-bootstrap";
import { Hero } from "./section/Hero";
import { House } from "./section/House";

import "./css/App.css";

function App() {
  return (
    <>
      <Hero />
      <Container>
        <House />
      </Container>
    </>
  );
}

export default App;
