import React from 'react'
import LocationCard from './LocationCard';

export default function LocationGrid() {
    const listings = [
        {
            imageUrl: "/locations/location.jpg",
            title: "Woden Valley"

        },
        {
            imageUrl: "/locations/location.jpg",
            title: "Woden Valley"

        },
        {
            imageUrl: "/locations/location.jpg",
            title: "Woden Valley"

        },
        {
            imageUrl: "/locations/location.jpg",
            title: "Woden Valley"

        },
        {
            imageUrl: "/locations/location.jpg",
            title: "Woden Valley"

        },
        {
            imageUrl: "/locations/location.jpg",
            title: "Woden Valley"

        },
        {
            imageUrl: "/locations/location.jpg",
            title: "Woden Valley"

        },
        {
            imageUrl: "/locations/location.jpg",
            title: "Woden Valley"

        },
        
    ];
    return (
        <div className="container mx-auto px-5">
            <h2 className="text-2xl font-semibold text-gray-800 mb-8 md:text-left text-center">Popular Suburbs</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 md:gap-8 gap-5 md:text-left text-center">
                {listings.map((location, index) => (
                    <LocationCard key={index} {...location} />
                ))}
            </div>
        </div>
    )
}
