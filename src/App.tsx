import { Header, Footer, ScrollToTop, BottomNav } from '@components/common';
import { Promotional, PromoFooter, Questions, Facilities, Areas, Physiotherapy, PhysiotherapyComments, Pricing, Products } from '@components/sections';

function App() {
  return (
    <>
      <Header />

      <main>
        {/* Hero Section */}
        <section className="hero" id="inicio">
          <div className="container">
            <h2 className="h2-sub">
              <span className="fil">AcuaClub</span>
            </h2>
            <h1 className="head">Work kout</h1>
            <div className="he-des">
              <h5>La hora ha llegado</h5>
              <a
                href="https://wa.me/?text=Hola%20AcuaClub%20me%20interesa%20conocer%20m%C3%A1s%20de%20sus%20servicios"
                target="_blank"
                rel="noopener noreferrer"
                className="whatsapp-btn"
              >
                <i className="fab fa-whatsapp"></i>
                ¡Ah llegado la hora!
              </a>
            </div>
          </div>
        </section>

        {/* Discover Section */}
        <section className="dis-sto">
          <div className="container">
            <div className="res-info">
              <div>
                <img
                  src="/img/8.jpg"
                  alt="Miembros del equipo de SportClub entrenando"
                  className="historia__picture"
                  style={{ borderRadius: '10px', maxWidth: '400px' }}
                />
              </div>

              <div className="res-des" id="historia">
                <div className="global">
                  <h2>
                    <span className="fil">D</span>escubre
                  </h2>
                  <h1 className="hea-dark">WHAT WE'RE ALL ABOUT</h1>
                  <div className="circle">
                    <i className="fas fa-circle"></i>
                  </div>
                </div>

                <div>
                  <p>
                    <strong>Focus</strong>
                  </p>

                  <p>
                    THE GYM is a no-nonsense, results-driven fitness brand
                    built from weightlifting culture, committed to pushing our
                    bodies to levels constantly challenging our limits. Here,
                    great shape is an authentic passion, and strong, fit, and
                    healthy lifestyles are the norm. We don't back down, and we
                    live for the burn to push our bodies to go beyond what we
                    think they're capable of. Many have tried to replicate our
                    culture and have failed, they fail where we don't because
                    they lack our genuine passion to see our members reach their
                    goals.
                  </p>
                </div>

                {/* <a href="#" className="btn cta-btn">
                  Más información
                </a> */}
              </div>
            </div>
          </div>
        </section>

        {/* Knowledge Section */}
        <section className="knowledge" id="tendencias">
          <div className="knowledge__container container">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/n6yW77Va3pw"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <div className="knowledege__texts">
              <h1 className="head hea-dark" style={{ marginBottom: '3rem' }}>REAL GYM | REAL RESULTS</h1>

              <p className="knowledge__paragraph">
                At THE GYM, we're about real fitness. Our no-nonsense,
                results-driven culture was built on a history rooted in
                weightlifting culture. With our award-winning designs and
                culture, THE GYM has effortlessly became an internationally
                recognized brand known for its commitment to health, strength,
                and fitness. Today, we continue to be one of the most
                celebrated fitness brands in the world.
              </p>

              <p className="knowledge__paragraph">
                Our team is heavily involved in our community and closely
                connected with local public services, outreach programs, and
                other local businesses. Our culture isn't that of these
                corporate gyms. When you walk in the door you're here to work,
                sweat, and burn. At THE GYM, great shape is an authentic
                passion, and we don't back down from the challenge to push our
                bodies to levels constantly challenging our limits.
              </p>

              <p className="knowledge__paragraph">
                Here at THE GYM you aren't only joining a gym, you join a team
                of individuals who are committed to leading strong, fit, and
                healthy lifestyles. Our amazing trainers are ready to make sure
                you break boundaries and achieve your full potential. At THE
                GYM, our facilities ensure that you have full access to
                everything you need to reach that next level.
              </p>
            </div>

            <figure className="knowledge__picture"></figure>
          </div>
        </section>

        {/* Nutrition Section */}
        <section className="disco" id="alimentacion">
          <div className="container">
            {/* Title */}
            <div className="global" style={{ marginBottom: '3rem', textAlign: 'left' }}>
              <h2>
                Planes alimenticios y guía
              </h2>
            </div>

            {/* Specialist Card */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8rem',
                marginBottom: '4rem',
                flexWrap: 'wrap'
              }}
            >
              <div className="specialist-card" style={{ backgroundColor: 'transparent', padding: '0', flex: '0 0 auto' }}>
                <img
                  src="/img/26.jpg"
                  alt="Nutriólogo especialista"
                  className="specialist-photo"
                  style={{ width: '180px', height: '180px' }}
                />
                <div className="specialist-info">
                  <h3>Lic. María García</h3>
                  <p className="specialist-role">Nutrióloga Certificada</p>
                  <p style={{ fontSize: '1.4rem' }}>
                    Especialista en planes nutricionales personalizados para deportistas.
                  </p>
                </div>
              </div>

              {/* Images Grid */}
              <div className="image-group" style={{ flex: '1', minWidth: '300px' }}>
                <img
                  src="/img/7.jpg"
                  alt="Plan nutricional personalizado para gimnasia"
                />
                <img
                  src="/img/4.jpg"
                  alt="Alimentación saludable para deportistas"
                />
                <img
                  src="/img/3.jpg"
                  alt="Dieta y nutrición en el gimnasio"
                />
                <img
                  src="/img/6.jpg"
                  alt="Guía de nutrición deportiva"
                />
              </div>
            </div>
          </div>
        </section>

        {/* About Nutrition */}
        <section className="container about">
          <img src="/img/10.svg" className="about__icon" alt="Icon" />
          <br />
          <span className="fil">Creamos el plan nutricional perfecto para ti</span>
          <br />
          <br />
          <p className="about__paragraph">
            La elaboración de un plan nutricional personalizado es el
            fundamento de cada coach nutricional. Aquí te mostramos cómo crear
            tu propio plan nutricional adaptado a tus objetivos y predicciones
            siguiendo 7 pasos y sin necesidad de contar con conocimientos
            teóricos.
          </p>
          <br />
          <br />
          <div className="about__main">
            <article className="about__icons" data-number="01">
              <img src="/img/10.svg" className="about__icon" alt="Icon" />
              <h2 className="subtitle">Metabolismo basal</h2>
              <p className="about__paragrah">
                Una de las promociones de ventas que utilizaremos será poner el
                logo de la empresa, afuera de la caja con la compra de la caja.
              </p>
            </article>

            <article className="about__icons" data-number="02">
              <img src="/img/10.svg" className="about__icon" alt="Icon" />
              <h2 className="subtitle">
                Nota: tasa metabólica basal + gasto por actividad física = tasa
                metabólica total en kilocalorías por día
              </h2>
              <p className="about__paragrah">
                Nota: tasa metabólica basal + gasto por actividad física = tasa
                metabólica total en kilocalorías por día
              </p>
            </article>

            <article className="about__icons" data-number="03">
              <img src="/img/10.svg" className="about__icon" alt="Icon" />
              <h2 className="subtitle">Gasto por actividad física</h2>
              <p className="about__paragrah">
                El gasto por actividad física se calcula por el contrario en
                función de nuestro nivel de actividad corporal.
              </p>
            </article>

            <article className="about__icons" data-number="04">
              <img src="/img/10.svg" className="about__icon" alt="Icon" />
              <h2 className="subtitle">
                ¿Tu objetivo es el desarrollo muscular?
              </h2>
              <p className="about__paragrah">
                Si buscas desarrollar tu masa muscular de forma efectiva y
                duradera, es importante que aumentes tu consumo de proteínas.
              </p>
            </article>
          </div>
        </section>

        {/* Facilities Section */}
        <Facilities />

        {/* Areas Section */}
        <Areas />

        {/* Physiotherapy Section */}
        <Physiotherapy />

        {/* Physiotherapy Comments Section */}
        <PhysiotherapyComments />

        {/* Promotional Section */}
        <Promotional />

        {/* Questions Section */}
        <Questions />

        {/* PromoFooter Section */}
        <PromoFooter />

        {/* Pricing Section */}
        <Pricing />

        {/* Products Section */}
        <Products />
      </main>

      <Footer />
      <ScrollToTop />
      <BottomNav />
    </>
  );
}

export default App;
