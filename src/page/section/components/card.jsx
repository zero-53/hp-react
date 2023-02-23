import React from "react";
import { Col, Card } from "react-bootstrap";

export function CardHouse({ house }) {
  return (
    <Col md={3} className='mb-3'>
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
