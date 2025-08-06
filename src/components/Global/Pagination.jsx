import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function Pagination({ currentPage, totalPages, onPageChange }) {
    const getPages = () => {
        const pages = [];

        if (totalPages <= 5) {
            for (let i = 1; i <= totalPages; i++) {
                pages.push(i);
            }
        } else {
            if (currentPage <= 3) {
                pages.push(1, 2, 3, 4, '...', totalPages);
            } else if (currentPage >= totalPages - 2) {
                pages.push(1, '...', totalPages - 3, totalPages - 2, totalPages - 1, totalPages);
            } else {
                pages.push(1, '...', currentPage - 1, currentPage, currentPage + 1, '...', totalPages);
            }
        }

        return pages;
    };

    const pages = getPages();

    return (
        <div className="flex items-center justify-center gap-2 my-8">
            {/* Previous */}
            <button
                onClick={() => onPageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="w-10 h-10 rounded-lg border bg-white text-[#1A1E4F] hover:bg-gray-100 disabled:opacity-50 flex items-center justify-center"
            >
                <ChevronLeft size={18} />
            </button>

            {/* Page Numbers */}
            {pages.map((page, index) =>
                page === '...' ? (
                    <span
                        key={index}
                        className="w-10 h-10 flex items-center justify-center text-gray-400"
                    >
                        ...
                    </span>
                ) : (
                    <button
                        key={index}
                        onClick={() => onPageChange(page)}
                        className={`w-10 h-10 rounded-lg border flex items-center justify-center transition ${currentPage === page
                                ? 'bg-[#1A1E4F] text-white'
                                : 'bg-white text-[#1A1E4F] hover:bg-gray-100'
                            }`}
                    >
                        {page}
                    </button>
                )
            )}

            {/* Next */}
            <button
                onClick={() => onPageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="w-10 h-10 rounded-lg border bg-white text-[#1A1E4F] hover:bg-gray-100 disabled:opacity-50 flex items-center justify-center"
            >
                <ChevronRight size={18} />
            </button>
        </div>
    );
}
