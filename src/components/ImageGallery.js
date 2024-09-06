import React from 'react';
import '../styles/ImageGallery.css'; // Estilos específicos para la galería de imágenes

const images = [
  { id: 1, src: '/images/pueblo1.jpg', alt: 'Imagen del pueblo 1' },
  { id: 2, src: '/images/pueblo2.jpg', alt: 'Imagen del pueblo 2' },
  { id: 3, src: '/images/pueblo3.jpg', alt: 'Imagen del pueblo 3' },
  // Añade más imágenes aquí
];

const ImageGallery = () => {
  return (
    <div className="image-gallery">
      {images.map((image) => (
        <div key={image.id} className="image-item">
          <img src={image.src} alt={image.alt} />
        </div>
      ))}
    </div>
  );
};

export default ImageGallery;
