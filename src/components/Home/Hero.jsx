import Image from 'next/image';
import { FaSearchLocation } from 'react-icons/fa';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Header from '../HeaderForHome/Header';

export default function HeroSection() {
    return (
        <section className="relative w-full bg-cover bg-center xl:pt-5 pt-2 lg:pb-30 pb-10" style={{ backgroundImage: 'url(/images/canberra-bg.jpg)' }}>
              <div className="absolute inset-0 bg-black md:opacity-20 opacity-30"></div>
            <div className="container px-5 mx-auto">
                <Header />
                {/* Hero Content */}
                <div className="relative z-10 flex flex-col md:items-start items-center justify-center h-full text-white lg:mt-52 md:mt-40 mt-30">
                    <Badge className="bg-white/20 mb-4 px-4 py-1 rounded-full backdrop-blur-sm">
                        <span className="text-white md:text-sm text-[10px] flex"><Image className='mr-2' src="/global/trusted.svg" width={15} height={15} alt='Trusted' /> Trusted By Renters. Built For Canberra.</span>
                    </Badge>
                    <h1 className="lg:text-4xl md:text-3xl text-2xl  xl:text-6xl font-bold leading-tight mb-2">
                        Find Rent In Canberra
                    </h1>
                    <p className="text-xl mb-6">rent-canberra.com.au</p>
                    <div className='flex justify-between w-full md:flex-row flex-col gap-y-8'>
                        <div className='md:text-left text-center'>
                            <Button className="bg-green-600 hover:bg-green-700 px-6 py-3 rounded-full text-lg font-semibold ">
                                Browse Canberra
                            </Button>
                        </div>
                        {/* Search Bar */}
                        <div className="   xl:w-[30%] lg:w-[40%] md:w-[50%] w-full bg-black/20 backdrop-blur-lg rounded-full p-2 flex items-center justify-between">
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
