import NavTabs from '@/components/RentalListing/NavTabs'
import React, { Suspense } from 'react'

export default function RentalGrid() {
    return (
        <div className="container mx-auto pb-5">
            <Suspense fallback={<div>Loading...</div>}>
                <NavTabs />
            </Suspense>
        </div>
    )
}
