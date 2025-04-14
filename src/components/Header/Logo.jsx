import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Logo() {
    return (
        <Link href="/" className="shrink-0">
            <Image src="/global/logo.svg" width={250} height={40} alt="Logo" />
        </Link>
    )
}
