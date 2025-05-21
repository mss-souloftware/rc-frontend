'use client';

import React, { useEffect, useState } from 'react';
import ListView from '@/components/ListProperty/ListView';
import GridView from '@/components/ListProperty/GridView';
import MapView from '@/components/ListProperty/MapView';
import Pagination from '@/components/ListProperty/Pagination';

const RentPage = () => {
  const [viewType, setViewType] = useState('list');
  const [currentPage, setCurrentPage] = useState(1);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const itemsPerPage = 6;

  useEffect(() => {
    fetch('/api/properties')
      .then((res) => {
        if (!res.ok) throw new Error('Network response was not ok');
        return res.json();
      })
      .then((json) => {
        setData(json);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  const totalPages = Math.ceil(data.length / itemsPerPage);

  const paginatedData =
    viewType === 'map'
      ? data
      : data.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  useEffect(() => {
    setCurrentPage(1);
  }, [viewType]);

  if (loading) return <div className="text-center mt-10">Loading properties...</div>;

  if (error)
    return (
      <div className="text-center mt-10 text-red-600">
        Error loading properties: {error}
      </div>
    );

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-center space-x-4 mb-6">
        {['list', 'grid', 'map'].map((type) => (
          <button
            key={type}
            onClick={() => setViewType(type)}
            className={`px-4 py-2 rounded border ${
              viewType === type ? 'border-blue-600 text-blue-600 font-semibold' : 'border-gray-300'
            }`}
          >
            {type.charAt(0).toUpperCase() + type.slice(1)}
          </button>
        ))}
      </div>

      {viewType === 'list' && <ListView data={paginatedData} />}
      {viewType === 'grid' && <GridView data={paginatedData} />}
      {viewType === 'map' && <MapView data={paginatedData} />}

      {viewType !== 'map' && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={(page) => {
            if (page >= 1 && page <= totalPages) setCurrentPage(page);
          }}
        />
      )}
    </div>
  );
};

export default RentPage;
