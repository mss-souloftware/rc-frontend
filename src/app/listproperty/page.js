"use client"

import Image from "next/image";
import Link from "next/link";
import Logo from "@/components/Header/Logo";
import TenantFilter from "@/components/ListProperty/TenantFilter";

export default function ListProperty() {
  return (
    <>
      
      <div className="flex flex-col min-h-screen bg-white">

        {/* Hero Section */}
        <div className="relative xl:w-full w-[95%] mx-auto h-[180px] sm:h-[200px] md:h-[224px] mt-6  xl:mt-10 px-4 sm:px-6 md:px-0">
          <div className="absolute container mx-auto inset-0 rounded-[12px] md:rounded-[16px]">
            <Image
              src="/images/property-hero.png"
              alt="Property view"
              layout="fill"
              objectFit="cover"
              priority
              className="rounded-[12px] md:rounded-[16px]"
            />
            {/* <div className="absolute container mx-auto inset-0 bg-black bg-opacity-40"></div> */}
          </div>
          <div className="relative flex items-center justify-center h-full">
            <h1 className="text-xl sm:text-3xl xl:text-4xl font-bold text-white text-center">
              List Your home for rent
            </h1>
          </div>
        </div>

        {/* As Seen On Section */}
        <section className="py-8 sm:py-10 md:py-12 container mx-auto w-full px-4 sm:px-6 ">
          <h2 className="text-xl sm:text-xl md:text-3xl text-[#222934] font-bold text-center mb-6 sm:mb-8 md:mb-12">As Seen On</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            <div className="p-2 sm:p-3 md:p-4 py-4 sm:py-5 lg:py-[36px] rounded-[12px] border-[1.5px] border-[rgba(225,233,240,0.7)] bg-[#F6F7F9] flex items-center justify-center">
              <Image src="/images/canberra-times.png" alt="The Canberra Times" width={120} height={100} objectFit="contain" className="max-w-[80px] sm:max-w-[100px] lg:max-w-[120px]" />
            </div>
            <div className="p-2 sm:p-3 md:p-4 py-4 sm:py-5 lg:py-[36px] rounded-[12px] border-[1.5px] border-[rgba(225,233,240,0.7)] bg-[#F6F7F9] flex items-center justify-center">
              <Image src="/images/riotact.png" alt="Riotact" width={100} height={100} objectFit="contain" className="max-w-[70px] sm:max-w-[85px] md:max-w-[100px]" />
            </div>
            <div className="p-2 sm:p-3 md:p-4 py-4 sm:py-5 lg:py-[36px] rounded-[12px] border-[1.5px] border-[rgba(225,233,240,0.7)] bg-[#F6F7F9] flex items-center justify-center">
              <Image src="/images/studio-canberra.png" alt="Studio Canberra" width={120} height={40} objectFit="contain" className="max-w-[80px] sm:max-w-[100px] lg:max-w-[120px]" />
            </div>
            <div className="p-2 sm:p-3 md:p-4 py-4 sm:py-5 lg:py-[36px] rounded-[12px] border-[1.5px] border-[rgba(225,233,240,0.7)] bg-[#F6F7F9] flex items-center justify-center">
              <Image src="/images/in-canberra.png" alt="In Canberra" width={120} height={40} objectFit="contain" className="max-w-[80px] sm:max-w-[100px] lg:max-w-[120px]" />
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-10 sm:py-16 lg:py-20 container mx-auto w-full px-4 sm:px-6">
          <h2 className="text-xl sm:text-xl md:text-3xl text-[#222934] font-bold text-center mb-6 sm:mb-8 md:mb-12">Why Choose Us?</h2>

          {/* Mobile view (card-style) for small screens */}
          <div className="block sm:hidden">
            <div className="space-y-6">
              {/* Feature 1 */}
              <div className="border rounded-xl overflow-hidden">
                <div className="bg-gray-100 p-4 font-bold text-[16px] border-b text-center">Listing Fee</div>
                <div className="grid grid-cols-3 divide-x">
                  <div className="p-4 bg-green-50">
                    <div className="text-center">
                      <div className="flex justify-center mb-2">
                        
                      </div>
                      <div className="font-bold text-[#4E515D]">$49.00</div>
                      <div className="text-xs text-[#4E515D]">per listing</div>
                    </div>
                  </div>
                  <div className="p-4">
                    <div className="text-center">
                      <div className="text-sm font-semibold mb-1">Zango</div>
                      <div className="font-bold text-[#4E515D]">$200+</div>
                      <div className="text-xs text-[#4E515D]">per listing</div>
                    </div>
                  </div>
                  <div className="p-4">
                    <div className="text-center">
                      <div className="text-sm font-semibold mb-1">Allhomes</div>
                      <div className="font-bold text-[#4E515D]">$300+</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="border rounded-xl overflow-hidden">
                <div className="bg-gray-100 p-4 font-bold text-[16px] border-b text-center">Ready-To-Rent Tenants</div>
                <div className="grid grid-cols-3 divide-x">
                  <div className="p-4 bg-green-50">
                    <div className="text-center">
                      <div className="flex justify-center mb-2">
                        
                      </div>
                      <div className="text-xs text-[#4E515D]">Access to 100+</div>
                      <div className="text-xs text-[#4E515D]">Ready-To-Rent tenants</div>
                    </div>
                  </div>
                  <div className="p-4">
                    <div className="text-center">
                      <div className="text-sm font-semibold mb-1">Zango</div>
                      <div className="flex justify-center">
                        <span className="w-5 h-5 rounded-full bg-[#C80000] flex items-center justify-center text-white text-xs">✕</span>
                      </div>
                      <div className="text-xs mt-1 md:mt-0 text-[#4E515D]">No</div>
                    </div>
                  </div>
                  <div className="p-4">
                    <div className="text-center">
                      <div className="text-sm font-semibold mb-1">Allhomes</div>
                      <div className="flex justify-center">
                        <span className="w-5 h-5 rounded-full bg-[#C80000] flex items-center justify-center text-white text-xs">✕</span>
                      </div>
                      <div className="text-xs mt-1 md:mt-0  text-[#4E515D]">No</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="border rounded-xl overflow-hidden">
                <div className="bg-gray-100 p-4 font-bold text-[16px] border-b text-center" >Exclusive to Canberra rentals</div>
                <div className="grid grid-cols-3 divide-x">
                  <div className="p-4 bg-green-50">
                    <div className="text-center">
                      <div className="flex justify-center mb-2">
                        
                      </div>
                      <div className="flex justify-center">
                        <span className="w-5 h-5 rounded-full bg-[#2C9143] flex items-center justify-center text-white text-xs">✓</span>
                      </div>
                      <div className="text-xs text-[#4E515D]  mt-1 md:mt-0 ">Yes</div>
                    </div>
                  </div>
                  <div className="p-4">
                    <div className="text-center">
                      <div className="text-sm font-semibold mb-1">Zango</div>
                      <div className="flex justify-center">
                        <span className="w-5 h-5 rounded-full bg-[#C80000] flex items-center justify-center text-white text-xs">✕</span>
                      </div>
                      <div className="text-xs mt-1 md:mt-0  text-[#4E515D] ">No</div>
                    </div>
                  </div>
                  <div className="p-4">
                    <div className="text-center">
                      <div className="text-sm font-semibold mb-1">Allhomes</div>
                      <div className="flex justify-center">
                        <span className="w-5 h-5 rounded-full bg-[#C80000] flex items-center justify-center text-white text-xs">✕</span>
                      </div>
                      <div className="text-xs mt-1 md:mt-0  text-[#4E515D]">No</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Feature 4 */}
              <div className="border rounded-xl overflow-hidden">
                <div className="bg-gray-100 p-4 font-bold text-[16px] border-b text-center">Exclusive to renting</div>
                <div className="grid grid-cols-3 divide-x">
                  <div className="p-4 bg-green-50">
                    <div className="text-center">
                      <div className="flex justify-center mb-2">
                        
                      </div>
                      <div className="flex justify-center">
                        <span className="w-5 h-5 rounded-full bg-[#2C9143] flex items-center justify-center text-white text-xs">✓</span>
                      </div>
                      <div className="text-xs text-[#4E515D]  mt-1 md:mt-0 ">Yes</div>
                    </div>
                  </div>
                  <div className="p-4">
                    <div className="text-center">
                      <div className="text-sm font-semibold mb-1">Zango</div>
                      <div className="flex justify-center">
                        <span className="w-5 h-5 rounded-full bg-[#C80000] flex items-center justify-center text-white text-xs">✕</span>
                      </div>
                      <div className="text-xs text-[#4E515D]  mt-1 md:mt-0 ">No</div>
                    </div>
                  </div>
                  <div className="p-4">
                    <div className="text-center">
                      <div className="text-sm font-semibold mb-1">Allhomes</div>
                      <div className="flex justify-center">
                        <span className="w-5 h-5 rounded-full bg-[#C80000] flex items-center justify-center text-white text-xs">✕</span>
                      </div>
                      <div className="text-xs text-[#4E515D]  mt-1 md:mt-0 ">No</div>
                    </div>
                  </div>
                </div>
              </div>


              {/* List Now Button */}
              <div className="flex justify-center mt-6">
                <Link className="bg-[#1c2f50] hover:bg-[#2C9143] text-white py-3 px-8 w-full sm:w-[80%] rounded-[30px] text-sm font-medium text-center" href="/list-now">
                  List Now
                </Link>
              </div>
            </div>
          </div>

          {/* Original table for larger screens */}
          <div className="hidden sm:block overflow-x-auto">
            <table className="min-w-full border-separate border-spacing-0 table-fixed">
              <thead>
                <tr className="py-[20px]">
                  <th className="w-1/4 py-5 px-4 text-left font-semibold text-[#2F323F] text-base md:text-[24px]">Feature</th>
                  <th className="w-1/4 py-5 px-4 bg-green-50 rounded-tl-3xl rounded-tr-3xl text-center font-semibold">
                    <div className="flex justify-center">
                    <h2 className="text-[12px] md:text-lg font-bold mb-3 text-[#222934]">
                    rent- <span className="text-[#2C9143]">canberra</span>.com.au
                    </h2>
                    </div></th>
                  <th className="w-1/4 py-5 px-4 text-center font-semibold">Zango</th>
                  <th className="w-1/4 py-5 px-4 text-center font-semibold">Allhomes & Domain</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="w-1/4 py-5 px-4 border-gray-200 font-bold text-base text-[14px] lg:text-[18px]">Listing Fee</td>
                  <td className="w-1/4 py-5 px-4 border-gray-200 bg-green-50 text-center">
                    <div className="font-bold text-[#4E515D]">$49.00</div>
                    <div className="text-sm text-[#4E515D]">per listing</div>
                  </td>
                  <td className="w-1/4 py-5 px-4 border-gray-200 text-center">
                    <div className="font-bold text-[#4E515D]">$200+</div>
                    <div className="text-sm text-[#4E515D]">per listing</div>
                  </td>
                  <td className="w-1/4 py-5 px-4 border-gray-200 text-center">
                    <div className="font-bold text-[#4E515D]">$300+</div>
                  </td>
                </tr>
                <tr>
                  <td className="w-1/4 py-5 px-4 border-gray-200 font-bold text-base text-[14px] lg:text-[18px]">Ready-To-Rent Tenants</td>
                  <td className="w-1/4 py-5 px-4 border-gray-200 bg-green-50 text-center">
                    <div className="text-[#4E515D]">Access to 100+</div>
                    <div className="text-[#4E515D]">Ready-To-Rent tenants</div>
                  </td>
                  <td className="w-1/4 py-5 px-4 border-gray-200 text-center">
                    <div className="flex justify-center gap-2">
                      <div className="flex justify-center mb-1">
                        <span className="w-5 h-5 rounded-full bg-[#C80000] flex items-center justify-center text-white text-xs">✕</span>
                      </div>

                      <div className="text-[#4E515D]">No</div>
                    </div>
                  </td>
                  <td className="w-1/4 py-5 px-4 border-gray-200 text-center">
                    <div className="flex justify-center gap-2">
                      <div className="flex justify-center mb-1">
                        <span className="w-5 h-5 rounded-full bg-[#C80000] flex items-center justify-center text-white text-xs">✕</span>
                      </div>

                      <div className="text-[#4E515D]">No</div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="w-1/4 py-5 px-4 border-gray-200 font-bold text-base text-[14px] lg:text-[18px]">Exclusive to Canberra rentals</td>
                  <td className="w-1/4 py-5 px-4 border-gray-200 bg-green-50 text-center">
                    <div className="flex justify-center gap-2">
                      <div className="flex justify-center mb-1">
                        <span className="w-5 h-5 rounded-full bg-[#2C9143] flex items-center justify-center text-white text-xs">✓</span>
                      </div>

                      <div className="text-[#4E515D] mt-1 md:mt-0 ">Yes</div>
                    </div>
                  </td>
                  <td className="w-1/4 py-5 px-4 border-gray-200 text-center">
                    <div className="flex justify-center gap-2">
                      <div className="flex justify-center mb-1">
                        <span className="w-5 h-5 rounded-full bg-[#C80000] flex items-center justify-center text-white text-xs">✕</span>
                      </div>

                      <div className="text-[#4E515D]">No</div>
                    </div>
                  </td>
                  <td className="w-1/4 py-5 px-4 border-gray-200 text-center">
                    <div className="flex justify-center gap-2">
                      <div className="flex justify-center mb-1">
                        <span className="w-5 h-5 rounded-full bg-[#C80000] flex items-center justify-center text-white text-xs">✕</span>
                      </div>

                      <div className="text-[#4E515D]">No</div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="w-1/4 py-5 px-4 border-gray-200 font-bold text-base text-[14px] lg:text-[18px]">Exclusive to renting</td>
                  <td className="w-1/4 py-5 px-4 border-gray-200 bg-green-50   text-center">
                    <div className="flex justify-center gap-2">
                      <div className="flex justify-center mb-1">
                        <span className="w-5 h-5 rounded-full bg-[#2C9143] flex items-center justify-center text-white text-xs">✓</span>
                      </div>
                      <div className="text-[#4E515D]">Yes</div>
                    </div>
                  </td>
                  <td className="w-1/4 py-5 px-4 border-gray-200 text-center">
                    <div className="flex justify-center gap-2">
                      <div className="flex justify-center mb-1">
                        <span className="w-5 h-5 rounded-full bg-[#C80000] flex items-center justify-center text-white text-xs">✕</span>
                      </div>

                      <div className="text-[#4E515D]">No</div>
                    </div>
                  </td>
                  <td className="w-1/4 py-5 px-4 border-gray-200 text-center">
                    <div className="flex justify-center gap-2">
                      <div className="flex justify-center mb-1">
                        <span className="w-5 h-5 rounded-full bg-[#C80000] flex items-center justify-center text-white text-xs">✕</span>
                      </div>
                      <div className="text-[#4E515D]"> No</div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="w-1/4 py-5 px-4 border-gray-200 font-bold text-base text-[14px] lg:text-[18px]"></td>
                  <td className="w-1/4 py-5 px-4 border-gray-200 bg-green-50 rounded-bl-3xl rounded-br-3xl  text-center">
                    <div className=" flex justify-center">
                      <Link className="bg-[#1c2f50] hover:bg-[#2C9143] text-white py-3 px-8 w-full lg:w-[80%] rounded-[30px] text-sm font-medium" href="/list-now">
                        List Now
                      </Link>
                    </div>
                  </td>
                  <td className="w-1/4 py-5 px-4 border-gray-200 text-center">

                  </td>
                  <td className="w-1/4 py-5 px-4 border-gray-200 text-center">

                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* List Your Property Steps */}
        <section className="py-8 sm:py-10 md:py-12 px-6 container mx-auto w-full">
          <h2 className="text-xl sm:text-xl md:text-3xl text-[#222934] font-bold text-center mb-6 sm:mb-8 md:mb-12">List Your Property in 3 Quick Steps</h2>
          <div className="flex flex-col md:flex-row justify-between max-w-[1096px] mx-auto relative">
            {/* Connection line - only visible on desktop */}
            <div className="hidden md:block absolute top-[77px] left-0 right-0 h-[3px] bg-[#E0E5E9]"></div>

            {/* Mobile vertical steps with connection lines */}
            <div className="flex flex-col items-center mb-8 md:mb-0 z-10">
              <div className="bg-[#202A54] text-white py-2 sm:py-3 rounded-[12px] px-3 sm:px-4 mb-4 text-base sm:text-lg md:text-[16px] xl:text-[20px] w-full md:w-auto text-center">
                <span className="font-medium">1. Property Details</span>
              </div>
              <div className="h-4 w-4 rounded-full bg-[#1c2f50]"></div>
              {/* Mobile vertical line */}
              <div className="h-12 w-[3px] bg-[#E0E5E9] md:hidden"></div>
            </div>

            <div className="flex flex-col items-center mb-8 md:mb-0 z-10">
              <div className="border-1 border-[#DEE1E3] text-gray-700 py-2 sm:py-3 rounded-[12px] px-3 sm:px-4 mb-4 text-base sm:text-lg md:text-[16px] xl:text-[20px] w-full md:w-auto text-center">
                <span className="font-medium">2. Set Pricing & Inspections</span>
              </div>
              <div className="h-4 w-4 rounded-full bg-gray-400"></div>
              {/* Mobile vertical line */}
              <div className="h-12 w-[3px] bg-[#E0E5E9] md:hidden"></div>
            </div>

            <div className="flex flex-col items-center z-10">
              <div className="border-1 border-[#DEE1E3] text-gray-700 py-2 sm:py-3 rounded-[12px] px-3 sm:px-4 mb-4 text-base sm:text-lg md:text-[16px] xl:text-[20px] w-full md:w-auto text-center">
                <span className="font-medium">3. Review & Publish</span>
              </div>
              <div className="h-4 w-4 rounded-full bg-gray-400 md:block hidden"></div>
            </div>
          </div>
        </section>

        {/* Manage Everything Section */}
        <section className="py-8 sm:py-10 xl:py-12 mt-5  xl:mt-20">
          <div className="container mx-auto px-4 sm:px-6 md:px-0">
            <div className="bg-[#F6F7F9] p-6 sm:p-8 md:p-[48px] rounded-[16px]">
              <div className="flex flex-col lg:flex-row items-center gap-6 md:gap-8">
                <div className="w-full lg:w-1/2">
                  <h2 className="text-xl sm:text-xl md:text-3xl font-bold md:text-left text-center text-[#222934] mb-3 sm:mb-4">Manage Everything in One Place</h2>
                  <p className="mb-6 text-[#78808B] text-sm sm:text-base md:text-left text-center">
                    Take full control of your rental property with our easy-to-use, all-in-one platform. From finding tenants to managing tenant applications, tracking payments, and staying on top of maintenance-all your rental management tools are in one place.
                  </p>
                  <button className="bg-[#202A54] hover:bg-[#2C9143] text-white py-2 sm:py-3 px-4 sm:px-5 rounded-[40px] text-xs sm:text-sm font-medium w-full sm:w-auto">
                    Activate Free Property Management
                  </button>
                </div>
                <div className="w-full lg:w-1/2 mt-6 lg:mt-0">
                  <Image
                    src="/images/dashboard-preview.png"
                    alt="Property Management Dashboard"
                    width={600}
                    height={400}
                    className="rounded-lg shadow-md w-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Ready-To-Rent Tenants Section */}
        <section className="py-10 sm:py-16 md:py-20 px-4 sm:px-6 md:px-0">
          <div className="container mx-auto px-4">
            <TenantFilter />
          </div>
        </section>

        {/* Book a Demo Section */}
        <section className="py-8 sm:py-10 md:py-12 pb-12 sm:pb-16 md:pb-20 px-4 sm:px-6 ">
          <div className="container mx-auto">
            <div className="flex flex-col lg:flex-row items-center gap-6 md:gap-8">
              <div className="w-full lg:w-1/2">
                <h2 className="text-xl sm:text-xl md:text-left text-center md:text-3xl font-bold text-[#222934] mb-2 sm:mb-4">Book a free 15 minute demo</h2>
                <p className="text-[#78808B] md:text-left text-center text-sm sm:text-base">See how easy it is to list & manage your rental with our team</p>
              </div>
              <div className="w-full lg:w-1/2 mt-6 lg:mt-0">
                <Image
                  src="/images/calendy.png"
                  alt="Book a demo calendar"
                  width={752}
                  height={350}
                  className="border rounded-lg shadow-sm w-full"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Your existing Footer component would go here */}
      </div>
    </>
  );
}
