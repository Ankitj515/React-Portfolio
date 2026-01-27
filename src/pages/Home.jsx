import { AboutMe } from "../components/Aboutme";
import { Contact } from "../components/Contact";
import { Footer } from "../components/Footer";
import { Hero } from "../components/Hero";
import { Navbar } from "../components/Navbar";
import { Projects } from "../components/Projects";
import { Skills } from "../components/Skills";

export function Home(){
    return(
        <>
        <Navbar />
        <Hero/>
        <AboutMe />
        <Skills />
        <Projects />
        <Contact/>
        <Footer/>
        </>
    );
}