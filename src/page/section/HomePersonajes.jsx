import { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { getAllPersons } from "../../services/data";
import { CardPerson } from "./components/card";
import "./css/HomePersonajes.css";
import { Cargando } from "./components/Cargando";

/* El código anterior es un componente de React que obtiene datos de una API y los muestra en un
carrusel. */
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
    <section style={{ marginBottom: "100px" }} id="personaje">
      <Row className="mb-5">
        <Col md={12} className="text-center">
          <h1 className="text-warning">Personajes</h1>
        </Col>
      </Row>
      {/* {console.log(num)} */}
      {personaje.length == 0 ? (
        <Cargando />
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

/**
 * Cree una matriz de números del 1 al n, barájela y devuelva los primeros 6 elementos.
 * @returns Una matriz de 6 números aleatorios entre 1 y n.
 */
function getRandomInt(max) {
  const n = max;
  const arr = new Array(n);
  for (let i = 0; i < n; i++) {
    arr[i] = i + 1;
  }
  arr.sort(() => (Math.random() > 0.5 ? 1 : -1));
  return arr.slice(0, 6);
}
