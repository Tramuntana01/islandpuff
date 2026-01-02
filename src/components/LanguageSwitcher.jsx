import { useTranslation } from 'react-i18next';
import './LanguageSwitcher.css';

function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'de' : 'en';
    i18n.changeLanguage(newLang);
    localStorage.setItem('language', newLang);
  };

  return (
    <button className="language-switcher" onClick={toggleLanguage}>
      <span className={i18n.language === 'en' ? 'active' : ''}>EN</span>
      <span className="divider">|</span>
      <span className={i18n.language === 'de' ? 'active' : ''}>DE</span>
    </button>
  );
}

export default LanguageSwitcher;
