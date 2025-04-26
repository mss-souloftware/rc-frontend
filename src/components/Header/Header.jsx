"use client"
import { useState, useEffect } from 'react';
import { FaUserCircle } from 'react-icons/fa';
import { TbGridDots } from "react-icons/tb";
import { RiMenu3Line } from "react-icons/ri";
import { IoMdClose } from "react-icons/io";
import Logo from './Logo';
import Nav from './Nav';
import { Button } from '../ui/button';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [windowWidth, setWindowWidth] = useState(
        typeof window !== 'undefined' ? window.innerWidth : 0
    );

    // Handle window resize
    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
            if (window.innerWidth >= 1024) {
                setIsMobileMenuOpen(false);
            }
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Close mobile menu when clicking outside
    useEffect(() => {
        const handleClickOutside = (e) => {
            if (isMobileMenuOpen && !e.target.closest('#mobile-menu') && !e.target.closest('#menu-toggle')) {
                setIsMobileMenuOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [isMobileMenuOpen]);

    // Prevent body scroll when menu is open
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isMobileMenuOpen]);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <header className="w-full py-4 relative z-50">
            <div className="container mx-auto flex items-center justify-between">
                <div className="flex items-center xl:gap-12 gap-5">
                    <Logo />
                    {/* Desktop Navigation - hidden on mobile/tablet */}
                    <div className="hidden lg:block">
                        <Nav />
                    </div>
                </div>

                {/* Desktop Action Buttons - hidden on mobile/tablet */}
                <div className="hidden lg:flex items-center space-x-3">
                    <Button variant="grayTrans" className="px-4 py-3">
                        List your home
                    </Button>
                    <Button variant="grayTrans" className="px-4 py-3">
                        Sign Up
                    </Button>
                    <div className="flex items-center justify-center space-x-2 rounded-full bg-white px-3 py-2 shadow">
                        <TbGridDots className="text-gray-600 text-xl" />
                        <FaUserCircle className="text-green-600 text-3xl" />
                    </div>
                </div>

                {/* Mobile Hamburger Menu Button */}
                <div className="lg:hidden flex items-center">
                    <button 
                        id="menu-toggle"
                        onClick={toggleMobileMenu}
                        className="p-2 focus:outline-none"
                        aria-label="Toggle menu"
                    >
                        {isMobileMenuOpen ? (
                            <IoMdClose className="text-2xl text-white" />
                        ) : (
                            <RiMenu3Line className="text-2xl text-white" />
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile Sidebar Menu with Animation */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <>
                        {/* Overlay */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 0.5 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 bg-black z-40"
                        />

                        {/* Sidebar */}
                        <motion.div
                            id="mobile-menu"
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ type: 'tween', duration: 0.3 }}
                            className="fixed top-0 right-0 h-full md:w-[70%]  w-full bg-white shadow-lg z-50 overflow-y-auto"
                        >
                            <div className="p-6">
                                <div className="flex justify-between items-center mb-8">
                                    <Logo />
                                    <button 
                                        onClick={toggleMobileMenu} 
                                        className="p-2"
                                        aria-label="Close menu"
                                    >
                                        <IoMdClose className="text-2xl" />
                                    </button>
                                </div>

                                {/* Mobile Navigation */}
                                <div className="mb-8">
                                    <Nav isMobile={true} />
                                </div>

                                {/* Mobile Action Buttons */}
                                <div className="space-y-4">
                                    <Button variant="grayTrans" className="w-full py-3">
                                        List your home
                                    </Button>
                                    <Button variant="grayTrans" className="w-full py-3">
                                        Sign Up
                                    </Button>
                                    <div className="flex items-center space-x-2 p-3 bg-gray-100 rounded-lg">
                                        <FaUserCircle className="text-green-600 text-2xl" />
                                        <span className="font-medium">Account</span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Header;