import React from "react";
import { useParams } from "react-router-dom";
import { Container } from "react-bootstrap";

export default function LibroDetail() {
  let id = useParams().id;
  console.log(id);
  return (
    <Container>
      <h1>Detalle de Libro id: {id}</h1>
    </Container>
  );
}
