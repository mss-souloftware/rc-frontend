import Image from 'next/image';
import { FaSearchLocation } from 'react-icons/fa';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Header from '../Header/Header';

export default function HeroSection() {
    return (
        <section className="relative w-full bg-cover bg-center pt-5 pb-30" style={{ backgroundImage: 'url(/images/canberra-bg.jpg)' }}>
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
                    <div className='flex justify-between w-full'>
                        <div>
                            <Button className="bg-green-600 hover:bg-green-700 px-6 py-3 rounded-full text-lg font-semibold">
                                Browse Canberra
                            </Button>
                        </div>
                        {/* Search Bar */}
                        <div className="   w-[30%] bg-black/20 backdrop-blur-lg rounded-full p-2 flex items-center justify-between">
                            <div className="pl-4">
                                <p className="text-sm font-medium text-white">Address</p>
                                <div className='flex items-center gap-x-1'>
                                    <span><FaSearchLocation className="mr-1 text-red-400" /></span>

                                    <span>  <input className='text-white border-0 outline-none w-full placeholder-white text-[16px]' placeholder='Enter destination' type="text" name="" id="" /></span>
                                </div>
                            </div>
                            <div className="bg-green-600 hover:bg-green-700 p-3 rounded-full cursor-pointer">
                                <FaSearchLocation className="text-white text-xl" />
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </section>
    );
}
