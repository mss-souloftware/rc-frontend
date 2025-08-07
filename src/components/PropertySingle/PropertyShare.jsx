import Image from 'next/image'
import React from 'react'

export default function PropertyShare() {

    const shareAble = [
        {
            icon: "/icons/whatsapp.svg",
            name: "WhatsApp",
            title: "Share"
        },
        {
            icon: "/icons/facebook.svg",
            name: "Facebook",
            title: "Share"
        },
        {
            icon: "/icons/instagram.svg",
            name: "Instagram",
            title: "Share"
        },
        {
            icon: "/icons/link.svg",
            name: "Copy Link",
            title: "Copy Link"
        },
    ]

    return (
        <ul className='flex justify-start gap-3 mt-8 overflow-x-auto'>
            {shareAble.map((item, index) => (
                <li className='flex items-center cursor-pointer md:px-3 md:py-2 px-2 border border-[#EAEAF0] rounded-xl gap-2'>
                    <Image src={item.icon} width={20} height={20} alt={item.name} />
                    <span>
                        {item.title}
                    </span>
                </li>
            ))}
        </ul>
    )
}