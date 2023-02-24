import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { FaSave } from "react-icons/fa";
import "./css/SuscriForm.css";

export function SuscriForm() {
  return (
    <div id="SuscriForm">
      <Container>
        <Row>
          <Col md={6} className="pe-5">
            <h3 className="text-warning">Sigamos Conectados</h3>
            <p>
              Suscríbete a nuestro boletín para recibir las cartas de la escuela de magia y hechiceria
            </p>
          </Col>
          <Col md={6}>
            <form>
              <Row className="mb-2">
                <Col md={6}>
                  <label for="fname" className="form-label">
                    Nombre
                  </label>
                  <input
                    type="text"
                    name="fname"
                    id="fname"
                    className="form-control"
                  />
                </Col>
                <Col md={6}>
                  <label for="lname" className="form-label">
                    Apellido
                  </label>
                  <input
                    type="text"
                    name="lname"
                    id="lname"
                    className="form-control"
                  />
                </Col>
              </Row>
              <Row>
                <Col md={6}>
                  <label for="email" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="form-control"
                  />
                </Col>
                <Col md={6} style={{ marginTop: "2rem" }}>
                  <div className="d-grid gap-2">
                    <Button variant="warning"><FaSave /> Guardar</Button>
                  </div>
                </Col>
              </Row>
            </form>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
