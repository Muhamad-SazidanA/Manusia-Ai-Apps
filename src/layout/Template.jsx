import React from 'react';
import { Outlet } from 'react-router-dom';

export default function Template() {
    return (
        <div className="min-h-screen flex flex-col bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900 text-white">
            {/* Header */}
            <header className="glass-effect sticky top-0 z-50 border-b border-primary-500/20">
                <nav className="py-3">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex items-center justify-between">
                            {/* Kiri: Logo */}
                            <div className="md:flex items-center space-x-4 pb-5">
                                <img
                                    src="/images/Logo-Manusia.Ai.png"
                                    alt="Manusia.AI"
                                    className="h-10 w-auto"
                                />
                            </div>

                            {/* Tengah: Navigation Menu */}
                            <ul className="hidden md:flex items-center space-x-8">
                                <li>
                                    <a
                                        href="#about"
                                        className="text-white/90 hover:text-primary-500 font-medium transition-colors duration-300"
                                    >
                                        About
                                    </a>
                                </li>
                                <li className="relative group">
                                    <a
                                        href="#products"
                                        className="text-white/90 hover:text-primary-500 font-medium transition-colors duration-300 flex items-center space-x-1"
                                    >
                                        <span>Products</span>
                                        <i className="fas fa-chevron-down text-xs"></i>
                                    </a>
                                    <ul className="absolute top-full left-0 mt-2 glass-effect rounded-xl p-2 min-w-[180px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                                        <li>
                                            <a
                                                href="#brilian"
                                                className="block px-4 py-2 text-white/80 hover:text-primary-500 rounded-lg transition-all duration-300"
                                            >
                                                Brilian.AI
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="#rangkum"
                                                className="block px-4 py-2 text-white/80 hover:text-primary-500 rounded-lg transition-all duration-300"
                                            >
                                                Rangkum.AI
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="relative group">
                                    <a
                                        href="#industries"
                                        className="text-white/90 hover:text-primary-500 font-medium transition-colors duration-300 flex items-center space-x-1"
                                    >
                                        <span>Industries</span>
                                        <i className="fas fa-chevron-down text-xs"></i>
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#blog"
                                        className="text-white/90 hover:text-primary-500 font-medium transition-colors duration-300"
                                    >
                                        Blog
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#pricing"
                                        className="text-white/90 hover:text-primary-500 font-medium transition-colors duration-300"
                                    >
                                        Pricing
                                    </a>
                                </li>
                            </ul>

                            {/* Kanan: Tombol Demo */}
                            <div className="hidden md:block">
                                <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition-all duration-300">
                                    Demo
                                </button>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>


            {/* Main Content */}
            <main className="flex-1 w-full">
                <Outlet />
            </main>

            {/* Footer */}
            <footer className="glass-effect border-t border-primary-500/20 mt-auto">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                    <div className="flex flex-col lg:flex-row justify-between items-start space-y-8 lg:space-y-0">
                        {/* Footer Left */}
                        <div className="flex flex-col space-y-6">
                            <div className="flex items-center space-x-2">
                                <img
                                    src="/images/Logo-Manusia.Ai.png"
                                    alt="Manusia.AI"
                                    className="h-10 w-auto"
                                />
                            </div>
                            <div className="flex space-x-3">
                                <a
                                    href="#"
                                    className="flex items-center justify-center w-10 h-10 bg-white/10 rounded-lg text-primary-500 hover:bg-primary-500 hover:text-white transition-all duration-300"
                                >
                                    <i className="fab fa-linkedin text-sm"></i>
                                </a>
                                <a
                                    href="#"
                                    className="flex items-center justify-center w-10 h-10 bg-white/10 rounded-lg text-primary-500 hover:bg-primary-500 hover:text-white transition-all duration-300"
                                >
                                    <i className="fab fa-instagram text-sm"></i>
                                </a>
                                <a
                                    href="#"
                                    className="flex items-center justify-center w-10 h-10 bg-white/10 rounded-lg text-primary-500 hover:bg-primary-500 hover:text-white transition-all duration-300"
                                >
                                    <i className="fab fa-whatsapp text-sm"></i>
                                </a>
                            </div>
                        </div>

                        {/* Footer Right */}
                        <div className="flex flex-col sm:flex-row space-y-8 sm:space-y-0 sm:space-x-16">
                            <div className="min-w-[120px]">
                                <h4 className="text-lg font-semibold text-white mb-4">
                                    About
                                </h4>
                            </div>
                            <div className="min-w-[120px]">
                                <h4 className="text-lg font-semibold text-white mb-4">
                                    Products
                                </h4>
                                <ul className="space-y-2">
                                    <li>
                                        <a
                                            href="#"
                                            className="text-white/70 hover:text-primary-500 transition-colors duration-300 text-sm"
                                        >
                                            Brilian.AI
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#"
                                            className="text-white/70 hover:text-primary-500 transition-colors duration-300 text-sm"
                                        >
                                            Rangkum.AI
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="min-w-[120px]">
                                <h4 className="text-lg font-semibold text-white mb-4">
                                    Industries
                                </h4>
                            </div>
                            <div className="min-w-[120px]">
                                <h4 className="text-lg font-semibold text-white mb-4">
                                    Blog
                                </h4>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}