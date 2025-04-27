// components/TenantFilter.jsx
import { useState, useRef, useEffect } from "react";
import Image from 'next/image';
import Link from "next/link";

export default function TenantFilter() {
    const [suburbs, setSuburbs] = useState('Woden Valley');
    const [bedrooms, setBedrooms] = useState(1);
    const [bathrooms, setBathrooms] = useState(1);
    const [parkingSpace, setParkingSpace] = useState(1);
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);

    // Close dropdown when clicking outside
    useEffect(() => {
        function handleClickOutside(event) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [dropdownRef]);

    const location = (
        <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6.4 5.25953C7.89031 3.79902 9.8968 2.98566 11.9834 2.99619C14.0701 3.00673 16.0682 3.84032 17.5437 5.31581C19.0192 6.7913 19.8528 8.78946 19.8633 10.8761C19.8739 12.9627 19.0605 14.9692 17.6 16.4595L13.414 20.6455C13.0389 21.0205 12.5303 21.2311 12 21.2311C11.4697 21.2311 10.9611 21.0205 10.586 20.6455L6.4 16.4595C4.91488 14.9743 4.08057 12.9599 4.08057 10.8595C4.08057 8.75915 4.91488 6.74479 6.4 5.25953Z"
                stroke="#202A54"
                strokeWidth="1.5"
                strokeLinejoin="round"
            />
            <path
                d="M12 13.8594C13.6569 13.8594 15 12.5162 15 10.8594C15 9.20252 13.6569 7.85938 12 7.85938C10.3431 7.85938 9 9.20252 9 10.8594C9 12.5162 10.3431 13.8594 12 13.8594Z"
                stroke="#202A54"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
    
    const bedroomicon = (
        <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1.875 16.75V12.375C1.87696 11.7126 2.14098 11.0778 2.6094 10.6094C3.07781 10.141 3.71256 9.87696 4.375 9.875H15.625C16.2874 9.87696 16.9222 10.141 17.3906 10.6094C17.859 11.0778 18.123 11.7126 18.125 12.375V16.75M15 9.875H3.75V5.8125C3.75124 5.39848 3.91625 5.00177 4.20901 4.70901C4.50177 4.41625 4.89848 4.25124 5.3125 4.25H14.6875C15.1015 4.25124 15.4982 4.41625 15.791 4.70901C16.0837 5.00177 16.2488 5.39848 16.25 5.8125V9.875H15Z" stroke="#202A54" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M1.875 16.3926V16.0801C1.87572 15.8317 1.97473 15.5936 2.15038 15.418C2.32604 15.2423 2.56408 15.1433 2.8125 15.1426H17.1875C17.4359 15.1433 17.674 15.2423 17.8496 15.418C18.0253 15.5936 18.1243 15.8317 18.125 16.0801V16.3926M4.375 9.51758V8.89258C4.37593 8.56134 4.50792 8.24394 4.74214 8.00972C4.97636 7.7755 5.29376 7.64351 5.625 7.64258H8.75C9.08124 7.64351 9.39864 7.7755 9.63286 8.00972C9.86708 8.24394 9.99907 8.56134 10 8.89258M10 8.89258V9.51758M10 8.89258C10.0009 8.56134 10.1329 8.24394 10.3671 8.00972C10.6014 7.7755 10.9188 7.64351 11.25 7.64258H14.375C14.7062 7.64351 15.0236 7.7755 15.2579 8.00972C15.4921 8.24394 15.6241 8.56134 15.625 8.89258V9.51758" stroke="#202A54" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
    );

    const bathroomicon = (
        <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.5 10.9163V13.4163C17.5 14.3004 17.1488 15.1482 16.5237 15.7734C15.8986 16.3985 15.0507 16.7497 14.1667 16.7497H5.83333C4.94928 16.7497 4.10143 16.3985 3.47631 15.7734C2.85119 15.1482 2.5 14.3004 2.5 13.4163V11.4163C2.5 11.2837 2.55268 11.1566 2.64645 11.0628C2.74021 10.969 2.86739 10.9163 3 10.9163H17.5ZM17.5 10.9163V5.91634C17.5 5.03229 17.1488 4.18444 16.5237 3.55932C15.8986 2.9342 15.0507 2.58301 14.1667 2.58301H10M13.3333 16.7497L14.1667 18.4163M6.66667 16.7497L5.83333 18.4163" stroke="#202A54" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M12.8336 6.74967H7.16691C6.89108 6.74967 6.67024 6.52634 6.70024 6.25134C6.82191 5.14551 7.38608 2.58301 10.0002 2.58301C12.6144 2.58301 13.1786 5.14551 13.3002 6.25134C13.3302 6.52634 13.1094 6.74967 12.8336 6.74967Z" stroke="#202A54" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
    );

    const parkingSpaceicon = (
        <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.50594 14.6667C7.50594 15.1087 7.33035 15.5326 7.01779 15.8452C6.70522 16.1577 6.2813 16.3333 5.83927 16.3333C5.39725 16.3333 4.97332 16.1577 4.66076 15.8452C4.3482 15.5326 4.17261 15.1087 4.17261 14.6667C4.17261 14.2246 4.3482 13.8007 4.66076 13.4882C4.97332 13.1756 5.39725 13 5.83927 13C6.2813 13 6.70522 13.1756 7.01779 13.4882C7.33035 13.8007 7.50594 14.2246 7.50594 14.6667ZM15.8393 14.6667C15.8393 15.1087 15.6637 15.5326 15.3511 15.8452C15.0386 16.1577 14.6146 16.3333 14.1726 16.3333C13.7306 16.3333 13.3067 16.1577 12.9941 15.8452C12.6815 15.5326 12.5059 15.1087 12.5059 14.6667C12.5059 14.2246 12.6815 13.8007 12.9941 13.4882C13.3067 13.1756 13.7306 13 14.1726 13C14.6146 13 15.0386 13.1756 15.3511 13.4882C15.6637 13.8007 15.8393 14.2246 15.8393 14.6667Z" stroke="#202A54" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M1.67253 8.83366H15.0059M1.67253 8.83366C1.67253 9.48366 1.65586 11.367 1.67586 13.217C1.70586 13.817 1.80586 14.317 4.17419 14.667M1.67253 8.83366C1.85253 7.38366 2.63503 5.66699 3.03503 5.01699M7.50586 8.83366V4.66699M12.4975 14.667H7.50169M1.68503 4.66699H10.2C10.2 4.66699 10.65 4.66699 11.05 4.70699C11.7992 4.77699 12.4284 5.11699 13.0584 5.96699C13.725 6.86699 14.2367 8.00699 14.9167 8.61699C16.0459 9.63033 18.1942 9.31699 18.3142 11.467C18.3442 12.567 18.3442 13.767 18.2942 13.967C18.2134 14.5562 17.7592 14.652 17.1942 14.667C16.7042 14.6803 16.1134 14.6437 15.8259 14.667" stroke="#202A54" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
    );

    const handleApplyFilter = () => {
        // This will be connected to your API in the future
        console.log({
            suburbs,
            bedrooms,
            bathrooms,
            parkingSpace
        });
    };

    return (
        <>
            <div className='flex flex-col lg:flex-row justify-center items-center gap-5 px-4 sm:px-6 lg:px-8'>
                <div className="p-4 sm:p-6 lg:p-10 w-full lg:w-1/2">
                    <h2 className="text-2xl sm:text-3xl font-bold mb-2 sm:mb-3 text-[#222934]">
                        Check for <span className="text-[#2C9143]">Ready-To-Rent</span> tenants now
                    </h2>
                    <p className="text-xs sm:text-sm text-[#78808B] mb-4 sm:mb-6">
                        Use the filters below to see tenants who match your property.
                    </p>

                    <div className="space-y-4 sm:space-y-6">
                        {/* Suburbs Filter */}
                        <div className="mb-3 sm:mb-4" ref={dropdownRef}>
                            <label className="font-bold text-sm sm:text-md text-[#222934] mb-2 sm:mb-3 block">Suburbs</label>
                            <div className="relative">
                                <button
                                    type="button"
                                    className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg bg-white text-[#576170] text-sm text-left flex items-center justify-between"
                                    onClick={() => setIsOpen(!isOpen)}
                                >
                                    <div className="flex items-center">
                                        <span className="absolute left-3">{location}</span>
                                        {suburbs}
                                    </div>
                                    <svg className="w-4 h-4 text-[#576170]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path d="M19 9l-7 7-7-7" />
                                    </svg>
                                </button>
                                {isOpen && (
                                    <div className="absolute z-10 w-full mt-1 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                                        <ul className="py-1 text-sm text-gray-700">
                                            <li
                                                className="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer"
                                                onClick={() => {
                                                    setSuburbs("Woden Valley");
                                                    setIsOpen(false);
                                                }}
                                            >
                                                {location} Woden Valley
                                            </li>
                                            <li
                                                className="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer"
                                                onClick={() => {
                                                    setSuburbs("Another Suburb");
                                                    setIsOpen(false);
                                                }}
                                            >
                                                {location} Another Suburb
                                            </li>
                                        </ul>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Bedrooms Filter */}
                        <div className="flex justify-between items-center border-t border-b border-[#E5E5F1] py-3 sm:py-[20px] mt-6 sm:mt-8 mb-0">
                            <label className="flex justify-center items-center gap-1 sm:gap-2 text-sm sm:text-md font-semibold text-[#222934]">Bedrooms {bedroomicon}</label>
                            <div className="flex items-center">
                                <button
                                    onClick={() => setBedrooms(Math.max(1, bedrooms - 1))}
                                    className="w-[30px] h-[30px] sm:w-[40px] sm:h-[40px] border border-[#576170] hover:bg-[#2c9143] cursor-pointer hover:border-[#2c9143] hover:text-white text-xl sm:text-2xl rounded-[100px]"
                                >
                                    -
                                </button>
                                <div className="px-2 sm:px-4 py-2 text-center min-w-[30px] sm:min-w-[40px]">
                                    {bedrooms}
                                </div>
                                <button
                                    onClick={() => setBedrooms(bedrooms + 1)}
                                    className="w-[30px] h-[30px] sm:w-[40px] sm:h-[40px] border border-[#576170] hover:bg-[#2c9143] cursor-pointer hover:border-[#2c9143] hover:text-white text-xl sm:text-2xl rounded-[100px]"
                                >
                                    +
                                </button>
                            </div>
                        </div>

                        {/* Bathrooms Filter */}
                        <div className="flex justify-between items-center border-b border-[#E5E5F1] py-3 sm:py-[20px] mb-0">
                            <label className="flex justify-center items-center gap-1 sm:gap-2 text-sm sm:text-md font-semibold text-[#222934]">Bathrooms {bathroomicon}</label>
                            <div className="flex items-center">
                                <button
                                    onClick={() => setBathrooms(Math.max(1, bathrooms - 1))}
                                    className="w-[30px] h-[30px] sm:w-[40px] sm:h-[40px] border border-[#576170] hover:bg-[#2c9143] cursor-pointer hover:border-[#2c9143] hover:text-white text-xl sm:text-2xl rounded-[100px]"
                                >
                                    -
                                </button>
                                <div className="px-2 sm:px-4 py-2 text-center min-w-[30px] sm:min-w-[40px]">
                                    {bathrooms}
                                </div>
                                <button
                                    onClick={() => setBathrooms(bathrooms + 1)}
                                    className="w-[30px] h-[30px] sm:w-[40px] sm:h-[40px] border border-[#576170] hover:bg-[#2c9143] cursor-pointer hover:border-[#2c9143] hover:text-white text-xl sm:text-2xl rounded-[100px]"
                                >
                                    +
                                </button>
                            </div>
                        </div>

                        {/* Parking Space Filter */}
                        <div className="flex justify-between items-center border-b border-[#E5E5F1] py-3 sm:py-[20px]">
                            <label className="flex justify-center items-center gap-1 sm:gap-2 text-sm sm:text-md font-semibold text-[#222934]">Parking Space {parkingSpaceicon}</label>
                            <div className="flex items-center">
                                <button
                                    onClick={() => setParkingSpace(Math.max(1, parkingSpace - 1))}
                                    className="w-[30px] h-[30px] sm:w-[40px] sm:h-[40px] border border-[#576170] hover:bg-[#2c9143] cursor-pointer hover:border-[#2c9143] hover:text-white text-xl sm:text-2xl rounded-[100px]"
                                >
                                    -
                                </button>
                                <div className="px-2 sm:px-4 py-2 text-center min-w-[30px] sm:min-w-[40px]">
                                    {parkingSpace}
                                </div>
                                <button
                                    onClick={() => setParkingSpace(parkingSpace + 1)}
                                    className="w-[30px] h-[30px] sm:w-[40px] sm:h-[40px] border border-[#576170] hover:bg-[#2c9143] cursor-pointer hover:border-[#2c9143] hover:text-white text-xl sm:text-2xl rounded-[100px]"
                                >
                                    +
                                </button>
                            </div>
                        </div>

                        {/* Apply Filter Button */}
                        <button
                            onClick={handleApplyFilter}
                            className="w-full py-2 sm:py-3 text-sm sm:text-base bg-[#202A54] cursor-pointer text-white rounded-lg hover:bg-[#2c9143] transition"
                        >
                            Apply Filter
                        </button>
                    </div>
                </div>
                <div className='w-full lg:w-1/2 mt-6 lg:mt-0 flex justify-center lg:justify-start'>
                    <Link href="/">
                        <Image className='w-full max-w-[400px] lg:max-w-full' src="/images/tenants.png" width={700} height={650} alt="Logo" />
                    </Link>
                </div>
            </div>
        </>
    );
}
