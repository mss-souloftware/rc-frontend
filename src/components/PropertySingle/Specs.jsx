import React from 'react'
import Image from 'next/image'

export default function Specs({ data }) {
    return (
        <div className="w-fit flex items-center bg-[#FAFAFA] border border-[#F2F2F5] rounded-lg gap-2 mt-5">
            <span className='flex gap-1.5 p-2'><Image src="/global/bedroom.svg" width={20} height={20} alt='Bedrooms' /> {data.bedrooms} Bedrooms</span>
            <span className='flex gap-1.5 p-2 border-r border-l border-[#EEEEF3]'><Image src="/global/bath.svg" width={20} height={20} alt='Bath' /> {data.bathrooms} Bath</span>
            <span className='flex gap-1.5 p-2'><Image src="/global/parking.svg" width={20} height={20} alt='Parking' /> {data.parks} Parking</span>
        </div>
    )
}
