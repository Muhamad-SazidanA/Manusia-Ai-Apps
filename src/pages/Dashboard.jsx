import React from 'react';

export default function Dashboard() {
  return (
    <div className="w-full overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative py-20 text-center bg-gradient-to-b from-dark-900 via-blue-900 to-dark-900">
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
          <img
            src="/images/Image-BintangBG.png"
            alt="Star"
            className="absolute bottom-32 left-32 w-3 h-3 animate-pulse delay-700 opacity-40"
          />
          <img
            src="/images/Image-BintangBG.png"
            alt="Star"
            className="absolute bottom-20 right-20 w-6 h-6 animate-pulse delay-1000 opacity-60"
          />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-blue-600/20 border border-blue-500/30 rounded-full px-4 py-2 mb-8">
            <img
              src="/images/Image-BintangBG.png"
              alt="Star"
              className="w-4 h-4 animate-pulse opacity-60"
            />
            <span className="text-blue-300 text-sm">New: Our AI integration just landed</span>
          </div>

          {/* Main Title */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            <span className="text-blue-300">Custom AI for Your</span><br />
            <span className="text-blue-200">Real Business Challenges</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-white/80 mb-12 max-w-2xl mx-auto">
            From Data to Insights: Tailored AI Solutions for Enterprise Growth
          </p>

          {/* CTA Button */}
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 mb-16">
            Start for free
          </button>

          {/* Trusted by section */}
          <div className="mb-8">
            <p className="text-white/60 mb-6 text-sm">Trusted by the world's most innovative teams</p>
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

      {/* What is Manusia.AI Section */}
      <section className="py-20 bg-gradient-to-b from-blue-900 to-dark-900 relative overflow-hidden">
        {/* Background Stars */}
        <div className="absolute inset-0">
          <img
            src="/images/Image-BintangBG.png"
            alt="Star"
            className="absolute top-30 right-80 w-auto h-20 animate-pulse delay-500 opacity-60"
          />
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              What is Manusia.AI
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Right Content - Hexagon Network */}
            <div className="relative flex justify-center lg:order-2">
              <div className="relative">
                {/* Hexagon Network Image - Simplified */}
                <div className="flex items-center justify-center">
                  <img
                    src="/images/hexsagon-ai.png"
                    alt="hexagon product network"
                    className="w-full max-w-none h-auto object-contain scale-[2]"
                  />
                </div>
              </div>
            </div>

            {/* Left Content */}
            <div className="space-y-6 lg:order-1">
              <p className="text-base md:text-lg text-white/90 leading-relaxed">
                Manusia.AI adalah perusahaan konsultan dan custom AI yang berbasis di Jakarta,
                yang fokus terhadap pengembangan solusi bisnis berbasis AI sesuai kebutuhan perusahaan.
                Produk utama kita terdiri dari: Advin (AI individual assistant), Brilian (AI knowledge
                management), dan Rangkum (AI summarizer). Kami juga membuka layanan jasa pembuatan AI
                custom untuk membantu perusahaan memecahkan tantangan dalam operasional bisnis atau
                bahkan strategi customer.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Brilian.AI Section */}
      <section className="py-20 bg-gradient-to-b from-dark-900 to-blue-900 relative">
        {/* Background Stars */}
        <div className="absolute inset-0">
          <img
            src="/images/Image-BintangBG.png"
            alt="Star"
            className="absolute top-12 right-12 w-4 h-4 animate-pulse opacity-30"
          />
          <img
            src="/images/Image-BintangBG.png"
            alt="Star"
            className="absolute bottom-16 left-16 w-5 h-5 animate-pulse delay-800 opacity-35"
          />
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="flex items-center justify-center mb-8">
            <img
              src="/images/Image-BintangBG.png"
              alt="Star"
              className="w-6 h-6 mr-2 animate-pulse"
            />
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Brilian.AI
            </h2>
            <img
              src="/images/Image-BintangBG.png"
              alt="Star"
              className="w-6 h-6 ml-2 animate-pulse delay-300"
            />
          </div>

          <p className="text-lg text-white/80 mb-12 max-w-3xl mx-auto">
            AI-powered knowledge management platform <br />yang membantu organisasi mengakses informasi internal secara cepat, cerdas, dan aman
          </p>

          <p className="text-white/90 mb-12 max-w-4xl mx-auto leading-relaxed">
            brilian.ai merupakan AI-powered knowledge management platform yang membantu organisasi mengakses informasi internal secara cepat, cerdas, dan aman. Dengan pencarian kontekstual dan otomatisasi dokumen, brilian.ai mempercepat pengambilan keputusan dan meningkatkan efisiensi kerja.
          </p>

          <div className="border-2 border-dashed border-blue-500/30 rounded-lg p-8">
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              {/* Tanya Apa Aja */}
              <div className="bg-blue-900/50 rounded-xl p-6 border border-blue-500/30">
                <h3 className="text-xl font-semibold text-white mb-4">Tanya Apa Aja</h3>
                <p className="text-white/70 mb-4 text-sm">
                  Every meeting becomes notes, tasks, agendas, and follow-ups, automatically.
                </p>
                <div className="bg-dark-800/50 rounded-lg p-4">
                  <img src="/images/Image-Tanyaapasaja.png" alt="Chat Interface" className="w-full h-24 object-cover rounded" />
                </div>
              </div>

              {/* Buat Laporan */}
              <div className="bg-orange-900/50 rounded-xl p-6 border border-orange-500/30">
                <h3 className="text-xl font-semibold text-white mb-4">Buat Laporan</h3>
                <p className="text-white/70 mb-4 text-sm">
                  Get trusted answers from every corner of your Workspace, instantly and in full context.
                </p>
                <div className="bg-dark-800/50 rounded-lg p-4">
                  <img src="/images/Image-Buatlaporan.png" alt="Report Generation" className="w-full h-24 object-cover rounded" />
                </div>
              </div>

              {/* Analisis Laporan */}
              <div className="bg-green-900/50 rounded-xl p-6 border border-green-500/30">
                <h3 className="text-xl font-semibold text-white mb-4">Analisis Laporan</h3>
                <p className="text-white/70 mb-4 text-sm">
                  Turn ideas into visuals, writing, and tasks with zero prompt engineering or manual work.
                </p>
                <div className="bg-dark-800/50 rounded-lg p-4">
                  <img src="/images/Image-Analisislaporan.png" alt="Report Analysis" className="w-full h-24 object-cover rounded" />
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Riset Market */}
              <div className="bg-blue-900/50 rounded-xl p-6 border border-blue-500/30">
                <h3 className="text-xl font-semibold text-white mb-4">Riset Market</h3>
                <p className="text-white/70 mb-4 text-sm">
                  Every meeting becomes notes, tasks, agendas, and follow-ups, automatically.
                </p>
                <div className="bg-dark-800/50 rounded-lg p-4">
                  <img src="/images/Image-Risetmarket.png" alt="Market Research" className="w-full h-24 object-cover rounded" />
                </div>
              </div>

              {/* Pikirin Ide */}
              <div className="bg-orange-900/50 rounded-xl p-6 border border-orange-500/30">
                <h3 className="text-xl font-semibold text-white mb-4">Pikirin Ide</h3>
                <p className="text-white/70 mb-4 text-sm">
                  Get trusted answers from every corner of your Workspace, instantly and in full context.
                </p>
                <div className="bg-dark-800/50 rounded-lg p-4">
                  <img src="/images/Image-Pikirinide.png" alt="Ideas Generation" className="w-full h-24 object-cover rounded" />
                </div>
              </div>

              {/* Rangkumin Meeting */}
              <div className="bg-green-900/50 rounded-xl p-6 border border-green-500/30">
                <h3 className="text-xl font-semibold text-white mb-4">Rangkumin Meeting</h3>
                <p className="text-white/70 mb-4 text-sm">
                  Turn ideas into visuals, writing, and tasks with zero prompt engineering or manual work.
                </p>
                <div className="bg-dark-800/50 rounded-lg p-4">
                  <img src="/images/Image-Rangkuminmeet.png" alt="Meeting Summary" className="w-full h-24 object-cover rounded" />
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300">
              Book a demo
            </button>
          </div>
        </div>
      </section>

      {/* AI-powered knowledge management platform Section */}
      <section className="py-20 bg-gradient-to-b from-dark-900 to-blue-900 relative">
        {/* Background Stars */}
        <div className="absolute inset-0">
          <img
            src="/images/Image-BintangBG.png"
            alt="Star"
            className="absolute top-12 right-12 w-4 h-4 animate-pulse opacity-30"
          />
          <img
            src="/images/Image-BintangBG.png"
            alt="Star"
            className="absolute bottom-16 left-16 w-5 h-5 animate-pulse delay-800 opacity-35"
          />
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              AI-powered knowledge management platform
            </h2>
          </div>

          <div className="border-2 border-dashed border-blue-500/30 rounded-lg p-8">
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              {/* Tanya Apa Aja */}
              <div className="bg-blue-900/50 rounded-xl p-6 border border-blue-500/30">
                <h3 className="text-xl font-semibold text-white mb-4">Tanya Apa Aja</h3>
                <p className="text-white/70 mb-4 text-sm">
                  Every meeting becomes notes, tasks, agendas, and follow-ups, automatically.
                </p>
                <div className="bg-dark-800/50 rounded-lg p-4">
                  <img src="/images/Image-Tanyaapasaja.png" alt="Chat Interface" className="w-full h-24 object-cover rounded" />
                </div>
              </div>

              {/* Buat Laporan */}
              <div className="bg-orange-900/50 rounded-xl p-6 border border-orange-500/30">
                <h3 className="text-xl font-semibold text-white mb-4">Buat Laporan</h3>
                <p className="text-white/70 mb-4 text-sm">
                  Get trusted answers from every corner of your Workspace, instantly and in full context.
                </p>
                <div className="bg-dark-800/50 rounded-lg p-4">
                  <img src="/images/Image-Buatlaporan.png" alt="Report Generation" className="w-full h-24 object-cover rounded" />
                </div>
              </div>

              {/* Analisis Laporan */}
              <div className="bg-green-900/50 rounded-xl p-6 border border-green-500/30">
                <h3 className="text-xl font-semibold text-white mb-4">Analisis Laporan</h3>
                <p className="text-white/70 mb-4 text-sm">
                  Turn ideas into visuals, writing, and tasks with zero prompt engineering or manual work.
                </p>
                <div className="bg-dark-800/50 rounded-lg p-4">
                  <img src="/images/Image-Analisislaporan.png" alt="Report Analysis" className="w-full h-24 object-cover rounded" />
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Riset Market */}
              <div className="bg-blue-900/50 rounded-xl p-6 border border-blue-500/30">
                <h3 className="text-xl font-semibold text-white mb-4">Riset Market</h3>
                <p className="text-white/70 mb-4 text-sm">
                  Every meeting becomes notes, tasks, agendas, and follow-ups, automatically.
                </p>
                <div className="bg-dark-800/50 rounded-lg p-4">
                  <img src="/images/Image-Risetmarket.png" alt="Market Research" className="w-full h-24 object-cover rounded" />
                </div>
              </div>

              {/* Pikirin Ide */}
              <div className="bg-orange-900/50 rounded-xl p-6 border border-orange-500/30">
                <h3 className="text-xl font-semibold text-white mb-4">Pikirin Ide</h3>
                <p className="text-white/70 mb-4 text-sm">
                  Get trusted answers from every corner of your Workspace, instantly and in full context.
                </p>
                <div className="bg-dark-800/50 rounded-lg p-4">
                  <img src="/images/Image-Pikirinide.png" alt="Ideas Generation" className="w-full h-24 object-cover rounded" />
                </div>
              </div>

              {/* Rangkumin Meeting */}
              <div className="bg-green-900/50 rounded-xl p-6 border border-green-500/30">
                <h3 className="text-xl font-semibold text-white mb-4">Rangkumin Meeting</h3>
                <p className="text-white/70 mb-4 text-sm">
                  Turn ideas into visuals, writing, and tasks with zero prompt engineering or manual work.
                </p>
                <div className="bg-dark-800/50 rounded-lg p-4">
                  <img src="/images/Image-Rangkuminmeet.png" alt="Meeting Summary" className="w-full h-24 object-cover rounded" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog & Case Studies Section */}
      <section className="py-20 bg-gradient-to-b from-dark-900 to-blue-900 relative">
        {/* Background Stars */}
        <div className="absolute inset-0">
          <img
            src="/images/Image-BintangBG.png"
            alt="Star"
            className="absolute top-14 left-14 w-4 h-4 animate-pulse opacity-30"
          />
          <img
            src="/images/Image-BintangBG.png"
            alt="Star"
            className="absolute bottom-16 right-16 w-5 h-5 animate-pulse delay-900 opacity-35"
          />
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Blog & Case Studies
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-dark-800/50 rounded-xl overflow-hidden border-2 border-blue-500/30">
              <img
                src="/images/Image-Blog1.png"
                alt="Blog Post 1"
                className="w-full h-40 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-blue-400 mb-2">BLOG 1</h3>
              </div>
            </div>

            <div className="bg-dark-800/50 rounded-xl overflow-hidden border-2 border-blue-500/30">
              <img
                src="/images/Image-Blog2.png"
                alt="Blog Post 2"
                className="w-full h-40 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-blue-400 mb-2">BLOG 2</h3>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300">
              Book a demo
            </button>
          </div>
        </div>
      </section>

      {/* Final Section with Gradient Background */}
      <section className="py-20 bg-gradient-to-b from-blue-900 via-blue-600 to-blue-900 relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300">
            Book a demo
          </button>
        </div>
      </section>
    </div>
  );
}