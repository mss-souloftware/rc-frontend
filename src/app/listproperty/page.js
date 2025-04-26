import Header from "@/components/Header/Header";
import Image from "next/image";
import Link from "next/link";
import Logo from "@/components/Header/Logo";

export default function ListProperty() {
  return (
    <>
      <Header />
      <div className="flex flex-col min-h-screen bg-white">



        <div className="relative w-full h-[224px] mt-10">
          <div className="absolute container mx-auto inset-0 rounded-[16px]">
            <Image
              src="/images/property-hero.png"
              alt="Property view"
              layout="fill"
              objectFit="cover"
              priority
              className=" rounded-[16px]"
            />
            {/* <div className="absolute container mx-auto inset-0 bg-black bg-opacity-40"></div> */}
          </div>
          <div className="relative flex items-center justify-center h-full">
            <h1 className="text-4xl font-bold text-white text-center">
              List Your home for rent
            </h1>
          </div>
        </div>

        {/* As Seen On Section */}
        <section className="py-12 container mx-auto w-full">
          <h2 className="text-3xl text-[#222934] font-bold text-center mb-12">As Seen On</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 ">
            <div className="p-4 py-[36px] rounded-[12px]  border-[1.5px] border-[rgba(225,233,240,0.7)] bg-[#F6F7F9] flex items-center justify-center">
              <Image src="/images/canberra-times.png" alt="The Canberra Times" width={120} height={100} objectFit="contain" />
            </div>
            <div className="p-4 py-[36px] rounded-[12px]  border-[1.5px] border-[rgba(225,233,240,0.7)] bg-[#F6F7F9] flex items-center justify-center">
              <Image src="/images/riotact.png" alt="Riotact" width={100} height={100} objectFit="contain" />
            </div>
            <div className="p-4 py-[36px] rounded-[12px]  border-[1.5px] border-[rgba(225,233,240,0.7)] bg-[#F6F7F9] flex items-center justify-center">
              <Image src="/images/studio-canberra.png" alt="Studio Canberra" width={120} height={40} objectFit="contain" />
            </div>
            <div className="p-4 py-[36px] rounded-[12px]  border-[1.5px] border-[rgba(225,233,240,0.7)] bg-[#F6F7F9] flex items-center justify-center">
              <Image src="/images/in-canberra.png" alt="In Canberra" width={120} height={40} objectFit="contain" />
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-20  container mx-auto w-full">
          <h2 className="text-3xl text-[#222934] font-bold text-center mb-12">Why Choose Us?</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full border-separate border-spacing-0 table-fixed">
              <thead>
                <tr className="py-[20px]">
                  <th className="w-1/4 py-5 px-4 text-left font-semibold text-[#2F323F] text-[24px]">Feature</th>
                  <th className="w-1/4 py-5 px-4 bg-green-50  rounded-tl-3xl   rounded-tr-3xl  text-center font-semibold">
                    <div className="flex justify-center">
                      <Logo />
                    </div></th>
                  <th className="w-1/4 py-5 px-4 text-center font-semibold">Zango</th>
                  <th className="w-1/4 py-5 px-4 text-center font-semibold">Allhomes & Domain</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="w-1/4 py-5 px-4 border-gray-200 font-bold text-[18px]">Listing Fee</td>
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
                  <td className="w-1/4 py-5 px-4 border-gray-200 font-bold text-[18px]">Ready-To-Rent Tenants</td>
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
                  <td className="w-1/4 py-5 px-4 border-gray-200 font-bold text-[18px]">Exclusive to Canberra rentals</td>
                  <td className="w-1/4 py-5 px-4 border-gray-200 bg-green-50 text-center">
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

                      <div className="text-[#4E515D]">No</div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="w-1/4 py-5 px-4 border-gray-200 font-bold text-[18px]">Exclusive to renting</td>
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
                  <td className="w-1/4 py-5 px-4 border-gray-200 font-bold text-[18px]"></td>
                  <td className="w-1/4 py-5 px-4 border-gray-200 bg-green-50 rounded-bl-3xl rounded-br-3xl  text-center">
                    <div className=" flex justify-center">
                      <Link className="bg-[#1c2f50] hover:bg-[#2C9143] text-white py-3 px-8 w-[80%] rounded-[30px] text-sm font-medium" href="/list-now">
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
        <section className="py-12 px-4 container mx-auto w-full">
        <h2 className="text-3xl text-[#222934] font-bold text-center mb-12">List Your Property in 3 Quick Steps</h2>
          <div className="flex flex-col md:flex-row justify-between max-w-[1096px] mx-auto relative">
            {/* Connection line */}
            <div className="hidden md:block absolute top-[77px] left-0 right-0 h-[3px] bg-[#E0E5E9]"></div>

            <div className="flex flex-col items-center mb-6 md:mb-0 z-10">
              <div className="bg-[#202A54] text-white  py-3 rounded-[12px] px-4 mb-4 text-[20px]">
                <span className="font-medium">1. Property Details</span>
              </div>
              <div className="h-4 w-4 rounded-full bg-[#1c2f50]"></div>
            </div>

            <div className="flex flex-col items-center mb-6 md:mb-0 z-10">
              <div className="border-1 border-[#DEE1E3] text-gray-700  py-3 rounded-[12px] px-4 mb-4 text-sm text-[20px]">
                <span className="font-medium">2. Set Pricing & Inspections</span>
              </div>
              <div className="h-4 w-4  rounded-full bg-gray-400"></div>
            </div>

            <div className="flex flex-col items-center z-10">
              <div className="border-1 border-[#DEE1E3] text-gray-700  py-3 rounded-[12px] px-4 mb-4 text-sm text-[20px]">
                <span className="font-medium">3. Review & Publish</span>
              </div>
              <div className="h-4 w-4  rounded-full bg-gray-400"></div>
            </div>
          </div>
        </section>

        {/* Manage Everything Section */}
        <section className="py-12 mt-20">
          <div className="container mx-auto">
           <div className="bg-[#F6F7F9] p-[48px] rounded-[16px]">
           <div className="flex flex-col lg:flex-row items-center gap-8">
              <div className="w-full lg:w-1/2">
                <h2 className="text-3xl font-bold text-[#222934] mb-4">Manage Everything in One Place</h2>
                <p className="mb-6 text-[#78808B]">
                  Take full control of your rental property with our easy-to-use, all-in-one platform. From finding tenants to managing tenant applications, tracking payments, and staying on top of maintenance—all your rental management tools are in one place.
                </p>
                <button className="bg-[#202A54] hover:bg-[#2C9143] text-white py-3 px-5 rounded-[40px] text-sm font-medium">
                  Activate Free Property Management
                </button>
              </div>
              <div className="w-full lg:w-1/2">
                <Image
                  src="/images/dashboard-preview.png"
                  alt="Property Management Dashboard"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-md"
                />
              </div>
            </div>
           </div>
          </div>
        </section>

        {/* Ready-To-Rent Tenants Section */}
        {/* <section className="py-12 px-4">
          <div className="container mx-auto">
            <div className="flex flex-col lg:flex-row gap-8">
              <div className="w-full lg:w-1/3">
                <h2 className="text-2xl font-semibold mb-4">Check for <span className="text-green-600">Ready-To-Rent</span> tenants now</h2>
                <p className="mb-6 text-gray-600">Use the filters below to see tenants who match your property:</p>

                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Suburbs</label>
                    <div className="flex items-center border rounded-md p-2">
                      <span className="bg-gray-200 text-gray-700 px-2 py-1 rounded-md text-sm flex items-center gap-1">
                        Weston Valley <button className="text-gray-500 hover:text-gray-700">×</button>
                      </span>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Bedrooms</label>
                    <div className="flex items-center">
                      <button className="border rounded-l-md px-3 py-1 text-gray-500 hover:bg-gray-50">−</button>
                      <span className="border-t border-b px-4 py-1 min-w-[40px] text-center">3</span>
                      <button className="border rounded-r-md px-3 py-1 text-gray-500 hover:bg-gray-50">+</button>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Bathrooms</label>
                    <div className="flex items-center">
                      <button className="border rounded-l-md px-3 py-1 text-gray-500 hover:bg-gray-50">−</button>
                      <span className="border-t border-b px-4 py-1 min-w-[40px] text-center">2</span>
                      <button className="border rounded-r-md px-3 py-1 text-gray-500 hover:bg-gray-50">+</button>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Parking Space</label>
                    <div className="flex items-center">
                      <button className="border rounded-l-md px-3 py-1 text-gray-500 hover:bg-gray-50">−</button>
                      <span className="border-t border-b px-4 py-1 min-w-[40px] text-center">1</span>
                      <button className="border rounded-r-md px-3 py-1 text-gray-500 hover:bg-gray-50">+</button>
                    </div>
                  </div>

                  <button className="bg-[#1c2f50] text-white w-full py-2 rounded-md mt-4 text-sm font-medium">
                    Apply Filter
                  </button>
                </div>
              </div>

              <div className="w-full lg:w-2/3">
                <div className="border rounded-lg p-6 bg-gray-50">
                  <h3 className="font-medium mb-6">
                    <span className="text-green-600 font-semibold">6 tenants</span> Ready-To-Rent based on your criteria
                  </h3>

                  <div className="overflow-x-auto">
                    <table className="min-w-full">
                      <thead>
                        <tr className="text-left text-sm text-gray-500">
                          <th className="py-2 font-medium">Tenant</th>
                          <th className="py-2 font-medium">Suburb</th>
                          <th className="py-2 font-medium">Bedrooms</th>
                          <th className="py-2 font-medium">Bathroom</th>
                          <th className="py-2 font-medium">Park</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-t border-gray-200">
                          <td className="py-3 flex items-center gap-2">
                            <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
                            <div className="text-gray-400">••••••</div>
                          </td>
                          <td className="py-3">Weston Valley</td>
                          <td className="py-3 text-center">3</td>
                          <td className="py-3 text-center">2</td>
                          <td className="py-3 text-center">1</td>
                        </tr>
                        {[...Array(5)].map((_, i) => (
                          <tr key={i} className="border-t border-gray-200">
                            <td className="py-3 flex items-center gap-2">
                              <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
                              <div className="text-gray-400">••••••</div>
                            </td>
                            <td className="py-3">
                              <div className="text-gray-400">••••••</div>
                            </td>
                            <td className="py-3 text-center">
                              <div className="text-gray-400">•</div>
                            </td>
                            <td className="py-3 text-center">
                              <div className="text-gray-400">•</div>
                            </td>
                            <td className="py-3 text-center">
                              <div className="text-gray-400">•</div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  <div className="mt-6 flex justify-center">
                    <button className="bg-[#1c2f50] text-white py-2 px-6 rounded-md text-sm font-medium">
                      Unlock Profile
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section> */}

        {/* Book a Demo Section */}
        {/* <section className="py-12 px-4 bg-gray-50">
          <div className="container mx-auto">
            <div className="flex flex-col lg:flex-row items-center gap-8">
              <div className="w-full lg:w-1/2">
                <h2 className="text-2xl font-semibold mb-3">Book a free 15 minute demo</h2>
                <p className="text-gray-700">See how easy it is to list & manage your rental with our team</p>
              </div>
              <div className="w-full lg:w-1/2">
                <Image
                  src="/images/calendar-demo.png"
                  alt="Book a demo calendar"
                  width={500}
                  height={300}
                  className="border rounded-lg shadow-sm"
                />
              </div>
            </div>
          </div>
        </section> */}

        {/* Your existing Footer component would go here */}
      </div>
    </>
  );
}
