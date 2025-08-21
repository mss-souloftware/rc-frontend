"use client";
import { useState } from "react";
import { FaSchool, FaBus, FaShoppingCart, FaHospital, FaArrowRight } from "react-icons/fa";

export default function AmenitiesDistance({ amenities }) {
  const [selectedAmenity, setSelectedAmenity] = useState(amenities[0]);

  return (
    <div className="bg-white mt-10">
      {/* Heading */}
      <h2 className="md:text-2xl sm:text-xl text-md font-semibold text-gray-800 md:mb-5 mb-2 md:text-left text-center">Distance to key amenities</h2>

      {/* Selected amenity row */}
      <div className="flex items-center justify-between gap-3 border border-gray-200 rounded-lg py-1 pr-1 pl-3 mb-5">
        <span className="text-[#202A54]">
          <span className="text-xs text-[#999EA4]">From</span>
          <br />
          {selectedAmenity.name}
        </span>
        <div className="flex items-center justify-between gap-10">
          <span className="text-center text-gray-400">
            <FaArrowRight />
          </span>
          <span className=" border border-gray-200 bg-[#FAFAFA] rounded-lg px-8 py-3 text-[#2C343C]">
            {selectedAmenity.distance}
          </span>
        </div>
      </div>

      {/* Amenities grid */}
      <div className="grid grid-cols-4 sm:grid-cols-4 gap-3">
        {amenities.map((amenity, index) => (
          <button
            key={index}
            onClick={() => setSelectedAmenity(amenity)}
            className={`flex flex-col items-center justify-center gap-1 p-5 border rounded-lg text-md hover:bg-gray-50 transition
              ${selectedAmenity.name === amenity.name
                ? "border-indigo-500 bg-indigo-50"
                : "border-gray-200"
              }`}
          >
            <span className="text-xl text-[#202A54]">{amenity.icon}</span>
            <span className="text-[#202A54]">{amenity.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
