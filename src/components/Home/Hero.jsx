import Image from 'next/image';
import { FaSearchLocation } from 'react-icons/fa';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Header from '../Header/Header';

export default function HeroSection() {
    return (
        <section className="relative w-full bg-cover bg-center pt-5 pb-40" style={{ backgroundImage: 'url(/images/canberra-bg.jpg)' }}>
            <div className="container mx-auto">
                <Header />
                {/* Hero Content */}
                <div className="relative z-10 flex flex-col items-start justify-center h-full text-white mt-52">
                    <Badge className="bg-white/20 mb-4 px-4 py-1 rounded-full backdrop-blur-sm">
                        <span className="text-white text-sm flex"><Image className='mr-2' src="/global/trusted.svg" width={15} height={15} alt='Trusted' /> Trusted By Renters. Built For Canberra.</span>
                    </Badge>
                    <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-2">
                        Find Rent In Canberra
                    </h1>
                    <p className="text-xl mb-6">rent-canberra.com.au</p>
                    <Button className="bg-green-600 hover:bg-green-700 px-6 py-3 rounded-full text-lg font-semibold">
                        Browse Canberra
                    </Button>
                </div>

                {/* Search Bar */}
                <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 w-[90%] md:w-2/3 lg:w-1/2 bg-black/50 backdrop-blur-lg rounded-full p-2 flex items-center justify-between">
                    <div className="pl-4">
                        <p className="text-sm font-medium text-white">Address</p>
                        <p className="text-white text-xs flex items-center">
                            <FaSearchLocation className="mr-1 text-red-400" /> Enter destination
                        </p>
                    </div>
                    <div className="bg-green-600 hover:bg-green-700 p-3 rounded-full cursor-pointer">
                        <FaSearchLocation className="text-white text-xl" />
                    </div>
                </div>
            </div>
        </section>
    );
}
