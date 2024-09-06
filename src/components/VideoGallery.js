import React from 'react';
import '../styles/VideoGallery.css'; // Estilos específicos para la galería de videos

const videos = [
  { id: 1, src: '/videos/pueblo1.mp4', title: 'Video del pueblo 1' },
  { id: 2, src: '/videos/pueblo2.mp4', title: 'Video del pueblo 2' },
  { id: 3, src: '/videos/pueblo3.mp4', title: 'Video del pueblo 3' },
  // Añade más videos aquí
];

const VideoGallery = () => {
  return (
    <div className="video-gallery">
      {videos.map((video) => (
        <div key={video.id} className="video-item">
          <video controls>
            <source src={video.src} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <p>{video.title}</p>
        </div>
      ))}
    </div>
  );
};

export default VideoGallery;
