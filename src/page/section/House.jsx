import { useState, useEffect } from "react";
import { CardHouse } from "./components/card";
import { getAllHouses } from "../../services/data";
import "./css/House.css";

import { Row, Col, Spinner } from "react-bootstrap";
import { Cargando } from "./components/Cargando";

/* Una función que se está exportando. */
export function House() {
  const [houses, setHouses] = useState([]);
  useEffect(() => {
    getAllHouses()
      .then(setHouses)
      .catch((err) => console.log(err));
  }, []);
  return (
    <section className="house">
      <Row className="mb-5">
        <Col md={12} className="text-center">
          <h1 className="text-warning">Casas de Hogwarts</h1>
        </Col>
      </Row>
      <Row className="text-center">
        {houses.length == 0 ? (
          <Cargando />
        ) : (
          houses.map((house, i) => <CardHouse key={i} house={house} />)
        )}
      </Row>
    </section>
  );
}
