import React from 'react';
import Image from 'next/image';

const FutureCard = () => {
  return (
    <div className="container mx-auto md:py-8 py-0 px-5">
      <div className="flex justify-between md:flex-nowrap flex-wrap gap-y-3 space-x-4">

        {/* Card 1 - Find Your Rental */}
        <div className="flex  items-center justify-between bg-white  rounded-[16px] shadow-md md:w-1/2 w-full mr-0 md:mr-4">
          <div className="flex items-center lg:p-6 p-2">
            <div className=" flex items-center justify-center">
              <Image
                src="/images/rental-icon.png"
                alt="Find Rental"
                width={120}
                height={120}
                className="object-contain lg:w-[120px] w-auto"
              />
            </div>
            <span className="sm:ml-4 ml-2 xl:text-2xl md:text-md text-sm text-[#353743] font-semibold">Find Your Rental</span>
          </div>
          <div>
            <button className="bg-[#202A54] cursor-pointer hover:bg-[#2C9143] lg:text-[18px] sm:text-[14px] text-[12px] font-bold xl:px-[42px] md:px-[15px] px-[25px] rounded-tr-[16px] rounded-br-[16px] lg:h-[168px] sm:h-[80px] h-[60px] text-white  py-2 rounded text-sm">
              View Rentals
            </button>
          </div>
        </div>

        {/* Card 2 - List Your Property */}
        <div className="flex items-center justify-between bg-white  rounded-[16px] shadow-md md:w-1/2 w-full">
          <div className="flex items-center lg:p-6 p-2">
            <div className=" flex items-center justify-center">
              <Image
                src="/images/property-icon.png"
                alt="Find Rental"
                width={120}
                height={120}
                className="object-contain lg:w-[120px] w-auto"
              />
            </div>
            <span className="sm:ml-4 ml-2 xl:text-2xl md:text-md text-sm text-[#353743] font-semibold">List Your Property</span>
          </div>
          <div>
            <button className="bg-[#202A54] cursor-pointer hover:bg-[#2C9143] lg:text-[18px] sm:text-[14px] text-[12px] font-bold xl:px-[42px] md:px-[15px] px-[25px]  rounded-tr-[16px] rounded-br-[16px] lg:h-[168px] sm:h-[80px] h-[60px] text-white  py-2 rounded text-sm">
            List a Rental
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default FutureCard;