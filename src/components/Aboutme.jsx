import { CircleCheckBig } from "lucide-react";
export function AboutMe() {
  return (
    <>
      <section className="container">
        <div className="wrapper about">
          <h2>
            
            About Me</h2>
          <p>
            I am MERN stack developer with a passion for building impactful web
            applications. Learning, Coding, and Creating Every Day.
          </p>
          <div className="card-section">
            <div className="card">
              <span>3+</span>
              <p>
                 Years Experience
              </p>
            </div>
            <div className="card">
              <span>15+</span>
              <p>
                 Projects Completed
              </p>
            </div>
            <div className="card">
              <span><CircleCheckBig size={24} color="#3bd846" absoluteStrokeWidth /></span>
              <p>
                 MERN Stack Proficient
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
