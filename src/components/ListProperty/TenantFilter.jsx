import React from 'react';

const FilterBar = ({ filters, setFilters, setLayout, layout }) => {
  const types = ['All', 'Apartments', 'Shared', 'Townhouse', 'House'];
  const locations = ['Canberra', 'Braddon', 'Kingston', 'University'];

  return (
    <div className="w-full space-y-2">
      <div className="flex gap-2 flex-wrap">
        {types.map((type) => (
          <button
            key={type}
            className={`px-4 py-2 rounded-full border ${filters.type === type ? 'bg-blue-500 text-white' : 'bg-white text-black'}`}
            onClick={() => setFilters((prev) => ({ ...prev, type }))}
          >
            {type}
          </button>
        ))}
      </div>

      <div className="flex gap-4 flex-wrap items-center">
        <input
          type="text"
          placeholder="Search by title..."
          className="border px-3 py-2 rounded w-60"
          value={filters.search}
          onChange={(e) => setFilters({ ...filters, search: e.target.value })}
        />

        <select
          className="border px-3 py-2 rounded"
          value={filters.location}
          onChange={(e) => setFilters({ ...filters, location: e.target.value })}
        >
          <option value="">All Locations</option>
          {locations.map((loc) => (
            <option key={loc} value={loc}>{loc}</option>
          ))}
        </select>

        <input
          type="range"
          min="0"
          max="5000"
          step="100"
          value={filters.maxPrice}
          onChange={(e) => setFilters({ ...filters, maxPrice: parseInt(e.target.value) })}
        />
        <span className="text-sm">Max Price: ${filters.maxPrice}</span>

        <div className="flex gap-2">
          <button onClick={() => setLayout('grid')} className={`px-3 py-1 border rounded ${layout === 'grid' ? 'bg-blue-500 text-white' : ''}`}>
            Grid
          </button>
          <button onClick={() => setLayout('list')} className={`px-3 py-1 border rounded ${layout === 'list' ? 'bg-blue-500 text-white' : ''}`}>
            List
          </button>
          <button onClick={() => setLayout('map')} className={`px-3 py-1 border rounded ${layout === 'map' ? 'bg-blue-500 text-white' : ''}`}>
            Map
          </button>
        </div>
      </div>
    </div>
  );
};

export default FilterBar;