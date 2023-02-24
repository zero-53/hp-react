import "./css/Hero.css";
import Herologo from "../../assets/herologo.png"

import { Container, Image } from "react-bootstrap";

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
