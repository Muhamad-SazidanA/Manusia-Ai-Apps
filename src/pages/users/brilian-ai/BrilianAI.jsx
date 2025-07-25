import React from 'react';

export default function BrilianAI() {
    return (
        <div className="w-full min-h-screen bg-gradient-to-b from-black via-slate-900 to-blue-950 text-white font-inter relative overflow-x-hidden">
            {/* Hero Section */}
            <section className="min-h-screen py-20 px-6 md:px-16 flex items-center justify-center bg-gradient-to-b from-black via-blue-950 to-slate-900 overflow-hidden relative">
                {/* Hiasan bintang */}
                <div className="absolute z-10 top-16 left-40 w-auto h-24 animate-pulse delay-500 opacity-30 flex justify-center translate-x-[400px]">
                    <img src="/images/Image-BintangBG.png" alt="Star" className="w-full h-full" />
                </div>
                <div className="relative max-w-6xl w-full mx-auto flex flex-col-reverse md:flex-row items-center justify-between px-0 md:px-10 gap-10">
                    {/* Kiri: Teks dan Button */}
                    <div className="flex-1 flex flex-col items-start justify-center">
                        <div className="absolute -translate-x-[70px] -translate-y-[50px]">
                            <h1 className="text-4xl md:text-5xl lg:text-8xl font-bold font-inter mb-5 leading-[1.3] pb-[10px] bg-gradient-to-b from-[#97BDFD] to-[#1A62DC] text-transparent bg-clip-text">
                                Brilian.AI
                            </h1>
                            <p className="text-base md:text-3xl text-white/90 mb-8 font-medium max-w-lg text-left">
                                Accelerate Decisions with AI-Powered<br />Knowledge Management
                            </p>
                            <button className="px-6 py-3 rounded-xl font-semibold text-lg bg-gradient-to-r from-blue-400 to-blue-600 text-white shadow-lg border border-blue-300 hover:scale-105 transition-all duration-200">
                                Book a demo
                            </button>
                        </div>
                    </div>
                    {/* Kanan: Gambar */}
                    <div className="flex-1 flex justify-center items-center">
                        <img src="/images/BrilianContentDS.svg" alt="Banking Chart" className=" absolute z-1w-full w-full max-w-md h-auto object-contain scale-[1.5] drop-shadow-2xl translate-x-[100px] -translate-y-[50px]" />
                    </div>
                </div>
            </section>

            {/* What is Brilian.AI Section */}
            <section className="relative py-16 bg-gradient-to-b from-slate-900 via-blue-950 to-slate-900 overflow-hidden">
                <div className="relative max-w-6xl mx-auto px-10">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white mb-8 text-center relative z-20">What is Brilian.AI?</h2>
                    <div className="grid md:grid-cols-2 gap-10 items-center">
                        <div className="space-y-6">
                            <p className="text-1XL md:text-2xl font-normal font-inter text-white/90 leading-relaxed ml-[-70px] mt-[-90px]">
                                Brilian.ai adalah platform manajemen pengetahuan<br />
                                berbasis AI yang memungkinkan akses cepat dan<br />
                                aman ke informasi internal, serta otomatisasi <br />
                                dokumen untuk efisiensi dan pengambilan <br />
                                keputusan yang lebih cerdas.<br />
                            </p>
                        </div>
                        <div className="flex justify-center relative z-10 ">
                            <img
                                src="/images/asetLogoBrilian.svg"
                                alt="Brilian.AI"
                                className="w-full max-w-md h-auto object-contain scale-[1.2] translate-x-[50px]"
                            />
                        </div>
                    </div>
                </div>
            </section>
            {/* Key Features Section */}
            <section className="pt-[100px] md:pt-[150px] pb-20 bg-gradient-to-b from-slate-900 via-[#101A2F] to-black overflow-hidden relative">
                <div className="container mx-auto px-4 md:px-24 text-center relative z-10 mb-36">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold font-inter text-white">Key Features</h1>
                    <h2 className="text-2xl md:text-4xl text-[#ADADAD] mt-2 mb-0">What Makes Brilian.AI Different?</h2>
                </div>

                {/* Background Effects */}
                <div className="absolute top-1/4 right-0 w-[340px] h-[340px] md:w-[400px] md:h-[400px] rounded-full bg-blue-400/15 blur-[150px] -translate-x-1/4 pointer-events-none"></div>
                <div className="absolute bottom-1/3 left-0 w-[260px] h-[260px] md:w-[320px] md:h-[320px] rounded-full bg-blue-400/15 blur-[150px] translate-x-1/4 pointer-events-none"></div>
                <div className="absolute inset-0 pointer-events-none z-0">
                    <img src="/images/Image-BintangBG.png" alt="Star" className="absolute top-12 left-20 h-12 md:h-16 animate-pulse opacity-30" />
                    <img src="/images/Image-BintangBG.png" alt="Star" className="absolute bottom-16 left-16 h-4 md:h-5 animate-pulse delay-800 opacity-25" />
                    <img src="/images/Image-BintangBG.png" alt="Star" className="absolute top-1/3 left-24 h-8 md:h-10 animate-pulse delay-500 opacity-20" />
                </div>

                <div className="container mx-auto px-4 md:px-[80px] lg:px-[140px]">
                    {/* Feature List */}
                    <div className="flex flex-col gap-24">
                        {/* Feature: Tanya Apa Aja */}
                        <div className="mb-0" data-aos="fade-left">
                            <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">

                                {/* Kartu Fitur */}
                                <div className="relative bg-slate-900/80 rounded-2xl p-6 border border-[#489CFF]/30 hover:border-[#489CFF]/60 hover:bg-[#489CFF]/10 transition-all duration-300 w-full md:max-w-md">
                                    {/* Inner Glow */}
                                    <div className="absolute inset-0 rounded-2xl pointer-events-none"
                                        style={{ boxShadow: 'inset 0 0 30px rgba(72,156,255,0.25)' }}></div>

                                    <h3 className="text-xl font-semibold font-inter text-[#489CFF] mb-4 z-10 relative">Tanya Apa Aja</h3>
                                    <p className="text-sm font-normal text-white/70 font-inter mb-4 z-10 relative">
                                        Every meeting becomes notes, tasks, agendas, and follow-ups, automatically.
                                    </p>

                                    <div className="bg-slate-800/50 rounded-xl p-3 overflow-hidden z-10 relative">
                                        <img src="/images/Image-Tanyaapasaja.png" alt="Chat Interface" className="w-full h-28 object-cover rounded-xl" />
                                    </div>
                                </div>

                                {/* Penjelasan */}
                                <div className="w-full text-center md:text-left">
                                    <h1 className="font-semibold mb-8 text-1xl md:text-4xl font-inter text-[#489CFF] mb-6">
                                        Tanya Apa Aja
                                    </h1>
                                    <p className="text-sm md:text-xl font-inter text-white/90 leading-relaxed">
                                            Cari informasi seperti berbicara dengan kolega.Brilian.AI 
                                            memungkinkan pengguna mengajukan pertanyaan dengan bahasa alami
                                            (natural language), tanpa perlu tahu struktur file atau letak dokumen. Sistem akan menjawab langsung dari sumber data internal Anda.                                    </p>
                                </div>
                            </div>

                            {/* Garis Pemisah */}
                            <hr className="border-t-2 border-slate-700 mt-12" />
                        </div>
                        {/* Feature: Buatin Laporan */}
                        <div className="mb-0" data-aos="fade-right">
                            <div className="flex flex-col md:flex-row-reverse items-center gap-10 md:gap-16">

                                {/* Kartu Fitur */}
                                <div className="relative bg-slate-900/80 rounded-2xl p-6 border border-[#FC6D2D]/30 hover:border-[#FC6D2D]/60 hover:bg-[#FC6D2D]/10 transition-all duration-300 w-full md:max-w-md">
                                    {/* Inner Glow */}
                                    <div className="absolute inset-0 rounded-2xl pointer-events-none"
                                        style={{ boxShadow: 'inset 0 0 30px rgba(252,109,45,0.25)' }}></div>

                                    <h3 className="text-xl font-semibold font-inter text-[#FC6D2D] mb-4 z-10 relative">Buatin Laporan</h3>
                                    <p className="text-sm font-normal text-white/70 font-inter mb-4 z-10 relative">
                                        Get trusted answers from every corner of your Workspace, instantly and in full context.
                                    </p>

                                    <div className="bg-slate-800/50 rounded-xl p-3 overflow-hidden z-10 relative">
                                        <img src="/images/Image-Buatlaporan.png" alt="Report Generation" className="w-full h-28 object-cover rounded-xl" />
                                    </div>
                                </div>

                                {/* Penjelasan */}
                                <div className="w-full text-center md:text-left">
                                    <h1 className="font-semibold mb-8 text-1xl md:text-4xl font-inter text-[#FC6D2D] mb-6">
                                        Buatin Laporan
                                    </h1>
                                    <p className="text-sm md:text-xl font-inter leading-relaxed">
                                        Integrasikan berbagai sumber — PDF, spreadsheet, 
                                        email, hingga notulensi — ke dalam satu platform. 
                                        Brilian.AI akan bantu menyusun dan menyajikan laporan yang siap dibagikan.                                    </p>
                                </div>
                            </div>

                            {/* Garis Pemisah */}
                            <hr className="border-t-2 border-slate-700 mt-12" />
                        </div>


                        {/* Feature: Analisa Laporan */}
                        <div className="mb-0" data-aos="fade-left">
                            <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">

                                {/* Kartu Fitur */}
                                <div className="relative bg-slate-900/80 rounded-2xl p-6 border border-[#10E0C1]/30 hover:border-[#10E0C1]/60 hover:bg-[#10E0C1]/10 transition-all duration-300 w-full md:max-w-md">
                                    {/* Inner Glow */}
                                    <div className="absolute inset-0 rounded-2xl pointer-events-none"
                                        style={{ boxShadow: 'inset 0 0 30px rgba(16, 224, 193, 0.25)' }}></div>

                                    <h3 className="text-xl font-semibold font-inter text-[#10E0C1] mb-4 z-10 relative">Analisis Laporan</h3>
                                    <p className="text-sm font-normal text-white/70 font-inter mb-4 z-10 relative">
                                        Turn ideas into visuals, writing, and tasks with zero prompt engineering or manual work.
                                    </p>

                                    <div className="bg-slate-800/50 rounded-xl p-3 overflow-hidden z-10 relative">
                                        <img src="/images/Image-Analisislaporan.png" alt="Report Analysis" className="w-full h-28 object-cover rounded-xl" />
                                    </div>
                                </div>

                                {/* Penjelasan */}
                                <div className="w-full text-center md:text-left">
                                    <h1 className="font-semibold mb-8 text-1xl md:text-4xl font-inter text-[#10E0C1] mb-6">
                                        Analisa Laporan
                                    </h1>
                                    <p className="text-sm md:text-xl font-inter leading-relaxed">
                                        Brilian.AI membaca dan memahami laporan panjang, 
                                        lalu merangkumnya menjadi insight utama: temuan penting, 
                                        tren tersembunyi, hingga anomali. Semua ditampilkan secara ringkas dan mudah dicerna.                                    </p>
                                </div>
                            </div>

                            {/* Garis Pemisah */}
                            <hr className="border-t-2 border-slate-700 mt-12" />
                        </div>


                        {/* Feature: Riset Market */}
                        <div className="mb-0" data-aos="fade-right">
                            <div className="flex flex-col md:flex-row-reverse items-center gap-10 md:gap-16">

                                {/* Kartu Fitur */}
                                <div className="relative bg-slate-900/80 rounded-2xl p-6 border border-[#489CFF]/30 hover:border-[#489CFF]/60 hover:bg-[#489CFF]/10 transition-all duration-300 w-full md:max-w-md">
                                    {/* Inner Glow */}
                                    <div className="absolute inset-0 rounded-2xl pointer-events-none"
                                        style={{ boxShadow: 'inset 0 0 30px rgba(72,156,255,0.25)' }}></div>

                                    <h3 className="text-xl font-semibold font-inter text-[#489CFF] mb-4 z-10 relative">Riset Market</h3>
                                    <p className="text-sm font-normal text-white/70 font-inter mb-4 z-10 relative">
                                        Every meeting becomes notes, tasks, agendas, and follow-ups, automatically.
                                    </p>

                                    <div className="bg-slate-800/50 rounded-xl p-3 overflow-hidden z-10 relative">
                                        <img src="/images/Image-Risetmarket.png" alt="Market Research" className="w-full h-28 object-cover rounded-xl" />
                                    </div>
                                </div>

                                {/* Penjelasan */}
                                <div className="w-full text-center md:text-left">
                                    <h1 className="font-semibold mb-8 text-1xl md:text-4xl font-inter text-[#489CFF] mb-6">
                                        Riset Market
                                    </h1>
                                    <p className="text-sm md:text-xl font-inter leading-relaxed">
                                        Brilian.AI memindai ribuan dokumen internal dan eksternal
                                        untuk mengungkap tren pasar, pergerakan kompetitor, 
                                        serta preferensi pelanggan. Cocok untuk tim marketing, produk, dan strategi 
                                        yang butuh data cepat untuk ambil keputusan.                                    </p>
                                </div>
                            </div>

                            {/* Garis Pemisah */}
                            <hr className="border-t-2 border-slate-700 mt-12" />
                        </div>


                        {/* Feature: Pikirin Ide */}
                        <div className="mb-0" data-aos="fade-left">
                            <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">

                                {/* Kartu Fitur */}
                                <div className="relative bg-slate-900/80 rounded-2xl p-6 border border-[#FC6D2D]/30 hover:border-[#FC6D2D]/60 hover:bg-[#FC6D2D]/10 transition-all duration-300 w-full md:max-w-md">
                                    {/* Inner Glow */}
                                    <div className="absolute inset-0 rounded-2xl pointer-events-none"
                                        style={{ boxShadow: 'inset 0 0 30px rgba(252, 109, 45, 0.25)' }}></div>

                                    <h3 className="text-xl font-semibold font-inter text-[#FC6D2D] mb-4 z-10 relative">Pikirin Ide</h3>
                                    <p className="text-sm font-normal text-white/70 font-inter mb-4 z-10 relative">
                                        Get trusted answers from every corner of your Workspace, instantly and in full context.
                                    </p>

                                    <div className="bg-slate-800/50 rounded-xl p-3 overflow-hidden z-10 relative">
                                        <img src="/images/Image-Pikirinide.png" alt="Ideas Generation" className="w-full h-28 object-cover rounded-xl" />
                                    </div>
                                </div>

                                {/* Penjelasan */}
                                <div className="w-full text-center md:text-left">
                                    <h1 className="font-semibold mb-8 text-1xl md:text-4xl font-inter text-[#FC6D2D] mb-6">
                                        Pikirin Ide
                                    </h1>   
                                    <p className="text-sm md:text-xl font-inter leading-relaxed">
                                        AI Brilian.ai membantu brainstorming otomatis berdasarkan 
                                        konteks kerja dan data Anda dandari ide konten hingga sudut 
                                        pandang unik, tanpa perlu mulai dari nol.                                    
                                    </p>
                                </div>
                            </div>

                            {/* Garis Pemisah */}
                            <hr className="border-t-2 border-slate-700 mt-12" />
                        </div>


                        {/* Feature 6 - Rangkumin Meeting */}
                        <div className="mb-0" data-aos="fade-right">
                            <div className="flex flex-col md:flex-row-reverse items-center gap-12">
                                {/* Kartu Glow */}
                                <div className="relative bg-slate-900/80 rounded-2xl p-6 border border-[#10E0C1]/30 hover:border-[#10E0C1]/60 hover:bg-[#10E0C1]/10 transition-all duration-300 w-full md:max-w-md">
                                    {/* Inner Glow Effect */}
                                    <div className="absolute inset-0 rounded-2xl pointer-events-none"
                                        style={{ boxShadow: 'inset 0 0 35px rgba(16, 224, 193, 0.2), 0 0 30px rgba(16, 224, 193, 0.3)' }}></div>
                                    {/* Judul dan Deskripsi */}
                                    <div className="relative z-10">
                                        <h3 className="text-xl font-semibold font-inter text-[#10E0C1] mb-4">Rangkumin Meeting</h3>
                                        <p className="text-sm font-normal text-white/70 font-inter mb-4">
                                            Turn ideas into visuals, writing, and tasks with zero prompt engineering or manual work.
                                        </p>
                                        {/* Gambar */}
                                        <div className="bg-slate-800/50 rounded-xl p-3 overflow-hidden">
                                            <img
                                                src="/images/Image-Rangkuminmeet.png"
                                                alt="Meeting Summary"
                                                className="w-full h-28 object-cover rounded-xl"
                                            />
                                        </div>
                                    </div>
                                </div>
                                {/* Teks Keterangan */}
                                <div className="w-full text-center md:text-left">
                                    <h1 className="font-semibold mb-8 text-1xl md:text-4xl font-inter text-[#10E0C1] mb-6">
                                        Rangkumin Meeting
                                    </h1>
                                    <p className="text-sm md:text-xl font-inter leading-relaxed">
                                        Hasil meeting, baik online maupun offline, dapat langsung ditranskrip dan dirangkum otomatis. 
                                        Dapatkan ringkasan poin penting yang siap dibagikan ke tim — tanpa perlu mengetik manual.
                                    </p>
                                </div>
                            </div>
                            {/* Garis Pemisah */}
                            <hr className="border-t-2 border-slate-700 mt-12" />
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section
                className="relative py-24 overflow-hidden flex items-center justify-center"
                style={{
                    background: `#000000 url('/images/SHADOWLPBG.svg') center/contain no-repeat`
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