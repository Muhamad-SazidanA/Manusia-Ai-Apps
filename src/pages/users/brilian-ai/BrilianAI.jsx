import React from 'react';

export default function BrilianAI() {
    return (
        <div className="w-full min-h-screen bg-gradient-to-b from-[#041449] via-[#0B1426] to-black text-white font-inter relative overflow-x-hidden">
            {/* Hero Section */}
            <section className="bg-gradient-to-br from-[#041449] via-[#0B1426] to-black flex items-center justify-center overflow-hidden">
                {/* Centered Star */}
                <div className="absolute left-1/2 top-10 -translate-x-1/2 w-24 h-24 animate-pulse opacity-80 pointer-events-none flex items-center justify-center z-20">
                    <img src="/images/Image-BintangBG.png" alt="Star" className="w-full h-full" />
                </div>
                <div className="relative max-w-6xl w-full mx-auto flex flex-col md:flex-row items-center justify-between px-4">
                    {/* Left: Title & Subtitle */}
                    <div className="flex-1 min-w-[300px] ">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-inter font-semibold mb-5 leading-[1.3] pb-[10px] bg-gradient-to-b from-[#97BDFD] to-[#1A62DC] text-transparent bg-clip-text">
                            Brilian.AI
                        </h1>
                        <p className="text-4xl md:text-5xl lg:text-4xl text-white/90 mb-8 font-medium max-w-lg text-left">
                            Accelerate Decisions with AI-Powered<br />Knowledge Management
                        </p>
                        <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 hover:scale-105 shadow-lg">
                            Book a demo
                        </button>
                    </div>
                    {/* Right: Image (Bigger) */}
                    <div className="flex-1 flex justify-center items-center">
                        <img src="/images/BrilianContentDS.svg" alt="brilian.ai" className="w-full max-w-lg md:max-w-xl h-auto object-contain drop-shadow-2xl" />
                    </div>
                </div>
            </section>

            {/* What is Brilian.AI Section */}
            <section className="py-16 bg-gradient-to-b from-blue-900 via-[#0B1426] to-black relative overflow-hidden">
                <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">What is Brilian.AI?</h2>
                        <p className="text-base md:text-lg text-white/90 leading-relaxed">
                            brilian.ai adalah platform manajemen pengetahuan berbasis AI yang memungkinkan akses cepat dan aman ke informasi internal, serta otomatisasi dokumen untuk efisiensi dan pengambilan keputusan yang lebih cerdas.
                        </p>
                    </div>
                    <div className="flex justify-center">
                        <img src="/images/asetLogoBrilian.svg" alt="Brilian.AI" className="w-full max-w-md h-auto object-contain" />
                    </div>
                </div>
            </section>

            {/* Key Features Section */}
            <section className="py-20 bg-gradient-to-b from-[#041449] via-[#0B1426] to-black relative">
                <div className="max-w-6xl mx-auto px-4">
                    <div className="text-center mb-14">
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-3 drop-shadow" style={{ textShadow: '0 0 8px #2563eb55' }}>
                            Key Features
                        </h2>
                        <p className="text-lg text-white/70 mb-6">
                            What Makes Brilian.AI Different?
                        </p>
                        <div className="border-t border-blue-900/40 my-6"></div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        {/* Tanya Apa Aja */}
                        <div className="flex flex-col md:flex-row items-center gap-8 bg-slate-900/80 rounded-2xl overflow-hidden shadow-lg border border-[#489CFF]/30 hover:border-[#489CFF]/60 hover:bg-[#489CFF]/10 transition-all duration-300" style={{ boxShadow: '0 0 20px 4px rgba(72,156,255,0.3)' }}>
                            <div className="overflow-hidden md:w-1/2 flex justify-center items-center p-4">
                                <img src="/images/Image-Tanyaapasaja.png" alt="Tanya Apa Aja" className="w-full h-40 object-cover rounded-xl group-hover:scale-105 transition-transform duration-300" />
                            </div>
                            <div className="p-6 flex flex-col flex-1 md:w-1/2">
                                <h3 className="text-2xl font-bold mb-2 text-[#489CFF]">Tanya apa aja</h3>
                                <p className="text-white/70 mb-4 flex-1">
                                    Brilian.ai memudahkan pencarian informasi dari dokumen internal seperti bertanya ke rekan kerja yang paham konteks. AI kami memahami maksud Anda dan memberi jawaban relevan dari berbagai format dokumen, seperti PDF, Word, dan Excel.
                                </p>
                            </div>
                        </div>
                        {/* Buatin Laporan */}
                        <div className="flex flex-col md:flex-row items-center gap-8 bg-slate-900/80 rounded-2xl overflow-hidden shadow-lg border border-[#FC6D2D]/30 hover:border-[#FC6D2D]/60 hover:bg-[#FC6D2D]/10 transition-all duration-300" style={{ boxShadow: '0 0 20px 4px rgba(252,109,45,0.3)' }}>
                            <div className="overflow-hidden md:w-1/2 flex justify-center items-center p-4">
                                <img src="/images/Image-Buatlaporan.png" alt="Buatin Laporan" className="w-full h-40 object-cover rounded-xl group-hover:scale-105 transition-transform duration-300" />
                            </div>
                            <div className="p-6 flex flex-col flex-1 md:w-1/2">
                                <h3 className="text-2xl font-bold mb-2 text-[#FC6D2D]">Buatin Laporan</h3>
                                <p className="text-white/70 mb-4 flex-1">
                                    Ubah dokumen panjang jadi laporan siap baca dalam hitungan detik. Cocok untuk mengurang notulensi, audit, atau laporan operasional.
                                </p>
                            </div>
                        </div>
                        {/* Analisa Laporan */}
                        <div className="flex flex-col md:flex-row items-center gap-8 bg-slate-900/80 rounded-2xl overflow-hidden shadow-lg border border-[#10E0C1]/30 hover:border-[#10E0C1]/60 hover:bg-[#10E0C1]/10 transition-all duration-300" style={{ boxShadow: '0 0 20px 4px rgba(16,224,193,0.3)' }}>
                            <div className="overflow-hidden md:w-1/2 flex justify-center items-center p-4">
                                <img src="/images/Image-Analisislaporan.png" alt="Analisa Laporan" className="w-full h-40 object-cover rounded-xl group-hover:scale-105 transition-transform duration-300" />
                            </div>
                            <div className="p-6 flex flex-col flex-1 md:w-1/2">
                                <h3 className="text-2xl font-bold mb-2 text-[#10E0C1]">Analisa Laporan</h3>
                                <p className="text-white/70 mb-4 flex-1">
                                    Brilian.ai menganalisis dokumen untuk menampilkan insight penting, mendeteksi pola, tren, dan anomali dan memudahkan pengambilan keputusan tanpa perlu membaca ratusan halaman.
                                </p>
                            </div>
                        </div>
                        {/* Riset Market */}
                        <div className="flex flex-col md:flex-row items-center gap-8 bg-slate-900/80 rounded-2xl overflow-hidden shadow-lg border border-[#489CFF]/30 hover:border-[#489CFF]/60 hover:bg-[#489CFF]/10 transition-all duration-300" style={{ boxShadow: '0 0 20px 4px rgba(72,156,255,0.3)' }}>
                            <div className="overflow-hidden md:w-1/2 flex justify-center items-center p-4">
                                <img src="/images/Image-Risetmarket.png" alt="Riset Market" className="w-full h-40 object-cover rounded-xl group-hover:scale-105 transition-transform duration-300" />
                            </div>
                            <div className="p-6 flex flex-col flex-1 md:w-1/2">
                                <h3 className="text-2xl font-bold mb-2 text-[#489CFF]">Riset Market</h3>
                                <p className="text-white/70 mb-4 flex-1">
                                    Brilian.ai menyajikan tren, preferensi konsumen, dan pergerakan kompetitor dengan cepat, menggabungkan data internal dan sumber terbuka. Ini ideal untuk tim marketing, bisnis, dan produk dalam menyusun strategi.
                                </p>
                            </div>
                        </div>
                        {/* Pikirin Ide */}
                        <div className="flex flex-col md:flex-row items-center gap-8 bg-slate-900/80 rounded-2xl overflow-hidden shadow-lg border border-[#FC6D2D]/30 hover:border-[#FC6D2D]/60 hover:bg-[#FC6D2D]/10 transition-all duration-300" style={{ boxShadow: '0 0 20px 4px rgba(252,109,45,0.3)' }}>
                            <div className="overflow-hidden md:w-1/2 flex justify-center items-center p-4">
                                <img src="/images/Image-Pikirinide.png" alt="Pikirin Ide" className="w-full h-40 object-cover rounded-xl group-hover:scale-105 transition-transform duration-300" />
                            </div>
                            <div className="p-6 flex flex-col flex-1 md:w-1/2">
                                <h3 className="text-2xl font-bold mb-2 text-[#FC6D2D]">Pikirin Ide</h3>
                                <p className="text-white/70 mb-4 flex-1">
                                    AI Brilian.ai membantu brainstorming otomatis berdasarkan konteks kerja dan data Anda, dari ide konten hingga sudut pandang unik, tanpa perlu mulai dari nol.
                                </p>
                            </div>
                        </div>
                        {/* Rangkumin Meeting */}
                        <div className="flex flex-col md:flex-row items-center gap-8 bg-slate-900/80 rounded-2xl overflow-hidden shadow-lg border border-[#10E0C1]/30 hover:border-[#10E0C1]/60 hover:bg-[#10E0C1]/10 transition-all duration-300" style={{ boxShadow: '0 0 20px 4px rgba(16,224,193,0.3)' }}>
                            <div className="overflow-hidden md:w-1/2 flex justify-center items-center p-4">
                                <img src="/images/Image-Rangkuminmeet.png" alt="Rangkumin Meeting" className="w-full h-40 object-cover rounded-xl group-hover:scale-105 transition-transform duration-300" />
                            </div>
                            <div className="p-6 flex flex-col flex-1 md:w-1/2">
                                <h3 className="text-2xl font-bold mb-2 text-[#10E0C1]">Rangkumin Meeting</h3>
                                <p className="text-white/70 mb-4 flex-1">
                                    Brilian.ai otomatis transkrip dan ringkas rapat jadi catatan yang siap dibagikan. Ini ringkas, jelas, dan cocok untuk tim hybrid atau eksekutif sibuk.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 relative overflow-hidden">
                <div className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20" style={{ backgroundImage: 'url("/images/BGSHADOWBLUE.svg")' }} />
                <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
                    <div className="bg-[#0B0F2F]/60 backdrop-blur-sm border border-blue-800/30 rounded-xl p-8 shadow-xl">
                        <h2 className="text-2xl font-bold text-white mb-3">Get started today!</h2>
                        <p className="text-lg text-gray-300 mb-6">Siap Mempercepat Akses Pengetahuan Anda?</p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <div className="bg-gray-800/80 text-sm text-white px-4 py-2 rounded-full border border-gray-600/50">
                                🆕 New: Our AI integration just landed
                            </div>
                            <div className="flex gap-3">
                                <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-all duration-300">
                                    Get Started
                                </button>
                                <button className="border border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white px-6 py-2 rounded-lg font-medium transition-all duration-300">
                                    Book a demo
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}