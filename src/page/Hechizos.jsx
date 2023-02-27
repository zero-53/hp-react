import { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";

import { gelAllSpell } from "../services/data";

import DataTable, { createTheme } from "react-data-table-component";
import { Cargando } from "./section/components/Cargando";

const paginationComponentOptions = {
  rowsPerPageText: "Hechizos por página",
  rangeSeparatorText: "de",
  selectAllRowsItem: true,
  selectAllRowsItemText: "Todos",
};


/* Una función que devuelve un componente. */
const Hechizos = () => {
  createTheme(
    "Morsmordre",
    {
      text: {
        primary: "var(--bs-warning)",
        secondary: "#6c757d",
      },
      background: {
        default: "rgba(0, 0, 0, 0.2)",
      },
      context: {
        background: "#cb4b16",
        text: "var(--bs-warning)",
      },
      divider: {
        default: "rgba(255, 255, 255, 0.2)",
      },
      action: {
        button: "rgba(255,193,7,.54)",
        hover: "rgba(255,193,7,.08)",
        disabled: "rgba(255,193,7,.12)",
      },
    },
    "dark"
  );
  const [Spell, setSpell] = useState([]);
  useEffect(() => {
    gelAllSpell()
      .then(setSpell)
      .catch((err) => console.log(err));
  }, []);

  const columns = [
    {
      name: "Nombre",
      selector: (row) => row.hechizo,
      width: "30%",
      center: true,
    },
    {
      name: "Descripción",
      selector: (row) => row.uso,
      with: "70%",
    },
  ];
  return (
    <Container>
      <Row className="mt-4 text-center">
        <Col md={12}>
          <h1 className="text-warning">Lista de Hechizos</h1>
        </Col>
      </Row>
      <Row className="mt-4" style={{ marginBottom: "100px" }}>
        {Spell.length == 0 ? (
          <Cargando />
        ) : (
          <DataTable
            theme="Morsmordre"
            highlightOnHover={true}
            columns={columns}
            data={Spell}
            pagination={true}
            paginationComponentOptions={paginationComponentOptions}
            responsive={true}
            defaultSortFieldId={1}
          />
        )}
      </Row>
    </Container>
  );
};

export default Hechizos;
