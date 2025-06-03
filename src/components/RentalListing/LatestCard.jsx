import React from 'react'

export default function LatestCard() {
  return (
    <div className='bg-white shadow-xl/20 py-4 px-6 rounded-2xl bg-white border border-[#EFEFF3]'>
      <span className='text-[#74787F] text-sm'>Last 24 Hours  &gt;</span>
      <div className='flex items-center justify-between my-5'>
        <h2 className='text-4xl font-semibold text-[#21232F]'>45</h2>
        <span className='inline-block bg-[#E0F3DE] text-[#4E8B48] text-sm py-1 px-2 rounded-lg'>&#129033; 15%</span>
      </div>
        <p className='border-t-2 border-[#E1E9F0] py-3'>856 new properties added</p>
    </div>
  )
}
