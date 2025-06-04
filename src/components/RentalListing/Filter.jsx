import React from 'react'

export default function RLFilter() {
    return (
        <form action="" className='mt-10 mb-6'>
            <input className='w-full shadow-lg px-4 py-3 rounded bg-white border border-[#EFEFF3] focus:outline-0' type="search" placeholder='Search' />

            <ul className='flex justify-end gap-3 mt-8 overflow-x-auto'>
                <li className='flex items-center cursor-pointer md:px-3 md:py-2 px-2 border border-[#EAEAF0] rounded-xl gap-2'>
                    <span>
                        Canberra City
                    </span>
                </li>
                <li className='flex items-center cursor-pointer md:px-3 md:py-2 px-2 border border-[#EAEAF0] rounded-xl gap-2'>
                    <span>
                        Kingston
                    </span>
                </li>
                <li className='flex items-center cursor-pointer md:px-3 md:py-2 px-2 border border-[#EAEAF0] rounded-xl gap-2'>

                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 19H19M7 6H8M7 10H8M7 14H8M12 6H13M12 10H13M12 14H13M3 19V3C3 2.46957 3.21071 1.96086 3.58579 1.58579C3.96086 1.21071 4.46957 1 5 1H15C15.5304 1 16.0391 1.21071 16.4142 1.58579C16.7893 1.96086 17 2.46957 17 3V19" stroke="#202A54" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    <span>
                        Apartments
                    </span>
                </li>
                <li className='flex items-center cursor-pointer md:px-3 md:py-2 px-2 border border-[#EAEAF0] rounded-xl gap-2'>


                    <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13 20V12C13 11.7348 12.8946 11.4804 12.7071 11.2929C12.5196 11.1054 12.2652 11 12 11H8C7.73478 11 7.48043 11.1054 7.29289 11.2929C7.10536 11.4804 7 11.7348 7 12V20" stroke="#202A54" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M1 9.00046C0.99993 8.70952 1.06333 8.42208 1.18579 8.15817C1.30824 7.89427 1.4868 7.66025 1.709 7.47246L8.709 1.47346C9.06999 1.16836 9.52736 1.00098 10 1.00098C10.4726 1.00098 10.93 1.16836 11.291 1.47346L18.291 7.47246C18.5132 7.66025 18.6918 7.89427 18.8142 8.15817C18.9367 8.42208 19.0001 8.70952 19 9.00046V18.0005C19 18.5309 18.7893 19.0396 18.4142 19.4147C18.0391 19.7897 17.5304 20.0005 17 20.0005H3C2.46957 20.0005 1.96086 19.7897 1.58579 19.4147C1.21071 19.0396 1 18.5309 1 18.0005V9.00046Z" stroke="#202A54" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>


                    <span>
                        House
                    </span>
                </li>
                <li className='flex items-center cursor-pointer md:px-3 md:py-2 px-2 border border-[#EAEAF0] rounded-xl gap-2'>

                    <svg width="20" height="20" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17 10H19L10 1L1 10H3V17C3 17.5304 3.21071 18.0391 3.58579 18.4142C3.96086 18.7893 4.46957 19 5 19H10.5" stroke="#202A54" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M7 19V13C7 12.4696 7.21071 11.9609 7.58579 11.5858C7.96086 11.2107 8.46957 11 9 11H11C11.5304 11 12.0391 11.2107 12.4142 11.5858C12.7893 11.9609 13 12.4696 13 13M14 17H20M17 14V20" stroke="#202A54" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>

                    <span>
                        Shared
                    </span>
                </li>
                <li className='flex items-center cursor-pointer md:px-3 md:py-2 px-2 border border-[#EAEAF0] rounded-xl gap-2'>

                    <svg width="23" height="19" viewBox="0 0 23 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.57306 5.46347L10.2321 1.13447C10.3153 1.09292 10.407 1.07129 10.5001 1.07129C10.5931 1.07129 10.6848 1.09292 10.7681 1.13447L19.4271 5.46447C19.5266 5.51433 19.6104 5.59093 19.6689 5.68568C19.7274 5.78043 19.7584 5.8896 19.7584 6.00097C19.7584 6.11234 19.7274 6.22151 19.6689 6.31626C19.6104 6.41101 19.5266 6.48761 19.4271 6.53747L10.7681 10.8665C10.6848 10.908 10.5931 10.9296 10.5001 10.9296C10.407 10.9296 10.3153 10.908 10.2321 10.8665L1.57306 6.53647C1.47348 6.48661 1.38974 6.41001 1.33122 6.31526C1.27269 6.22051 1.2417 6.11134 1.2417 5.99997C1.2417 5.8886 1.27269 5.77943 1.33122 5.68468C1.38974 5.58993 1.47348 5.51333 1.57306 5.46347Z" stroke="#202A54" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M21.5 10V6.5L19.5 5.5M3.5 7.5V12.912C3.49993 13.2904 3.60719 13.661 3.80933 13.9809C4.01148 14.3007 4.30021 14.5567 4.642 14.719L9.642 17.093C9.91011 17.2203 10.2032 17.2864 10.5 17.2864C10.7968 17.2864 11.0899 17.2203 11.358 17.093L16.358 14.719C16.6998 14.5567 16.9885 14.3007 17.1907 13.9809C17.3928 13.661 17.5001 13.2904 17.5 12.912V7.5" stroke="#202A54" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>

                    <span>
                        University
                    </span>
                </li>
                <li className='flex items-center cursor-pointer md:px-3 md:py-2 px-2 border border-[#EAEAF0] rounded-xl gap-2'>

                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4.5 7H19.5M7 12H17M10 17H14" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>

                    <span>
                        All Filter
                    </span>
                </li>
            </ul>
        </form>
    )
}
