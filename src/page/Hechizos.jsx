import React from "react";
import { useParams } from "react-router-dom";
import { Container } from "react-bootstrap";

const Hechizos = () => {
  let id = useParams().id;
  console.log(id);
  return (
    <Container>
      <h1 className="text-warning">
        This is Hechizos Page {id == undefined ? "All" : id}
      </h1>
    </Container>
  );
};

export default Hechizos;
