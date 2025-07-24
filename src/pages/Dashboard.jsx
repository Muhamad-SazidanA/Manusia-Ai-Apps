import React from 'react';

export default function Dashboard() {
  return (
    <div className="w-full overflow-x-hidden">
      {/* Hero Section - Content 1 */}
      <section className="min-h-screen py-20 px-6 md:px-16 flex justify-center items-center bg-gradient-to-b from-black via-slate-900 to-blue-900">
        {/* Decorative Stars */}
        <div className="absolute inset-0">
          <img
            src="/images/Image-BintangBG.png"
            alt="Star"
            className="absolute top-20 right-80 w-auto h-20 animate-pulse delay-500 opacity-30"
          />
          <img
            src="/images/Image-BintangBG.png"
            alt="Star"
            className="absolute top-20 left-80 w-auto h-20 animate-pulse delay-300 opacity-50"
          />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-center items-center flex-col text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-blue-600/20 border border-blue-500/30 rounded-full px-4 py-2 mb-4">
            <img
              src="/images/Image-BintangBG.png"
              alt="Star"
              className="w-5 h-5 animate-pulse opacity-60"
            />
            <span className="text-blue-300 text-sm font-inter font-normal">New: Our AI integration just landed</span>
          </div>

          {/* Main Title */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-inter mb-5 leading-[1.3] pb-[10px] bg-gradient-to-b from-[#97BDFD] to-[#1A62DC] text-transparent bg-clip-text">
            Custom AI for Your<br />
            Real Business Challenges
          </h1>
          {/* Subtitle */}
          <p className="text-base md:text-2xl font-normal font-inter text-white/90 mb-4 max-w-[520px] mx-auto leading-[1.6]">
            From Data to Insights: Tailored AI Solutions for <br />Enterprise Growth
          </p>

          {/* CTA Button */}
          <div className="flex justify-center">
            <button className="flex justify-center items-center h-10 px-10 text-white bg-blue-600/20 border border-blue-500/30 rounded-md mb-12 hover:bg-blue-600/30 hover:border-blue-500/60 hover:shadow-md hover:scale-105 transition-all duration-200 ease-in-out cursor-pointer font-inter font-light">
              Start for free
            </button>
          </div>

          {/* Trusted by section */}
          <div className="mb-8">
            <p className="text-white/60 mb-6 text-sm font-inter font-normal">Trusted by the world's most innovative teams</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-3xl mx-auto">
              {/* Row 1 */}
              <div className="border border-blue-500/30 rounded-lg p-3 flex items-center justify-center min-h-[60px] glass-effect">
                <img
                  src="/images/acme.png"
                  alt="Acme Corp"
                  className="max-w-full max-h-8 object-contain"
                />
              </div>

              <div className="border border-blue-500/30 rounded-lg p-3 flex items-center justify-center min-h-[60px] glass-effect">
                <img
                  src="/images/echo.png"
                  alt="Echo Valley"
                  className="max-w-full max-h-8 object-contain"
                />
              </div>

              <div className="border border-blue-500/30 rounded-lg p-3 flex items-center justify-center min-h-[60px] glass-effect">
                <img
                  src="/images/quantum.png"
                  alt="Quantum"
                  className="max-w-full max-h-8 object-contain"
                />
              </div>

              <div className="border border-blue-500/30 rounded-lg p-3 flex items-center justify-center min-h-[60px] glass-effect">
                <img
                  src="/images/pulse.png"
                  alt="PULSE"
                  className="max-w-full max-h-8 object-contain"
                />
              </div>

              {/* Row 2 */}
              <div className="border border-blue-500/30 rounded-lg p-3 flex items-center justify-center min-h-[60px] glass-effect">
                <img
                  src="/images/outside.png"
                  alt="Outside"
                  className="max-w-full max-h-8 object-contain"
                />
              </div>

              <div className="border border-blue-500/30 rounded-lg p-3 flex items-center justify-center min-h-[60px] glass-effect">
                <img
                  src="/images/apex.png"
                  alt="APEX"
                  className="max-w-full max-h-8 object-contain"
                />
              </div>

              <div className="border border-blue-500/30 rounded-lg p-3 flex items-center justify-center min-h-[60px] glass-effect">
                <img
                  src="/images/celestial.png"
                  alt="Celestial"
                  className="max-w-full max-h-8 object-contain"
                />
              </div>

              <div className="border border-blue-500/30 rounded-lg p-3 flex items-center justify-center min-h-[60px] glass-effect">
                <img
                  src="/images/twice.png"
                  alt="2TWICE"
                  className="max-w-full max-h-8 object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What is Manusia.AI Section - Content 2 */}
      <section className="py-20 bg-gradient-to-b from-blue-900 via-slate-800 to-black relative overflow-hidden">
        {/* Background Stars */}
        <div className="absolute inset-0">
          <img
            src="/images/Image-BintangBG.png"
            alt="Star"
            className="absolute z-10 top-36 right-80 w-auto h-20 animate-pulse delay-500 opacity-60 translate-x-[50px]"
          />
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold font-inter text-white mb-8">
              What is Manusia.AI
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Right Content - Hexagon Network */}
            <div className="relative flex justify-center lg:order-2">
              <div className="relative">
                {/* Hexagon Network Image - Made 2x larger */}
                <div className="flex items-center justify-center">
                  <img
                    src="/images/hexsagon-ai.svg"
                    alt="hexagon product network"
                    className="w-full max-w-8xl h-auto object-contain scale-[2] z-1"
                  />
                </div>
              </div>
            </div>

            {/* Left Content */}
            <div>
              <p className="absolute z-20 text-base md:text-2xl font-normal font-inter text-white/90 leading-relaxed -translate-x-[50px] -translate-y-[150px]">
                Manusia.AI adalah perusahaan konsultan dan custom AI<br />
                yang berbasis di Jakarta, yang berfokus pada<br />
                penyediaan layanan konsultasi strategi AI dan<br />
                pengembangan solusi AI kustom untuk kebutuhan<br />
                perusahaan skala menengah hingga besar.<br />
                Kami tidak hanya memberikan saran strategis, kami<br />
                juga membangun dan menerapkan solusi AI yang<br />
                disesuaikan dengan konteks dan tantangan spesifik<br />
                bisnis setiap customer.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Brilian.AI Section - Content 3 */}
      <section className="py-20 bg-gradient-to-b from-black via-blue-900 to-slate-800 relative">

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative mb-20">
          {/* Title & Subtitle */}
          <div className="text-center mb-4">
            <div className="flex justify-center items-center gap-4 mb-2">
              <img src="/images/Image-BintangBG.png" alt="" className="w-24 h-24 animate-pulse opacity-80" />
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold font-inter text-white">
                Brilian.AI
              </h2>
              <img src="/images/Image-BintangBG.png" alt="" className="w-24 h-24 animate-pulse opacity-80" />
            </div>
            <div className="absolute z-20 text-base md:text-2xl font-normal font-inter text-white/90 leading-relaxed">
              AI-powered knowledge management platform<br />
              yang membantu organisasi mengakses informasi internal secara cepat, cerdas, dan aman
            </div>
          </div>
          {/* 2 Kolom */}
          <div className="grid md:grid-cols-2 gap-6 items-center">
            {/* Kiri: Gambar */}
            <div className="flex justify-center md:justify-end">
              <img
                src="/images/BrilianContentDS.svg"
                alt="Brilian.AI"
                className="w-full max-w-sm md:max-w-md lg:max-w-lg h-auto object-contain transform lg:scale-[1.5] -translate-x-[100px] drop-shadow-2xl"
                style={{ maxHeight: 400 }}
              />
            </div>
            {/* Kanan: Deskripsi */}
            <div>
              <div className="absolute z-20 text-base md:text-2xl w-full h-full font-normal font-inter text-white/90 leading-relaxed -translate-x-[50px]">
                Brilian.Ai merupakan AI-powered knowledge<br />
                management platformyang membantu organisasi<br />
                mengakses informasi internal secara cepat,cerdas,<br />
                dan aman.Dengan pencarian kontekstual dan<br />
                otomatisasi dokumen, brilian.ai mempercepat<br />
                pengambilan keputusan dan meningkatkan efisiensi<br />
                kerja.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI-powered knowledge management platform Section - Content 4 */}
      <section className="py-20 bg-gradient-to-b from-slate-800 via-slate-900 to-blue-900 relative">
        {/* Background Stars */}
        <div className="absolute inset-0">
          <img
            src="/images/Image-BintangBG.png"
            alt="Star"
            className="absolute top-12 right-12 w-auto h-20 animate-pulse opacity-30"
          />
          <img
            src="/images/Image-BintangBG.png"
            alt="Star"
            className="absolute bottom-16 left-16 w-auto h-6 animate-pulse delay-800 opacity-35"
          />
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold font-inter text-white mb-4">
              AI-powered knowledge<br /> management platform
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Tanya Apa Aja - Blue Color (#489CFF) */}
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

            {/* Buat Laporan - Orange Color (#FC6D2D) */}
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

            {/* Analisis Laporan - Teal Color (#10E0C1) */}
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
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Riset Market - Blue Color (#489CFF) */}
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

            {/* Pikirin Ide - Orange Color (#FC6D2D) */}
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

            {/* Rangkumin Meeting - Teal Color (#10E0C1) */}
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
          </div>
          <div className="flex justify-center mt-10">
            <button className="px-5 py-3 min-w-[80px] rounded-xl font-semibold text-lg bg-gradient-to-r from-blue-400 to-blue-600 text-white shadow-lg border border-blue-300 hover:scale-105 transition-all duration-200">
              Demo a Book
            </button>
          </div>
        </div>
      </section>

      {/* Rangkum.AI Section - Content 5 */}
      <section className="py-20 bg-gradient-to-b from-blue-900 via-black to-slate-900 relative">
        {/* Background Stars */}
        <div className="absolute inset-0">
          <img
            src="/images/Image-BintangBG.png"
            alt="Star"
            className="absolute top-12 right-12 w-auto h-20 animate-pulse opacity-30"
          />
          <img
            src="/images/Image-BintangBG.png"
            alt="Star"
            className="absolute bottom-16 left-16 w-auto h-20 animate-pulse delay-800 opacity-35"
          />
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="flex items-center justify-center mb-2">
            <img
              src="/images/Image-BintangBG.png"
              alt="Star"
              className="w-auto h-20 mr-4 animate-pulse"
            />
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-inter font-semibold text-white">
              Rangkum.AI
            </h2>
            <img
              src="/images/Image-BintangBG.png"
              alt="Star"
              className="w-auto h-20 ml-4 animate-pulse delay-300"
            />
          </div>

          <p className="absolute z-20 text-base md:text-2xl font-normal font-inter text-white/90 leading-relaxed">
            Intelligent Document Processing (IDP) <br />yang membantu organisasi mengakses informasi internal secara cepat, cerdas, dan aman
          </p>

          {/* 2 Kolom Layout dengan SVG */}
          <div className="grid md:grid-cols-2 gap-0 items-center mb-2 relative">
            {/* Kanan: Deskripsi */}
            <div className="text-left relative z-10">
              <p className="absolute z-20 text-base md:text-2xl font-normal font-inter text-white/90 leading-relaxed  -translate-y-[150px]">
                Rangkum.ai adalah platform Intelligent <br />
                Document Processing (IDP) berbasis AI yang <br />
                membantu organisasi mengotomatisasi <br />
                ekstraksi, pemrosesan, dan peringkasan<br />
                dokumen, dari PDF, formulir, hingga laporan <br />
                kompleks
              </p>
            </div>

            {/* SVG Gambar - Positioned to overlap with cards below */}
            <div className="relative z-0">
              <img
                src="/images/RangkumContentDS.svg"
                alt="Rangkum.AI"
                className="w-full max-w-2xl h-auto object-contain opacity-60 translate-y-[50px] translate-x-[100px]"
                style={{
                  maxHeight: 600, // Move image down to overlap with cards
                }}
              />
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8  relative z-10 -translate-y-[130px]">
            {/* IDP - Purple */}
            <div className="group bg-slate-900/80 rounded-xl p-6 border border-purple-500/30 hover:border-purple-500/60 transition-all duration-300
    hover:bg-white/10 hover:backdrop-blur-sm"
              style={{ boxShadow: '0 0 20px 4px  rgba(168,85,247,0.4)' }}>
              <h3 className="text-xl font-medium font-inter text-purple-300 mb-4 leading-snug"
                style={{ textShadow: '0 0 4px rgba(168,85,247,0.4)' }}>
                Intelligent Document Processing (IDP) <br /> dan OCR AI Canggih
              </h3>
              <div className="bg-slate-800/50 rounded-lg p-4 transition-all duration-300">
                <img
                  src="/images/Image-IDP.png"
                  alt="IDP Processing"
                  className="w-full h-24 object-cover rounded"
                />
              </div>
            </div>

            {/* Otomatisasi - Cyan */}
            <div className="group bg-slate-900/80 rounded-xl p-6 border border-cyan-400/30 hover:border-cyan-400/60 transition-all duration-300
    hover:bg-white/10 hover:backdrop-blur-sm translate-y-[30px]"
              style={{ boxShadow: '0 0 20px 4px rgba(34,211,238,0.4)' }}>
              <h3 className="text-xl font-medium font-inter text-cyan-300 mb-4 leading-snug"
                style={{ textShadow: '0 0 4px rgba(34,211,238,0.4)' }}>
                Otomatisasi Alur Kerja dan <br /> Integrasi Sistem
              </h3>
              <div className="bg-slate-800/50 rounded-lg p-4 transition-all duration-300">
                <img
                  src="/images/Image-Otomatisasi.png"
                  alt="Workflow Automation"
                  className="w-full h-24 object-cover rounded"
                />
              </div>
            </div>

            {/* Integrasi - Orange */}
            <div className="group bg-slate-900/80 rounded-xl p-6 border border-orange-500/30 hover:border-orange-500/60 transition-all duration-300
                 hover:bg-white/10 hover:backdrop-blur-sm"
              style={{ boxShadow: '0 0 20px 4px rgba(251,146,60,0.4)' }}>
              <h3 className="text-xl font-medium font-inter text-orange-300 mb-4 leading-snug"
                style={{ textShadow: '0 0 4px rgba(251,146,60,0.4)' }}>
                Integrasi Mudah
              </h3>
              <div className="bg-slate-800/50 rounded-lg p-4 transition-all duration-300">
                <img
                  src="/images/Image-Integrasi.png"
                  alt="Easy Integration"
                  className="w-full h-24 object-cover rounded"
                />
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="flex justify-center -translate-y-[50px]">
            <button className="px-5 py-3 min-w-[80px] rounded-xl font-semibold text-lg bg-gradient-to-r from-blue-400 to-blue-600 text-white shadow-lg border border-blue-300 hover:scale-105 transition-all duration-200">
              Demo a Book
            </button>
          </div>
        </div>
      </section>

      {/* Industries We Serve / Use Cases Rangkum.AI */}
      <section className="py-20 bg-gradient-to-b from-slate-900 via-blue-900 to-black relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-14">
            <h2 className="text-4xl md:text-5xl font-semibold font-inter text-white mb-2">
              Industries We Serve
            </h2>
            <h3 className="text-2xl md:text-3xl font-normal font-inter text-gray-200">
              Use Cases Rangkum.AI
            </h3>
          </div>

          {/* Gabungkan semua card dalam satu grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 auto-rows-fr">
            {/* Card 1 */}
            <div className="relative group bg-slate-900/80 rounded-xl p-6 border border-[#0075FF]/30 hover:border-[#0075FF]/60 transition-all duration-300 hover:bg-white/10 hover:backdrop-blur-sm overflow-hidden">
              {/* Inner Glow Layer */}
              <div className="absolute inset-0 rounded-xl pointer-events-none" style={{
                boxShadow: 'inset 0 0 40px rgba(0,117,255,0.3)'
              }}></div>

              {/* Header Icon + Title */}
              <div className="flex items-center gap-3 mb-4 relative z-10">
                <div className="w-10 h-10 bg-[#0075FF]/20 rounded-lg flex items-center justify-center">
                  <i className="fa-solid fa-coins text-[#0075FF] text-lg"></i>
                </div>
                <h4 className="text-xl font-bold text-[#0075FF]"
                  style={{ textShadow: '0 0 4px rgba(0,117,255,0.5)' }}>
                  Finance
                </h4>
              </div>

              {/* Deskripsi */}
              <div className="text-sm text-white/80 font-medium mb-4 relative z-10">
                Accounts Payable (AP) Automation
              </div>

              {/* List Benefit */}
              <ul className="text-white/80 text-xs space-y-2 relative z-10">
                <li className="flex gap-3 items-start">
                  <div className="w-1.5 h-1.5 bg-[#0075FF] rounded-full mt-1.5 flex-shrink-0" />
                  <span>Menurunkan waktu input invoice hingga 90% lebih cepat</span>
                </li>
                <li className="flex gap-3 items-start">
                  <div className="w-1.5 h-1.5 bg-[#0075FF] rounded-full mt-1.5 flex-shrink-0" />
                  <span>Mengurangi kesalahan pembacaan nilai pajak dan nominal invoice</span>
                </li>
              </ul>
            </div>
            <div className="relative group bg-[#0B1426]/80 rounded-2xl p-6 border border-[#10E0C1]/40 hover:border-[#10E0C1]/80 transition-all duration-300 hover:bg-white/5 hover:backdrop-blur-sm overflow-hidden">
              {/* Inner Glow */}
              <div className="absolute inset-0 rounded-2xl pointer-events-none"
                style={{ boxShadow: 'inset 0 0 40px rgba(16,224,193,0.3)' }}></div>

              {/* Header Icon + Title */}
              <div className="flex items-center gap-3 relative z-10">
                <div className="w-10 h-10 bg-[#10E0C1]/20 rounded-lg flex items-center justify-center">
                  <i className="fa-solid fa-cart-shopping text-[#10E0C1] text-lg"></i>
                </div>
                <h4 className="text-xl font-bold text-[#10E0C1]"
                  style={{ textShadow: '0 0 4px rgba(16,224,193,0.5)' }}>
                  Purchasing
                </h4>
              </div>

              {/* Deskripsi */}
              <div className="text-white text-sm font-medium mt-2 relative z-10">
                Purchase Order (PO) Automation
              </div>

              {/* List Benefit */}
              <ul className="text-white/80 text-xs space-y-2 mt-2 relative z-10">
                <li className="flex gap-3 items-start">
                  <div className="w-1.5 h-1.5 bg-[#10E0C1] rounded-full mt-1.5 flex-shrink-0" />
                  <span>Pembacaan dokumen penawaran harga dan PO secara instan</span>
                </li>
                <li className="flex gap-3 items-start">
                  <div className="w-1.5 h-1.5 bg-[#10E0C1] rounded-full mt-1.5 flex-shrink-0" />
                  <span>Meningkatkan kecepatan approval purchasing sampai 3x lebih cepat</span>
                </li>
              </ul>
            </div>


            <div className="relative group bg-[#0B1426]/80 rounded-2xl p-6 border border-[#FA12E3]/40 hover:border-[#FA12E3]/80 transition-all duration-300 hover:bg-white/5 hover:backdrop-blur-sm overflow-hidden">
              {/* Inner Glow */}
              <div className="absolute inset-0 rounded-2xl pointer-events-none"
                style={{ boxShadow: 'inset 0 0 40px rgba(250,18,227,0.25)' }}></div>

              {/* Header Icon + Title */}
              <div className="flex items-center gap-3 relative z-10">
                <div className="w-10 h-10 bg-[#FA12E3]/20 rounded-lg flex items-center justify-center">
                  <i className="fa-solid fa-user-plus text-[#FA12E3] text-lg"></i>
                </div>
                <h4 className="text-xl font-bold text-[#FA12E3]"
                  style={{ textShadow: '0 0 4px rgba(250,18,227,0.5)' }}>
                  Sales
                </h4>
              </div>

              {/* Deskripsi */}
              <div className="text-white text-sm font-medium mt-2 relative z-10">
                Customer Onboarding Automation
              </div>

              {/* List Benefit */}
              <ul className="text-white/80 text-xs space-y-2 mt-2 relative z-10">
                <li className="flex gap-3 items-start">
                  <div className="w-1.5 h-1.5 bg-[#FA12E3] rounded-full mt-1.5 flex-shrink-0" />
                  <span>Mempercepat proses registrasi customer hanya dalam hitungan detik</span>
                </li>
                <li className="flex gap-3 items-start">
                  <div className="w-1.5 h-1.5 bg-[#FA12E3] rounded-full mt-1.5 flex-shrink-0" />
                  <span>Langsung terhubung dengan CRM untuk proses follow-up otomatis</span>
                </li>
              </ul>
            </div>


            {/* Baris kedua: Card 4 & 5 di tengah */}
            <div className="col-span-3 flex justify-center gap-8">
              <div className="relative group bg-[#0B1426]/80 rounded-2xl p-6 border border-[#AB7AFF]/40 hover:border-[#AB7AFF]/80 transition-all duration-300 hover:bg-white/5 hover:backdrop-blur-sm overflow-hidden">
                {/* Inner Glow Effect */}
                <div className="absolute inset-0 rounded-2xl pointer-events-none"
                  style={{ boxShadow: 'inset 0 0 40px rgba(171,122,255,0.25)' }}></div>

                {/* Header Icon + Title */}
                <div className="flex items-center gap-3 relative z-10">
                  <div className="w-10 h-10 bg-[#AB7AFF]/20 rounded-lg flex items-center justify-center">
                    <i className="fa-solid fa-industry text-[#AB7AFF] text-lg"></i>
                  </div>
                  <h4 className="text-xl font-bold text-[#AB7AFF]"
                    style={{ textShadow: '0 0 4px rgba(171,122,255,0.5)' }}>
                    Manufacture
                  </h4>
                </div>

                {/* Deskripsi */}
                <div className="text-white text-sm font-medium mt-2 relative z-10">
                  Goods Receipt & Stock Reconciliation
                </div>

                {/* List Benefit */}
                <ul className="text-white/80 text-xs space-y-2 mt-2 relative z-10">
                  <li className="flex gap-3 items-start">
                    <div className="w-1.5 h-1.5 bg-[#AB7AFF] rounded-full mt-1.5 flex-shrink-0" />
                    <span>Monitoring stok otomatis dari dokumen DO dan Surat Jalan</span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <div className="w-1.5 h-1.5 bg-[#AB7AFF] rounded-full mt-1.5 flex-shrink-0" />
                    <span>Mempercepat proses validasi dan update inventory harian</span>
                  </li>
                </ul>
              </div>


              <div className="relative group bg-[#0B1426]/80 rounded-2xl p-6 border border-[#FC6D2D]/40 hover:border-[#FC6D2D]/80 transition-all duration-300 hover:bg-white/5 hover:backdrop-blur-sm overflow-hidden">
                {/* Inner Glow Effect */}
                <div className="absolute inset-0 rounded-2xl pointer-events-none"
                  style={{ boxShadow: 'inset 0 0 40px rgba(252,109,45,0.25)' }}></div>

                {/* Header Icon + Title */}
                <div className="flex items-center gap-3 relative z-10">
                  <div className="w-10 h-10 bg-[#FC6D2D]/20 rounded-lg flex items-center justify-center">
                    <i className="fa-solid fa-users text-[#FC6D2D] text-lg"></i>
                  </div>
                  <h4 className="text-xl font-bold text-[#FC6D2D]"
                    style={{ textShadow: '0 0 4px rgba(252,109,45,0.5)' }}>
                    Human Resource
                  </h4>
                </div>

                {/* Deskripsi */}
                <div className="text-white text-sm font-medium mt-2 relative z-10">
                  HR Onboarding Document Automation
                </div>

                {/* List Benefit */}
                <ul className="text-white/80 text-xs space-y-2 mt-2 relative z-10">
                  <li className="flex gap-3 items-start">
                    <div className="w-1.5 h-1.5 bg-[#FC6D2D] rounded-full mt-1.5 flex-shrink-0" />
                    <span>Digitalisasi dokumen onboarding karyawan secara otomatis</span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <div className="w-1.5 h-1.5 bg-[#FC6D2D] rounded-full mt-1.5 flex-shrink-0" />
                    <span>Ekstraksi data (ID, CV, dll) dan identifikasi ke sistem HRIS</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog & Case Studies Section - Content 6 */}
      <section className="py-20 bg-gradient-to-b from-black via-blue-900 to-black relative">
        {/* Background Stars */}
        <div className="absolute inset-0 pointer-events-none">
          <img
            src="/images/Image-BintangBG.png"
            alt="Stars"
            className="absolute bottom-16 right-16 w-auto h-20 animate-pulse opacity-35"
          />
        </div>

        {/* Container */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Title */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-inter font-semibold  text-white">
              <span className="text-white">Blog</span> <span className="text-gray-300">&amp; Case Studies</span>
            </h2>
          </div>

          {/* Blog Cards Centered */}
          <div className="flex flex-col md:flex-row justify-center items-stretch gap-10">
            {/* Blog 1 */}
            <div className="w-full max-w-md rounded-xl overflow-hidden border border-blue-500/30 bg-black/50 shadow-[0_0_40px_5px_rgba(59,130,246,0.4)] hover:shadow-[0_0_60px_8px_rgba(59,130,246,0.6)] transition-all duration-300">
              <div className="p-4">
                <h3 className="text-2xl font-semibold text-blue-400 mb-4 tracking-wide text-center">BLOG 1</h3>
                <img
                  src="/images/Image-Blog1.png"
                  alt="Blog 1"
                  className="w-full h-[220px] object-cover rounded-lg"
                />
              </div>
            </div>

            {/* Blog 2 */}
            <div className="w-full max-w-md rounded-xl overflow-hidden border border-blue-500/30 bg-black/50 shadow-[0_0_40px_5px_rgba(59,130,246,0.4)] hover:shadow-[0_0_60px_8px_rgba(59,130,246,0.6)] transition-all duration-300">
              <div className="p-4">
                <h3 className="text-2xl font-semibold text-blue-400 mb-4 tracking-wide text-center">BLOG 2</h3>
                <img
                  src="/images/Image-Blog2.png"
                  alt="Blog 2"
                  className="w-full h-[220px] object-cover rounded-lg"
                />
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}