import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar'; // Componente de la barra de navegación
import Footer from './components/Footer'; // Componente del pie de página
import Home from './pages/Home';   // Página de inicio
import Galeria from './pages/Galeria'; // Página de la galería de imágenes
import About from './pages/About';  // Página "Acerca de"
import Contact from './pages/Contact'; // Página de contacto
import './App.css';  // Estilos globales

function App() {
  return (
    <Router>
      <div className="app-container">
        {/* Navbar */}
        <Navbar />
        {/* Definición de rutas para cada página */}
        <Routes>
          <Route path="/" element={<Home />} /> {/* Ruta para el componente Home */}
          <Route path="/gallery" element={<Galeria />} /> {/* Ruta para la galería */}
          <Route path="/about" element={<About />} /> {/* Ruta para la página Acerca de */}
          <Route path="/contact" element={<Contact />} /> {/* Ruta para la página de contacto */}
        </Routes>
        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
