import React from 'react';
import '../styles/Index.css'; // Estilos específicos para la página Home
import Navbar from '../components/Navbar'; // Componente de la barra de navegación
import Footer from '../components/Footer'; // Componente del pie de página
import ImageGallery from '../components/ImageGallery'; // Componente para la galería de imágenes
import VideoGallery from '../components/VideoGallery'; // Componente para la galería de videos

const Index = () => {
  return (
    <div className="home-container">
      {/* Navbar */}
      <Navbar />

      {/* Sección de bienvenida */}
      <header className="home-header">
        <h1>Bienvenidos a [Nombre del Pueblo]</h1>
        <p>Explora la belleza de nuestro pueblo a través de imágenes y videos.</p>
      </header>

      {/* Galería de imágenes */}
      <section className="image-gallery-section">
        <h2>Galería de Imágenes</h2>
        <ImageGallery /> {/* Componente que muestra la galería de imágenes */}
      </section>

      {/* Galería de videos */}
      <section className="video-gallery-section">
        <h2>Galería de Videos</h2>
        <VideoGallery /> {/* Componente que muestra la galería de videos */}
      </section>

      {/* Sección informativa */}
      <section className="info-section">
        <h2>Acerca de Nuestro Pueblo</h2>
        <p>
          Nuestro pueblo es un lugar lleno de historia, cultura y naturaleza. 
          Con paisajes hermosos y una comunidad acogedora, te invitamos a conocer más sobre nosotros.
        </p>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
