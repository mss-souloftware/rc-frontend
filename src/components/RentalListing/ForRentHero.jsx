import Image from 'next/image'
import React from 'react'
import { FaSearch } from 'react-icons/fa'

export default function ForRentHero({ title, bgPath }) {
    return (
        <section className='relative py-20'>
            <Image src={bgPath}
                alt="For Rent"
                layout="fill"
                objectFit="cover"
                priority />
            <div className="relative">
                <h1 className='text-5xl font-bold text-white text-center'>{title}</h1>
                <div className="w-full max-w-2xl mx-auto px-4 mt-10">
                    <div className="relative flex items-center bg-white/10 backdrop-blur-xs rounded-full shadow-md">
                        <input
                            type="text"
                            placeholder="Browse Canberra"
                            className="w-full py-5 pl-6 pr-14 text-white placeholder-white text-sm bg-transparent outline-none rounded-full"
                        />
                        <button className="absolute right-3 top-1 bottom-1 bg-green-600 hover:bg-green-700 text-white p-4  rounded-full flex items-center justify-center">
                            <FaSearch className="w-5 h-5" />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}
