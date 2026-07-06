function Footer() {
  return (
    <footer>
      <div className="footer-content">
        <h3>Aaron Sands</h3>

        <p>Developer | Cloud & Network Engineering Student (AWS Focus)</p>

        <div className="footer-links">
          <a
            href="https://github.com/YOUR_USERNAME"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/YOUR_LINKEDIN"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>

          <a href="#contact">Contact</a>
        </div>

        <p className="copyright">
          © {new Date().getFullYear()} Aaron Sands. Built with React and
          continuously improving through software and cloud projects.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
