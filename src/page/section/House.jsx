import { useState, useEffect } from "react";
import { CardHouse } from "./components/card";
import { getAllHouses } from "../../services/data";
import "./css/House.css";

import { Row, Col, Spinner } from "react-bootstrap";

export function House() {
  const [houses, setHouses] = useState([]);
  useEffect(() => {
    getAllHouses()
      .then(setHouses)
      .catch((err) => console.log(err));
  }, []);
  return (
    <section className="house">
      <Row className="mb-3">
        <Col md={12} className="text-center">
          <h1 className="text-warning">Casas</h1>
        </Col>
      </Row>
      <Row className="text-center">
        {houses.length == 0 ? (
          <>
            <Col md={12} className="text-center">
              <Spinner animation="border" variant="warning" /> <h3>Cargando...</h3>
            </Col>
          </>
        ) : (
          houses.map((house, i) => <CardHouse key={i} house={house} />)
        )}
      </Row>
    </section>
  );
}
