import React from "react";
import { useParams, Link } from "react-router-dom";
import { Container } from "react-bootstrap";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { Card } from "react-bootstrap";

const Hechizos = () => {
  let id = useParams().id;
  console.log(id);
  return (
    <Container>
      <h1 className="text-warning">
        This is Hechizos Page {id == undefined ? "All" : id}
      </h1>
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
          // autoplay: true,
          // interval: 3000,
        }}
        tag="div"
        aria-label="My Favorite Images"
      >
        <SplideSlide>
          <Card
            style={{
              backgroundColor: "transparent",
              border: "none",
              alignItems: "center",
            }}
          >
            <Card.Img
              variant="top"
              src="https://raw.githubusercontent.com/fedeperin/harry-potter-api/main/imagenes/harry_potter.png"
              style={{ width: "300px", height: "400px" }}
            />
            <Card.Body>
              <Card.Title className="text-center text-capitalize">
                <Link className="text-decoration-none text-warning " to={`/personajes/${1}`}>Harry James Potter</Link>
              </Card.Title>
              <Card.Subtitle
                className={`mb-2 ${
                  true ? "text-success" : "text-muted"
                } text-center text-capitalize`}
              >
                Gryffindor
              </Card.Subtitle>
            </Card.Body>
          </Card>
        </SplideSlide>
        <SplideSlide>
          <Card
            style={{
              backgroundColor: "transparent",
              border: "none",
              alignItems: "center",
            }}
          >
            <Card.Img
              variant="top"
              src="https://raw.githubusercontent.com/fedeperin/harry-potter-api/main/imagenes/hermione_granger.png"
              style={{ width: "300px", height: "400px" }}
            />
            <Card.Body>
              <Card.Title className="text-center text-capitalize">
              <Link className="text-decoration-none text-warning " to={`/personajes/${2}`}>Hermione Jean Grange</Link>
              </Card.Title>
              <Card.Subtitle
                className={`mb-2 ${
                  true ? "text-success" : "text-muted"
                } text-center text-capitalize`}
              >
                Gryffindor
              </Card.Subtitle>
            </Card.Body>
          </Card>
        </SplideSlide>
        <SplideSlide>
          <Card
            style={{
              backgroundColor: "transparent",
              border: "none",
              alignItems: "center",
            }}
          >
            <Card.Img
              variant="top"
              src="https://raw.githubusercontent.com/fedeperin/harry-potter-api/main/imagenes/argus_filch.png"
              style={{ width: "300px", height: "400px" }}
            />
            <Card.Body>
              <Card.Title className="text-center text-capitalize">
              <Link className="text-decoration-none text-warning " to={`/personajes/${1}`}>Argus Filch</Link>
              </Card.Title>
              <Card.Subtitle
                className={`mb-2 ${
                  false ? "text-success" : "text-muted"
                } text-center text-capitalize`}
              >
                ninguna
              </Card.Subtitle>
            </Card.Body>
          </Card>
        </SplideSlide>
      </Splide>
    </Container>
  );
};

export default Hechizos;
