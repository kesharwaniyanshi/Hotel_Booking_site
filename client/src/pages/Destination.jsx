import React from 'react';
import { useState } from 'react';
// import './Destinations.css'; // Assume you have a CSS file for styling

const Destinations = () => {
  const [activeTab, setActiveTab] = useState('Regions');

  const destinations = {
    Regions: [
      { name: 'Uttar Pradesh', properties: 4332 },
      { name: 'Bihar', properties: 763 },
      { name: 'Tenerife', properties: 9603 },
      { name: 'Bora Bora', properties: 59 },
      { name: 'Mykonos', properties: 1453 },
      { name: 'Ras Al Khaimah', properties: 115 },
      { name: 'England', properties: 73904 },
      { name: 'Santorini', properties: 1760 },
      { name: 'Texel', properties: 411 },
      { name: 'Guernsey', properties: 61 },
      { name: 'Phuket Province', properties: 5500 },
      { name: 'Ibiza', properties: 1641 },
      { name: 'Hawaii', properties: 5427 },
      { name: 'Cornwall', properties: 5283 },
      { name: 'Isle of Wight', properties: 934 },
      { name: 'Zanzibar', properties: 834 },
      { name: 'Lake District', properties: 2392 },
      { name: 'Bali', properties: 12685 },
      { name: 'Jersey', properties: 89 },
    ],
    Cities: [{ name: 'Chapel Saint Leonards, United Kingdom', properties: 144 },
        { name: 'Saint Eval, United Kingdom', properties: undefined },
        { name: 'Great Rowsley, United Kingdom', properties: 5 },
        { name: 'Instow, United Kingdom', properties: 65 },
        { name: 'Bangkok', properties: 4039 },
        { name: 'London', properties: 14533 },
        { name: 'York', properties: 828 },
        { name: 'Newcastle upon Tyne', properties: 389 },
        { name: 'Manchester', properties: 1090 },
        { name: 'Liverpool', properties: 1081 },
        { name: 'Leeds', properties: 382 },
        { name: 'Glasgow', properties: 915 }],
    'Places of interest': [
        { name: "Guadalupe River Tubing", properties: 327 },
        { name: "Al Maha Wildlife Reserve", properties: 1 },
        { name: "The Shard", properties: 14533 },
        { name: "River Walk", properties: 671 },
        { name: "Burj Al Arab", properties: 4296 },
        { name: "Comal River Tubing", properties: 327 },
        { name: "Heathrow Terminal 2", properties: undefined },
        { name: "Disneyland Paris", properties: 7599 },
        { name: "Wembley Stadium", properties: 14533 },
        { name: "State Park", properties: 21 },
        { name: "Portmeirion", properties: 9 },
        { name: "Ocean City Boardwalk", properties: 765 },
        { name: "Disneyland", properties: 247 },
        { name: "Times Square", properties: 1384 },
        { name: "Heathrow Terminal 5", properties: 63 },
        { name: "Niagara Falls State Park", properties: 75 },
        { name: "Universal Studios Orlando", properties: 3683 },
        { name: "O2 Arena", properties: 14533 },
        { name: "Eiffel Tower", properties: 7599 },
        { name: "Kalahari Waterpark Resort", properties: 43 }
      ]
  };

  return (
    <div className="destinations">
      <h2>Destinations we love</h2>
      <div className="tabs">
        {Object.keys(destinations).map((tab) => (
          <button
            key={tab}
            className={activeTab === tab ? 'active' : ''}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className="content">
        {destinations[activeTab].map((destination, index) => (
          <div key={index} className="destination">
            {destination.name}
            <span className="properties">{destination.properties} properties</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Destinations;
