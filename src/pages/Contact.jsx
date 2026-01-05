import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './Contact.css';

function Contact() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    email: '',
    message: '',
    legal: false
  });
  const [status, setStatus] = useState(''); // 'sending', 'success', 'error'

  const handleChange = (e) => {
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    setFormData({
      ...formData,
      [e.target.name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('sending');
    
    // Simulate form submission
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
      
      // Reset success message after 3 seconds
      setTimeout(() => setStatus(''), 3000);
    }, 1500);
  };

  return (
    <div className="contact">
      <div className="container">
        <div className="contact-header fade-in">
          <h1>{t('contact.title')}</h1>
          <p className="contact-subtitle">{t('contact.subtitle')}</p>
        </div>

        <div className="contact-content">
          {/* Contact Form */}
          <div className="contact-form-wrapper card glass fade-in">
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="name">{t('contact.form.name')}</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="input"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">{t('contact.form.email')}</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="input"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">{t('contact.form.message')}</label>
                <textarea
                  id="message"
                  name="message"
                  className="input"
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group checkbox-group">
                <label className="checkbox-label">
                  <input
                    type="checkbox"
                    name="legal"
                    checked={formData.legal}
                    onChange={handleChange}
                    required
                  />
                  <span>
                    {t('contact.form.legal_prefix', '')} 
                    <a href="/terms" target="_blank" rel="noopener noreferrer">Terms of Service</a> 
                    {' & '} 
                    <a href="/privacy" target="_blank" rel="noopener noreferrer">Privacy Policy</a>
                  </span>
                </label>
              </div>

              <button 
                type="submit" 
                className="btn btn-primary btn-full"
                disabled={status === 'sending'}
              >
                {status === 'sending' ? t('contact.form.sending') : t('contact.form.submit')}
              </button>

              {status === 'success' && (
                <div className="form-message success">
                  ✓ {t('contact.form.success')}
                </div>
              )}
              
              {status === 'error' && (
                <div className="form-message error">
                  ✗ {t('contact.form.error')}
                </div>
              )}
            </form>
          </div>

          {/* Contact Info */}
          <div className="contact-info-wrapper fade-in" style={{ animationDelay: '0.1s' }}>
            <div className="contact-info card glass">
              <h3>{t('contact.info.title')}</h3>
              
              <div className="info-item">
                <span className="info-icon">📧</span>
                <div>
                  <div className="info-label">Email</div>
                  <a href="mailto:islandpuffmallorca@gmail.com" className="info-value">
                    islandpuffmallorca@gmail.com
                  </a>
                </div>
              </div>

              <div className="info-item">
                <span className="info-icon">📍</span>
                <div>
                  <div className="info-label">Location</div>
                  <div className="info-value">{t('contact.info.location')}</div>
                </div>
              </div>

              <div className="info-item">
                <span className="info-icon">🕒</span>
                <div>
                  <div className="info-label">Hours</div>
                  <div className="info-value">{t('contact.info.hours')}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
