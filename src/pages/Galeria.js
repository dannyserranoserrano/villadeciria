import React from 'react';
import '../styles/Gallery.css'; // Estilos específicos para la galería
import ImageGallery from '../components/ImageGallery'; // Componente de galería de imágenes
import VideoGallery from '../components/VideoGallery'; // Componente de galería de videos

const Galeria = () => {
  return (
    <div className="gallery-container">
      {/* Título de la galería */}
      <h1>Galería de Imágenes y Videos</h1>
      <p>Explora la belleza de [Nombre del Pueblo] a través de nuestra galería.</p>

      {/* Galería de imágenes */}
      <section className="image-gallery-section">
        <h2>Imágenes del Pueblo</h2>
        <ImageGallery /> {/* Componente para mostrar la galería de imágenes */}
      </section>

      {/* Galería de videos */}
      <section className="video-gallery-section">
        <h2>Videos del Pueblo</h2>
        <VideoGallery /> {/* Componente para mostrar la galería de videos */}
      </section>
    </div>
  );
};

export default Galeria;
