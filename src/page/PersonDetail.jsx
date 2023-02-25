import React from "react";
import { useParams } from "react-router-dom";
import { Container } from "react-bootstrap";

export default function PersonDetail() {
  let id = useParams().id;
  console.log(id);
  return (
    <Container>
      <h1>Detalle de personajes id: {id}</h1>
    </Container>
  );
}
