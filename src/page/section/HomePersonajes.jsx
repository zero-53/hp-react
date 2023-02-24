import { useState, useEffect } from "react";
import { Row, Col, Spinner } from "react-bootstrap";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { getAllPersons } from "../../services/data";
import { CardPerson } from "./components/card";
import "./css/HomePersonajes.css";
export function HomePersonajes() {
  const [personaje, setpersonaje] = useState([]);
  const [num, setNum] = useState([]);
  useEffect(() => {
    getAllPersons()
      .then(setpersonaje)
      .catch((err) => console.log(err));
  }, []);
  useEffect(() => {
    setNum(getRandomInt(personaje.length));
  }, [personaje]);

  return (
    <section id="personaje">
      <Row className="mb-5">
        <Col md={12} className="text-center">
          <h1 className="text-warning">Personajes</h1>
        </Col>
      </Row>
      {/* {console.log(num)} */}
      {personaje.length == 0 ? (
        <>
          {console.log("cargando")}
          <Col md={12} className="text-center">
            <Spinner animation="border" variant="warning" />{" "}
            <h3>Cargando...</h3>
          </Col>
        </>
      ) : (
        <>
          <Row>
            <Splide
              options={{
                perPage: 3,
                type: "loop",
                breakpoints: {
                  575: {
                    perPage: 1,
                  },
                  992: {
                    perPage: 2,
                  },
                },
                perMove: 1,
                arrows: false,
                pagination: false,
                gap: "5%",
                autoplay: true,
                interval: 3000,
              }}
              tag="div"
              aria-label="Personajes Principales"
            >
              {num[0] != undefined ? (
                <>
                  <SplideSlide>
                    <CardPerson person={personaje[num[0]]} />
                  </SplideSlide>
                  <SplideSlide>
                    <CardPerson person={personaje[num[1]]} />
                  </SplideSlide>
                  <SplideSlide>
                    <CardPerson person={personaje[num[2]]} />
                  </SplideSlide>
                  <SplideSlide>
                    <CardPerson person={personaje[num[3]]} />
                  </SplideSlide>
                  <SplideSlide>
                    <CardPerson person={personaje[num[4]]} />
                  </SplideSlide>
                  <SplideSlide>
                    <CardPerson person={personaje[num[5]]} />
                  </SplideSlide>
                </>
              ) : (
                "error"
              )}
            </Splide>
          </Row>
        </>
      )}
    </section>
  );
}
function getRandomInt(max) {
  const n = max;
  const arr = new Array(n);
  for (let i = 0; i < n; i++) {
    arr[i] = i + 1;
  }

  arr.sort(() => (Math.random() > 0.5 ? 1 : -1));
  return arr.slice(0, 6);
}
