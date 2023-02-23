import React from "react";
import { useParams } from "react-router-dom";
import { Container } from "react-bootstrap";

export default function Posiones() {
  let id = useParams().id;
  console.log(id);
  return (
    <Container>
      <h1>Posiones {id == undefined ? "All" : id}</h1>
    </Container>
  );
}
