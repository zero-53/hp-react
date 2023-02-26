import { useState, useEffect } from "react";
import { Col, Container, Row, Spinner } from "react-bootstrap";
import { getAllBooks } from "../services/data";

import { CardBook } from "./section/components/card";
import { Cargando } from "./section/components/Cargando";

/* Una función que devuelve un componente. */
export default function Libros() {
  const [Books, setBooks] = useState([]);
  useEffect(() => {
    getAllBooks()
      .then(setBooks)
      .catch((err) => console.log(err));
  }, []);
  return (
    <Container style={{marginBottom:'100px'}}>
      <Row className="mt-4 text-center">
        <Col md={12}>
          <h1 className="text-warning">Lista de Libros</h1>
        </Col>
      </Row>
      <Row className="mt-5 text-center">
        {Books.length == 0 ? (
          <Cargando />
        ) : (
          Books.map((book, i) => (
            <Col key={i} md={3} className="my-2">
              <CardBook book={book} />
            </Col>
          ))
        )}
      </Row>
    </Container>
  );
}
