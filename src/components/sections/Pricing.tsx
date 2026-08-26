import { PRICING_PLANS } from '@constants/pricingPlans';

export function Pricing() {
  return (
    <section className="pricing-section" id="planes">
      <div className="container">
        <h2 className="pricing-title">Obten el plan perfecto para tí</h2>
        <div className="pricing-cards">
          {PRICING_PLANS.map((plan) => (
            <div
              key={plan.id}
              className={`pricing-card ${plan.featured ? 'pricing-card--featured' : ''}`}
            >
              <div className="pricing-card__image">
                <img src={plan.image} alt={plan.title} />
              </div>

              <div className="pricing-card__content">
                <p className="pricing-card__label">{plan.name}</p>
                <h3 className="pricing-card__title">{plan.title}</h3>
                <p className="pricing-card__price">{plan.price}</p>

                <div className="pricing-card__description">
                  {plan.features.map((feature, idx) => (
                    <p key={idx}>{feature}</p>
                  ))}
                </div>

                <a
                  href={plan.ctaLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="pricing-card__cta"
                >
                  {plan.cta}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
