function Navbar({ darkMode, setDarkMode }) {
  return (
    //Main navigation bar of the website, containing the site title, navigation links, and a button to toggle between dark and light mode.
    <nav className="navbar">
      <h2>Aaron Sands</h2>

      <div>
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>

        <button onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? "☀️ Light" : "🌙 Dark"}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
