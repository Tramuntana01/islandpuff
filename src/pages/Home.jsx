import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  const { t } = useTranslation();

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content fade-in">
            <h1>{t('home.hero.title')}</h1>
            <p className="hero-subtitle">{t('home.hero.subtitle')}</p>
            <Link to="/searcher" className="btn btn-primary btn-large">
              {t('home.hero.cta')} →
            </Link>
          </div>
        </div>
        <div className="hero-gradient"></div>
      </section>

      {/* Warnings Section */}
      <section className="warnings">
        <div className="container">
          <h2 className="text-center mb-xl">⚠️ {t('home.warnings.title')}</h2>
          <div className="grid grid-2">
            <div className="warning-card card glass">
              <div className="warning-icon">🔞</div>
              <p>{t('home.warnings.age')}</p>
            </div>
            <div className="warning-card card glass">
              <div className="warning-icon">⚖️</div>
              <p>{t('home.warnings.legal')}</p>
            </div>
            <div className="warning-card card glass">
              <div className="warning-icon">🏥</div>
              <p>{t('home.warnings.health')}</p>
            </div>
            <div className="warning-card card glass">
              <div className="warning-icon">🔒</div>
              <p>{t('home.warnings.private')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about">
        <div className="container">
          <h2 className="text-center mb-lg">{t('home.about.title')}</h2>
          <div className="about-content">
            <div className="about-card card slide-in-left">
              <h3>🎯 Our Mission</h3>
              <p>{t('home.about.description')}</p>
            </div>
            <div className="about-card card slide-in-left" style={{ animationDelay: '0.1s' }}>
              <h3>🔍 What We Offer</h3>
              <p>{t('home.about.mission')}</p>
            </div>
            <div className="about-card card slide-in-left" style={{ animationDelay: '0.2s' }}>
              <h3>💚 Our Values</h3>
              <p>{t('home.about.values')}</p>
            </div>
          </div>
          
          <div className="cta-section text-center mt-xl">
            <Link to="/searcher" className="btn btn-primary btn-large">
              {t('home.hero.cta')} →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
