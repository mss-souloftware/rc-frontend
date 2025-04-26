import Link from 'next/link'
import React from 'react'

export default function Nav() {
    return (
        <nav className="flex lg:items-center space-x-8 space-y-3 lg:flex-row flex-col font-medium lg:text-white text-black">
            <Link href="/" className="hover:text-green-600">Homes</Link>
            <Link href="/rent" className="hover:text-green-600">Rent</Link>
            <Link href="/tenants" className="hover:text-green-600">For Tenants</Link>
            <Link href="/agents" className="hover:text-green-600">For Agents</Link>
        </nav>

    )
}
