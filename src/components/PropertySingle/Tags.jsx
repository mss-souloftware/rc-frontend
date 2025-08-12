import Image from 'next/image';
import React from 'react'

export default function Tags({ data }) {
    let tags = data.tags;
    return (
        <ul className='flex items-center flex-wrap gap-3 mt-10'>
            {tags.map((tag, index) => (
                <li className={`flex items-center gap-2 p-2 border border-[#EEEEF3] rounded-full`} style={{ backgroundColor: tag.color }}>
                    <Image src={tag.icon} width={20} height={20} alt={tag.title} />
                    <span>{tag.title}</span>
                </li>
            ))}
        </ul>
    )
}
