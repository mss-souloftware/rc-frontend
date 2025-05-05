// components/HeroSection.jsx

import Image from 'next/image'

const HeroSection = () => {
  return (
    <section className="relative w-full">
      {/* Green Bar */}
      <div className="relative z-10 w-full bg-[#2C9143] text-white py-3">
        <p className="text-center text-[10px] sm:text-[12px] md:text-base font-semibold">
          The Only Website In Canberra Dedicated To Finding Rent
        </p>
      </div>

      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/home-hero.png" // replace with the actual image path
          alt="Hero Background"
          layout="fill"
          objectFit="cover"
          priority
        />
      </div>

      {/* Overlay for text readability */}
      <div className="absolute inset-0 bg-black opacity-25"></div>

      {/* Content Section */}
      <div className="relative z-10 flex justify-end items-end text-center text-white lg:h-[475px] h-[350px] px-4">
        <div className="container md:text-end text-center mx-auto space-y-6 pb-[54px]">
          <h1 className="lg:text-4xl md:text-4xl sm:text-3xl text-xl md:text-right text-center mb-2 md:mb-0 font-extrabold font-inter leading-tight">
            Find Rent In Canberra
          </h1>
          <div className=" inline-flex rounded-[100px] bg-[rgba(1,1,3,0.35)] justify-end backdrop-blur-sm py-3 px-5 gap-x-[8px]">
            <p>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M13.75 17.083H6.25" stroke="white" stroke-width="1.66667" stroke-linecap="round" />
                <path d="M10.8334 15.4163C10.8334 15.6374 10.7456 15.8493 10.5893 16.0056C10.4331 16.1619 10.2211 16.2497 10.0001 16.2497C9.77907 16.2497 9.56711 16.1619 9.41083 16.0056C9.25455 15.8493 9.16675 15.6374 9.16675 15.4163H10.8334ZM9.16675 15.4163V13.333H10.8334V15.4163H9.16675Z" fill="white" />
                <path d="M8.75008 7.91602H11.2501M4.58341 12.0827C4.58341 12.0827 2.91675 10.8327 2.91675 8.74935V7.08268C2.91675 6.64065 3.09234 6.21673 3.4049 5.90417C3.71746 5.59161 4.14139 5.41602 4.58341 5.41602C5.02544 5.41602 5.44937 5.59161 5.76193 5.90417C6.07449 6.21673 6.25008 6.64065 6.25008 7.08268V7.91602M15.4167 12.0827C15.4167 12.0827 17.0834 10.8327 17.0834 8.74935V7.08268C17.0834 6.64065 16.9078 6.21673 16.5953 5.90417C16.2827 5.59161 15.8588 5.41602 15.4167 5.41602C14.9747 5.41602 14.5508 5.59161 14.2382 5.90417C13.9257 6.21673 13.7501 6.64065 13.7501 7.08268V7.91602" stroke="white" stroke-width="1.66667" stroke-linecap="round" />
                <path d="M13.75 9.46634V6.24967C13.75 5.80765 13.5744 5.38372 13.2618 5.07116C12.9493 4.7586 12.5254 4.58301 12.0833 4.58301H7.91667C7.47464 4.58301 7.05072 4.7586 6.73816 5.07116C6.4256 5.38372 6.25 5.80765 6.25 6.24967V9.46634C6.25001 10.0151 6.38548 10.5553 6.64438 11.0391C6.90329 11.5229 7.27763 11.9353 7.73417 12.2397L9.5375 13.4413C9.67444 13.5327 9.83538 13.5815 10 13.5815C10.1646 13.5815 10.3256 13.5327 10.4625 13.4413L12.2658 12.2397C12.7225 11.9352 13.0969 11.5227 13.3558 11.0387C13.6147 10.5548 13.7501 10.0152 13.75 9.46634Z" stroke="white" stroke-width="1.66667" />
              </svg>
            </p>
            <p className="md:text-[14px] sm:text-[12px] text-[10px] text-right font-medium">
              The Go-To Website For Rent in Canberra
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
