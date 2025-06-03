"use client";
import React from 'react';
import PropertyCard from "./PropertyCard";

export default function PropertyGrid({ title, gridSet, limit }) {
    const listings = [
        {
            imageUrl: "/properties/house1.jpg",
            price: "650",
            address: "503/16 Lonsdale Street, Braddon",
            bedrooms: 2,
            bathrooms: 1,
            parks: 2,
            agency: "Independent Property Group",
            agent: "Antoni Francki",
            type: "Apartment",
        },
        {
            imageUrl: "/properties/a2.png",
            price: "650",
            address: "503/16 Lonsdale Street, Braddon",
            bedrooms: 2,
            bathrooms: 1,
            parks: 2,
            agency: "Independent Property Group",
            agent: "Antoni Francki",
            type: "Shared",
        },
        {
            imageUrl: "/properties/a3.png",
            price: "650",
            address: "503/16 Lonsdale Street, Braddon",
            bedrooms: 2,
            bathrooms: 1,
            parks: 2,
            agency: "Independent Property Group",
            agent: "Antoni Francki",
            type: "Apartment",
        },
        {
            imageUrl: "/properties/a4.png",
            price: "650",
            address: "503/16 Lonsdale Street, Braddon",
            bedrooms: 2,
            bathrooms: 1,
            parks: 2,
            agency: "Independent Property Group",
            agent: "Antoni Francki",
            type: "Shared",
        },
        {
            imageUrl: "/properties/a4.png",
            price: "650",
            address: "503/16 Lonsdale Street, Braddon",
            bedrooms: 2,
            bathrooms: 1,
            parks: 2,
            agency: "Independent Property Group",
            agent: "Antoni Francki",
            type: "Shared",
        },
        {
            imageUrl: "/properties/house1.jpg",
            price: "650",
            address: "503/16 Lonsdale Street, Braddon",
            bedrooms: 2,
            bathrooms: 1,
            parks: 2,
            agency: "Independent Property Group",
            agent: "Antoni Francki",
            type: "Apartment",
        },
        {
            imageUrl: "/properties/a2.png",
            price: "650",
            address: "503/16 Lonsdale Street, Braddon",
            bedrooms: 2,
            bathrooms: 1,
            parks: 2,
            agency: "Independent Property Group",
            agent: "Antoni Francki",
            type: "Shared",
        },
    ];

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
                {listings.slice(0, limit).map((property, index) => (
                    <PropertyCard key={index} {...property} />
                ))}
            </div>
        </div>
    );
}
