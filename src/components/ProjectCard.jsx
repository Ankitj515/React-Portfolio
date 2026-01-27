import img from '../assets/hero-img.png'
export function ProjectCard({title, description, link}){
    return(
        <>
        <div className="project-section">
            <div className="project-card">
                <img src={img} alt="" />
            <h3>{title}</h3>
            <p>{description}</p>
             <button onClick={link} className="btn">Live Demo</button>
            <button onClick={link} className="btn secondary">GitHub</button>
            </div>
        </div>
        </>
    );
}