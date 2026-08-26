import { useState, useEffect } from 'react';
import { physiotherapyData } from '@constants/physiotherapy';

export function Physiotherapy() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % physiotherapyData.images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="physiotherapy" id="fisioterapia">
      <div className="container">
        <div className="physiotherapy__wrapper">
          {/* Images Carousel */}
          <div className="physiotherapy__carousel">
            {physiotherapyData.images.map((image, index) => (
              <div
                key={index}
                className={`physiotherapy__image-item ${
                  currentImageIndex === index ? 'physiotherapy__image-item--active' : ''
                }`}
              >
                <img src={image.src} alt={image.alt} />
              </div>
            ))}
          </div>

          {/* Content Section */}
          <div className="physiotherapy__content">
            <h2 className="physiotherapy__title">{physiotherapyData.title}</h2>
            <h3 className="physiotherapy__subtitle">{physiotherapyData.subtitle}</h3>

            <p className="physiotherapy__description">
              {physiotherapyData.description}
            </p>

            {/* Features */}
            <div className="physiotherapy__features">
              {physiotherapyData.features.map((feature, index) => (
                <div key={index} className="physiotherapy__feature">
                  <div className="physiotherapy__feature-icon">
                    <i className={`fas ${feature.icon}`}></i>
                  </div>
                  <div className="physiotherapy__feature-content">
                    <h4 className="physiotherapy__feature-title">{feature.title}</h4>
                    <p className="physiotherapy__feature-description">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
