import PropertyGrid from '@/components/Global/PropertyGrid'
import RLFilter from '@/components/RentalListing/Filter'
import FilterCountBar from '@/components/RentalListing/FilterCountBar'
import ForRentHero from '@/components/RentalListing/ForRentHero'
import RLHeader from '@/components/RentalListing/Header'
import NavTabs from '@/components/RentalListing/NavTabs'
import Image from 'next/image'
import React from 'react'

export default function ListView() {
    return (
        <div className="container mx-auto pb-5 px-5">
            <NavTabs />
            <div className='border-t-2 border-[#E1E9F0] mb-5'></div>
            <ForRentHero />
            <FilterCountBar />
        </div>
    )
}
