"use client"
import React, { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    surname: '',
    phoneNumber: '',
    contactReason: '',
    message: ''
  });

  const [selectedOption, setSelectedOption] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit form logic here
    console.log('Form submitted:', formData, selectedOption);
  };

  return (
    <>
      <Head>
        <title>Get in Touch With Us</title>
        <meta name="description" content="Contact our team for assistance" />
      </Head>
      
     <div className='container mx-auto lg:py-[80px] py-[20px] px-5'>
     <div className="flex flex-col lg:flex-row w-full">
        {/* Left section - Contact Form */}
        <div className="xl:w-[40%] lg:w-[50%] w-full  lg:p-12 bg-white lg:!pl-0 p-0">
          <h1 className="xl:text-5xl md:text-3xl text-2xl font-bold text-[#222934] mb-2">Get in touch with us</h1>
          <p className="text-[#78808B] lg:text-[16px] md:text-md text-sm mb-6">
            Whether you have a question about your lease, need assistance with a maintenance 
            request, or have billing inquiries, our team is ready to assist you.
          </p>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Radio Button */}
            <div className="mb-4 border-1 border-[#E6E6E6] rounded-[40px] shadow-2xl p-3 inline-block">
              <label className="flex items-center space-x-2 ">
                <input 
                  type="radio" 
                  className="h-4 w-4 text-[#2C9143]" 
                  checked 
                  readOnly
                />
                <span className="text-sm text-[#6B6B6B]">Schedule Session</span>
              </label>
            </div>
            
            {/* First Name */}
            <div className="mb-4">
              <label htmlFor="firstName" className="block md:text-md text-sm font-medium text-[#222934] mb-2">
                First Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                placeholder="Anders"
                className="w-full p-2 border border-[#E0E5E9] px-[16px] rounded-[8px] focus:outline-none focus:ring-2 focus:ring-[#2C9143]"
                value={formData.firstName}
                onChange={handleInputChange}
                required
              />
            </div>
            
            {/* Surname */}
            <div className="mb-4">
              <label htmlFor="surname" className="block md:text-md text-sm font-medium text-[#222934] mb-2">
                Surname <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="surname"
                name="surname"
                placeholder="Pederson"
                className="w-full p-2 border border-[#E0E5E9] px-[16px] rounded-[8px] focus:outline-none focus:ring-2 focus:ring-[#2C9143]"
                value={formData.surname}
                onChange={handleInputChange}
                required
              />
            </div>
            
            {/* Phone Number */}
            <div className="mb-4">
              <label htmlFor="phoneNumber" className="block md:text-md text-sm font-medium text-[#222934] mb-2">
                Phone Number <span className="text-red-500">*</span>
              </label>
              <div className="flex">
                
                <input
                  type="tel"
                  id="phoneNumber"
                  name="phoneNumber"
                  placeholder="+1 234 567 890"
                  className="w-full p-2 border border-[#E0E5E9] px-[16px] rounded-[8px] focus:outline-none focus:ring-2 focus:ring-[#2C9143]"
                  value={formData.phoneNumber}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>
            
            {/* Why Would You Like to Contact Us? */}
            <div className="mb-4">
              <label htmlFor="contactReason" className="block md:text-md text-sm font-medium text-[#222934] mb-2">
                Why Would You Like to Contact Us? <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <select
                  id="contactReason"
                  name="contactReason"
                  className="w-full p-2 border border-[#E0E5E9] px-[16px] rounded-[8px] appearance-none focus:outline-none focus:ring-2 focus:ring-[#2C9143]"
                  value={formData.contactReason}
                  onChange={handleInputChange}
                  required
                >
                  <option value="" disabled selected>Select a reason</option>
                  <option value="leasing">Leasing Inquiry</option>
                  <option value="maintenance">Maintenance Request</option>
                  <option value="billing">Billing Question</option>
                  <option value="other">Other</option>
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                  <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </div>
              </div>
            </div>
            
            {/* Contact Options */}
            <div className="space-y-3">
              <div
                className={`p-4 border rounded-lg cursor-pointer ${selectedOption === 'rent' ? 'border-green-500 bg-green-50' : 'border-gray-300 hover:border-gray-400'}`}
                onClick={() => handleOptionSelect('rent')}
              >
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center ${selectedOption === 'rent' ? 'bg-green-500' : 'border border-gray-300'}`}>
                      <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="56" height="56" rx="12" fill={selectedOption === 'rent' ? "#2C9143" : "#F6F7F9"} />
                        <path d="M27.7664 36.7554C32.7306 36.7554 36.7549 32.7311 36.7549 27.7669C36.7549 22.8026 32.7306 18.7783 27.7664 18.7783C22.8021 18.7783 18.7778 22.8026 18.7778 27.7669C18.7778 32.7311 22.8021 36.7554 27.7664 36.7554Z" stroke={selectedOption === 'rent' ? "white" : "#2C343F"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M34.0181 34.4854L37.5421 38.0002" stroke={selectedOption === 'rent' ? "white" : "#2C343F"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-900">I'm looking for rent</p>
                    <p className="text-xs text-[#78808B] mt-1">Browse listings that match your lifestyle and budget</p>
                  </div>
                </div>
              </div>

              <div
                className={`p-4 border rounded-lg cursor-pointer ${selectedOption === 'agent' ? 'border-green-500 bg-green-50' : 'border-gray-300 hover:border-gray-400'}`}
                onClick={() => handleOptionSelect('agent')}
              >
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center ${selectedOption === 'agent' ? 'bg-green-500' : 'border border-gray-300'}`}>
                      <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="56" height="56" rx="12" fill={selectedOption === 'agent' ? "#2C9143" : "#F6F7F9"} />
                        <path d="M31 37V29C31 28.7348 30.8946 28.4804 30.7071 28.2929C30.5196 28.1054 30.2652 28 30 28H26C25.7348 28 25.4804 28.1054 25.2929 28.2929C25.1054 28.4804 25 28.7348 25 29V37" stroke={selectedOption === 'agent' ? "white" : "#2C343F"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M19 26.0005C18.9999 25.7095 19.0633 25.4221 19.1858 25.1582C19.3082 24.8943 19.4868 24.6603 19.709 24.4725L26.709 18.4735C27.07 18.1684 27.5274 18.001 28 18.001C28.4726 18.001 28.93 18.1684 29.291 18.4735L36.291 24.4725C36.5132 24.6603 36.6918 24.8943 36.8142 25.1582C36.9367 25.4221 37.0001 25.7095 37 26.0005V35.0005C37 35.5309 36.7893 36.0396 36.4142 36.4147C36.0391 36.7897 35.5304 37.0005 35 37.0005H21C20.4696 37.0005 19.9609 36.7897 19.5858 36.4147C19.2107 36.0396 19 35.5309 19 35.0005V26.0005Z" stroke={selectedOption === 'agent' ? "white" : "#2C343F"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-900">I'm a Private Sale/Lister</p>
                    <p className="text-xs text-[#78808B] mt-1">List your property safely and connect with reliable renters</p>
                  </div>
                </div>
              </div>

              <div
                className={`p-4 border rounded-lg cursor-pointer ${selectedOption === 'agency' ? 'border-green-500 bg-green-50' : 'border-gray-300 hover:border-gray-400'}`}
                onClick={() => handleOptionSelect('agency')}
              >
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center ${selectedOption === 'agency' ? 'bg-green-500' : 'border border-gray-300'}`}>
                      <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="56" height="56" rx="12" fill={selectedOption === 'agency' ? "#2C9143" : "#F6F7F9"} />
                        <path d="M19 37H37M25 24H26M25 28H26M25 32H26M30 24H31M30 28H31M30 32H31M21 37V21C21 20.4696 21.2107 19.9609 21.5858 19.5858C21.9609 19.2107 22.4696 19 23 19H33C33.5304 19 34.0391 19.2107 34.4142 19.5858C34.7893 19.9609 35 20.4696 35 21V37" stroke={selectedOption === 'agency' ? "white" : "#2C343F"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-900">I'm a Real Estate Agent/Agency</p>
                    <p className="text-xs text-[#78808B] mt-1">Reach more tenants and fill vacancies faster with our powerful listing platform</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Message */}
            <div className="mb-4">
              <label htmlFor="message" className="block md:text-md text-sm font-medium text-[#222934] mb-2">
                Your Message <span className="text-red-500">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="Type Your message"
                rows="4"
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#2C9143]"
                value={formData.message}
                onChange={handleInputChange}
                required
              ></textarea>
            </div>
            
            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-3 px-4 bg-[#202A54] text-white font-medium rounded-[40px] cursor-pointer hover:bg-[#2C9143] focus:outline-none focus:ring-2 focus:ring-[#202A54]"
            >
              Send Message
            </button>
          </form>
        </div>
        
        {/* Right section - Image */}
        <div className="hidden lg:block xl:w-[60%] lg:w-[50%] w-full relative">
          <div className="absolute inset-0">
            <Image
              src="/contact/contact.png" // You'll need to add this image to your public folder
              alt="Melbourne city with tram"
              layout="fill"
              objectFit="cover"
              priority
            />
          </div>
        </div>
      </div>
     </div>
    </>
  );
};

export default ContactPage;