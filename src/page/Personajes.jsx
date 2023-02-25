import { useState, useEffect } from "react";
import { Col, Container, Row, Spinner } from "react-bootstrap";
import { getAllPersons } from "../services/data";

import { CardPerson } from "./section/components/card";

const Personajes = () => {
  const [Person, setPerson] = useState([]);
  useEffect(() => {
    getAllPersons()
      .then(setPerson)
      .catch((err) => console.log(err));
  }, []);
  console.log(Person);

  return (
    <Container>
      <Row className="mt-4 text-center">
        <Col md={12}>
          <h1 className="text-warning">Lista de Personajes</h1>
        </Col>
      </Row>
      <Row className="mt-5 text-center">
      {Person.length == 0 ? (
          <>
            <Col md={12} className="text-center mx-2">
              <Spinner animation="border" variant="warning" />{" "}
              <h3>Cargando...</h3>
            </Col>
          </>
        ) : (
          Person.map((person, i) => (
            <Col md={4} className="my-2">
              <CardPerson key={i} person={person} />
            </Col>
          ))
        )}
      </Row>
    </Container>
  );
};

export default Personajes;
