import Image from 'next/image'
import React from 'react'

export default function MapBox() {
    return (
        <div className="relative w-full h-[350px]">
            <Image
                src="/images/mapSingle.jpg"
                alt="Map location"
                fill
                className="object-cover"
            />
        </div>
    )
}
