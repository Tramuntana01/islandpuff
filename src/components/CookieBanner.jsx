import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import './CookieBanner.css';

function CookieBanner() {
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has already made a choice
    const cookieConsent = localStorage.getItem('cookieConsent');
    if (!cookieConsent) {
      // Show banner after a small delay
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setIsVisible(false);
  };

  const handleReject = () => {
    localStorage.setItem('cookieConsent', 'rejected');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="cookie-banner">
      <div className="cookie-content">
        <p className="cookie-text">{t('cookie.text')}</p>
        <div className="cookie-actions">
          <button className="btn btn-small btn-reject" onClick={handleReject}>
            {t('cookie.reject')}
          </button>
          <button className="btn btn-small btn-accept" onClick={handleAccept}>
            {t('cookie.accept')}
          </button>
        </div>
      </div>
    </div>
  );
}

export default CookieBanner;
