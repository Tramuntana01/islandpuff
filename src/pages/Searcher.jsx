import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './Searcher.css';

// Sample association data with more details
const associations = [
  { 
    id: 1, 
    name: 'Green Island Club', 
    location: 'Palma', 
    members: 250, 
    description: 'Premium club in the heart of Palma',
    founded: '2018',
    amenities: ['Lounge Area', 'Outdoor Terrace', 'Premium Selection', 'Events'],
    hours: 'Mon-Sun: 10:00 - 22:00',
    membership: 'Valid ID, 18+ years old, membership fee €50/year'
  },
  { 
    id: 2, 
    name: 'Mallorca Cannabis Society', 
    location: 'Palma', 
    members: 180, 
    description: 'Friendly atmosphere and quality products',
    founded: '2019',
    amenities: ['Comfortable Seating', 'Music', 'Quality Products', 'WiFi'],
    hours: 'Mon-Sat: 11:00 - 21:00',
    membership: 'Valid ID, 18+ years old, membership fee €40/year'
  },
  { 
    id: 3, 
    name: 'Balearic Leaf', 
    location: 'Inca', 
    members: 120, 
    description: 'Community-focused association',
    founded: '2020',
    amenities: ['Community Events', 'Garden Area', 'Local Products'],
    hours: 'Tue-Sun: 12:00 - 20:00',
    membership: 'Valid ID, 18+ years old, membership fee €35/year'
  },
  { 
    id: 4, 
    name: 'Island Vibes', 
    location: 'Manacor', 
    members: 95, 
    description: 'Relaxed environment with great selection',
    founded: '2021',
    amenities: ['Chill Zone', 'Games', 'Diverse Selection'],
    hours: 'Wed-Mon: 13:00 - 21:00',
    membership: 'Valid ID, 18+ years old, membership fee €30/year'
  },
  { 
    id: 5, 
    name: 'Mediterranean Green', 
    location: 'Palma', 
    members: 210, 
    description: 'Modern facilities and knowledgeable staff',
    founded: '2017',
    amenities: ['Modern Interior', 'Expert Staff', 'Educational Events', 'VIP Area'],
    hours: 'Mon-Sun: 09:00 - 23:00',
    membership: 'Valid ID, 18+ years old, membership fee €60/year'
  },
  { 
    id: 6, 
    name: 'Puff Paradise', 
    location: 'Alcúdia', 
    members: 140, 
    description: 'Beautiful location near the beach',
    founded: '2019',
    amenities: ['Beach Proximity', 'Outdoor Space', 'Sunset Views'],
    hours: 'Mon-Sun: 11:00 - 22:00',
    membership: 'Valid ID, 18+ years old, membership fee €45/year'
  },
  { 
    id: 7, 
    name: 'Cannabis Collective', 
    location: 'Sóller', 
    members: 85, 
    description: 'Boutique club with exclusive strains',
    founded: '2020',
    amenities: ['Exclusive Strains', 'Intimate Setting', 'Personalized Service'],
    hours: 'Thu-Tue: 14:00 - 20:00',
    membership: 'Valid ID, 18+ years old, membership fee €55/year'
  },
  { 
    id: 8, 
    name: 'The Green Room', 
    location: 'Palma', 
    members: 190, 
    description: 'Upscale lounge atmosphere',
    founded: '2018',
    amenities: ['Luxury Lounge', 'Premium Products', 'Private Rooms', 'Concierge'],
    hours: 'Mon-Sun: 10:00 - 00:00',
    membership: 'Valid ID, 18+ years old, membership fee €75/year'
  },
  { 
    id: 9, 
    name: 'Herb & Harmony', 
    location: 'Calvià', 
    members: 160, 
    description: 'Wellness-focused cannabis club',
    founded: '2019',
    amenities: ['Wellness Programs', 'Yoga Classes', 'Meditation Space', 'Organic Selection'],
    hours: 'Mon-Sat: 10:00 - 21:00',
    membership: 'Valid ID, 18+ years old, membership fee €50/year'
  },
  { 
    id: 10, 
    name: 'Mallorca Mist', 
    location: 'Inca', 
    members: 110, 
    description: 'Local favorite with great community',
    founded: '2020',
    amenities: ['Community Events', 'Local Vibe', 'Friendly Staff'],
    hours: 'Tue-Sun: 12:00 - 21:00',
    membership: 'Valid ID, 18+ years old, membership fee €35/year'
  },
  { 
    id: 11, 
    name: 'Sunset Cannabis', 
    location: 'Andratx', 
    members: 75, 
    description: 'Scenic views and premium selection',
    founded: '2021',
    amenities: ['Ocean Views', 'Sunset Terrace', 'Premium Selection'],
    hours: 'Wed-Mon: 15:00 - 22:00',
    membership: 'Valid ID, 18+ years old, membership fee €50/year'
  },
  { 
    id: 12, 
    name: 'Island Essence', 
    location: 'Manacor', 
    members: 130, 
    description: 'Traditional club with modern amenities',
    founded: '2018',
    amenities: ['Traditional Atmosphere', 'Modern Facilities', 'Events'],
    hours: 'Mon-Sun: 11:00 - 21:00',
    membership: 'Valid ID, 18+ years old, membership fee €40/year'
  }
];

