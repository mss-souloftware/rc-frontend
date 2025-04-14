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
        <div className="container mx-auto">
            <h2 className="text-2xl font-semibold text-gray-800 mb-8">Popular Suburbs</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {listings.map((location, index) => (
                    <LocationCard key={index} {...location} />
                ))}
            </div>
        </div>
    )
}
