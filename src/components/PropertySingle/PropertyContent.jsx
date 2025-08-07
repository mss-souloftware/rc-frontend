import React from 'react'

export default function PropertyContent({ data }) {
    return (
        <div>
            <span className='text-green-600 uppercase'>{data.type}</span>
            <h1 className='text-4xl text-[#1A2349] mt-4'>{data.name}</h1>
            
        </div>
    )
}
