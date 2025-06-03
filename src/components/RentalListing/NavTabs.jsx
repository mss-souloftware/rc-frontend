import Link from 'next/link'
import React from 'react'

export default function NavTabs() {
    return (
        <div className='flex items-center justify-center my-12'>
            <Link href="#" className='rounded-md text-[#202A54] border border-[#ECECF2] py-1 px-4 bg-[#F2F4F8] border-r-0 rounded-r-none text-lg'>
                Map
            </Link>
            <Link href="#" className='text-[#202A54] border border-[#ECECF2] py-1 px-4 text-lg'>
                List
            </Link>
            <Link href="#"  className='rounded-md text-[#202A54] border border-[#ECECF2] py-1 px-4 border-l-0 rounded-l-none text-lg'>
                Grid
            </Link>
        </div>
    )
}
