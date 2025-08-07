'use client'

import { useState } from 'react'
import { FaBed, FaBath, FaCar } from 'react-icons/fa'

const realEstateTypes = [
  { label: 'All', value: 'all' },
  { label: 'Apartments', value: 'apartments' },
  { label: 'House', value: 'house' },
  { label: 'Townhouse', value: 'townhouse' },
  { label: 'Shared', value: 'shared' },
]

const filters = [
  'Shared Housing',
  'Near ANU',
  'Near UC',
  'Under $200',
  'International Student Friendly',
  'Female-Only Houses',
  'Golf View',
  'Not Friendly to UC',
  'Not Friendly to ANU',
]

export default function SidebarFilters() {
  const [selectedTypes, setSelectedTypes] = useState('apartments')
  const [bedrooms, setBedrooms] = useState(1)
  const [bathrooms, setBathrooms] = useState(1)
  const [parkingSpaces, setParkingSpaces] = useState(0)
  const [priceRange, setPriceRange] = useState([200, 400])

  const toggleType = (value) => {
    if (selectedTypes.includes(value)) {
      setSelectedTypes(selectedTypes.filter(v => v !== value))
    } else {
      setSelectedTypes([...selectedTypes, value])
    }
  }

  return (
    <div className="w-72 p-4 bg-white rounded-xl shadow-sm border space-y-6">
      {/* Real Estate Type */}
      <div>
        <h3 className="text-sm font-medium mb-2">Real Estate Type</h3>
        <div className="space-y-2">
          {realEstateTypes.map(type => (
            <label
              key={type.value}
              className="flex items-center space-x-2 text-sm cursor-pointer"
            >
              <input
                type="checkbox"
                checked={selectedTypes.includes(type.value)}
                onChange={() => toggleType(type.value)}
                className="peer hidden"
              />
              <div className="w-4 h-4 rounded border border-gray-300 peer-checked:bg-blue-600 peer-checked:border-blue-600 transition-all duration-200" />
              <span>{type.label}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Suburb Dropdown */}
      <div>
        <label className="text-sm font-medium">Suburbs</label>
        <select className="mt-1 w-full border rounded px-3 py-2 text-sm focus:outline-none">
          <option>Red Hill</option>
        </select>
      </div>

      {/* Rooms Inputs */}
      <div className="space-y-4">
        {[['Bedrooms', FaBed, bedrooms, setBedrooms], ['Bathrooms', FaBath, bathrooms, setBathrooms], ['Parking Space', FaCar, parkingSpaces, setParkingSpaces]].map(([label, Icon, value, setter], idx) => (
          <div key={idx} className="flex items-center justify-between">
            <span className="flex items-center gap-2 text-sm font-medium">
              <Icon className="text-gray-600" />
              {label}
            </span>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setter((prev) => Math.max(0, prev - 1))}
                className="px-2 py-1 border rounded text-sm"
              >−</button>
              <span>{value}</span>
              <button
                onClick={() => setter((prev) => prev + 1)}
                className="px-2 py-1 border rounded text-sm"
              >+</button>
            </div>
          </div>
        ))}
      </div>

      {/* Price Range */}
      <div>
        <h3 className="text-sm font-medium mb-2">Price Range</h3>
        <div className="flex items-center justify-between text-xs text-gray-600">
          <span>${priceRange[0]}</span>
          <span>${priceRange[1]}</span>
        </div>
        <input
          type="range"
          min={100}
          max={500}
          step={10}
          value={priceRange[1]}
          onChange={e => setPriceRange([priceRange[0], parseInt(e.target.value)])}
          className="w-full mt-2"
        />
        <div className="text-xs text-gray-500 mt-2 space-y-1">
          <div>Rent Under $300</div>
          <div>Rent Under $400</div>
          <div>Rent Under $500</div>
        </div>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-2">
        {filters.map((filter, i) => (
          <span
            key={i}
            className="text-xs px-3 py-1 rounded-full border bg-gray-50 text-gray-700 cursor-pointer hover:bg-blue-100 transition"
          >
            {filter}
          </span>
        ))}
      </div>
    </div>
  )
}
