import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Col, Container, Row, Spinner, Image } from "react-bootstrap";

import { FaReply } from "react-icons/fa";
import { getPersonById } from "../services/data";
import { ButtonPrymary } from "./section/components/Buttons";
import { Cargando } from "./section/components/Cargando";
export default function PersonDetail() {
  let id = useParams().id;
  let color1 = "#000";
  const [Person, setPerson] = useState([]);
  useEffect(() => {
    getPersonById(id)
      .then(setPerson)
      .catch((err) => console.log(err));
  }, []);
  switch (Person.casaDeHogwarts) {
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
  console.log(Person);
  return (
    <Container style={{ marginBottom: "100px" }}>
      {Person.id === undefined ? (
        <Row className="mt-4 text-center">
          <Cargando />
        </Row>
      ) : (
        <>
          <Row className="my-4 text-center">
            <Col md={12}>
              <h1 className="text-warning">{Person.personaje}</h1>
              <h5 className="text-muted">{Person.interpretado_por}</h5>
            </Col>
          </Row>
          <Row className="mt-5 text-center">
            <Col md={6}>
              <Image
                src={Person.imagen}
                width="75%"
                style={{ maxWidth: "450px" }}
                className="rounded-4"
              />
            </Col>
            <Col md={6}>
              <Row className="mt-4 text-start">
                <Col md={4}>
                  <h4>Apodo:</h4>
                </Col>
                <Col md={8}>
                  <h4 className="text-warning">{Person.apodo}</h4>
                </Col>
              </Row>
              <Row className="mt-4 text-start">
                <Col md={4}>
                  <h4>Hogwarts:</h4>
                </Col>
                <Col md={8}>
                  <h4
                    className="text-capitalize"
                    style={{
                      color: color1,
                    }}
                  >
                    {Person.casaDeHogwarts}
                  </h4>
                </Col>
              </Row>
              {Person.hijos.length > 0 ? (
                <Row className="mt-4 text-start">
                  <Col md={4}>
                    <h4>Hijos:</h4>
                  </Col>
                  <Col md={8}>
                    <ul className="list-group list-group-flush h4">
                      {Person.hijos.map((hijo, i) => (
                        <li
                          key={i}
                          className="list-group-item"
                          style={{
                            backgroundColor: "transparent",
                            color: "#bbb",
                          }}
                        >
                          {hijo}
                        </li>
                      ))}
                    </ul>
                  </Col>
                </Row>
              ) : null}
              <Row className="mt-5">
                <Link to={"/personajes"}>
                  <ButtonPrymary text={"Volver"} icon={<FaReply />} />
                </Link>
              </Row>
            </Col>
          </Row>
        </>
      )}
    </Container>
  );
}
