import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "@splidejs/react-splide/css";
// import '@splidejs/react-splide/css/core';

import App from "./page/App";
import Header from "./page/section/Header";
import Personajes from "./page/Personajes";
import Hechizos from "./page/Hechizos";
import Posiones from "./page/Posiones";
import Libros from "./page/Libros";

import PageNotFound from "./page/Error404";
import PersonDetail from "./page/PersonDetail";
import PosionesDetail from "./page/PosionesDetail";
import LibroDetail from "./page/LibroDetail";
const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/hechizos" element={<Hechizos />} />
        {/* <Route path="/hechizos/:id" element={<Hechizos />} /> */}
        <Route path="/posiones" element={<Posiones />} />
        <Route path="/posiones/:id" element={<PosionesDetail />} />
        <Route path="/personajes" element={<Personajes />} />
        <Route path="/personajes/:id" element={<PersonDetail />} />
        <Route path="/libros" element={<Libros />} />
        <Route path="/libros/:id" element={<LibroDetail />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
