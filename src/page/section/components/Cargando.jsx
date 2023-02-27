import React from "react";
import { Col, Spinner } from "react-bootstrap";

/**
 * Cargando() es una función que devuelve un componente Col con un componente Spinner y un componente
 * h3 dentro.
 * @returns Un componente React.
 */
export function Cargando() {
  return (
    <>
      <Col md={12} className="text-center mx-2">
        <Spinner animation="border" variant="warning" /> <h3>Cargando...</h3>
      </Col>
    </>
  );
}
