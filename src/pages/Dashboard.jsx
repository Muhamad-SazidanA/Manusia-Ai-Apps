import React from 'react';

export default function Dashboard() {
  return (
    <div className="w-full overflow-x-hidden">
      {/* Hero Section - Content 1 */}
      <section className="relative py-20 text-center bg-gradient-to-b from-black via-slate-900 to-blue-900">
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

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
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
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-inter font-medium mb-5 leading-[1.3] pb-[10px] bg-gradient-to-b from-[#97BDFD] to-[#1A62DC] text-transparent bg-clip-text">
            Custom AI for Your<br />
            Real Business Challenges
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-white/90 mb-4 max-w-[520px] mx-auto font-inter font-normal leading-[1.6]">
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
            className="absolute top-36 right-80 w-auto h-20 animate-pulse delay-500 opacity-60"
          />
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-inter font-medium text-white mb-8">
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
                    src="/images/hexsagon-ai.png"
                    alt="hexagon product network"
                    className="w-full max-w-8xl h-auto object-contain scale-[2]"
                  />
                </div>
              </div>
            </div>

            {/* Left Content */}
            <div className="space-y-6 lg:order-1">
              <p className="text-base md:text-lg text-white/90 leading-relaxed font-inter font-normal">
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
          <div className="flex items-center justify-center mb-8">
            <img
              src="/images/Image-BintangBG.png"
              alt="Star"
              className="w-auto h-20 mr-2 animate-pulse"
            />
            <h2 className="text-4xl md:text-5xl font-inter font-medium text-white">
              Brilian.AI
            </h2>
            <img
              src="/images/Image-BintangBG.png"
              alt="Star"
              className="w-auto h-20 ml-2 animate-pulse delay-300"
            />
          </div>

          <p className="text-lg text-white/80 mb-12 max-w-3xl mx-auto font-inter font-normal">
            AI-powered knowledge management platform <br />yang membantu organisasi mengakses informasi internal secara cepat, cerdas, dan aman
          </p>

          <p className="text-white/90 mb-12 max-w-8xl mx-auto leading-relaxed font-inter font-medium">
            brilian.ai merupakan AI-powered knowledge<br /> management platform yang membantu organisasi<br /> mengakses informasi internal secara cepat, cerdas,<br /> dan aman. Dengan pencarian kontekstual dan <br />otomatisasi dokumen, brilian.ai mempercepat <br />pengambilan keputusan dan meningkatkan efisiensi<br /> kerja.
          </p>
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
            className="absolute bottom-16 left-16 w-auto h-20 animate-pulse delay-800 opacity-35"
          />
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-inter font-medium text-white mb-4">
              AI-powered knowledge<br /> management platform
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Tanya Apa Aja - Blue Color (#489CFF) */}
            <div className="bg-slate-900/80 rounded-xl p-6 border border-[#489CFF]/30 hover:border-[#489CFF]/60 hover:bg-[#489CFF]/10 transition-all duration-300"
              style={{ boxShadow: '0 0 20px 4px rgba(72, 156, 255, 0.3)' }}>
              <h3 className="text-xl font-inter font-medium text-[#489CFF] mb-4">Tanya Apa Aja</h3>
              <p className="text-white/70 mb-4 text-sm font-inter font-normal">
                Every meeting becomes notes, tasks, agendas, and follow-ups, automatically.
              </p>
              <div className="bg-slate-800/50 rounded-lg p-4">
                <img src="/images/Image-Tanyaapasaja.png" alt="Chat Interface" className="w-full h-24 object-cover rounded" />
              </div>
            </div>

            {/* Buat Laporan - Orange Color (#FC6D2D) */}
            <div className="bg-slate-900/80 rounded-xl p-6 border border-[#FC6D2D]/30 hover:border-[#FC6D2D]/60 hover:bg-[#FC6D2D]/10 transition-all duration-300"
              style={{ boxShadow: '0 0 20px 4px rgba(252, 109, 45, 0.3)' }}>
              <h3 className="text-xl font-inter font-medium text-[#FC6D2D] mb-4">Buat Laporan</h3>
              <p className="text-white/70 mb-4 text-sm font-inter font-normal">
                Get trusted answers from every corner of your Workspace, instantly and in full context.
              </p>
              <div className="bg-slate-800/50 rounded-lg p-4">
                <img src="/images/Image-Buatlaporan.png" alt="Report Generation" className="w-full h-24 object-cover rounded" />
              </div>
            </div>

            {/* Analisis Laporan - Teal Color (#10E0C1) */}
            <div className="bg-slate-900/80 rounded-xl p-6 border border-[#10E0C1]/30 hover:border-[#10E0C1]/60 hover:bg-[#10E0C1]/10 transition-all duration-300"
              style={{ boxShadow: '0 0 20px 4px rgba(16, 224, 193, 0.3)' }}>
              <h3 className="text-xl font-inter font-medium text-[#10E0C1] mb-4">Analisis Laporan</h3>
              <p className="text-white/70 mb-4 text-sm font-inter font-normal">
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
              style={{ boxShadow: '0 0 20px 4px rgba(72, 156, 255, 0.3)' }}>
              <h3 className="text-xl font-inter font-medium text-[#489CFF] mb-4">Riset Market</h3>
              <p className="text-white/70 mb-4 text-sm font-inter font-normal">
                Every meeting becomes notes, tasks, agendas, and follow-ups, automatically.
              </p>
              <div className="bg-slate-800/50 rounded-lg p-4">
                <img src="/images/Image-Risetmarket.png" alt="Market Research" className="w-full h-24 object-cover rounded" />
              </div>
            </div>

            {/* Pikirin Ide - Orange Color (#FC6D2D) */}
            <div className="bg-slate-900/80 rounded-xl p-6 border border-[#FC6D2D]/30 hover:border-[#FC6D2D]/60 hover:bg-[#FC6D2D]/10 transition-all duration-300"
              style={{ boxShadow: '0 0 20px 4px rgba(252, 109, 45, 0.3)' }}>
              <h3 className="text-xl font-inter font-medium text-[#FC6D2D] mb-4">Pikirin Ide</h3>
              <p className="text-white/70 mb-4 text-sm font-inter font-normal">
                Get trusted answers from every corner of your Workspace, instantly and in full context.
              </p>
              <div className="bg-slate-800/50 rounded-lg p-4">
                <img src="/images/Image-Pikirinide.png" alt="Ideas Generation" className="w-full h-24 object-cover rounded" />
              </div>
            </div>

            {/* Rangkumin Meeting - Teal Color (#10E0C1) */}
            <div className="bg-slate-900/80 rounded-xl p-6 border border-[#10E0C1]/30 hover:border-[#10E0C1]/60 hover:bg-[#10E0C1]/10 transition-all duration-300"
              style={{ boxShadow: '0 0 20px 4px rgba(16, 224, 193, 0.3)' }}>
              <h3 className="text-xl font-inter font-medium text-[#10E0C1] mb-4">Rangkumin Meeting</h3>
              <p className="text-white/70 mb-4 text-sm font-inter font-normal">
                Turn ideas into visuals, writing, and tasks with zero prompt engineering or manual work.
              </p>
              <div className="bg-slate-800/50 rounded-lg p-4">
                <img src="/images/Image-Rangkuminmeet.png" alt="Meeting Summary" className="w-full h-24 object-cover rounded" />
              </div>
            </div>
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
            <h2 className="text-4xl md:text-5xl font-inter font-medium text-white">
              Rangkum.AI
            </h2>
            <img
              src="/images/Image-BintangBG.png"
              alt="Star"
              className="w-auto h-20 ml-4 animate-pulse delay-300"
            />
          </div>

          <p className="text-lg text-white/80 mb-10 max-w-3xl mx-auto font-inter font-normal">
            Intelligent Document Processing (IDP) <br />yang membantu organisasi mengakses informasi internal secara cepat, cerdas, dan aman
          </p>

          <p className="text-white/90 mb-12 max-w-4xl mx-auto leading-relaxed font-inter font-medium">
            Rangkum.ai adalah platform Intelligent Document Processing (IDP) berbasis AI yang membantu organisasi mengotomatisasi ekstraksi, pemrosesan, dan peringkasan dokumen, dari PDF, formulir, hingga laporan kompleks
          </p>

          <div className="grid md:grid-cols-3 gap-12 mb-12 mt-8">
            {/* Intelligent Document Processing - Purple Color */}
            <div className="flex flex-col justify-between h-64 w-full max-w-sm bg-[#0F172A] rounded-xl p-6 border border-purple-500/30 hover:border-purple-500/60 hover:bg-purple-900/20 transition-all duration-300"
              style={{ boxShadow: '0 0 20px 4px rgba(139,92,246,0.3)' }}>
              <h3
                className="text-l font-inter font-normal text-purple-300 text-left leading-snug drop-shadow-sm mb-4"
                style={{ textShadow: '0 0 4px rgba(168,85,247,0.4)' }}
              >
                Intelligent Document Processing (IDP) <br /> dan OCR AI Canggih
              </h3>
              <div className="bg-[#1E293B] p-3 rounded-lg flex justify-center items-center">
                <img src="/images/Image-IDP.png" alt="IDP Processing" className="h-28 object-contain" />
              </div>
            </div>

            {/* Otomatisasi Alur Kerja - Cyan Color */}
            <div className="flex flex-col justify-between h-64 w-full max-w-sm bg-[#0F172A] rounded-xl p-6 mt-8 border border-cyan-400/30 hover:border-cyan-400/60 hover:bg-cyan-900/20 transition-all duration-300"
              style={{ boxShadow: '0 0 20px 4px rgba(34,211,238,0.3)' }}>
              <h3
                className="text-l font-inter font-normal text-cyan-300 text-left leading-snug drop-shadow-sm mb-4"
                style={{ textShadow: '0 0 4px rgba(34,211,238,0.4)' }}
              >
                Otomatisasi Alur Kerja dan <br /> Integrasi Sistem
              </h3>
              <div className="bg-[#1E293B] p-3 rounded-lg flex justify-center items-center">
                <img src="/images/Image-Otomatisasi.png" alt="Workflow Automation" className="h-28 object-contain" />
              </div>
            </div>

            {/* Integrasi Mudah - Orange Color */}
            <div className="flex flex-col justify-between h-64 w-full max-w-sm bg-[#0F172A] rounded-xl p-6 border border-orange-500/30 hover:border-orange-500/60 hover:bg-orange-900/20 transition-all duration-300"
              style={{ boxShadow: '0 0 20px 4px rgba(251,146,60,0.3)' }}>
              <h3
                className="text-l font-inter font-normal text-orange-300 text-left leading-snug drop-shadow-sm mb-4"
                style={{ textShadow: '0 0 4px rgba(251,146,60,0.4)' }}
              >
                Integrasi Mudah
              </h3>
              <div className="bg-[#1E293B] p-3 rounded-lg flex justify-center items-center">
                <img src="/images/Image-Integrasi.png" alt="Easy Integration" className="h-28 object-contain" />
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="flex justify-center mt-16">
            <button className="flex justify-center items-center h-10 px-10 text-white bg-blue-600/20 border border-blue-500/30 rounded-md mb-12 hover:bg-blue-600/30 hover:border-blue-500/60 hover:shadow-md hover:scale-105 transition-all duration-200 ease-in-out cursor-pointer font-inter font-light mt-12">
              Book a demo
            </button>
          </div>
        </div>
      </section>

      {/* Blog & Case Studies Section - Content 6 */}
      <section className="py-20 bg-gradient-to-b from-slate-900 via-blue-900 to-black relative">
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
            <h2 className="text-4xl md:text-5xl font-inter font-medium text-white">
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