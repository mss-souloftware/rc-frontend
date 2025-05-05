// components/ReadyToRentSection.jsx
import Image from "next/image";
export default function ReadyToRentSection() {
    return (
      <section className="container mx-auto flex flex-col md:flex-row items-center justify-between xl:px-[80px] px-5  md:py-[80px] py-[40px] bg-white">
        {/* Text content */}
        <div className="text-center md:text-left">
          <h2 className="xl:text-[48px] lg:text-4xl sm:text-2xl text-xl font-bold text-[#21232F]  md:mb-4 mb-2">
            Are You Ready To Rent <span className="text-gray-900">?</span>
          </h2>
          <p className="text-[#686B7A] sm:text-[16px] text-[14px] md:mb-6 mb-4 lg:w-[80%] w-full">
            Stop Endlessly Searching, Let Agents Find You With Our Ready-To-Rent Database.
          </p>
          <button className="bg-[#1F254F] text-white text-sm px-6 py-2 rounded-full transition hover:opacity-90">
            Ready-To-Rent Applications
          </button>
        </div>
  
        {/* Image content */}
        <div className="mt-10 md:mt-0 xl:mr-[120px] lg:mr-[20px] max-w-sm md:w-full w-[80%]">
        <Image
          src="/images/ready-to-rent.png" // Place image inside public/images/
          alt="Ready to rent illustration"
          width={400}
          height={350}
          className="w-full h-auto"
        />
        </div>
      </section>
    );
  }
  