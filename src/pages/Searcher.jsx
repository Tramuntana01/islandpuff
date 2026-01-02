import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './Searcher.css';

// Sample association data
const associations = [
  { id: 1, name: 'Green Island Club', location: 'Palma', members: 250, description: 'Premium club in the heart of Palma' },
  { id: 2, name: 'Mallorca Cannabis Society', location: 'Palma', members: 180, description: 'Friendly atmosphere and quality products' },
  { id: 3, name: 'Balearic Leaf', location: 'Inca', members: 120, description: 'Community-focused association' },
  { id: 4, name: 'Island Vibes', location: 'Manacor', members: 95, description: 'Relaxed environment with great selection' },
  { id: 5, name: 'Mediterranean Green', location: 'Palma', members: 210, description: 'Modern facilities and knowledgeable staff' },
  { id: 6, name: 'Puff Paradise', location: 'Alcúdia', members: 140, description: 'Beautiful location near the beach' },
  { id: 7, name: 'Cannabis Collective', location: 'Sóller', members: 85, description: 'Boutique club with exclusive strains' },
  { id: 8, name: 'The Green Room', location: 'Palma', members: 190, description: 'Upscale lounge atmosphere' },
  { id: 9, name: 'Herb & Harmony', location: 'Calvià', members: 160, description: 'Wellness-focused cannabis club' },
  { id: 10, name: 'Mallorca Mist', location: 'Inca', members: 110, description: 'Local favorite with great community' },
  { id: 11, name: 'Sunset Cannabis', location: 'Andratx', members: 75, description: 'Scenic views and premium selection' },
  { id: 12, name: 'Island Essence', location: 'Manacor', members: 130, description: 'Traditional club with modern amenities' }
];

function Searcher() {
  const { t } = useTranslation();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('');

  // Get unique locations
  const locations = [...new Set(associations.map(a => a.location))].sort();

  // Filter associations
  const filteredAssociations = associations.filter(association => {
    const matchesSearch = association.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesLocation = !selectedLocation || association.location === selectedLocation;
    return matchesSearch && matchesLocation;
  });

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
                  <button className="btn btn-secondary btn-small">
                    {t('searcher.viewDetails')}
                  </button>
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
    </div>
  );
}

export default Searcher;
