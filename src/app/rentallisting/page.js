import PropertyGrid from '@/components/Global/PropertyGrid'
import RLFilter from '@/components/RentalListing/Filter'
import RLHeader from '@/components/RentalListing/Header'
import NavTabs from '@/components/RentalListing/NavTabs'
import Image from 'next/image'
import React from 'react'

export default function RentalListing() {
    return (
        <div className="container mx-auto pb-5 px-5">
            <NavTabs />
            <div className='flex md:flex-row flex-col items-stretch gap-5 border-t-2 border-[#E1E9F0]'>
                <div className='md:w-9/12 w-full'>
                    <RLHeader />
                    <RLFilter />
                    <PropertyGrid
                        title="Rentals"
                        gridSet={[3, 3, 2, 2]}
                        limit={-1}
                    />
                </div>
                <div className='md:w-3/12 w-full'>
                    <div className="relative md:w-full md:h-full h-[500px]">
                        <Image
                            src="/images/mapTemp.jpg"
                            alt="Map"
                            fill
                            style={{ objectFit: 'cover', objectPosition: "top" }}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}