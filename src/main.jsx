import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";

import App from "./page/App";
import Header from "./page/section/Header";
import Personajes from "./page/Personajes";
import Hechizos from "./page/Hechizos";
import Posiones from "./page/Posiones";
import Libros from "./page/Libros";

import PageNotFound from "./page/Error404";
const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/hechizos" element={<Hechizos />} />
        <Route path="/hechizos/:id" element={<Hechizos />} />
        <Route path="/posiones" element={<Posiones />} />
        <Route path="/posiones/:id" element={<Posiones />} />
        <Route path="/personajes" element={<Personajes />} />
        <Route path="/personajes/:id" element={<Personajes />} />
        <Route path="/libros" element={<Libros />} />
        <Route path="/libros/:id" element={<Libros />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
