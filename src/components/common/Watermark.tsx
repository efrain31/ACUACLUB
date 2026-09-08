export const Watermark: React.FC = () => {
  return (
    <div
      style={{
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        fontSize: '12px',
        color: '#000',
        opacity: 0.2,
        pointerEvents: 'none',
        fontWeight: 'bold',
        letterSpacing: '1px',
        zIndex: 1,
      }}
    >
      X LAPLACE COMPANY
    </div>
  );
};
