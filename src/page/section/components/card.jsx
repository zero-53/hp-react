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
  let color1 = "#000";
  switch (person.casaDeHogwarts) {
    case "Gryffindor":
      color1 = "#7f0909";
      break;
    case "Slytherin":
      color1 = "#0d6217";
      break;
    case "Hufflepuff":
      color1 = "#eee117";
      break;
    case "Ravenclaw":
      color1 = "#000a90";
      break;
    default:
      color1 = "#6c757d";
      break;
  }
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
          className="mb-2 text-center text-capitalize fw-bold"
          style={{
            color: color1,
          }}
        >
          {person.casaDeHogwarts}
        </Card.Subtitle>
      </Card.Body>
    </Card>
  );
}

export function CardBook({ book }) {
  if (!book) return null;
  return (
    <Card
      style={{
        backgroundColor: "transparent",
        border: "none",
      }}
    >
      <Link
        className="text-decoration-none text-warning "
        to={`/libros/${book.id}`}
      >
        <Card.Img variant="top" src={book.image_url} className="rounded-top" />
      </Link>
      <Card.Body>
        <Card.Title className="text-warning">
          <Link
            className="text-decoration-none text-warning "
            to={`/libros/${book.id}`}
          >
            {book.libro}
          </Link>
        </Card.Title>
        <Card.Subtitle className="text-muted fst-italic">
          <small>{book.titulo_original}</small>
        </Card.Subtitle>
        <Card.Footer className="fw-bold">
          {book.fecha_de_lanzamiento}
        </Card.Footer>
      </Card.Body>
    </Card>
  );
}
