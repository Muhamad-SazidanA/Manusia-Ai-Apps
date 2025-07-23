import React from 'react';

export default function BrilianAI() {
    return (
        <div className="w-full min-h-screen bg-gradient-to-b from-black via-slate-900 to-blue-950 text-white font-inter relative overflow-x-hidden">
            {/* Hero Section */}
            <section className="relative py-0 bg-gradient-to-b from-black via-blue-950 to-blue-900 flex items-center justify-center">
                {/* Bintang dengan posisi absolut */}
                <div className="absolute w-auto h-24 animate-pulse delay-500 opacity-30 flex justify-center">
                    <img src="/images/Image-BintangBG.png" alt="Star" className="w-full h-full" />
                </div>

                <div className="relative max-w-6xl w-full mx-auto flex flex-col md:flex-row items-center justify-between px-10">
                    <div className="flex-1 min-w-[300px]">
                        <h1 className="text-4xl md:text-7xl lg:text-7xl font-inter font-semibold mb-5 leading-[1.3] pb-[10px] bg-gradient-to-b from-[#97BDFD] to-[#1A62DC] text-transparent bg-clip-text">
                            Brilian.AI
                        </h1>
                        <p className="text-1xl md:text-2xl font-inter font-normal text-white/90 leading-relaxed mb-10">
                            Accelerate Decisions with AI-Powered
                            <br />Knowledge Management
                        </p>
                        <div className="flex justify-start items-center gap-4">
                            <button className="px-5 py-3 min-w-[80px] rounded-xl font-semibold text-lg bg-gradient-to-r from-blue-400 to-blue-600 text-white shadow-lg border border-blue-300 hover:scale-105 transition-all duration-200">
                                Demo a Book
                            </button>
                        </div>
                    </div>
                    <div className="flex-1 flex justify-end items-end translate-x-10 ml-30">
                        <img
                            src="/images/BrilianContentDS.svg"
                            alt="brilian.ai"
                            className="w-full max-w-sm md:max-w-md lg:max-w-lg h-auto object-cover drop-shadow-2xl"
                            style={{ maxHeight: '100%' }}
                        />
                    </div>
                </div>

            </section>

            {/* What is Brilian.AI Section */}
            <section className="relative py-10 bg-gradient-to-b from-blue-900 via-black via-black to-[#162A4D] overflow-hidden">
                <div className="relative z-10">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 text-center">What is Brilian.AI?</h2>
                    <div className="max-w-6xl mx-auto px-0 grid md:grid-cols-2 gap-2 items-center">
                        <div>
                            <p className="w-full overflow-x-auto text-2xl md:text-2xl text-white/90 mb-30 font-normal">
                                Brilian.ai adalah platform manajemen pengetahuan<br />
                                berbasis AI yang memungkinkan akses cepat dan<br />
                                aman ke informasi internal, serta otomatisasi <br />
                                dokumen untuk efisiensi dan pengambilan <br />
                                keputusan yang lebih cerdas.<br />
                            </p>
                        </div>
                        <div className="absolue w-full flex justify-center">
                            <img src="/images/asetLogoBrilian.svg" alt="Brilian.AI" className="w-full max-w-md h-auto object-contain" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Key Features Section */}
            <section className="relative py-24 bg-gradient-to-b from-[#162A4D] via-[#101A2F] to-black overflow-hidden">
                <div className="absolute top-1/4 right-0 w-[500px] h-[500px] rounded-full bg-blue-400/15 blur-[150px] -translate-x-1/4 pointer-events-none"></div>
                <div className="absolute bottom-1/3 left-0 w-[400px] h-[400px] rounded-full bg-blue-400/15 blur-[150px] translate-x-1/4 pointer-events-none"></div>
                <div className="absolute inset-0 pointer-events-none z-0">
                    <img src="/images/Image-BintangBG.png" alt="Star" className="absolute top-12 right-12 w-auto h-20 animate-pulse opacity-30" />
                    <img src="/images/Image-BintangBG.png" alt="Star" className="absolute bottom-16 left-16 w-auto h-6 animate-pulse delay-800 opacity-25" />
                    <img src="/images/Image-BintangBG.png" alt="Star" className="absolute top-1/3 left-24 w-auto h-12 animate-pulse delay-500 opacity-20" />
                </div>
                <div className="max-w-5xl mx-auto px-4 relative z-10">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-2 text-center mb-2">Key Features</h2>
                        <h3 className="text-4xl md:text-5xl font-bold text-[#ADADAD] mb-20 text-center">What Makes Brilian.AI Different?</h3>
                    </div>
                    <div className="flex flex-col gap-24">
                        {/* 1. Tanya Apa Aja (img left, text right) */}
                        <div className="flex flex-col md:flex-row justify-between">
                            <div className="bg-slate-900/80 rounded-xl p-6 border border-[#489CFF]/30 hover:border-[#489CFF]/60 hover:bg-[#489CFF]/10 transition-all duration-300"
                                style={{ boxShadow: '0 0 20px 4px rgba(72,156,255,0.3)' }}>
                                <h3 className="text-xl font-inter font-medium text-[#489CFF] mb-4">Tanya Apa Aja</h3>
                                <p className="text-white/70 mb-4 text-sm font-inter font-normal">
                                    Every meeting becomes notes, tasks,<br />
                                    agendas, and follow-ups, automatically.
                                </p>
                                <img src="/images/Image-Tanyaapasaja.png" alt="Chat Interface" className="w-full h-24" />
                            </div>
                            <div className="md:w-3/5 w-full">
                                <h3 className="text-4xl md:text-5xl font-bold text-white mb-10">Tanya apa aja</h3>
                                <p className="w-full overflow-x-auto text-2xl md:text-2xl text-white/90 mb-30 font-normal">
                                    Brilian.ai memudahkan pencarian informasi dari <br />
                                    dokumen internal seperti bertanya ke rekan kerja <br />
                                    yang paham konteks. AI kami memahami maksud <br />
                                    Anda dan memberi jawaban relevan dari berbagai <br />
                                    format dokumen, seperti PDF, Word, dan Excel. <br />
                                </p>
                            </div>
                        </div>
                        {/* 2. Buatin Laporan (img right, text left) */}
                        <div className="flex flex-col md:flex-row-reverse justify-between">
                            <div className="bg-slate-900/80 rounded-xl p-6 border border-[#FC6D2D]/30 hover:border-[#FC6D2D]/60 hover:bg-[#FC6D2D]/10 transition-all duration-300"
                                style={{ boxShadow: '0 0 20px 4px rgba(252, 109, 45, 0.3)' }}>
                                <h3 className="text-xl font-inter font-medium text-[#FC6D2D] mb-4">Buat Laporan</h3>
                                <p className="text-white/70 mb-4 text-sm font-inter font-normal">
                                    Get trusted answers from every corner of <br />
                                    your Workspace, instantly and in full <br />
                                    context.
                                </p>
                                <div className="bg-slate-800/50 rounded-lg p-4">
                                    <img src="/images/Image-Buatlaporan.png" alt="Report Generation" className="w-full h-24 object-cover rounded" />
                                </div>
                            </div>
                            <div className="md:w-3/5 w-full">
                                <h3 className="text-4xl md:text-5xl font-bold text-white mb-10">Buatin Laporan</h3>
                                <p className="w-full overflow-x-auto text-2xl md:text-2xl text-white/90 mb-30 font-normal">
                                    Ubah dokumen panjang jadi laporan siap <br />
                                    baca dalam hitungan detik. Cocok untuk <br />
                                    merangkum notulensi, audit, atau laporan <br />
                                    operasional.
                                </p>
                            </div>
                        </div>
                        {/* 3. Analisa Laporan (img left, text right) */}
                        <div className="flex flex-col md:flex-row justify-between">
                            <div className="bg-slate-900/80 rounded-xl p-6 border border-[#10E0C1]/30 hover:border-[#10E0C1]/60 hover:bg-[#10E0C1]/10 transition-all duration-300"
                                style={{ boxShadow: '0 0 20px 4px rgba(16, 224, 193, 0.3)' }}>
                                <h3 className="text-xl font-inter font-medium text-[#10E0C1] mb-4">Analisis Laporan</h3>
                                <p className="text-white/70 mb-4 text-sm font-inter font-normal">
                                    Turn ideas into visuals, writing, and tasks <br />
                                    with zero prompt engineering or manual <br />
                                    work.
                                </p>
                                <div className="bg-slate-800/50 rounded-lg p-4">
                                    <img src="/images/Image-Analisislaporan.png" alt="Report Analysis" className="w-full h-24 object-cover rounded" />
                                </div>
                            </div>
                            <div className="md:w-3/5 w-full">
                                <h3 className="text-4xl md:text-5xl font-bold text-white mb-10">Analisa Laporan</h3>
                                <p className="w-full overflow-x-auto text-2xl md:text-2xl text-white/90 mb-30 font-normal">
                                    Brilian.ai menganalisis dokumen untuk  <br />
                                    menampilkan insight penting, mendeteksi <br />
                                    pola, tren, dan anomali dan memudahkan <br />
                                    pengambilan keputusan tanpa perlu <br />
                                    membaca ratusan halaman.
                                </p>
                            </div>
                        </div>
                        {/* 4. Riset Market (img right, text left) */}
                        <div className="flex flex-col md:flex-row-reverse justify-between">
                            <div className="bg-slate-900/80 rounded-xl p-6 border border-[#489CFF]/30 hover:border-[#489CFF]/60 hover:bg-[#489CFF]/10 transition-all duration-300"
                                style={{ boxShadow: '0 0 20px 4px rgba(72,156,255,0.3)' }}>
                                <h3 className="text-xl font-inter font-medium text-[#489CFF] mb-4">Riset Market</h3>
                                <p className="text-white/70 mb-4 text-sm font-inter font-normal">
                                    Every meeting becomes notes, tasks,<br />
                                    agendas, and follow-ups, automatically.
                                </p>
                                <div className="bg-slate-800/50 rounded-lg p-4">
                                    <img src="/images/Image-Risetmarket.png" alt="Market Research" className="w-full h-24 object-cover rounded" />
                                </div>
                            </div>
                            <div className="md:w-3/5 w-full">
                                <h3 className="text-4xl md:text-5xl font-bold text-white mb-10">Riset Market</h3>
                                <p className="w-full overflow-x-auto text-2xl md:text-2xl text-white/90 mb-30 font-normal">
                                    Brilian.ai menyajikan tren, preferensi <br />
                                    konsumen, dan pergerakan kompetitor <br />
                                    dengan cepat, menggabungkan data <br />
                                    internal dan sumber terbuka. Ini ideal <br />
                                    untuk tim marketing, bisnis, dan produk<br />
                                    dalam menyusun strategi.
                                </p>
                            </div>
                        </div>
                        {/* 5. Pikirin Ide (img left, text right) */}
                        <div className="flex flex-col md:flex-row justify-between">
                            <div className="bg-slate-900/80 rounded-xl p-6 border border-[#FC6D2D]/30 hover:border-[#FC6D2D]/60 hover:bg-[#FC6D2D]/10 transition-all duration-300"
                                style={{ boxShadow: '0 0 20px 4px rgba(252, 109, 45, 0.3)' }}>
                                <h3 className="text-xl font-inter font-medium text-[#FC6D2D] mb-4">Pikirin Ide</h3>
                                <p className="text-white/70 mb-4 text-sm font-inter font-normal">
                                    Get trusted answers from every corner of <br />
                                    your Workspace, instantly and in full <br />
                                    context.
                                </p>
                                <div className="bg-slate-800/50 rounded-lg p-4">
                                    <img src="/images/Image-Pikirinide.png" alt="Ideas Generation" className="w-full h-24 object-cover rounded" />
                                </div>
                            </div>
                            <div className="md:w-3/5 w-full">
                                <h3 className="text-4xl md:text-5xl font-bold text-white mb-10">Pikirin Ide</h3>
                                <p className="w-full overflow-x-auto text-2xl md:text-2xl text-white/90 mb-30 font-normal">
                                    AI Brilian.ai membantu brainstorming <br />
                                    otomatis berdasarkan konteks kerja dan <br />
                                    data Anda, dari ide konten hingga <br />
                                    sudut pandang unik, tanpa perlu mulai <br />
                                    dari nol.
                                </p>
                            </div>
                        </div>
                        {/* 6. Rangkumin Meeting (img right, text left) */}
                        <div className="flex flex-col md:flex-row-reverse justify-between">
                            <div className="bg-slate-900/80 rounded-xl p-6 border border-[#10E0C1]/30 hover:border-[#10E0C1]/60 hover:bg-[#10E0C1]/10 transition-all duration-300"
                                style={{ boxShadow: '0 0 20px 4px rgba(16, 224, 193, 0.3)' }}>
                                <h3 className="text-xl font-inter font-medium text-[#10E0C1] mb-4">Rangkumin Meeting</h3>
                                <p className="text-white/70 mb-4 text-sm font-inter font-normal">
                                    Turn ideas into visuals, writing, and tasks <br />
                                    with zero prompt engineering or manual <br />
                                    work.
                                </p>

                                <img src="/images/Image-Rangkuminmeet.png" alt="Meeting Summary" className="w-full h-24 object-cover rounded" />
                            </div>
                            <div className="md:w-3/5 w-full">
                                <h3 className="text-4xl md:text-5xl font-bold text-white mb-10">Rangkumin Meeting</h3>
                                <p className="w-full overflow-x-auto text-2xl md:text-2xl text-white/90 mb-30 font-normal">
                                    Brilian.ai otomatis transkrip dan ringkas <br />
                                    rapat jadi catatan yang siap dibagikan. Ini <br />
                                    ringkas, jelas, dan cocok untuk tim hybrid <br />
                                    atau eksekutif sibuk.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section
                className="relative py-24 overflow-hidden flex items-center justify-center"
                style={{
                    background: `#000000 url('/images/SHADOWLPBG.png') center/contain no-repeat`
                }}
            >
                {/* Bintang di atas card, absolute dan z-30 */}
                <div className="absolute left-1/2 top-36 -translate-x-20 w-auto h-20 animate-pulse delay-500 opacity-30 z-30 pointer-events-none">
                    <img src="/images/Image-BintangBG.png" alt="Star" className="w-full h-full" />
                </div>
                {/* Card content */}
                <div className="relative z-10 w-full flex justify-center items-center">
                    <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-5xl px-8 py-10 rounded-2xl"
                        style={{
                            background: "rgba(10, 20, 40, 0.59)",
                            backdropFilter: 'blur(10px)',
                            WebkitBackdropFilter: 'blur(10px)',
                            boxShadow: "0 0 32px 8px #2196F3, 0 0 0 2px #2196F3",
                        }}
                    >

                        {/* Left Side: Text */}
                        <div className="flex-1 text-left pr-0 md:pr-10">
                            <h2 className="text-3xl md:text-4xl font-semibold text-white mb-3">Get started today!</h2>
                            <p className="text-3xl md:text-4xl font-extralight text-white w-full">
                                Siap Mempercepat Akses <br /> Pengetahuan Anda?
                            </p>
                        </div>
                        {/* Right Side: Badge + Buttons */}
                        <div className="flex-1 flex flex-col items-center md:items-end gap-6 w-full md:w-auto mt-8 md:mt-0">
                            {/* Badge */}
                            <div className="w-full md:w-auto flex justify-center md:justify-center">
                                <div className="inline-flex items-center gap-2 bg-blue-600/20 border border-blue-500/30 rounded-full px-8 py-4 mb-4 min-w-[300px] justify-center">
                                    <img
                                        src="/images/Image-BintangBG.png"
                                        alt="Star"
                                        className="w-5 h-5 animate-pulse opacity-60"
                                    />
                                    <span className="text-blue-300 text-sm font-inter font-normal">New: Our AI integration just landed</span>
                                </div>
                            </div>
                            {/* Buttons */}
                            <div className="flex gap-5 w-full md:w-auto justify-center md:justify-end">
                                <button className="px-5 py-3 min-w-[80px] rounded-xl font-semibold text-lg bg-gradient-to-r from-blue-400 to-blue-600 text-white shadow-lg border border-blue-300 hover:scale-105 transition-all duration-200">
                                    Get Started
                                </button>
                                <button className="px-5 py-3 min-w-[80px] rounded-xl font-semibold text-lg text-white bg-blue-600/20 border border-blue-500/30 hover:bg-blue-600/30 hover:border-blue-500/60 hover:shadow-md hover:scale-105 transition-all duration-200 ease-in-out cursor-pointer font-inter font-light">
                                    Start for free
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section >
        </div >
    );
}