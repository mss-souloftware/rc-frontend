'use client';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import React from 'react';

export default function NavTabs() {
    const searchParams = useSearchParams();
    const currentView = searchParams.get('view') || 'list';

    const tabClass = (view) =>
        `py-1 px-4 text-lg border border-[#ECECF2] ${currentView === view
            ? 'bg-[#F2F4F8] text-[#202A54]'
            : 'bg-white text-[#202A54]'
        }`;

    return (
        <div className="flex items-center justify-center my-12">
            <Link
                href={{ pathname: '/rentallisting', query: { view: 'map' } }}
                className={`${tabClass('map')} rounded-md border-r-0 rounded-r-none`}
            >
                Map
            </Link>
            <Link
                href={{ pathname: '/rentallisting', query: { view: 'list' } }}
                className={tabClass('list')}
            >
                List
            </Link>
            <Link
                href={{ pathname: '/rentallisting', query: { view: 'grid' } }}
                className={`${tabClass('grid')} rounded-md border-l-0 rounded-l-none`}
            >
                Grid
            </Link>
        </div>
    );
}
