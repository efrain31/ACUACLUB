import { areasFeatures, areasDifference, areasImages } from '@constants/areas';

export function Areas() {
  return (
    <section className="knowledge" id="areas">
      <div className="knowledge__container container">
        {/* Images */}
        <div className="image-group pad-rig">
          {areasImages.map((image, index) => (
            <img key={index} src={image.src} alt={image.alt} />
          ))}
        </div>

        {/* Text Content */}
        <div className="knowledege__texts">
          <h1 className="head hea-dark">Nuestras Áreas</h1>

          <p className="knowledge__paragraph">
            <strong>CARACTERÍSTICAS</strong>
            <br />
            {areasFeatures.map((feature, index) => (
              <div key={index}>
                {feature}
                <br />
              </div>
            ))}
          </p>

          <p className="knowledge__paragraph">
            <strong>DIFERENCIA ACUACLUB</strong>
            <br />
            {areasDifference}
          </p>
        </div>

        <figure className="knowledge__picture"></figure>
      </div>
    </section>
  );
}
