import { Button } from "react-bootstrap";

/**
 * Toma una propiedad de texto y devuelve un botón Bootstrap con la propiedad de texto como texto.
 * @returns Un botón con el texto "Hello World"
 */
export function ButtonPrymary({ text, icon = null }) {
  return (
    <Button variant="outline-warning">
      {icon} {text}
    </Button>
  );
}
