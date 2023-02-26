import React from "react";
import { Col, Row, Spinner } from "react-bootstrap";

export function Cargando() {
  return (
    <>
      <Col md={12} className="text-center mx-2">
        <Spinner animation="border" variant="warning" /> <h3>Cargando...</h3>
      </Col>
    </>
  );
}
