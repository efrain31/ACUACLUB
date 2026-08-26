import { BaseProps } from '@types/index';
import './Container.css';

interface ContainerProps extends BaseProps {
  maxWidth?: string;
}

export const Container: React.FC<ContainerProps> = ({
  children,
  maxWidth = '122.5rem',
  className = '',
  ...props
}) => {
  return (
    <div
      className={`container ${className}`}
      style={{ maxWidth }}
      {...props}
    >
      {children}
    </div>
  );
};
