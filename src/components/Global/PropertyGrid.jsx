"use client";
import React from 'react';
import PropertyCard from "./PropertyCard";
import Image from 'next/image';
import { SwiperSlide, Swiper as SwiperComponent } from 'swiper/react';
import { Navigation, Pagination, A11y } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Add custom styles for Swiper navigation
import { useEffect } from 'react';

export default function PropertyGrid() {
    // Add custom CSS for Swiper navigation buttons
    useEffect(() => {
        // Hide default Swiper navigation arrows
        const style = document.createElement('style');
        style.innerHTML = `
            .swiper-button-next::after, 
            .swiper-button-prev::after {
                display: none;
            }
            .property-swiper {
                position: relative;
                padding: 10px 0;
            }
        `;
        document.head.appendChild(style);
        
        return () => {
            document.head.removeChild(style);
        };
    }, []);
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
      
    ];

    return (
        <div className="container mx-auto px-5 sm:py-[40px] pb-0 pt-[40px]">
              <h2 className="md:text-2xl sm:text-xl text-md font-semibold text-gray-800 md:mb-5 mb-2 md:text-left text-center">Just Added </h2>
            {/* Swiper Component */}
            <SwiperComponent
                modules={[Navigation, Pagination, A11y]}
                spaceBetween={20}
                slidesPerView={1}
                navigation={{
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                }}
                pagination={false}
                loop={true}
                direction={'horizontal'}
                className="property-swiper"
                breakpoints={{
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 3,
                        spaceBetween: 20,
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 30,
                    },
                    1100: {
                        slidesPerView: 4,
                        spaceBetween: 30,
                    }
                }}
            >
                {listings.map((property, index) => (
                    <SwiperSlide key={index}>
                        <PropertyCard {...property} />
                    </SwiperSlide>
                ))}
            </SwiperComponent>
            
            {/* Custom navigation arrows */}
            <div className="flex justify-between items-center mt-6 px-2">
                <div className="swiper-button-prev flex items-center justify-center w-10 h-10 bg-white shadow-md rounded-full cursor-pointer">
                    <Image src="/global/left.svg" width={8} height={8} alt="Previous" />
                </div>
                <div className="swiper-button-next flex items-center justify-center w-10 h-10 bg-white shadow-md rounded-full cursor-pointer">
                    <Image src="/global/right.svg" width={8} height={8} alt="Next" />
                </div>
            </div>
            
           
        </div>
    );
}