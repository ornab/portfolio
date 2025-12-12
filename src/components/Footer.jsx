import './Footer.css';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <p>&copy; {currentYear} Hasan Zamil Ahmed. All rights reserved.</p>
        <p className="footer-tagline">Data Analytics Engineer | MSc Data Science</p>
      </div>
    </footer>
  );
}

export default Footer;
