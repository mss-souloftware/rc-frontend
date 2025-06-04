"use client";
import Image from 'next/image'
import React from 'react'
import { useState } from "react";

export default function SignupSec() {
    const [selectedRole, setSelectedRole] = useState("landlord");

    const handleSelect = (role) => {
        setSelectedRole(role);
    };

    return (
        <div className='bg-[#F8FAFC] py-10'>
            <div className='container mx-auto px-5'>
                <div className='flex md:flex-row flex-col md:gap-24 gap-8'>
                    <div className='bg-[#202A54] rounded-3xl md:p-12 p-5 md:w-1/2 w-full'>
                        <h1 className='text-white text-3xl mb-4'>Start Your Journey Today</h1>
                        <p className='text-white'>Finding the perfect rental has never been easier. Explore our listings, compare features, and secure your next stay with confidence—all in just a few clicks.</p>
                        <Image className='mx-auto md:mt-20 mt-10' src="/images/signup.png" alt='Rent Canberra' width={800} height={500} />
                    </div>
                    <div className='md:w-1/2 w-full md:py-20 py-5'>
                        <h2 className='text-3xl font-semibold text-[#222934] mb-10 '>Join as a landlord or Renter</h2>

                        <div className="grid grid-cols-2 gap-4 mb-6">
                            {/* Landlord Option */}
                            <div
                                className={`cursor-pointer border-2 rounded-xl p-4 transition ${selectedRole === "landlord"
                                        ? "border-green-500"
                                        : "border-gray-200"
                                    }`}
                                onClick={() => handleSelect("landlord")}
                            >
                                <div className="text-3xl mb-10">🏠</div>
                                <h3 className="font-semibold text-xl mb-1">Become a Landlord</h3>
                                <p className="text-gray-500">
                                    List and manage your properties while finding reliable tenants.
                                </p>
                            </div>

                            {/* Tenant Option */}
                            <div
                                className={`cursor-pointer border-2 rounded-xl p-4 transition ${selectedRole === "tenant" ? "border-green-500" : "border-gray-200"
                                    }`}
                                onClick={() => handleSelect("tenant")}
                            >
                                <div className="text-3xl mb-10">🔑</div>
                                <h3 className="font-semibold text-xl mb-1">Become a Tenant</h3>
                                <p className="text-gray-500">
                                    Find the perfect home that fits your lifestyle and budget.
                                </p>
                            </div>
                        </div>

                        <button className="w-full bg-[#1A1F3B] text-white py-2 rounded-full font-medium hover:bg-[#111427] transition">
                            {selectedRole === "landlord"
                                ? "Become a Landlord"
                                : "Become a Tenant"}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
