import PropertyListGrid from '@/components/Global/PropertListGrid'
import FilterCountBar from '@/components/RentalListing/FilterCountBar'
import ForRentHero from '@/components/RentalListing/ForRentHero'
import NavTabs from '@/components/RentalListing/NavTabs'
import React from 'react'

export default function ListView() {
    return (
        <div className="container mx-auto pb-5 px-5">
            <NavTabs />
            <div className='border-t-2 border-[#E1E9F0] mb-5'></div>
            <ForRentHero />
            <FilterCountBar />

            <PropertyListGrid />
        </div>
    )
}
