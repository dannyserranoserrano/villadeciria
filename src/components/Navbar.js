import React from 'react';
import { Link } from 'react-router-dom'; // Si estás usando React Router para navegación
import '../styles/Navbar.css'; // Estilos para el navbar

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="header">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-sm-3 col logo_section">
              <div className="full">
                <div className="center-desk">
                  <div className="logo">
                    <div className="navbar-logo">
                      <Link to="/">Villa de Ciria</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-10 offset-md-1">
              <nav className="navigation navbar navbar-expand-md navbar-dark ">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample04" aria-controls="navbarsExample04" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarsExample04">
                  <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                      <li><Link to="/">Inicio</Link></li>
                    </li>
                    <li className="nav-item">
                      <li><Link to="/gallery">Galería</Link></li>
                    </li>
                    <li className="nav-item">
                      <li><Link to="/about">Acerca</Link></li>
                    </li>
                    <li className="nav-item">
                      <li><Link to="/contact">Contacto</Link></li>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
