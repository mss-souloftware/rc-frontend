import React from 'react'
import PropertyCard from "./PropertyCard";
import Image from 'next/image';

export default function PropertyGrid() {
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
        },
    ];

    return (
        <div className="container mx-auto px-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:gap-8 gap-5">
                {listings.map((property, index) => (
                    <PropertyCard key={index} {...property} />
                ))}
            </div>

            <div className="flex justify-center my-12">
                <button className="bg-[#1A1F3B] text-white px-8  text-sm py-3 rounded-full font-medium flex items-center gap-2 hover:bg-green-600">
                    See More <span>
                        <Image src="/global/right.svg" width={8} height={8} alt='See More' />
                    </span>
                </button>
            </div>
        </div>
    );
}
