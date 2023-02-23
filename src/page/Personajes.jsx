import React from "react";
import { useParams } from "react-router-dom";
import { Container } from "react-bootstrap";

const Personajes = () => {
  let id = useParams().id;
  console.log(id);
  return (
    <Container>
      <h1>This is Personajes Page {id == undefined ? "All" : id}</h1>
    </Container>
  );
};

export default Personajes;
