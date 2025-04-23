// components/ReadyToRentSection.jsx
import Image from "next/image";
export default function ReadyToRentSection() {
    return (
      <section className="container mx-auto flex flex-col md:flex-row items-center justify-between px-[80px]  py-[80px] bg-white">
        {/* Text content */}
        <div className="text-center md:text-left">
          <h2 className="text-[48px] font-bold text-[#21232F]  mb-4">
            Are You Ready To Rent <span className="text-gray-900">?</span>
          </h2>
          <p className="text-[#686B7A] text-[16px] mb-6 w-[80%]">
            Stop Endlessly Searching, Let Agents Find You With Our Ready-To-Rent Database.
          </p>
          <button className="bg-[#1F254F] text-white text-sm px-6 py-2 rounded-full transition hover:opacity-90">
            Ready-To-Rent Applications
          </button>
        </div>
  
        {/* Image content */}
        <div className="mt-10 md:mt-0 mr-[120px] max-w-sm w-full">
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
  