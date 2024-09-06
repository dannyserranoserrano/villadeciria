import React from 'react';
import { Link } from 'react-router-dom'; // Si estás usando React Router para navegación
import '../styles/Navbar.css'; // Estilos para el navbar

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">Villa de Ciria</Link>
      </div>
      <ul className="navbar-links">
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/gallery">Galería</Link></li>
        <li><Link to="/about">Acerca</Link></li>
        <li><Link to="/contact">Contacto</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
