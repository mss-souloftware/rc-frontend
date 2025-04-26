"use client";
import React from 'react'
import { Heart } from "lucide-react";
import Image from "next/image";

export default function PropertyCard({
    imageUrl,
    price,
    address,
    bedrooms,
    bathrooms,
    parks,
    agency,
    agent,
}) {
    return (
        <div className="bg-white rounded-2xl hover:shadow-lg transition">
            {/* Image + Favorite */}
            <div className="relative w-full xl:h-[280px] h-[200px] rounded-2xl overflow-hidden">
                <Image
                    src={imageUrl}
                    alt="Property"
                    fill
                    className="object-cover"
                />
                <button className="absolute top-3 right-3 bg-white/40 p-1.5 rounded-full">
                    <Heart className="w-6 h-6 text-white" />
                </button>
            </div>

            {/* Details */}
            <div className="xl:p-4 p-2 pt-3 text-sm text-gray-800 md:text-left text-center">
                <p className="font-bold xl:text-xl text-md">${price} <span className="text-sm font-normal text-gray-400">/ week</span></p>
                <p className="text-gray-600 text-sm xl:text-base md:py-1 py-2">{address}</p>

                <div className="flex xl:gap-4 gap-2 flex-wrap text-gray-600 mt-2">
                    <span className='flex gap-1.5'><Image src="/global/bedroom.svg" width={15} height={15} alt='Bedrooms' /> {bedrooms} Bedrooms</span>
                    <span className='flex gap-1.5'><Image src="/global/bath.svg" width={15} height={15} alt='Bath' /> {bathrooms} Bath</span>
                    <span className='flex gap-1.5'><Image src="/global/parking.svg" width={15} height={15} alt='Parking' /> {parks} Parking</span>
                </div>
                <div className='border border-gray-100 mt-4'></div>
                <div className="flex items-center gap-2 mt-4 text-xs text-gray-500">
                    <div className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center text-[10px] font-bold text-gray-400">
                        {agent.split(" ").map(n => n[0]).join("")}
                    </div>
                    <span className='md:text-[12px] text-[10px]'>{agency} | {agent}</span>
                </div>
            </div>
        </div>
    );
}
