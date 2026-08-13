import Script from "next/script";
export default function Contact() {
  return (
    <main className="contact">
      
      <div>
        <Script id="alert-script">
        {`
          alert("Hello from Next.js!");
        `}
      </Script>
      </div>

      <section className="contactSection">
        <div className="contactContent">
          <p className="tagline">GET IN TOUCH</p>

          <h1>
            Let's Work
            <span> Together.</span>
          </h1>

          <p>
            Have a project or idea in mind? Send us a message
            and let's create something amazing together.
          </p>

          <form className="contactForm">
            <input type="text" placeholder="Your Name" />
            <input type="email" placeholder="Your Email" />
            <textarea placeholder="Your Message"></textarea>

            <button type="submit">
              Send Message
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}