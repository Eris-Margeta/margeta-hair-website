import React, { useEffect } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const markerIconUrl = '/marker-icon.webp';
// TODO: dodati novu adresu
const MapComponentReact: React.FC = () => {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const map = L.map('map').setView([45.344576, 14.386672], 13);

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors'
      }).addTo(map);

      const customIcon = L.icon({
        iconUrl: markerIconUrl,
        iconSize: [38, 38],
        iconAnchor: [19, 38],
        popupAnchor: [0, -30],
      });

      const popupContent = `
        <div style="display: flex; justify-content: space-between; align-items: center;">
          <p style="margin: 0;">Rijeka</p>
          <button style="margin-left: 10px; padding: 5px 10px; background-color: #007bff; color: white; border: none; border-radius: 4px; cursor: pointer;" onclick="window.open('https://www.google.com/maps/search/?api=1&query=45.344576,14.386672', '_blank')">Navigate</button>
        </div>
      `;

      L.marker([45.344576, 14.386672], { icon: customIcon }).addTo(map)
        .bindPopup(popupContent)
        .openPopup();
    }
  }, []);

  return (
    <div id="map" style={{ height: '400px', width: '100%' }}></div>
  );
};

export default MapComponentReact;
