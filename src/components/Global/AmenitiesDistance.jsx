"use client";
import { useState } from "react";
import { FaSchool, FaBus, FaShoppingCart, FaHospital } from "react-icons/fa";

export default function AmenitiesDistance({ amenities }) {
  const [selectedAmenity, setSelectedAmenity] = useState(amenities[0]);

  return (
    <div className="bg-white mt-10">
      {/* Heading */}
      <h2 className="md:text-2xl sm:text-xl text-md font-semibold text-gray-800 md:mb-5 mb-2 md:text-left text-center">Distance to key amenities</h2>

      {/* Selected amenity row */}
      <div className="flex items-center gap-3 border rounded-lg p-3 mb-5">
        <span className="font-medium">{selectedAmenity.name}</span>
        <span className="flex-1 text-center text-gray-400">→</span>
        <span className="font-medium border rounded-lg px-4 py-1">
          {selectedAmenity.distance}
        </span>
      </div>

      {/* Amenities grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        {amenities.map((amenity, index) => (
          <button
            key={index}
            onClick={() => setSelectedAmenity(amenity)}
            className={`flex items-center gap-2 p-3 border rounded-lg text-sm hover:bg-gray-50 transition
              ${
                selectedAmenity.name === amenity.name
                  ? "border-indigo-500 bg-indigo-50"
                  : "border-gray-200"
              }`}
          >
            <span className="text-lg">{amenity.icon}</span>
            <span>{amenity.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
