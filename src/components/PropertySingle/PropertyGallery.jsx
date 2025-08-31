"use client";

import { useState } from "react";
import Image from "next/image";

const images = [
    "/samples/1.jpg",
    "/samples/2.jpg",
    "/samples/3.jpg",
    "/samples/4.jpg",
    "/samples/5.jpg",
    "/samples/6.jpg",
];

export default function PropertyGallery() {
    const [selectedImage, setSelectedImage] = useState(null);

    return (
        <div className="grid grid-cols-5 gap-2">
            {/* Main Large Image */}
            <div
                className="col-span-3 cursor-pointer"
                onClick={() => setSelectedImage(images[0])}
            >
                <Image
                    src={images[0]}
                    alt="Property"
                    width={800}
                    height={600}
                    className="w-full h-full object-cover rounded-lg"
                />
            </div>

            {/* Right Thumbnails */}
            <div className="col-span-2 grid grid-cols-2 gap-2">
                {images.slice(1, 5).map((img, i) => (
                    <div
                        key={i}
                        className="cursor-pointer relative"
                        onClick={() => setSelectedImage(img)}
                    >
                        <Image
                            src={img}
                            alt={`Property ${i}`}
                            width={400}
                            height={300}
                            className="w-full h-full object-cover rounded-lg"
                        />

                        {/* Overlay on last thumbnail */}
                        {i === 3 && (
                            <div className="absolute inset-0 bg-black/50 flex items-center justify-center text-white font-semibold text-lg rounded-lg">
                                Show All Photos
                            </div>
                        )}
                    </div>
                ))}
            </div>

            {/* Modal / Lightbox */}
            {selectedImage && (
                <div
                    className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
                    onClick={() => setSelectedImage(null)}
                >
                    <Image
                        src={selectedImage}
                        alt="Selected"
                        width={1200}
                        height={800}
                        className="max-h-[90vh] max-w-[90vw] object-contain rounded-lg"
                    />
                </div>
            )}
        </div>
    );
}
