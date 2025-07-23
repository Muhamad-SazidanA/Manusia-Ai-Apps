import React from 'react';

export default function BrilianBanking() {
  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-black via-slate-900 to-blue-950 text-white font-inter relative overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-b from-black via-blue-950 to-blue-900 flex items-center justify-center overflow-hidden">
        <div className="absolute z-10 top-20 w-auto h-24 animate-pulse delay-500 opacity-30 flex justify-center translate-x-[300px]">
          <img src="/images/Image-BintangBG.png" alt="Star" className="w-full h-full" />
        </div>
        <div className="relative max-w-6xl w-full mx-auto flex flex-col md:flex-row items-center justify-between px-10">
          <div className="flex-1 -translate-x-[100px] ">
            <h1 className="text-4xl md:text-7xl lg:text-7xl font-inter font-semibold mb-5 leading-[1.3] pb-[10px] bg-gradient-to-b from-[#97BDFD] to-[#1A62DC] text-transparent bg-clip-text">
              Smarter Decision-Making <br /> Banking & Multifinance
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-10 font-medium max-w-lg text-left">
              Ubah Data Tak Terstruktur Jadi <br /> Keputusan yang Cerdas
            </p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 rounded-lg font-medium transition-all duration-300 hover:scale-105 shadow-lg text-lg">
              Book a demo
            </button>
          </div>
          <div className="absolute z-1flex-1 flex justify-end items-end translate-x-[750px] ml-30 ">
            <img src="/images/ImageIndustriBanking1.svg" alt="Banking Chart" className="w-full max-w-lg md:max-w-xl h-auto object-contain drop-shadow-2xl" />
          </div>
        </div>
      </section>

      {/* Solusi Brilian.AI Section */}
      <section className="relative py-16 bg-gradient-to-b from-blue-900 via-black via-black to-[#162A4D] overflow-hidden">
        <div className="relative z-10 max-w-6xl mx-auto px-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 text-center">Solusi dari Brilian.AI</h2>
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className='space-y-6 '>
              <p className="text-1xl md:text-2xl font-inter font-normal text-white/90 leading-relaxed">
                Brilian.AI adalah platform AI-powered knowledge<br />
                management yang membantu tim perbankan & <br />
                multifinance menemukan informasi penting,<br />
                merangkum dokumen, dan menjawab pertanyaan<br />
                secara instan—layaknya “ChatGPT internal” yang <br />
                aman dan terkendali.
              </p>
            </div>
            <div className="flex justify-center">
              <img src="/images/ImageIndustriBanking2.svg" alt="Solusi Brilian.AI" className="w-full max-w-md h-auto object-contain scale-[2]" />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="relative py-16 bg-gradient-to-b from-[#162A4D] via-[#101A2F] to-black overflow-hidden">
        <div className="relative z-10 max-w-6xl mx-auto px-10 flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="flex-1">
            <h3 className="text-4xl md:text-5xl font-bold text-white mb-8 text-center">Benefits for Banks & Multifinance</h3>
            <ul className="space-y-6">
              {[
                "Menghemat waktu pencarian informasi & riset internal hingga 80%",
                "Mempercepat pengambilan keputusan kredit & operasional",
                "Meningkatkan konsistensi informasi antar cabang",
                "Mendukung efisiensi customer service dan complaint handling",
                "Mempercepat onboarding karyawan baru",
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-4">
                  <span className="w-4 h-4 mt-1 rounded-full bg-gradient-to-b from-[#97BDFD] to-[#1A62DC] flex-shrink-0" />
                  <span className="text-lg md:text-xl text-white/90 leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex-none w-[180px] md:w-[280px]">
            <img src="/images/ImageIndustriBanking3.svg" alt="Banking Chart" className="w-full h-auto object-contain" />
          </div>
        </div>
      </section>

      <section
        className="relative py-24 overflow-hidden flex flex-col items-center justify-center"
        style={{
          background: `#000000 url('/images/SHADOWLPBG.png') center/contain no-repeat`
        }}
      >
        {/* Title */}
        <div className="text-center mb-36">
          <h3 className="text-3xl md:text-5xl font-bold leading-snug text-white mb-4">
            Siap Transformasi Pengetahuan <br />
            Menjadi Keunggulan Kompetitif?
          </h3>
          <p className="text-lg md:text-xl text-gray-300">
            Brilian.AI bantu tim Anda mengambil keputusan
            <span className="text-blue-400 font-medium"> lebih cepat, akurat</span>, dan
            <span className="text-blue-400 font-medium"> berbasis data internal</span> yang selama ini belum tergali.
          </p>
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
            {/* Card content remains unchanged */}
            <div className="absolute left-1/2 -translate-x-20 -translate-y-10 w-auto h-20 animate-pulse delay-500 opacity-30 z-30 pointer-events-none">
              <img src="/images/Image-BintangBG.png" alt="Star" className="w-full h-full" />
            </div>

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
      </section>
    </div>
  );
}