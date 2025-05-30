import { NavLink } from "react-router-dom";
import "../styles/Header.css";

export const Header = () => {
  return (
    <header className="header">
      <div>
        <h1>SPA con React Router</h1>
      </div>
      <nav className="header__nav">
        <NavLink
          className={({ isActive }) => (isActive ? "active-link" : undefined)}
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "active-link" : undefined)}
          to="/acerca"
        >
          Acerca
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "active-link" : undefined)}
          to="/contacto"
        >
          Contacto
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "active-link" : undefined)}
          to="/servicios"
        >
          Servicios
        </NavLink>
      </nav>
    </header>
  );
};
