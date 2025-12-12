import './Footer.css';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <p>&copy; {currentYear} John Doe. All rights reserved.</p>
        <p className="footer-tagline">Built with passion and creativity</p>
      </div>
    </footer>
  );
}

export default Footer;
