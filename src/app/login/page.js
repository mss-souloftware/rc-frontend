"use client";
import Image from 'next/image'
import React from 'react'
import { useState } from "react";

export default function page() {
    const [form, setForm] = useState({
        email: "",
        password: "",
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setForm({
            ...form,
            [name]: type === "checkbox" ? checked : value,
        });
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
                        <h2 className='text-3xl font-semibold text-[#222934] mb-10 '>Login to Your Account</h2>
                        <form className="space-y-4">
                            {/* Email */}
                            <div>
                                <label className="block text-sm font-medium md:mb-4 mb-2">
                                    Email <span className="text-red-500">*</span>
                                </label>
                                <input
                                    name="email"
                                    value={form.email}
                                    onChange={handleChange}
                                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#00A63E] bg-white"
                                    type="email"
                                    placeholder="Enter email"
                                />
                            </div>

                            {/* Password */}
                            <div>
                                <label className="block text-sm font-medium md:mb-4 mb-2">
                                    Password <span className="text-red-500">*</span>
                                </label>
                                <input
                                    name="password"
                                    value={form.password}
                                    onChange={handleChange}
                                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#00A63E] bg-white"
                                    type="password"
                                    placeholder="Enter password"
                                />
                            </div>


                            {/* Terms Checkbox */}
                            <div className="flex items-start">
                                <p className="text-sm text-gray-600">
                                    Forgot Password?
                                </p>
                            </div>

                            {/* Sign Up Button */}
                            <button
                                type="submit"
                                className="w-full bg-[#1A1F3B] text-white py-2 rounded-full font-medium hover:bg-[#00A63E] transition"
                            >
                                Login
                            </button>
                        </form>

                        {/* Already have account */}
                        <p className="text-center text-sm mt-4 text-gray-600">
                            Don’t have an account?  <a className="text-[#1A1F3B] font-medium" href="/signup">Sign Up</a>
                        </p>

                        {/* Divider */}
                        <div className="flex items-center my-6">
                            <div className="flex-grow h-px bg-gray-200"></div>
                            <span className="mx-3 text-sm text-gray-500">or</span>
                            <div className="flex-grow h-px bg-gray-200"></div>
                        </div>

                        {/* Social Buttons */}
                        <div className="space-y-3">
                            <button className="w-full flex items-center justify-center gap-2 border border-gray-300 rounded-full py-2 hover:bg-gray-50 transition">

                                <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M25.2982 21.8205C24.8747 22.7988 24.3735 23.6992 23.7928 24.5271C23.0012 25.6557 22.3531 26.437 21.8536 26.8708C21.0793 27.5828 20.2497 27.9476 19.3613 27.9682C18.7236 27.9682 17.9545 27.7868 17.0592 27.4186C16.161 27.0522 15.3355 26.8707 14.5808 26.8707C13.7892 26.8707 12.9402 27.0522 12.0322 27.4186C11.1227 27.7867 10.3901 27.9786 9.82992 27.9976C8.978 28.0339 8.12886 27.6588 7.28132 26.8707C6.74035 26.3989 6.0637 25.59 5.25307 24.4441C4.38337 23.2205 3.66839 21.8015 3.10817 20.1837C2.5083 18.4364 2.20752 16.7443 2.20752 15.1062C2.20752 13.2297 2.61297 11.6114 3.42514 10.2551C4.06345 9.16573 4.91258 8.30643 5.97527 7.67556C7.03796 7.04468 8.18634 6.72323 9.42293 6.70266C10.0996 6.70266 10.9869 6.91195 12.0896 7.32331C13.1892 7.73604 13.8952 7.94538 14.2048 7.94538C14.4362 7.94538 15.2205 7.70066 16.5501 7.21274C17.8075 6.76025 18.8687 6.57289 19.738 6.64672C22.0938 6.83687 23.8636 7.76546 25.0406 9.43852C22.9338 10.7151 21.8916 12.503 21.9123 14.7967C21.9313 16.5833 22.5794 18.0701 23.8532 19.2505C24.4304 19.7984 25.0751 20.2219 25.7924 20.5225C25.6368 20.9736 25.4727 21.4057 25.2981 21.8205H25.2982ZM19.8954 0.560164C19.8954 1.96049 19.3838 3.26796 18.3641 4.47814C17.1335 5.9168 15.6451 6.74811 14.031 6.61697C14.0093 6.44092 13.9985 6.26371 13.9985 6.08634C13.9985 4.74201 14.5837 3.30334 15.6229 2.12707C16.1418 1.53152 16.8016 1.03627 17.6019 0.641211C18.4004 0.252055 19.1557 0.0368047 19.866 0C19.8867 0.187195 19.8954 0.374391 19.8954 0.560109L19.8954 0.560164Z" fill="#21232E" />
                                </svg>

                                Sign up with Apple
                            </button>
                            <button className="w-full flex items-center justify-center gap-2 border border-gray-300 rounded-full py-2 hover:bg-gray-50 transition">

                                <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M25.4399 11.7157H24.5002V11.6673H14.0002V16.334H20.5936C19.6317 19.0506 17.0469 21.0007 14.0002 21.0007C10.1344 21.0007 7.00016 17.8664 7.00016 14.0007C7.00016 10.1349 10.1344 7.00065 14.0002 7.00065C15.7846 7.00065 17.408 7.67382 18.6441 8.7734L21.944 5.47348C19.8603 3.53157 17.0732 2.33398 14.0002 2.33398C7.55725 2.33398 2.3335 7.55773 2.3335 14.0007C2.3335 20.4436 7.55725 25.6673 14.0002 25.6673C20.4431 25.6673 25.6668 20.4436 25.6668 14.0007C25.6668 13.2184 25.5863 12.4548 25.4399 11.7157Z" fill="#FFC107" />
                                    <path d="M3.67871 8.5704L7.51179 11.3815C8.54896 8.81365 11.0608 7.00065 14.0002 7.00065C15.7846 7.00065 17.408 7.67382 18.6441 8.7734L21.944 5.47348C19.8604 3.53157 17.0732 2.33398 14.0002 2.33398C9.51904 2.33398 5.63288 4.8639 3.67871 8.5704Z" fill="#FF3D00" />
                                    <path d="M14 25.6671C17.0135 25.6671 19.7517 24.5138 21.8219 22.6384L18.2111 19.5829C17.0004 20.5036 15.521 21.0016 14 21.0004C10.9655 21.0004 8.38894 19.0655 7.41827 16.3652L3.61377 19.2965C5.5446 23.0747 9.46577 25.6671 14 25.6671Z" fill="#4CAF50" />
                                    <path d="M25.4397 11.7144H24.5V11.666H14V16.3327H20.5934C20.1333 17.6256 19.3045 18.7554 18.2093 19.5824L18.2111 19.5813L21.8219 22.6368C21.5664 22.8689 25.6667 19.8327 25.6667 13.9993C25.6667 13.2171 25.5862 12.4535 25.4397 11.7144Z" fill="#1976D2" />
                                </svg>

                                Sign up with Google
                            </button>
                            <button className="w-full flex items-center justify-center gap-2 border border-gray-300 rounded-full py-2 hover:bg-gray-50 transition">

                                <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_1_3888)">
                                        <path d="M28 14C28 6.26806 21.7319 0 14 0C6.26806 0 0 6.26806 0 14C0 20.9877 5.11963 26.7797 11.8125 27.8299V18.0469H8.25781V14H11.8125V10.9156C11.8125 7.40687 13.9027 5.46875 17.1006 5.46875C18.6322 5.46875 20.2344 5.74219 20.2344 5.74219V9.1875H18.4691C16.7299 9.1875 16.1875 10.2667 16.1875 11.3739V14H20.0703L19.4496 18.0469H16.1875V27.8299C22.8804 26.7797 28 20.9879 28 14Z" fill="#1877F2" />
                                        <path d="M19.4496 18.0469L20.0703 14H16.1875V11.3739C16.1875 10.2666 16.7299 9.1875 18.4691 9.1875H20.2344V5.74219C20.2344 5.74219 18.6322 5.46875 17.1005 5.46875C13.9027 5.46875 11.8125 7.40688 11.8125 10.9156V14H8.25781V18.0469H11.8125V27.8299C12.5361 27.9433 13.2675 28.0002 14 28C14.7325 28.0002 15.4639 27.9433 16.1875 27.8299V18.0469H19.4496Z" fill="white" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_1_3888">
                                            <rect width="28" height="28" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>

                                Sign up with Facebook
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
