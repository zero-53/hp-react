import React from "react";
import { Link } from "react-router-dom";
import { Col, Card } from "react-bootstrap";

export function CardHouse({ house }) {
  if (!house) return null;

  return (
    <Col md={3} className="mb-3">
      <Card 
        style={{
          backgroundColor: "transparent",
          border: "none",
          alignItems: "center",
        }}
      >
        <Card.Img src={house.image_url} style={{ width: "80%" }} />
        <Card.Body>
          <Card.Title className="text-center">{house.name}</Card.Title>
          <Card.Subtitle className="text-muted">
            Miembros: <span className="text-warning">{house.members}</span>
          </Card.Subtitle>
        </Card.Body>
      </Card>
    </Col>
  );
}

export function CardPerson({ person }) {
  if (!person) return null;

  return (
    <Card 
      style={{
        backgroundColor: "transparent",
        border: "none",
        alignItems: "center",
      }}
    >
      <Card.Img
        variant="top"
        src={person.imagen}
        style={{ width: "300px", height: "400px" }}
      />
      <Card.Body>
        <Card.Title className="text-center text-capitalize">
          <Link
            className="text-decoration-none text-warning "
            to={`/personajes/${person.id}`}
          >
            {person.personaje}
          </Link>
        </Card.Title>
        <Card.Subtitle
          className={`mb-2 ${
            person.estudianteDeHogwarts ? "text-success" : "text-muted"
          } text-center text-capitalize`}
        >
          {person.casaDeHogwarts}
        </Card.Subtitle>
      </Card.Body>
    </Card>
  );
}
