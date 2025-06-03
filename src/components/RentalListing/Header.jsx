import React from 'react'
import LatestCard from './LatestCard'

export default function RLHeader() {
    return (
        <div className='flex flex-col md:flex-row md:items-center justify-between gap-5 mt-6'>
            <div>
                <span className='uppercase'>Apartment for rent in</span>
                <h2 className='text-4xl font-semibold text-[#21232F] my-4'>Canberra, CBR</h2>
                <p className='text-[#74787F]'>✨ 6 new properties just added in the last 24 hours </p>
            </div>
            <div className='flex flex-col md:flex-row md:justify-between gap-5'>
                <LatestCard />
                <LatestCard />
            </div>
        </div>
    )
}
