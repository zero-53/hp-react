import "./css/Hero.css";
import Herologo from "../../assets/herologo.png"

import { Container, Image } from "react-bootstrap";

/**
 * Devuelve un div con un className de Hero, que contiene un Container, que contiene un div con un
 * className de Hero-header, que contiene una Image con un src de Herologo, un alt de Logo Aniversario
 * y un ancho de 34%.
 * @returns Una función que devuelve un div con un contenedor y una imagen.
 */
export function Hero() {
  return (
    <div className="Hero">
      <Container>
        <div className="Hero-header ">
          <Image src={Herologo} alt="Logo Aniversario" width='34%' />
        </div>
      </Container>
    </div>
  );
}
