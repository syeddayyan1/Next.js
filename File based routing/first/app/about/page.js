
export default function About() {
  return (
    <main className="about">
      <section className="aboutSection">
        <div className="aboutContent">
          <p className="tagline">ABOUT NEXORA</p>

          <h1>
            We Build Digital
            <span> Experiences.</span>
          </h1>

          <p>
            Nexora is focused on creating clean, modern and
            user-friendly web experiences. Our goal is to turn
            ideas into simple and powerful digital products.
          </p>

          <div className="aboutCards">
            <div className="aboutCard">
              <h3>Modern</h3>
              <p>Clean and modern designs.</p>
            </div>

            <div className="aboutCard">
              <h3>Fast</h3>
              <p>Performance-focused applications.</p>
            </div>

            <div className="aboutCard">
              <h3>Reliable</h3>
              <p>Built with scalable technologies.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

