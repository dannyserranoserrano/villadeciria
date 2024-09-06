import React from 'react';
import '../styles/Footer.css'; // Estilos para el footer

const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} [Nombre del Pueblo]. Todos los derechos reservados.</p>
      <div className="footer-links">
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
        <a href="mailto:contacto@pueblo.com">Contacto</a>
      </div>
    </footer>
  );
};

export default Footer;