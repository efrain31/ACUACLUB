import { CardProps } from '@types/index';
import './Card.css';

export const Card: React.FC<CardProps> = ({
  image,
  imageAlt = 'Card image',
  title,
  description,
  price,
  featured = false,
  onClick,
  className = '',
  children,
  footer,
  ...props
}) => {
  const cardClass = `card ${featured ? 'card--featured' : ''} ${className}`;

  return (
    <div className={cardClass} onClick={onClick} {...props}>
      {image && (
        <div className="card__image">
          <img src={image} alt={imageAlt} />
        </div>
      )}

      <div className="card__content">
        {title && <h3 className="card__title">{title}</h3>}

        {price && <p className="card__price">{price}</p>}

        {description && <p className="card__description">{description}</p>}

        {children}
      </div>

      {footer && <div className="card__footer">{footer}</div>}
    </div>
  );
};
