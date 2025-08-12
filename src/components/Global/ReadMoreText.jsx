"use client"
import { useState } from "react";

export default function ReadMoreText({ text }) {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <div>
            <div
                className={`text-[#78808B] transition-all duration-300 ${isExpanded ? "" : "line-clamp-4"
                    }`}
            >
                {text}
            </div>

            <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="mt-2 text-[#3A4D9D] hover:underline text-sm font-medium"
            >
                {isExpanded ? "Read less ▲" : "Read more ▼"}
            </button>
        </div>
    );
}
