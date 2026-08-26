import { useState, useEffect } from 'react';
import { facilitiesData } from '@constants/facilities';

export function Facilities() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerView = 2;
  const maxIndex = facilitiesData.length - itemsPerView;

  // Auto-play carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 5000); // Change every 5 seconds

    return () => clearInterval(interval);
  }, [maxIndex]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const visibleItems = facilitiesData.slice(currentIndex, currentIndex + itemsPerView);

  return (
    <section className="disco" id="aparatos">
      <div className="container">
        {/* Title */}
        <div className="global" style={{ marginBottom: '3rem', textAlign: 'left' }}>
          <h2 className="h2-sub">
            <span className="fil">Instalaciones</span>
          </h2>
        </div>

        {/* Content: Text and Carousel */}
        <div className="facilities-section">
          {/* Text Content */}
          <div className="facilities-text">
            {visibleItems.map((facility) => (
              <div key={facility.id} className="facility-item">
                <p className="knowledge__paragraph">
                  <strong>{facility.title}</strong>
                  <br />
                  {facility.description}
                </p>
              </div>
            ))}
          </div>

          {/* Carousel images with controls */}
          <div className="carousel-wrapper">
            <button className="carousel-arrow carousel-arrow--left" onClick={handlePrev} aria-label="Previous">
              <i className="fas fa-chevron-left"></i>
            </button>

            <div className="carousel-images">
              {visibleItems.map((facility) => (
                <div key={facility.id} className="carousel-image-wrapper">
                  <img src={facility.image} alt={facility.title} />
                </div>
              ))}
            </div>

            <button className="carousel-arrow carousel-arrow--right" onClick={handleNext} aria-label="Next">
              <i className="fas fa-chevron-right"></i>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
