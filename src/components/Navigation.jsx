import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher';
import './Navigation.css';

function Navigation() {
  const { t } = useTranslation();
  const location = useLocation();

  return (
    <nav className="navigation">
      <div className="container nav-container">
        <Link to="/" className="logo">
          <span className="logo-icon">🌿</span>
          <span className="logo-text">IslandPuff</span>
        </Link>
        
        <div className="nav-links">
          <Link 
            to="/" 
            className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}
          >
            {t('nav.home')}
          </Link>
          <Link 
            to="/searcher" 
            className={`nav-link ${location.pathname === '/searcher' ? 'active' : ''}`}
          >
            {t('nav.searcher')}
          </Link>
          <Link 
            to="/contact" 
            className={`nav-link ${location.pathname === '/contact' ? 'active' : ''}`}
          >
            {t('nav.contact')}
          </Link>
          <LanguageSwitcher />
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
