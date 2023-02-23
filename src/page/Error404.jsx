import "./css/Error404.css";

import { Container } from "react-bootstrap";
export default function error404() {
  return (
    <Container>
      <div className="error-page">
        <div className="error-page-content">
          <p className="fst-italic"><b className="text-warning">Error 404,</b><i className="text-muted"> Esta pagina no se encuentra.</i></p>
        </div>
      </div>
    </Container>
  );
}
