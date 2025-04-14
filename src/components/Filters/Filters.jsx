"use client";
import { React, useState } from 'react';
import { List, LayoutGrid, Filter } from 'lucide-react';

export default function ListingHeader() {
    const [viewType, setViewType] = useState('grid');
    const [sortBy, setSortBy] = useState('Newest');

    return (
        <div className="w-full pb-16">
            <div className="container mx-auto">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between py-4 gap-4">
                    {/* Title */}
                    <h2 className="text-2xl font-semibold text-gray-800">For rent</h2>

                    {/* Controls */}
                    <div className="flex flex-wrap gap-3 items-center">
                        {/* Filter Button */}
                        <button className="flex items-center gap-2 bg-white text-sm font-medium text-gray-800 border border-gray-200 rounded-xl px-4 py-2 shadow-sm hover:bg-gray-50">
                            <Filter className="w-4 h-4" />
                            Filter
                        </button>

                        {/* Sort Dropdown */}
                        <div className="flex items-center gap-2 bg-white border border-gray-200 rounded-xl px-4 py-2 shadow-sm text-sm">
                            <span className="text-gray-500">Sort by:</span>
                            <select
                                value={sortBy}
                                onChange={(e) => setSortBy(e.target.value)}
                                className="bg-transparent focus:outline-none font-medium text-gray-800"
                            >
                                <option value="Newest">Newest</option>
                                <option value="PriceLow">Price (Low to High)</option>
                                <option value="PriceHigh">Price (High to Low)</option>
                            </select>
                        </div>

                        {/* View Toggle */}
                        <div className="flex gap-2">
                            <button
                                className={`p-2 rounded-xl border ${viewType === 'grid' ? 'bg-[#1A1F3B] text-white' : 'bg-white text-gray-800 border-gray-200'} shadow-sm`}
                                onClick={() => setViewType('grid')}
                            >
                                <LayoutGrid className="w-4 h-4" />
                            </button>
                            <button
                                className={`p-2 rounded-xl border ${viewType === 'list' ? 'bg-[#1A1F3B] text-white' : 'bg-white text-gray-800 border-gray-200'} shadow-sm`}
                                onClick={() => setViewType('list')}
                            >
                                <List className="w-4 h-4" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
