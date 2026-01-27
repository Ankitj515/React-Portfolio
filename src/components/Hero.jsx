import heroimage from "../assets/hero-img.png";
export function Hero() {
  return (
    <>
      <section className="hero-container">
        <div className="hero-wrapper">
          <div className="hero-info">
            <span className="hero-title">Full Stack Developer (MERN)</span>
            <p className="hero-text">Building scalable web  
                <span> applications</span> with <span>MERN Stack</span></p>
            <p className="hero-subtxt">React • Node.js • Express • MongoDB</p>
            <button className="btn">View Projects</button>
            <button className="btn secondary">Contact Me</button>
          </div>
          <div className="hero-img">
            <img src={heroimage} alt="hero-image" />
          </div>
        </div>
      </section>
    </>
  );
}
