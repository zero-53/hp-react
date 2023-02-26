import { Container } from "react-bootstrap";
import "./css/Error404.css";

/**
 * Esta función devuelve un componente contenedor que contiene un div con el nombre de clase 'página de
 * error' que contiene un div con el nombre de clase 'contenido de página de error' que contiene una p
 * con el nombre de clase 'fst-italic' que contiene una b con el nombre de clase ' text-warning' que
 * contiene el texto 'Error 404', y una i con el className 'text-muted' que contiene el texto 'Esta
 * pagina no se encuentra.'
 * @returns Una función que devuelve un elemento JSX.
 */
export default function error404() {
  return (
    <Container style={{marginBottom:'100px'}}>
      <div  className="error-page">
        <div className="error-page-content">
          <p className="fst-italic"><b className="text-warning">Error 404,</b><i className="text-muted"> Esta pagina no se encuentra.</i></p>
        </div>
      </div>
    </Container>
  );
}
