export const Footer: React.FC = () => {
  return (
    <footer className="footer-modern">
      <div className="footer-modern__content">
        <div className="container">
          <div className="footer-modern__wrapper">
            {/* Ubicación Section */}
            <div className="footer-modern__section footer-modern__location">
              <h3 className="footer-modern__title">Ubicación</h3>
              <div className="footer-modern__accent">
                <i className="fas fa-circle"></i>
              </div>
            </div>

            {/* Social and Map Section */}
            <div className="footer-modern__section footer-modern__social-map">
              {/* Social Media */}
              <div className="footer-modern__social">
                <h4 className="footer-modern__subtitle">Síguenos</h4>
                <ul className="footer-modern__social-list">
                  <li>
                    <a href="https://twitter.com/?lang=es" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                      <i className="fab fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://es-la.facebook.com/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                      <i className="fab fa-facebook-square"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                      <i className="fab fa-youtube"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                      <i className="fab fa-instagram"></i>
                    </a>
                  </li>
                </ul>
              </div>

              {/* Map and Locations */}
              <div className="footer-modern__map-container">
                <div className="footer-modern__map">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3732.1670790679946!2d-102.34302898535752!3d20.70343888617545!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x84294c797f7588b5%3A0xd8c92736c3db5896!2sAcua%20Club!5e0!3m2!1ses!2smx!4v1679708911707!5m2!1ses!2smx"
                    style={{ border: 0, borderRadius: '8px', width: '100%', height: '100%' }}
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
                <a href="#" className="footer-modern__btn" target="_blank" rel="noopener noreferrer">
                  <i className="fas fa-map-marker-alt"></i>
                  Ubicaciones
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-modern__bottom">
        <div className="container">
          <p className="footer-modern__copyright">
            ©  2024 LAPLACE. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};
