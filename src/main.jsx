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
import Libros from "./page/Libros";

import PageNotFound from "./page/Error404";
import PersonDetail from "./page/PersonDetail";
import LibroDetail from "./page/LibroDetail";
import { Footer } from "./page/section/Footer";
const container = document.getElementById("root");
const root = createRoot(container);

/* Representación de la aplicación React. */
root.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path="/hp-react/" element={<App />} />
        <Route path="/hp-react/hechizos" element={<Hechizos />} />
        <Route path="/hp-react/personajes" element={<Personajes />} />
        <Route path="/hp-react/personajes/:id" element={<PersonDetail />} />
        <Route path="/hp-react/libros" element={<Libros />} />
        <Route path="/hp-react/libros/:id" element={<LibroDetail />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Router>
    <Footer />
  </React.StrictMode>
);
