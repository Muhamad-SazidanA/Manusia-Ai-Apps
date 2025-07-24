import React from 'react';

export default function RangkumFMCG() {
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
                                Rangkum.AI
                            </h1>
                            <p className="text-base md:text-3xl text-white/90 mb-8 font-medium max-w-lg text-left">
                                Intelligent Document Processing &<br />Smart OCR Platform
                            </p>
                            <button className="px-6 py-3 rounded-xl font-semibold text-lg bg-gradient-to-r from-blue-400 to-blue-600 text-white shadow-lg border border-blue-300 hover:scale-105 transition-all duration-200">
                                Book a demo
                            </button>
                        </div>
                    </div>
                    {/* Kanan: Gambar */}
                    <div className="flex-1 flex justify-center items-center">
                        <img src="/images/RangkumContentDS.svg" alt="Banking Chart" className=" absolute z-1w-full w-full max-w-md h-auto object-contain scale-[1.5] drop-shadow-2xl translate-x-[100px] -translate-y-[50px]" />
                    </div>
                </div>
            </section>

            {/* What is Brilian.AI Section */}
            <section className="relative py-16 bg-gradient-to-b from-slate-900 via-blue-950 to-slate-900 overflow-hidden">
                <div className="relative max-w-6xl mx-auto px-10">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white mb-8 text-center relative z-20">What is Rangkum.AI?</h2>
                    <div className="grid md:grid-cols-2 gap-10 items-center">
                        <div className="space-y-6">
                            <p className="text-1XL md:text-2xl font-normal font-inter text-white/90 leading-relaxed ml-[-70px] mt-[-90px]">
                                Rangkum.AI adalah platform Intelligent <br />
                                Document Processing (IDP) berbasis AI yang <br />
                                membantu organisasi mengotomatisasi <br />
                                ekstraksi,pemrosesan, dan peringkasan <br />
                                dokumen, dari PDF, formulir, hingga laporan <br />
                                kompleks
                            </p>
                        </div>
                        <div className="flex justify-center relative z-10 ">
                            <img
                                src="/images/asetLogoRangkum.svg"
                                alt="Rangkum.AI"
                                className="w-full max-w-md h-auto object-contain scale-[1.2] translate-x-[50px]"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="relative py-16 bg-gradient-to-b from-slate-900 via-[#101A2F] to-black overflow-hidden">
                <h3 className="relative z-20 text-4xl md:text-5xl font-semibold text-white mb-40 text-center">Key Benefits Rangkum.AI</h3>
                <div className="max-w-6xl mx-auto px-10 flex flex-col md:flex-row items-center justify-between gap-12">
                    <div className="flex-1">
                        <ul className="space-y-6 relative z-20">
                            <li className="flex items-center gap-6 ml-[-30px]">
                                <span className="w-8 h-8 mt-1 rounded-full bg-gradient-to-b from-[#97BDFD] to-[#1A62DC] flex-shrink-0" />
                                <span className="text-1xl md:text-3xl font-inter font-normal text-white/90 leading-relaxed ">Mengubah dokumen tak terstruktur<br />menjadi data rapi dan siap pakai</span>
                            </li>
                            <li className="flex items-center gap-6 ml-[-30px]">
                                <span className="w-8 h-8 mt-1 rounded-full bg-gradient-to-b from-[#97BDFD] to-[#1A62DC] flex-shrink-0" />
                                <span className="text-1xl md:text-3xl font-inter font-normal text-white/90 leading-relaxed">Akurasi tinggi tanpa perlu template</span>
                            </li>
                            <li className="flex items-center gap-6 ml-[-30px]">
                                <span className="w-8 h-8 mt-1 rounded-full bg-gradient-to-b from-[#97BDFD] to-[#1A62DC] flex-shrink-0" />
                                <span className="text-1xl md:text-3xl font-inter font-normal text-white/90 leading-relaxed">Integrasi mudah dengan sistem ERP,<br />CRM, RPA, dan lainnya</span>
                            </li>
                            <li className="flex items-center gap-6 ml-[-30px]">
                                <span className="w-8 h-8 mt-1 rounded-full bg-gradient-to-b from-[#97BDFD] to-[#1A62DC] flex-shrink-0" />
                                <span className="text-1xl md:text-3xl font-inter font-normal text-white/90 leading-relaxed">Model AI terus belajar dan semakin<br />akurat dari waktu ke waktu</span>
                            </li>
                        </ul>
                    </div>

                    <div className="flex-none w-[180px] md:w-[280px] relative z-10 w-full max-w-md rounded-xl overflow-hidden border border-blue-500/30 bg-black/50 shadow-[0_0_40px_5px_rgba(59,130,246,0.4)] hover:shadow-[0_0_60px_8px_rgba(59,130,246,0.6)] transition-all duration-300">
                        <img
                            src="/images/ImageKBRangkum.svg"
                            alt="Blog 2"
                            className="w-full h-[220px] object-cover rounded-lg"
                        />

                    </div>
                </div>
            </section>

            {/* Key Features Section */}
            <section className="pt-[100px] md:pt-[150px] pb-20 bg-gradient-to-b from-black via-[#101A2F] to-black overflow-hidden relative">
                <div className="container mx-auto px-4 md:px-24 text-center relative z-10 mb-36">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold font-inter text-white">What Makes</h1>
                    <h2 className="text-2xl md:text-4xl text-[#ADADAD] mt-2 mb-0">Rangkum.AI Powerful?</h2>
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
                        {/* Feature 1 */}
                        <div className="mb-0" data-aos="fade-left">
                            <div className="md:flex justify-between items-center gap-12">
                                <div className="bg-slate-900/80 rounded-xl p-6 border border-[#489CFF]/30 hover:border-[#489CFF]/60 hover:bg-[#489CFF]/10 transition-all duration-300"
                                    style={{ boxShadow: '0 0 20px 4px rgba(72,156,255,0.3)' }}>
                                    <h3 className="text-xl font-medium font-inter text-[#489CFF] mb-4">Tanya Apa Aja</h3>
                                    <p className="text-sm font-normal text-white/70 mb-4 font-inter">
                                        Every meeting becomes notes, tasks, agendas, and follow-ups, automatically.
                                    </p>
                                    <div className="bg-slate-800/50 rounded-lg p-4">
                                        <img src="/images/Image-Tanyaapasaja.png" alt="Chat Interface" className="w-full h-24 object-cover rounded" />
                                    </div>
                                </div>
                                <div className="md:w-[700px]">
                                    <h1 className="text-4xl md:text-5xl font-semibold font-inter mb-8 md:text-2xl text-[#489CFF]">Tanya Apa Aja</h1>
                                    <p className="text-base md:text-2xl font-normal font-inter text-white/90 leading-relaxed mb-6">
                                        Brilian.ai memudahkan pencarian informasi dari dokumen internal seperti bertanya ke rekan kerja yang paham konteks. AI kami memahami maksud Anda dan memberi jawaban relevan dari berbagai format dokumen, seperti PDF, Word, dan Excel.
                                    </p>
                                </div>
                            </div>
                            <hr className="border-t-2 border-slate-700 mt-8" />
                        </div>

                        {/* Feature 2 */}
                        <div className="mb-0" data-aos="fade-right">
                            <div className="md:flex md:flex-row-reverse justify-between items-center gap-12">
                                <div className="bg-slate-900/80 rounded-xl p-6 border border-[#FC6D2D]/30 hover:border-[#FC6D2D]/60 hover:bg-[#FC6D2D]/10 transition-all duration-300"
                                    style={{ boxShadow: '0 0 20px 4px rgba(252, 109, 45, 0.3)' }}>
                                    <h3 className="text-xl font-medium font-inter text-[#FC6D2D] mb-4">Buat Laporan</h3>
                                    <p className="text-sm font-normal text-white/70 mb-4 font-inter">
                                        Get trusted answers from every corner of your Workspace, instantly and in full context.
                                    </p>
                                    <div className="bg-slate-800/50 rounded-lg p-4">
                                        <img src="/images/Image-Buatlaporan.png" alt="Report Generation" className="w-full h-24 object-cover rounded" />
                                    </div>
                                </div>
                                <div className="md:w-[700px]">
                                    <h1 className="text-4xl md:text-5xl font-semibold font-inter mb-8 md:text-2xl text-[#FC6D2D]">Buatin Laporan</h1>
                                    <p className="text-base md:text-2xl font-normal font-inter text-white/90 leading-relaxed mb-6">
                                        Ubah dokumen panjang jadi laporan siap baca dalam hitungan detik. Cocok untuk merangkum notulensi, audit, atau laporan operasional.
                                    </p>
                                </div>
                            </div>
                            <hr className="border-t-2 border-slate-700 mt-8" />
                        </div>

                        {/* Feature 3 */}
                        <div className="mb-0" data-aos="fade-left">
                            <div className="md:flex justify-between items-center gap-12">
                                <div className="bg-slate-900/80 rounded-xl p-6 border border-[#10E0C1]/30 hover:border-[#10E0C1]/60 hover:bg-[#10E0C1]/10 transition-all duration-300"
                                    style={{ boxShadow: '0 0 20px 4px rgba(16, 224, 193, 0.3)' }}>
                                    <h3 className="text-xl font-medium font-inter text-[#10E0C1] mb-4">Analisis Laporan</h3>
                                    <p className="text-sm font-normal text-white/70 mb-4 font-inter">
                                        Turn ideas into visuals, writing, and tasks with zero prompt engineering or manual work.
                                    </p>
                                    <div className="bg-slate-800/50 rounded-lg p-4">
                                        <img src="/images/Image-Analisislaporan.png" alt="Report Analysis" className="w-full h-24 object-cover rounded" />
                                    </div>
                                </div>
                                <div className="md:w-[700px]">
                                    <h1 className="text-4xl md:text-5xl font-semibold font-inter mb-8 md:text-2xl text-[#10E0C1]">Analisa Laporan</h1>
                                    <p className="text-base md:text-2xl font-normal font-inter text-white/90 leading-relaxed mb-6">
                                        Brilian.ai menganalisis dokumen untuk menampilkan insight penting, mendeteksi pola, tren, dan anomali dan memudahkan pengambilan keputusan tanpa perlu membaca ratusan halaman.
                                    </p>
                                </div>
                            </div>
                            <hr className="border-t-2 border-slate-700 mt-8" />
                        </div>

                        {/* Feature 4 */}
                        <div className="mb-0" data-aos="fade-right">
                            <div className="md:flex md:flex-row-reverse justify-between items-center gap-12">
                                <div className="bg-slate-900/80 rounded-xl p-6 border border-[#489CFF]/30 hover:border-[#489CFF]/60 hover:bg-[#489CFF]/10 transition-all duration-300"
                                    style={{ boxShadow: '0 0 20px 4px rgba(72,156,255,0.3)' }}>
                                    <h3 className="text-xl font-medium font-inter text-[#489CFF] mb-4">Riset Market</h3>
                                    <p className="text-sm font-normal text-white/70 mb-4 font-inter">
                                        Every meeting becomes notes, tasks, agendas, and follow-ups, automatically.
                                    </p>
                                    <div className="bg-slate-800/50 rounded-lg p-4">
                                        <img src="/images/Image-Risetmarket.png" alt="Market Research" className="w-full h-24 object-cover rounded" />
                                    </div>
                                </div>
                                <div className="md:w-[700px]">
                                    <h1 className="text-4xl md:text-5xl font-semibold font-inter mb-8 md:text-2xl text-[#489CFF]">Riset Market</h1>
                                    <p className="text-base md:text-2xl font-normal font-inter text-white/90 leading-relaxed mb-6">
                                        Brilian.ai menyajikan tren, preferensi konsumen, dan pergerakan kompetitor dengan cepat, menggabungkan data internal dan sumber terbuka. Ini ideal untuk tim marketing, bisnis, dan produk dalam menyusun strategi.
                                    </p>
                                </div>
                            </div>
                            <hr className="border-t-2 border-slate-700 mt-8" />
                        </div>

                        {/* Feature 5 */}
                        <div className="mb-0" data-aos="fade-left">
                            <div className="md:flex justify-between items-center gap-12">
                                <div className="bg-slate-900/80 rounded-xl p-6 border border-[#FC6D2D]/30 hover:border-[#FC6D2D]/60 hover:bg-[#FC6D2D]/10 transition-all duration-300"
                                    style={{ boxShadow: '0 0 20px 4px rgba(252, 109, 45, 0.3)' }}>
                                    <h3 className="text-xl font-medium font-inter text-[#FC6D2D] mb-4">Pikirin Ide</h3>
                                    <p className="text-sm font-normal text-white/70 mb-4 font-inter">
                                        Get trusted answers from every corner of your Workspace, instantly and in full context.
                                    </p>
                                    <div className="bg-slate-800/50 rounded-lg p-4">
                                        <img src="/images/Image-Pikirinide.png" alt="Ideas Generation" className="w-full h-24 object-cover rounded" />
                                    </div>
                                </div>
                                <div className="md:w-[700px]">
                                    <h1 className="text-4xl md:text-5xl font-semibold font-inter mb-8 md:text-2xl text-[#FC6D2D]">Pikirin Ide</h1>
                                    <p className="text-base md:text-2xl font-normal font-inter text-white/90 leading-relaxed mb-6">
                                        AI Brilian.ai membantu brainstorming otomatis berdasarkan konteks kerja dan data Anda, dari ide konten hingga sudut pandang unik, tanpa perlu mulai dari nol.
                                    </p>
                                </div>
                            </div>
                            <hr className="border-t-2 border-slate-700 mt-8" />
                        </div>

                        {/* Feature 6 */}
                        <div className="mb-0" data-aos="fade-right">
                            <div className="md:flex md:flex-row-reverse justify-between items-center gap-12">
                                <div className="bg-slate-900/80 rounded-xl p-6 border border-[#10E0C1]/30 hover:border-[#10E0C1]/60 hover:bg-[#10E0C1]/10 transition-all duration-300"
                                    style={{ boxShadow: '0 0 20px 4px rgba(16, 224, 193, 0.3)' }}>
                                    <h3 className="text-xl font-medium font-inter text-[#10E0C1] mb-4">Rangkumin Meeting</h3>
                                    <p className="text-sm font-normal text-white/70 mb-4 font-inter">
                                        Turn ideas into visuals, writing, and tasks with zero prompt engineering or manual work.
                                    </p>
                                    <div className="bg-slate-800/50 rounded-lg p-4">
                                        <img src="/images/Image-Rangkuminmeet.png" alt="Meeting Summary" className="w-full h-24 object-cover rounded" />
                                    </div>
                                </div>
                                <div className="md:w-[700px]">
                                    <h1 className="text-4xl md:text-5xl font-semibold font-inter mb-8 md:text-2xl text-[#10E0C1]">Rangkumin Meeting</h1>
                                    <p className="text-base md:text-2xl font-normal font-inter text-white/90 leading-relaxed mb-6">
                                        Brilian.ai otomatis transkrip dan ringkas rapat jadi catatan yang siap dibagikan. Ini ringkas, jelas, dan cocok untuk tim hybrid atau eksekutif sibuk.
                                    </p>
                                </div>
                            </div>
                            <hr className="border-t-2 border-slate-700 mt-8" />
                        </div>
                    </div>
                </div>
            </section>
            {/* Supported Document Types Section */}
            <section className="py-24 bg-gradient-to-b from-black via-[#101A2F] to-black">
                <div className="container mx-auto px-4 md:px-12">
                    <h2 className="text-3xl md:text-5xl font-bold text-white text-center mb-40">Supported Document Types</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3 md:gap-12 justify-center items-stretch">
                        {/* Identitas */}
                        <div className="flex flex-col items-start rounded-2xl border-2 border-blue-500/60 bg-[#0B1426] p-8 shadow-lg min-h-[300px] w-full max-w-[320px] mx-auto gap-5"
                            style={{
                                boxShadow: "0 0 24px 2px #2196F3, 0 0 0 2px #2196F3",
                            }}>
                            <div className="flex items-center gap-3 mb-6">
                                <i className="fa-solid fa-id-card text-blue-400 text-2xl"></i>
                                <span className="text-xl font-bold text-white">Identitas</span>
                            </div>
                            <ul className="space-y-4 w-full">
                                <li className="flex items-center gap-3 text-blue-300"><span className="w-3 h-3 rounded-full bg-blue-400 inline-block"></span>KTP</li>
                                <li className="flex items-center gap-3 text-blue-300"><span className="w-3 h-3 rounded-full bg-blue-400 inline-block"></span>SIM</li>
                                <li className="flex items-center gap-3 text-blue-300"><span className="w-3 h-3 rounded-full bg-blue-400 inline-block"></span>Passport</li>
                            </ul>
                        </div>

                        {/* Finansial */}
                        <div className="flex flex-col items-start rounded-2xl border-2 border-purple-400/60 bg-[#0B1426] p-8 shadow-lg min-h-[300px] w-full max-w-[320px] mx-auto gap-5"
                            style={{
                                boxShadow: "0 0 24px 2px #A259FF, 0 0 0 2px #A259FF",
                            }}>
                            <div className="flex items-center gap-3 mb-6">
                                <i className="fa-solid fa-file-invoice-dollar text-purple-400 text-2xl"></i>
                                <span className="text-xl font-bold text-white">Finansial</span>
                            </div>
                            <ul className="space-y-4 w-full">
                                <li className="flex items-center gap-3 text-purple-300"><span className="w-3 h-3 rounded-full bg-purple-400 inline-block"></span>Invoice</li>
                                <li className="flex items-center gap-3 text-purple-300"><span className="w-3 h-3 rounded-full bg-purple-400 inline-block"></span>Faktur</li>
                                <li className="flex items-center gap-3 text-purple-300"><span className="w-3 h-3 rounded-full bg-purple-400 inline-block"></span>NPWP</li>
                                <li className="flex items-center gap-3 text-purple-300"><span className="w-3 h-3 rounded-full bg-purple-400 inline-block"></span>Rekening Koran</li>
                            </ul>
                        </div>

                        {/* Legal */}
                        <div className="flex flex-col items-start rounded-2xl border-2 border-green-400/60 bg-[#0B1426] p-8 shadow-lg min-h-[300px] w-full max-w-[320px] mx-auto gap-5"
                            style={{
                                boxShadow: "0 0 24px 2px #10E0C1, 0 0 0 2px #10E0C1",
                            }}>
                            <div className="flex items-center gap-3 mb-6">
                                <i className="fa-solid fa-file-contract text-green-400 text-2xl"></i>
                                <span className="text-xl font-bold text-white">Legal</span>
                            </div>
                            <ul className="space-y-4 w-full">
                                <li className="flex items-center gap-3 text-green-300"><span className="w-3 h-3 rounded-full bg-green-400 inline-block"></span>Akta</li>
                                <li className="flex items-center gap-3 text-green-300"><span className="w-3 h-3 rounded-full bg-green-400 inline-block"></span>SIUP</li>
                                <li className="flex items-center gap-3 text-green-300"><span className="w-3 h-3 rounded-full bg-green-400 inline-block"></span>NIB</li>
                            </ul>
                        </div>

                        {/* HR */}
                        <div className="flex flex-col items-start rounded-2xl border-2 border-orange-400/60 bg-[#0B1426] p-8 shadow-lg min-h-[300px] w-full max-w-[320px] mx-auto gap-5"
                            style={{
                                boxShadow: "0 0 24px 2px #FC6D2D, 0 0 0 2px #FC6D2D",
                            }}>
                            <div className="flex items-center gap-3 mb-6">
                                <i className="fa-solid fa-user-tie text-orange-400 text-2xl"></i>
                                <span className="text-xl font-bold text-white">HR</span>
                            </div>
                            <ul className="space-y-4 w-full">
                                <li className="flex items-center gap-3 text-orange-300"><span className="w-3 h-3 rounded-full bg-orange-400 inline-block"></span>Ijazah</li>
                                <li className="flex items-center gap-3 text-orange-300"><span className="w-3 h-3 rounded-full bg-orange-400 inline-block"></span>CV</li>
                                <li className="flex items-center gap-3 text-orange-300"><span className="w-3 h-3 rounded-full bg-orange-400 inline-block"></span>Transkrip</li>
                            </ul>
                        </div>

                        {/* Format */}
                        <div className="flex flex-col items-start rounded-2xl border-2 border-pink-400/60 bg-[#0B1426] p-8 shadow-lg min-h-[300px] w-full max-w-[320px] mx-auto gap-5"
                            style={{
                                boxShadow: "0 0 24px 2px #FA12E3, 0 0 0 2px #FA12E3",
                            }}>
                            <div className="flex items-center gap-3 mb-6">
                                <i className="fa-solid fa-file-pdf text-pink-400 text-2xl"></i>
                                <span className="text-xl font-bold text-white">Format</span>
                            </div>
                            <ul className="space-y-4 w-full">
                                <li className="flex items-center gap-3 text-pink-300"><span className="w-3 h-3 rounded-full bg-pink-400 inline-block"></span>PDF</li>
                                <li className="flex items-center gap-3 text-pink-300"><span className="w-3 h-3 rounded-full bg-pink-400 inline-block"></span>JPG</li>
                                <li className="flex items-center gap-3 text-pink-300"><span className="w-3 h-3 rounded-full bg-pink-400 inline-block"></span>PNG</li>
                                <li className="flex items-center gap-3 text-pink-300"><span className="w-3 h-3 rounded-full bg-pink-400 inline-block"></span>Excel</li>
                            </ul>
                        </div>

                        {/* Kesehatan */}
                        <div className="flex flex-col items-start rounded-2xl border-2 border-blue-400/60 bg-[#0B1426] p-8 shadow-lg min-h-[300px] w-full max-w-[320px] mx-auto gap-5"
                            style={{
                                boxShadow: "0 0 24px 2px #2196F3, 0 0 0 2px #2196F3",
                            }}>
                            <div className="flex items-center gap-3 mb-6">
                                <i className="fa-solid fa-notes-medical text-blue-400 text-2xl"></i>
                                <span className="text-xl font-bold text-white">Kesehatan</span>
                            </div>
                            <ul className="space-y-4 w-full">
                                <li className="flex items-center gap-3 text-blue-300"><span className="w-3 h-3 rounded-full bg-blue-400 inline-block"></span>Rekam Medis</li>
                                <li className="flex items-center gap-3 text-blue-300"><span className="w-3 h-3 rounded-full bg-blue-400 inline-block"></span>Surat Rujukan</li>
                                <li className="flex items-center gap-3 text-blue-300"><span className="w-3 h-3 rounded-full bg-blue-400 inline-block"></span>Kuitansi RS</li>
                            </ul>
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