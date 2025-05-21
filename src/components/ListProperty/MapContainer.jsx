"use client";
import React, { useEffect } from "react";

const MapContainer = ({ properties }) => {
  useEffect(() => {
    const map = new window.google.maps.Map(document.getElementById("map"), {
      center: { lat: -35.2809, lng: 149.1300 }, // Canberra center
      zoom: 12,
    });

    properties.forEach((property) => {
      new window.google.maps.Marker({
        position: { lat: property.lat, lng: property.lng },
        map,
        label: {
          text: `$${property.price}`,
          className: "map-label",
        },
      });
    });
  }, [properties]);

  return <div id="map" className="w-full h-full" />;
};

export default MapContainer;
