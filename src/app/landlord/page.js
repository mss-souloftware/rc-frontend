import React from 'react'
import ProfileHeader from '@/components/LandlordProfile/ProfileHeader'
import ContactBadge from '@/components/LandlordProfile/ContactBadge'
import FilterCountBar from '@/components/RentalListing/FilterCountBar'
import PropertyGrid from '@/components/Global/PropertyGrid'

export default function page() {
    return (
        <div className="container mx-auto pb-5">
            <ProfileHeader />
            <ContactBadge />
            <div className='mt-10'>
                <FilterCountBar title="Antoni Properties" />
            </div>

            <div className="my-5">
                <PropertyGrid
                    gridSet={[3, 3, 2, 1]}
                    limit={9}
                    showPagination={true}
                />
            </div>
        </div>
    )
}
