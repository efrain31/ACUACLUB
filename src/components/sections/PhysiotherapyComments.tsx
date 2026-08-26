import { useState } from 'react';
import { PHYSIOTHERAPY_TESTIMONIALS } from '@constants/testimonials-physiotherapy';

export function PhysiotherapyComments() {
  const [likedComments, setLikedComments] = useState<Set<string>>(new Set());

  const toggleLike = (id: string) => {
    const newLiked = new Set(likedComments);
    if (newLiked.has(id)) {
      newLiked.delete(id);
    } else {
      newLiked.add(id);
    }
    setLikedComments(newLiked);
  };

  return (
    <section className="physio-comments" id="comentarios-fisioterapia">
      <div className="container">
        <h2 className="physio-comments__title">Lo que dicen nuestros clientes</h2>
        <p className="physio-comments__subtitle">Testimonios sobre nuestro servicio de fisioterapia</p>

        <div className="physio-comments__grid">
          {PHYSIOTHERAPY_TESTIMONIALS.map((testimonial) => (
            <div key={testimonial.id} className="comment-card">
              {/* Header */}
              <div className="comment-card__header">
                <img src={testimonial.userImage} alt={testimonial.userName} className="comment-card__avatar" />
                <span className="comment-card__username">{testimonial.userName}</span>
              </div>

              {/* Comment Text */}
              <div className="comment-card__content">
                <p className="comment-card__text">"{testimonial.comment}"</p>
              </div>

              {/* Actions */}
              <div className="comment-card__actions">
                <button
                  className={`comment-card__like ${likedComments.has(testimonial.id) ? 'comment-card__like--active' : ''}`}
                  onClick={() => toggleLike(testimonial.id)}
                  aria-label="Like"
                >
                  <i className="fas fa-heart"></i>
                  <span>{testimonial.likes + (likedComments.has(testimonial.id) ? 1 : 0)}</span>
                </button>
                <button className="comment-card__comment" aria-label="Comment">
                  <i className="fas fa-comment"></i>
                  <span>Comentar</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
