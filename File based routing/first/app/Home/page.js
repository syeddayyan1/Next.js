import Image from "next/image";
export default function Home() {
  return (
    <main className="home">
      <section className="hero">
        <div className="heroContent">
          <p className="tagline">WELCOME TO NEXORA</p>

          <h1>
            Build Something
            <span> Amazing.</span>
          </h1>

          <p className="heroText">
            We create modern, fast and powerful digital experiences
            that help businesses grow.
          </p>

          <button className="heroButton">
            Explore More
          </button>
        </div>

      </section>
{/* ---------------------------------------------- */}
  <section>
  <div className="image-container">
    
         <div className="image-card">
        <Image
          src="https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg"
          alt="Computer Science"
          width={600}
          height={400}
          className="cs-image"
        />

        <h2>Computer Science</h2>
        <p>Learning Next.js and building modern web applications.</p>
      </div>
  </div>
  </section>
    
    </main>
  );
}
