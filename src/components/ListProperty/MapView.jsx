// components/ListProperty/MapView.jsx
'use client';

import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const MapView = ({ data }) => {
  return (
    <MapContainer center={[30.3753, 69.3451]} zoom={5} className="h-[500px] w-full rounded">
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="&copy; OpenStreetMap contributors"
      />
      {data.map((item, index) => (
        <Marker key={index} position={[item.latitude, item.longitude]}>
          <Popup>
            <strong>{item.title}</strong><br />
            {item.location}<br />
            <span className="text-green-600 font-bold">${item.price}</span>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default MapView;
