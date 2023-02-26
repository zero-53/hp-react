import React from "react";
import { FaReact } from "react-icons/fa";
import "./css/Footer.css";

/**
 * Devuelve un elemento de sección con un id de pie de página, que contiene un elemento div con una
 * clase de centro de texto, que contiene un ícono DiMitlicence y el texto 2023 | Sin Comercial.
 * @returns Un elemento Reaccionar.
 */
export function Footer() {
  return (
    <section className="fixed-bottom" id="footer">
      <div className="text-center">
        <FaReact /> {2023} | No Comercial
      </div>
    </section>
  );
}
