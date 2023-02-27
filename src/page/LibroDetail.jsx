import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Col, Container, Row, Spinner, Image } from "react-bootstrap";

import { FaReply } from "react-icons/fa";
import { getBookById } from "../services/data";
import { ButtonPrymary } from "./section/components/Buttons";
import { Cargando } from "./section/components/Cargando";

/* Una función que se está exportando. */
export default function LibroDetail() {
  let id = useParams().id;
  const [Book, setBook] = useState([]);
  useEffect(() => {
    getBookById(id)
      .then(setBook)
      .catch((err) => console.log(err));
  }, []);

  return (
    <Container style={{ marginBottom: "100px" }}>
      {Book.id === undefined ? (
        <Row className="mt-4 text-center">
          <Cargando />
        </Row>
      ) : (
        <>
          <Row className="my-4 text-center">
            <Col md={12}>
              <h1 className="text-warning">{Book.libro}</h1>
              <h5 className="text-muted">{Book.titulo_original}</h5>
            </Col>
          </Row>
          <Row className="mt-5 text-center">
            <Col md={6}>
              <Image
                src={Book.image_url}
                width="75%"
                style={{ maxWidth: "450px" }}
              />
            </Col>
            <Col md={6}>
              <Row>
                <Col>
                  <h1>Descripción</h1>
                  <p
                    className="mt-3 text-sangria"
                    style={{ textAlign: "justify" }}
                  >
                    {Book.descripcion}
                  </p>
                </Col>
              </Row>
              <Row className="mt-4">
                <Col className="text-start">
                  <h4>Autor:</h4>
                </Col>
                <Col>
                  <h4 className="text-warning">{Book.autora}</h4>
                </Col>
              </Row>
              <Row className="mt-4">
                <Col className="text-start">
                  <h4>Fecha de Lanzamiento:</h4>
                </Col>
                <Col>
                  <h4 className="text-warning">{Book.fecha_de_lanzamiento}</h4>
                </Col>
              </Row>
              <Row className="mt-4">
                <Col className="text-start">
                  <h4>Páginas:</h4>
                </Col>
                <Col>
                  <h4 className="text-warning">{Book.pages}</h4>
                </Col>
              </Row>
              <Row className="mt-4">
                <Col className="text-start">
                  <h4>Editorial:</h4>
                </Col>
                <Col>
                  <h4 className="text-warning">{Book.editorial}</h4>
                </Col>
              </Row>
              <Row className="mt-5">
                <Link to={"/hp-react/libros"}>
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
