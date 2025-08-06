'use client';

import { useState } from 'react';
import { FaFilter, FaTh, FaBars } from 'react-icons/fa';

const areas = ['Tuggeranong', 'Gungahlin', 'Canberra City', 'Kingston'];

export default function FilterCountBar() {
    const [view, setView] = useState('grid'); // 'grid' or 'list'
    const [sort, setSort] = useState('newest');

    return (
        <div className="flex flex-wrap items-center justify-between gap-4 py-4 mt-3 bg-white">
            {/* Left: Result count */}
            <div className="text-2xl font-semibold text-[#1A1A1A] whitespace-nowrap">
                32 Results Found
            </div>

            {/* Right: Filters */}
            <div className="flex flex-wrap items-center gap-2">
                {/* Area Tags */}
                {areas.map((area) => (
                    <button
                        key={area}
                        className="px-4 py-2 text-md font-medium text-[#202A54]  border border-[#ECECF2] rounded-lg hover:bg-[#F2F4F8] transition"
                    >
                        {area}
                    </button>
                ))}

                {/* All Filter Button */}
                <button className="flex items-center gap-2 px-4 py-2 text-md font-medium text-[#202A54] bg-[#F2F4F8] border border-[#ECECF2] rounded-lg hover:bg-[#E4E7EC] transition">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4.5 7H19.5M7 12H17M10 17H14" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    All Filter
                </button>

                {/* Sort Dropdown */}
                <div className="flex flex-col items-start pl-2 pr-8 py-1 bg-[#F2F4F8] border border-[#ECECF2] rounded-lg ">
                    <span className="text-xs text-[#6B7280]">Sort by:</span>
                    <select
                        value={sort}
                        onChange={(e) => setSort(e.target.value)}
                        className="bg-transparent text-sm text-[#202A54] focus:outline-none"
                    >
                        <option value="newest">Newest</option>
                        <option value="price-asc">Price ↑</option>
                        <option value="price-desc">Price ↓</option>
                    </select>
                </div>

                {/* View Toggler */}
                <div className="flex items-center gap-1 border border-[#ECECF2] rounded-lg  overflow-hidden">
                    <button
                        className={`p-2 ${view === 'grid' ? 'bg-[#F2F4F8]' : 'bg-transparent'} text-[#202A54]`}
                        onClick={() => setView('grid')}
                    >

                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8.25 13.75H5.75C4.64543 13.75 3.75 14.6454 3.75 15.75V18.25C3.75 19.3546 4.64543 20.25 5.75 20.25H8.25C9.35457 20.25 10.25 19.3546 10.25 18.25V15.75C10.25 14.6454 9.35457 13.75 8.25 13.75Z" stroke="#202A54" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M18.25 13.75H15.75C14.6454 13.75 13.75 14.6454 13.75 15.75V18.25C13.75 19.3546 14.6454 20.25 15.75 20.25H18.25C19.3546 20.25 20.25 19.3546 20.25 18.25V15.75C20.25 14.6454 19.3546 13.75 18.25 13.75Z" stroke="#202A54" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M8.25 3.75H5.75C4.64543 3.75 3.75 4.64543 3.75 5.75V8.25C3.75 9.35457 4.64543 10.25 5.75 10.25H8.25C9.35457 10.25 10.25 9.35457 10.25 8.25V5.75C10.25 4.64543 9.35457 3.75 8.25 3.75Z" stroke="#202A54" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M18.25 3.75H15.75C14.6454 3.75 13.75 4.64543 13.75 5.75V8.25C13.75 9.35457 14.6454 10.25 15.75 10.25H18.25C19.3546 10.25 20.25 9.35457 20.25 8.25V5.75C20.25 4.64543 19.3546 3.75 18.25 3.75Z" stroke="#202A54" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>

                    </button>
                    <button
                        className={`p-2 ${view === 'list' ? 'bg-[#F2F4F8]' : 'bg-transparent'} text-[#202A54]`}
                        onClick={() => setView('list')}
                    >

                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.25 4.49971H21.25M7.25 3.05371L4.357 5.94571L2.75 4.33971M10.25 11.9997H21.25M7.25 10.5537L4.357 13.4457L2.75 11.8397M10.25 19.4997H21.25M7.25 18.0537L4.357 20.9457L2.75 19.3397" stroke="#576170" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>

                    </button>
                </div>
            </div>
        </div>
    );
}
