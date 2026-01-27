export function Navbar() {
    return(
        <>
        <header>
            <nav className="navbar">
                <div className="nav-wrapper">
                <h2>Ankit Jha</h2>
                <ul className="navlink">
                    <li>Home</li>
                    <li>About</li>
                    <li>Skills</li>
                    <li>Projects</li>
                    <li>Contact</li>
                </ul>
                <button className="btn-resume">Resume</button>
            </div>
            </nav>
        </header>
        </>
    );
}