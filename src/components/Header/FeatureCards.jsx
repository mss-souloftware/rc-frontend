import React from 'react'

export default function FeatureCards() {
    return (
        <div className="w-full md:py-16 py-10">
            <div className="container mx-auto px-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Card 1 */}
                    <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col md:items-start items-center md:space-y-4 space-y-2">
                        <div className="w-20 h-20">
                            <img src="/global/featured1.svg" alt="List Property" className="w-full h-full object-contain" />
                        </div>
                        <h3 className="xl:text-3xl lg:text-2xl text-md font-medium text-gray-800 md:text-left text-center">List your property in minutes.</h3>
                        <button className="bg-[#1A1F3B] text-white px-7 text-sm py-3 mt-5 inline-block rounded-full font-medium shadow-sm hover:bg-green-600">
                            List Your Property
                        </button>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col md:items-start items-center md:space-y-4 space-y-2">
                        <div className="w-20 h-20">
                            <img src="/global/featured2.svg" alt="View Listings" className="w-full h-full object-contain" />
                        </div>
                        <h3 className="xl:text-3xl lg:text-2xl text-md font-medium text-gray-800 md:text-left text-center">
                            Homes for rent <span className="text-green-600">all in one</span> platform for Canberra
                        </h3>
                        <button className="bg-[#1A1F3B] text-white text-sm px-7 py-3 mt-5 inline-block rounded-full font-medium shadow-sm hover:bg-green-600">
                            View Listings
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}