function Searcher() {
  const { t } = useTranslation();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('');
  const [detailsModal, setDetailsModal] = useState(null);
  const [joinModal, setJoinModal] = useState(null);
  const [joinFormData, setJoinFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    age: '',
    idNumber: '',
    message: ''
  });
  const [joinStatus, setJoinStatus] = useState('');

  // Get unique locations
  const locations = [...new Set(associations.map(a => a.location))].sort();

  // Filter associations
  const filteredAssociations = associations.filter(association => {
    const matchesSearch = association.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesLocation = !selectedLocation || association.location === selectedLocation;
    return matchesSearch && matchesLocation;
  });

  const handleJoinChange = (e) => {
    setJoinFormData({
      ...joinFormData,
      [e.target.name]: e.target.value
    });
  };

  const handleJoinSubmit = (e) => {
    e.preventDefault();
    setJoinStatus('submitting');
    
    // Simulate form submission
    setTimeout(() => {
      setJoinStatus('success');
      setJoinFormData({
        fullName: '',
        email: '',
        phone: '',
        age: '',
        idNumber: '',
        message: ''
      });
      
      // Close modal after 2 seconds
      setTimeout(() => {
        setJoinModal(null);
        setJoinStatus('');
      }, 2000);
    }, 1500);
  };

  return (
    <div className="searcher">
      <div className="container">
        {/* Header */}
        <div className="searcher-header fade-in">
          <h1>{t('searcher.title')}</h1>
          <p className="searcher-subtitle">{t('searcher.subtitle')}</p>
        </div>

        {/* Search Controls */}
        <div className="search-controls fade-in">
          <div className="search-bar">
            <span className="search-icon">🔍</span>
            <input
              type="text"
              className="input search-input"
              placeholder={t('searcher.searchPlaceholder')}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          
          <div className="location-filter">
            <label htmlFor="location">{t('searcher.locationLabel')}</label>
            <select
              id="location"
              className="input"
              value={selectedLocation}
              onChange={(e) => setSelectedLocation(e.target.value)}
            >
              <option value="">{t('searcher.allLocations')}</option>
              {locations.map(location => (
                <option key={location} value={location}>{location}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Results */}
        {filteredAssociations.length > 0 ? (
          <div className="associations-grid grid grid-3">
            {filteredAssociations.map((association, index) => (
              <div 
                key={association.id} 
                className="association-card card fade-in"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="association-header">
                  <h3>{association.name}</h3>
                  <span className="location-badge">📍 {association.location}</span>
                </div>
                <p className="association-description">{association.description}</p>
                <div className="association-footer">
                  <span className="members-count">
                    👥 {association.members} {t('searcher.members')}
                  </span>
                  <div className="association-actions">
                    <button 
                      className="btn btn-secondary btn-small"
                      onClick={() => setDetailsModal(association)}
                    >
                      {t('searcher.viewDetails')}
                    </button>
                    <button 
                      className="btn btn-primary btn-small"
                      onClick={() => setJoinModal(association)}
                    >
                      {t('searcher.joinClub')}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="no-results fade-in">
            <div className="no-results-icon">🔍</div>
            <h3>{t('searcher.noResults')}</h3>
            <p>{t('searcher.tryAgain')}</p>
          </div>
        )}
      </div>

      {/* Details Modal */}
      {detailsModal && (
        <div className="modal-overlay" onClick={() => setDetailsModal(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2>{detailsModal.name}</h2>
              <button className="modal-close" onClick={() => setDetailsModal(null)}>×</button>
            </div>
            <div className="modal-body">
              <div className="detail-item">
                <strong>📍 {t('searcher.detailsModal.location')}:</strong>
                <p>{detailsModal.location}</p>
              </div>
              <div className="detail-item">
                <strong>📝 {t('searcher.detailsModal.description')}:</strong>
                <p>{detailsModal.description}</p>
              </div>
              <div className="detail-item">
                <strong>👥 {t('searcher.detailsModal.members')}:</strong>
                <p>{detailsModal.members} members</p>
              </div>
              <div className="detail-item">
                <strong>📅 {t('searcher.detailsModal.founded')}:</strong>
                <p>{detailsModal.founded}</p>
              </div>
              <div className="detail-item">
                <strong>✨ {t('searcher.detailsModal.amenities')}:</strong>
                <ul>
                  {detailsModal.amenities.map((amenity, idx) => (
                    <li key={idx}>{amenity}</li>
                  ))}
                </ul>
              </div>
              <div className="detail-item">
                <strong>🕒 {t('searcher.detailsModal.hours')}:</strong>
                <p>{detailsModal.hours}</p>
              </div>
              <div className="detail-item">
                <strong>📋 {t('searcher.detailsModal.membership')}:</strong>
                <p>{detailsModal.membership}</p>
              </div>
            </div>
            <div className="modal-footer">
              <button className="btn btn-secondary" onClick={() => setDetailsModal(null)}>
                {t('searcher.detailsModal.close')}
              </button>
              <button 
                className="btn btn-primary" 
                onClick={() => {
                  setJoinModal(detailsModal);
                  setDetailsModal(null);
                }}
              >
                {t('searcher.joinClub')}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Join Modal */}
      {joinModal && (
        <div className="modal-overlay" onClick={() => setJoinModal(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2>{t('searcher.joinModal.title')} {joinModal.name}</h2>
              <button className="modal-close" onClick={() => setJoinModal(null)}>×</button>
            </div>
            <div className="modal-body">
              <p className="mb-md">{t('searcher.joinModal.subtitle')}</p>
              <form onSubmit={handleJoinSubmit} className="join-form">
                <div className="form-group">
                  <label htmlFor="fullName">{t('searcher.joinModal.fullName')}</label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    className="input"
                    value={joinFormData.fullName}
                    onChange={handleJoinChange}
                    required
                  />
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="email">{t('searcher.joinModal.email')}</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="input"
                      value={joinFormData.email}
                      onChange={handleJoinChange}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="phone">{t('searcher.joinModal.phone')}</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="input"
                      value={joinFormData.phone}
                      onChange={handleJoinChange}
                      required
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="age">{t('searcher.joinModal.age')}</label>
                    <input
                      type="number"
                      id="age"
                      name="age"
                      className="input"
                      min="18"
                      value={joinFormData.age}
                      onChange={handleJoinChange}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="idNumber">{t('searcher.joinModal.idNumber')}</label>
                    <input
                      type="text"
                      id="idNumber"
                      name="idNumber"
                      className="input"
                      value={joinFormData.idNumber}
                      onChange={handleJoinChange}
                      required
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="message">{t('searcher.joinModal.message')}</label>
                  <textarea
                    id="message"
                    name="message"
                    className="input"
                    value={joinFormData.message}
                    onChange={handleJoinChange}
                    required
                  />
                </div>

                {joinStatus === 'success' && (
                  <div className="form-message success">
                    ✓ {t('searcher.joinModal.success')}
                  </div>
                )}
                
                {joinStatus === 'error' && (
                  <div className="form-message error">
                    ✗ {t('searcher.joinModal.error')}
                  </div>
                )}

                <div className="modal-footer">
                  <button 
                    type="button" 
                    className="btn btn-secondary" 
                    onClick={() => setJoinModal(null)}
                  >
                    {t('searcher.joinModal.cancel')}
                  </button>
                  <button 
                    type="submit" 
                    className="btn btn-primary"
                    disabled={joinStatus === 'submitting'}
                  >
                    {joinStatus === 'submitting' ? t('searcher.joinModal.submitting') : t('searcher.joinModal.submit')}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Searcher;
