import { Routes, Route } from "react-router-dom";
import "../styles/Content.css";
import { Home } from "../pages/Home";
import { Acerca } from "../pages/Acerca";
import { Contacto } from "../pages/Contacto";
import { Servicios } from "../pages/Servicios";

export const Content = () => {
  return (
    <div className="content" id="content">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/acerca" element={<Acerca />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/servicios" element={<Servicios />} />
      </Routes>
    </div>
  );
};
