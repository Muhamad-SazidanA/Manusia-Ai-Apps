import React from 'react';
import { Outlet, Link } from 'react-router-dom';

export default function Template() {
    return (
        <div className="min-h-screen flex flex-col bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900 text-white">
            {/* Header */}
            <header className="glass-effect sticky top-0 z-50 border-b border-primary-500/20">
                <nav className="py-3">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex items-center justify-between">
                            {/* Logo */}
                            <div className="flex items-center space-x-4 mb-5">
                                <Link to="/">
                                    <img
                                        src="/images/Logo-Manusia.Ai.png"
                                        alt="Manusia.AI"
                                        className="h-10 w-auto cursor-pointer"
                                    />
                                </Link>
                            </div>

                            {/* Navigation Menu */}
                            <ul className="hidden md:flex items-center space-x-12 text-white/70 text-sm font-light">
                                <li>
                                    <a href="#about" className="hover:text-white transition-colors duration-300">About</a>
                                </li>
                                <li className="relative group">
                                    <a href="#products" className="hover:text-white transition-colors duration-300 flex items-center space-x-1">
                                        <span>Products</span>
                                        <i className="fas fa-chevron-down text-xs"></i>
                                    </a>
                                    <ul className="absolute top-full left-0 mt-2 glass-effect rounded-xl p-2 min-w-[180px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                                        <li>
                                            <a href="#brilian" className="block px-4 py-2 text-white/80 hover:text-white transition-all duration-300">
                                                Brilian.AI
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#rangkum" className="block px-4 py-2 text-white/80 hover:text-white transition-all duration-300">
                                                Rangkum.AI
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li><a href="#industries" className="hover:text-white transition-colors duration-300">Industries</a></li>
                                <li><Link to="/blog" className="hover:text-white transition-colors duration-300">Blog</Link></li>
                                <li><a href="#pricing" className="hover:text-white transition-colors duration-300">Pricing</a></li>
                            </ul>

                            {/* Demo Button */}
                            <div className="flex justify-center items-center h-10 px-6 text-white bg-blue-600/20 border border-blue-500/30 rounded-md hover:bg-blue-600/30 hover:border-blue-500/60 hover:shadow-md hover:scale-105 transition-all duration-200 ease-in-out font-inter font-light">
                                <button>Demo</button>
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
            <footer className="bg-[#041449] mt-auto text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                    <div className="flex flex-col lg:flex-row justify-between items-start space-y-8 lg:space-y-0">
                        {/* Left Section */}
                        <div className="flex flex-col space-y-6">
                            <Link to="/">
                                <img src="/images/Logo-Manusia.Ai.png" alt="Manusia.AI" className="h-10 w-auto cursor-pointer" />
                            </Link>
                            <div className="flex space-x-3">
                                <a href="#" className="flex items-center justify-center w-10 h-10 bg-white/10 rounded-lg text-white hover:bg-white/20 transition">
                                    <i className="fab fa-linkedin-in"></i>
                                </a>
                                <a href="#" className="flex items-center justify-center w-10 h-10 bg-white/10 rounded-lg text-white hover:bg-white/20 transition">
                                    <i className="fab fa-instagram"></i>
                                </a>
                                <a href="#" className="flex items-center justify-center w-10 h-10 bg-white/10 rounded-lg text-white hover:bg-white/20 transition">
                                    <i className="fab fa-whatsapp"></i>
                                </a>
                            </div>
                        </div>

                        {/* Right Section */}
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-10">
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
                                        <a href="#brilian" className="flex items-center gap-2 text-white/70 hover:text-primary-500 text-sm transition-all">
                                        Brilian.AI
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#rangkum" className="flex items-center gap-2 text-white/70 hover:text-primary-500 text-sm transition-all">
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