'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

export default function Nav() {
    const pathname = usePathname()

    const links = [
        { href: '/', label: 'Homes' },
        { href: '/rent', label: 'For Tenants' },
        { href: '/tenants', label: 'For Agents' },
        
        { href: '/contact', label: 'Contact Us' },
    ]

    return (
        <nav className="flex lg:items-center justify-center space-x-8 space-y-5 gap-y-3 lg:flex-row flex-col font-medium">
            {links.map((link) => (
                <Link
                    key={link.href}
                    href={link.href}
                    className={`mb-0 text-[#999EA4] hover:text-[#202A54] ${
                        pathname === link.href ? '!text-[#202A54] font-semibold' : ''
                    }`}
                >
                    {link.label}
                </Link>
            ))}
        </nav>
    )
}
