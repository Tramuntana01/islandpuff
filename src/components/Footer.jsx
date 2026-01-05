import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-logo">IslandPuff</h3>
            <p>{t('footer.description', 'Premium Cannabis Club Searcher in Mallorca')}</p>
          </div>
          
          <div className="footer-section">
            <h4>{t('footer.links', 'Quick Links')}</h4>
            <ul className="footer-links">
              <li><Link to="/">{t('nav.home')}</Link></li>
              <li><Link to="/searcher">{t('nav.searcher')}</Link></li>
              <li><Link to="/contact">{t('nav.contact')}</Link></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>{t('footer.legal', 'Legal')}</h4>
            <ul className="footer-links">
              <li><a href="#">{t('footer.terms', 'Terms of Service')}</a></li>
              <li><a href="#">{t('footer.privacy', 'Privacy Policy')}</a></li>
              <li><a href="#">{t('footer.cookies', 'Cookie Policy')}</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>{t('footer.connect', 'Connect')}</h4>
            <div className="social-links">
              <a href="#" className="social-link">Instagram</a>
              <a href="#" className="social-link">Twitter</a>
              <a href="#" className="social-link">Facebook</a>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {currentYear} IslandPuff. {t('footer.rights', 'All rights reserved.')}</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
