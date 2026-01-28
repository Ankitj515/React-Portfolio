export function Navbar() {
    return(
        <>
        <header>
            <nav className="navbar">
                <div className="nav-wrapper">
                <h2>Ankit Jha</h2>
                <ul className="navlink">
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#skills">Skills</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
                <button className="btn-resume">Resume</button>
            </div>
            </nav>
        </header>
        </>
    );
}