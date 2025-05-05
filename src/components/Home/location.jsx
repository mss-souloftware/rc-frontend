import React from 'react';
import { SwiperSlide, Swiper as SwiperComponent } from 'swiper/react';
import Image from 'next/image';

const Location = () => {
  // Hardcoded JSON data for locations
  const locations = [
    { name: "Inner South", imageUrl: "/images/l1.png" },
    { name: "Tuggeranong", imageUrl: "/images/l2.png" },
    { name: "City", imageUrl: "/images/l3.png" },
    { name: "Gungahlin", imageUrl: "/images/l4.png" }
  ];

  return (
    <div className="container px-5 pt-[32px] lg:pb-[60px] pb-[20px] mx-auto ">


      {/* Swiper Container */}
      <SwiperComponent
        spaceBetween={20} // Default space between cards
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        loop={true}
        breakpoints={{
          640: {
            slidesPerView: 2, // 2 items per view on small screens
            spaceBetween: 20, // Space between on small screens
          },
          768: {
            slidesPerView: 3, // 3 items per view on medium screens
            spaceBetween: 20, // Space between on tablet
          },
          1024: {
            slidesPerView: 4, // 4 items per view on large screens
            spaceBetween: 30, // Space between on large screens
          }
        }}
      >
        {locations.map((location, index) => (
          <SwiperSlide key={index}>
            <div className="flex-shrink-0 ">
              <div className="cursor-pointer ">
                {/* Image component from Next.js */}
                <Image
                  src={location.imageUrl}
                  alt={location.name}
                  width={300}  // Specify width for optimization
                  height={190} // Specify height for optimization
                  className="w-full rounded-[12px] object-cover"
                />
                <div className="p-4">
                  <h3 className="sm:text-xl text-md md:text-left text-center font-medium">{location.name}</h3>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </SwiperComponent>
    </div>
  );
};

export default Location;
