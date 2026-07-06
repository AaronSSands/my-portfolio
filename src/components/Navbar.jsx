function Navbar({ darkMode, setDarkMode }) {
  return (
    <nav className="navbar">
      <h2>Aaron Sands</h2>

      <div className="nav-links">
        <a href="#home">Home</a>

        <a href="#about">About</a>

        <a href="#skills">Skills</a>

        <a href="#cloud">Cloud</a>

        <a href="#education">Education</a>

        <a href="#projects">Projects</a>

        <a href="#contact">Contact</a>

        <button onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? "☀️" : "🌙"}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
