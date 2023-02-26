import { useState, useEffect } from "react";
import { Col, Container, Row, Spinner } from "react-bootstrap";
import { getAllPersons } from "../services/data";

import { CardPerson } from "./section/components/card";
import { Cargando } from "./section/components/Cargando";

/* Una función que devuelve un componente. */
const Personajes = () => {
  const [Person, setPerson] = useState([]);
  useEffect(() => {
    getAllPersons()
      .then(setPerson)
      .catch((err) => console.log(err));
  }, []);

  return (
    <Container style={{ marginBottom: "100px" }}>
      <Row className="mt-4 text-center">
        <Col md={12}>
          <h1 className="text-warning">Lista de Personajes</h1>
        </Col>
      </Row>
      <Row className="mt-5 text-center">
        {Person.length == 0 ? (
          <Cargando />
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
