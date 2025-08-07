import Image from "next/image";
import { Button } from "@/components/ui/button";
import { BadgeCheck, MapPin, } from "lucide-react";

export default function ProfileHeader() {
    return (
        <div className="w-full p-6 rounded-xl border border-[#F1F3F7] bg-white flex items-center justify-between mt-10">
            <div className="flex gap-4">
                <Image
                    src="/global/profile.jpg"
                    alt="Antoni Francki"
                    width={130}
                    height={130}
                    className="rounded-full object-cover"
                />
                <div className="space-y-1">
                    <div className="flex items-center gap-2">
                        <h2 className="text-2xl font-semibold">Antoni Francki</h2>
                        <BadgeCheck className="w-5 h-5 text-blue-500" />
                    </div>
                    <p className="text-md text-gray-600 flex items-center my-2">
                        <MapPin className="w-5 h-5" />
                        Independent Property Group North – Lyneham
                    </p>
                    <p className="text-md text-gray-500">
                        Serving Canberra rentals for over 12 years
                    </p>
                    <div className="flex items-center gap-1 text-md text-gray-700 mt-3">
                        <span className="font-bold">12</span>Active rentals
                        <span className="font-bold ml-4">45</span>All-time
                    </div>
                </div>
            </div>

            <div className="flex items-stretch gap-3">
                <Button variant="ghostBorder" className="p-[14px]">
                    <svg width="20" height="5" viewBox="0 0 20 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect y="0.5" width="4" height="4" rx="2" fill="black" />
                        <rect x="8" y="0.5" width="4" height="4" rx="2" fill="black" />
                        <rect x="16" y="0.5" width="4" height="4" rx="2" fill="black" />
                    </svg>
                </Button>
                <Button variant="ghostBorder" className="w-full py-3 px-4 whitespace-nowrap">
                    Schedule Viewing
                </Button>
                <Button variant="blueGreen" className="w-full py-3 px-4 whitespace-nowrap">
                    Get in touch
                </Button>
            </div>
        </div>
    );
}
