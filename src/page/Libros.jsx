import { useState, useEffect } from "react";
import { Col, Container, Row, Spinner } from "react-bootstrap";
import { getAllBooks } from "../services/data";

import { CardBook } from "./section/components/card";

export default function Libros() {
  const [Books, setBooks] = useState([]);
  useEffect(() => {
    getAllBooks()
      .then(setBooks)
      .catch((err) => console.log(err));
  }, []);
  return (
    <Container>
      <Row className="mt-4 text-center">
        <Col md={12}>
          <h1 className="text-warning">Lista de Libros</h1>
        </Col>
      </Row>
      <Row className="mt-5 text-center">
        {Books.length == 0 ? (
          <>
            <Col md={12} className="text-center">
              <Spinner animation="border" variant="warning" />{" "}
              <h3>Cargando...</h3>
            </Col>
          </>
        ) : (
          Books.map((book, i) => (
            <Col md={3} className="my-2">
              <CardBook key={i} book={book} />
            </Col>
          ))
        )}
      </Row>
    </Container>
  );
}
