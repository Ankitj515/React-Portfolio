import { ProjectCard } from "./ProjectCard";
const projects = [
    {title: "Auth Dashboard", description: "React + Node Auth", link: "#"},
    {title: "Auth Dashboard", description: "React + Node Auth", link: "#"},
    {title: "Auth Dashboard", description: "React + Node Auth", link: "#"},
    
];
export function Projects(){
    return(
        <>
        <section id="projects" className="container">
            <div className="wrapper project">
                <h2>My Projects</h2>
                <div className="project-grid">
                    {projects.map((p, i) => <ProjectCard key={i} {...p} ></ProjectCard>)}
                </div>
            </div>
            
        </section>
        </>
    );
}