import { SectionProps } from '@types/index';
import './Section.css';

export const Section: React.FC<SectionProps> = ({
  children,
  title,
  subtitle,
  bgImage,
  dark = false,
  className = '',
  id,
  ...props
}) => {
  const sectionClass = `section ${dark ? 'section--dark' : ''} ${className}`;

  const sectionStyle = bgImage
    ? {
        backgroundImage: `url('${bgImage}')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }
    : undefined;

  return (
    <section
      id={id}
      className={sectionClass}
      style={sectionStyle}
      {...props}
    >
      {(title || subtitle) && (
        <div className="section__header">
          {title && <h2 className="section__title">{title}</h2>}
          {subtitle && <p className="section__subtitle">{subtitle}</p>}
        </div>
      )}
      {children}
    </section>
  );
};
