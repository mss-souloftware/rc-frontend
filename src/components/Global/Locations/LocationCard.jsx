import Image from 'next/image'
import React from 'react'

export default function LocationCard({ imageUrl, title }) {
    return (
        <div>
            <div className='relative'>
                <div className="w-full xl:h-[240px] h-[200px] overflow-hidden">
                    <Image
                        src={imageUrl}
                        alt={title}
                        fill
                        className="object-cover rounded-2xl"
                    />
                </div>
            </div>
            <p className='font-semibold text-gray-800 mt-2 xl:text-lg text-md'>{title}</p>
        </div>
    )
}
