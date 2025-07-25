import React, { useState } from 'react';
import { Outlet, Link } from 'react-router-dom';

export default function Template() {
    const [activeTab, setActiveTab] = useState('null');

    // Tambahkan fungsi scroll ke atas
    function scrollToTop() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    return (
        <div className="min-h-screen flex flex-col bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900 text-white">
            {/* Header */}
            <header
                className="sticky top-0 z-50 border-b border-primary-500/20"
                style={{
                    background: 'rgba(3, 34, 112, 1)',
                    borderBottom: '1px solid rgba(74, 158, 255, 0.2)',
                }}
            >
                <nav className="py-5">
                    <div className="w-full bg-transparent">
                        <div className="max-w-[1200px] mx-auto flex items-center justify-between px-8">
                            {/* Logo */}
                            <div className="flex items-center">
                                <Link to="/">
                                    <img
                                        src="/LogoUtama-Manusia.Ai.svg"
                                        alt="Manusia.AI"
                                        className="h-10 w-auto cursor-pointer"
                                    />
                                </Link>
                            </div>

                            {/* Navigation Menu */}
                            <ul className="hidden md:flex items-center space-x-12 text-white/70 text-sm font-light">
                                <li>
                                    <Link
                                        to="/"
                                        className="block px-4 py-2 font-semibold text-white/80 rounded-xl transition-all duration-200 hover:bg-[#0075FF] hover:text-white"
                                        onClick={scrollToTop}
                                    >
                                        About
                                    </Link>
                                </li>
                                {/* PRODUCTS DROPDOWN */}
                                <li className="relative group">
                                    <div className="block px-4 py-2 font-medium text-white/80 rounded-xl transition-all duration-200 hover:bg-[#0075FF] hover:text-white">
                                        <div className="flex items-center gap-2">
                                            <span>Products</span>
                                            <i className="fas fa-chevron-down text-xs"></i>
                                        </div>
                                    </div>
                                    <div
                                        className="absolute top-full left-0 mt-2 rounded-2xl z-50 shadow-lg overflow-hidden min-w-[180px] p-1 transition-all duration-300 opacity-0 invisible group-hover:opacity-100 group-hover:visible"
                                        style={{
                                            background: 'rgba(20, 30, 55, 0.55)',
                                            backdropFilter: 'blur(18px)',
                                            WebkitBackdropFilter: 'blur(18px)',
                                            boxShadow: '0 0 16px 2px #4A9EFF, 0 0 0 1px #1C64DD',
                                            border: '1.5px solid #2196FF',
                                            fontSize: '0.93rem',
                                        }}
                                    >
                                        <Link
                                            to="/brilian-ai"
                                            className="block px-4 py-2 font-semibold text-white/80 rounded-xl transition-all duration-200 hover:bg-[#0075FF] hover:text-white"
                                            onClick={scrollToTop}
                                        >
                                            <i className="fa-solid fa-brain text-lg"></i> Brilian.AI
                                        </Link>
                                        <Link
                                            to="/rangkum-ai"
                                            className="block px-4 py-2 font-semibold text-white/80 rounded-xl transition-all duration-200 hover:bg-[#0075FF] hover:text-white"
                                            onClick={scrollToTop}
                                        >
                                            <i className="fa-solid fa-file-lines text-lg"></i> Rangkum.AI
                                        </Link>
                                    </div>
                                </li>
                                {/* INDUSTRIES DROPDOWN */}
                                <li className="relative group"
                                    onMouseEnter={() => setActiveTab(null)}
                                >
                                    <div className="block px-4 py-2 font-medium text-white/80 rounded-xl transition-all duration-200 hover:bg-[#0075FF] hover:text-white">
                                        <div className="flex items-center gap-2">
                                            <span>Industries</span>
                                            <i className="fas fa-chevron-down text-xs"></i>
                                        </div>
                                    </div>
                                    <div
                                        className={`
                                            absolute top-full left-0 mt-2 rounded-2xl z-50 shadow-lg overflow-hidden
                                            transition-all duration-300
                                            opacity-0 invisible group-hover:opacity-100 group-hover:visible
                                            ${activeTab === 'brilian' || activeTab === 'rangkum' ? 'min-w-[520px] p-3 flex' : 'min-w-[180px] p-1'}
                                        `}
                                        style={{
                                            background: 'rgba(20, 30, 55, 0.55)',
                                            backdropFilter: 'blur(18px)',
                                            WebkitBackdropFilter: 'blur(18px)',
                                            boxShadow: '0 0 16px 2px #4A9EFF, 0 0 0 1px #1C64DD',
                                            border: '1.5px solid #2196FF',
                                            fontSize: '0.93rem',
                                            alignItems: 'flex-start'
                                        }}
                                        onMouseLeave={() => setActiveTab(null)}
                                    >
                                        {/* Tab Switcher dengan Link */}
                                        <div className="flex flex-col gap-2 min-w-[160px]">
                                            <div
                                                className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium text-base transition-all cursor-pointer
                                                ${activeTab === 'brilian' ? 'bg-[#2196FF] text-white shadow' : 'bg-transparent text-white/80 hover:bg-[#2196FF]/20'}`}
                                                onMouseEnter={() => setActiveTab('brilian')}
                                            >
                                                <i className="fa-solid fa-brain text-lg"></i> Brilian.AI
                                                <i
                                                    className={`fa-solid ${activeTab === 'brilian' ? 'fa-chevron-right' : 'fa-chevron-down'
                                                        } text-xs ml-auto transition-all duration-200`}
                                                ></i>
                                            </div>

                                            <div
                                                className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium text-base transition-all cursor-pointer
${activeTab === 'rangkum' ? 'bg-[#2196FF] text-white shadow' : 'bg-transparent text-white/80 hover:bg-[#2196FF]/20'}`}
                                                onMouseEnter={() => setActiveTab('rangkum')}
                                            >
                                                <i className="fa-solid fa-file-lines text-lg"></i> Rangkum.AI
                                                <i
                                                    className={`fa-solid ${activeTab === 'rangkum' ? 'fa-chevron-right' : 'fa-chevron-down'
                                                        } text-xs ml-auto transition-all duration-200`}
                                                ></i>
                                            </div>
                                        </div>
                                        {/* Industries Content */}
                                        {activeTab === 'brilian' && (
                                            <div className="ml-4 animate-fade-in flex items-center" style={{ minWidth: 340, minHeight: 180 }}>
                                                <div className="grid grid-cols-2 gap-x-6 gap-y-4 w-full">
                                                    <Link to="/brilianai-banking" className="flex items-center gap-2 text-white text-sm font-bold block px-4 py-2 font-semibold text-white/80 rounded-xl transition-all duration-200 hover:bg-[#0075FF] hover:text-white" onClick={scrollToTop}>
                                                        <i className="fa-solid fa-landmark text-xl"></i>
                                                        <span>
                                                            BANK dan<br />Multifinance
                                                        </span>
                                                    </Link>
                                                    <Link to="/brilianai-hospital" className="flex items-center gap-2 text-white text-sm font-bold block px-4 py-2 font-semibold text-white/80 rounded-xl transition-all duration-200 hover:bg-[#0075FF] hover:text-white" onClick={scrollToTop}>
                                                        <i className="fa-solid fa-hospital text-xl"></i>
                                                        <span>Rumah Sakit</span>
                                                    </Link>
                                                    <Link to="/brilianai-insurance" className="flex items-center gap-2 text-white text-sm font-bold block px-4 py-2 font-semibold text-white/80 rounded-xl transition-all duration-200 hover:bg-[#0075FF] hover:text-white" onClick={scrollToTop}>
                                                        <i className="fa-solid fa-hand-holding-medical text-xl"></i>
                                                        <span>Insurance</span>
                                                    </Link>
                                                    <Link to="/brilianai-humanr" className="flex items-center gap-2 text-white text-sm font-bold block px-4 py-2 font-semibold text-white/80 rounded-xl transition-all duration-200 hover:bg-[#0075FF] hover:text-white" onClick={scrollToTop}>
                                                        <i className="fa-solid fa-users text-xl"></i>
                                                        <span>
                                                            Human<br />Resource
                                                        </span>
                                                    </Link>
                                                    <Link to="/brilianai-fmgc" className="flex items-center gap-2 text-white text-sm font-bold block px-4 py-2 font-semibold text-white/80 rounded-xl transition-all duration-200 hover:bg-[#0075FF] hover:text-white" onClick={scrollToTop}>
                                                        <i className="fa-solid fa-basket-shopping text-xl"></i>
                                                        <span>FMGC</span>
                                                    </Link>
                                                </div>
                                            </div>
                                        )}
                                        {activeTab === 'rangkum' && (
                                            <div className="ml-4 animate-fade-in flex items-center" style={{ minWidth: 340, minHeight: 180 }}>
                                                <div className="grid grid-cols-2 gap-x-6 gap-y-4 w-full">
                                                    <Link to="/rangkumai-manufacturing" className="flex items-center gap-2 text-white text-sm font-bold block px-4 py-2 font-semibold text-white/80 rounded-xl transition-all duration-200 hover:bg-[#0075FF] hover:text-white" onClick={scrollToTop}>
                                                        <i className="fa-solid fa-industry text-xl"></i>
                                                        <span>Manufacturing</span>
                                                    </Link>
                                                    <Link to="/rangkumai-retail" className="flex items-center gap-2 text-white text-sm font-bold block px-4 py-2 font-semibold text-white/80 rounded-xl transition-all duration-200 hover:bg-[#0075FF] hover:text-white" onClick={scrollToTop}>
                                                        <i className="fa-solid fa-store text-xl"></i>
                                                        <span>Retail</span>
                                                    </Link>
                                                    <Link to="/rangkumai-fmcg" className="flex items-center gap-2 text-white text-sm font-bold block px-4 py-2 font-semibold text-white/80 rounded-xl transition-all duration-200 hover:bg-[#0075FF] hover:text-white" onClick={scrollToTop}>
                                                        <i className="fa-solid fa-basket-shopping text-xl"></i>
                                                        <span>FMCG</span>
                                                    </Link>
                                                    <Link to="/rangkumai-asuransi" className="flex items-center gap-2 text-white text-sm font-bold block px-4 py-2 font-semibold text-white/80 rounded-xl transition-all duration-200 hover:bg-[#0075FF] hover:text-white" onClick={scrollToTop}>
                                                        <i className="fa-solid fa-car text-xl"></i>
                                                        <span>Asuransi</span>
                                                    </Link>
                                                    <Link to="/rangkumai-humanr" className="flex items-center gap-2 text-white text-sm font-bold block px-4 py-2 font-semibold text-white/80 rounded-xl transition-all duration-200 hover:bg-[#0075FF] hover:text-white" onClick={scrollToTop}>
                                                        <i className="fa-solid fa-users text-xl"></i>
                                                        <span>
                                                            Human<br />Resource
                                                        </span>
                                                    </Link>
                                                    <Link to="/rangkumai-hc" className="flex items-center gap-2 text-white text-sm font-bold block px-4 py-2 font-semibold text-white/80 rounded-xl transition-all duration-200 hover:bg-[#0075FF] hover:text-white" onClick={scrollToTop}>
                                                        <i className="fa-solid fa-heart-pulse text-xl"></i>
                                                        <span>Healthcare</span>
                                                    </Link>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </li>
                                <li
                                    className="relative group"
                                    onMouseEnter={() => setActiveTab('blog')}
                                >
                                    <div className="block px-4 py-2 font-medium text-white/80 rounded-xl transition-all duration-200 hover:bg-[#0075FF] hover:text-white cursor-pointer">
                                        <div className="flex items-center gap-2">
                                            <span>Insight</span>
                                            <i className="fas fa-chevron-down text-xs"></i>
                                        </div>
                                    </div>

                                    {/* DROPDOWN FULL WIDTH */}
                                    <div
                                        className="fixed left-0 top-[80px] w-full opacity-0 invisible group-hover:opacity-100 group-hover:visible z-[40] transition-all duration-300"
                                        style={{
                                            background: 'rgba(20, 30, 55, 0.55)',
                                            backdropFilter: 'blur(18px)',
                                            WebkitBackdropFilter: 'blur(18px)',
                                            boxShadow: '0 0 16px 2px #4A9EFF, 0 0 0 1px #1C64DD',
                                            borderTop: '1.5px solid #2196FF',
                                            fontSize: '1rem',
                                        }}
                                        onMouseLeave={() => setActiveTab('null')}
                                    >
                                        <div className="max-w-7xl mx-auto flex px-8 py-6 gap-8">
                                            {/* KIRI - Sidebar link */}
                                            <div className="w-1/4 border-r border-white/20 pr-6">
                                                <ul className="space-y-4 text-white/90 font-semibold">
                                                    <li
                                                        onClick={() => setActiveTab('blog')}
                                                        className={`cursor-pointer hover:text-[#4A9EFF] transition ${activeTab === 'blog' ? 'text-[#4A9EFF] font-bold' : ''}`}
                                                    >
                                                        Blog
                                                    </li>
                                                    <li
                                                        onClick={() => setActiveTab('events')}
                                                        className={`cursor-pointer hover:text-[#4A9EFF] transition ${activeTab === 'events' ? 'text-[#4A9EFF] font-bold' : ''}`}
                                                    >
                                                        Events
                                                    </li>
                                                    <li
                                                        onClick={() => setActiveTab('case')}
                                                        className={`cursor-pointer hover:text-[#4A9EFF] transition ${activeTab === 'case' ? 'text-[#4A9EFF] font-bold' : ''}`}
                                                    >
                                                        Case Study
                                                    </li>
                                                </ul>
                                            </div>

                                            {/* KANAN - Konten tambahan */}
                                            <div className="w-3/4">
                                                {/* Blog sebagai default saat pertama hover */}
                                                {activeTab === 'blog' && (
                                                    <>
                                                        <div className="grid grid-cols-3 gap-6 mb-4 animate-fade-in">
                                                            <div className="bg-white/10 rounded-xl overflow-hidden shadow">
                                                                <img src="/images/Image-Blog1.png" className="w-full" />
                                                                <div className="p-4 font-semibold text-white text-sm">Judul Artikel Blog 1</div>
                                                            </div>
                                                            <div className="bg-white/10 rounded-xl overflow-hidden shadow">
                                                                <img src="/images/Image-Blog2.png" className="w-full" />
                                                                <div className="p-4 font-semibold text-white text-sm">Judul Artikel Blog 2</div>
                                                            </div>
                                                            <div className="bg-white/10 rounded-xl overflow-hidden shadow">
                                                                <img src="/images/Image-Blog1.png" className="w-full" />
                                                                <div className="p-4 font-semibold text-white text-sm">Judul Artikel Blog 3</div>
                                                            </div>
                                                        </div>
                                                        <div className="flex justify-start">
                                                            <Link to="/blog" className="text-white hover:underline font-medium flex items-center gap-2">
                                                                View all Blog <span className="text-lg">&rarr;</span>
                                                            </Link>
                                                        </div>
                                                    </>
                                                )}
                                                {activeTab === 'events' && (
                                                    <>
                                                        <div className="grid grid-cols-3 gap-6 mb-4 animate-fade-in">
                                                            <div className="bg-white/10 rounded-xl overflow-hidden shadow">
                                                                <img src="/images/Image-Blog1.png" className="w-full" />
                                                                <div className="p-4 font-semibold text-white text-sm">Judul Events 1</div>
                                                            </div>
                                                            <div className="bg-white/10 rounded-xl overflow-hidden shadow">
                                                                <img src="/images/Image-Blog1.png" className="w-full" />
                                                                <div className="p-4 font-semibold text-white text-sm">Judul Events 2</div>
                                                            </div>
                                                            <div className="bg-white/10 rounded-xl overflow-hidden shadow">
                                                                <img src="/images/Image-Blog1.png" className="w-full" />
                                                                <div className="p-4 font-semibold text-white text-sm">Judul Events 3</div>
                                                            </div>
                                                        </div>
                                                        <div className="flex justify-start">
                                                            <Link to="/events" className="text-white hover:underline font-medium flex items-center gap-2">
                                                                View all Events <span className="text-lg">&rarr;</span>
                                                            </Link>
                                                        </div>
                                                    </>
                                                )}
                                                {activeTab === 'case' && (
                                                    <>
                                                        <div className="grid grid-cols-3 gap-6 mb-4 animate-fade-in">
                                                            <div className="bg-white/10 rounded-xl overflow-hidden shadow">
                                                                <img src="/images/Image-Blog1.png" className="w-full" />
                                                                <div className="p-4 font-semibold text-white text-sm">Judul Case Study 1</div>
                                                            </div>
                                                            <div className="bg-white/10 rounded-xl overflow-hidden shadow">
                                                                <img src="/images/Image-Blog1.png" className="w-full" />
                                                                <div className="p-4 font-semibold text-white text-sm">Judul Case Study 2</div>
                                                            </div>
                                                            <div className="bg-white/10 rounded-xl overflow-hidden shadow">
                                                                <img src="/images/Image-Blog1.png" className="w-full" />
                                                                <div className="p-4 font-semibold text-white text-sm">Judul Case Study 3</div>
                                                            </div>
                                                        </div>
                                                        <div className="flex justify-start">
                                                            <Link to="/casestudy" className="text-white hover:underline font-medium flex items-center gap-2">
                                                                View all Case Study <span className="text-lg">&rarr;</span>
                                                            </Link>
                                                        </div>
                                                    </>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>

                            {/* Demo Button */}
                            <div className="flex justify-center items-center h-10 px-6 text-white bg-blue-600/20 border border-blue-500/30 rounded-md hover:bg-blue-600/30 hover:border-blue-500/60 hover:shadow-md hover:scale-105 transition-all duration-200 ease-in-out font-inter font-light">
                                <Link to="/demo-email" onClick={scrollToTop}>Demo</Link>
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
                                <img src="/LogoUtama-Manusia.Ai.svg" alt="Manusia.AI" className="h-10 w-auto cursor-pointer" />
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
                                <h4 className="text-lg font-bold text-white mb-4">
                                    About
                                </h4>
                            </div>
                            <div className="min-w-[120px]">
                                <h4 className="text-lg font-bold text-white mb-4">
                                    Products
                                </h4>
                                <ul className="space-y-2">
                                    <li>
                                        <Link to="/brilian-ai" className="flex items-center gap-2 text-white/70 hover:text-primary-500 text-sm transition-all">
                                            Brilian.AI
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/rangkum-ai" className="flex items-center gap-2 text-white/70 hover:text-primary-500 text-sm transition-all">
                                            Rangkum.AI
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="min-w-[120px]">
                                <h4 className="text-lg font-bold text-white mb-4">
                                    Industries
                                </h4>
                                <ul className="space-y-2">
                                    <li>
                                        <Link to="/industries" className="text-white/70 hover:text-primary-500 text-sm transition-all">
                                            All Industries
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="min-w-[120px]">
                                <h4 className="text-lg font-bold text-white mb-4">
                                    Blog
                                </h4>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div >
    );
}