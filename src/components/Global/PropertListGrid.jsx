"use client";
import React, { useState } from 'react';
import PropertyListCard from './PropertyListCard';
import Pagination from './Pagination';
import listings from '@/data/properties.json';

export default function PropertyListGrid({ title, gridSet, limit = 6 }) {
    const [currentPage, setCurrentPage] = useState(1);

    const totalPages = Math.ceil(listings.length / limit);

    const paginatedListings = listings.slice(
        (currentPage - 1) * limit,
        currentPage * limit
    );

    // Map column count to Tailwind grid class
    const colClasses = {
        1: 'grid-cols-1',
        2: 'grid-cols-2',
        3: 'grid-cols-3',
        4: 'grid-cols-4'
    };

    // Construct responsive column class string from gridSet prop
    const responsiveCols = `
        grid 
        ${colClasses[gridSet?.[3]] || ''} 
        sm:${colClasses[gridSet?.[2]] || ''} 
        md:${colClasses[gridSet?.[1]] || ''} 
        lg:${colClasses[gridSet?.[0]] || ''} 
        gap-6
    `;

    return (
        <div>
            <h2 className="md:text-2xl sm:text-xl text-md font-semibold text-gray-800 md:mb-5 mb-2 md:text-left text-center">
                {title}
            </h2>

            <div className={responsiveCols}>
                {paginatedListings.map((property, index) => (
                    <PropertyListCard key={index} {...property} />
                ))}
            </div>

            {totalPages > 1 && (
                <Pagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPageChange={setCurrentPage}
                />
            )}
        </div>
    );
}
