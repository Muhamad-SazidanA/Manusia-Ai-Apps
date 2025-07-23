import React from 'react';

export default function BrilianInsurance() {
  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-black via-blue-950 text-white font-inter relative overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-b from-black via-blue-950 to-slate-900 flex items-center justify-center overflow-hidden">
        <div className="absolute z-10 top-20 w-auto h-24 animate-pulse delay-500 opacity-30 flex justify-center translate-x-[300px]">
          <img src="/images/Image-BintangBG.png" alt="Star" className="w-full h-full" />
        </div>
        <div className="relative max-w-6xl w-full mx-auto flex flex-col md:flex-row items-center justify-between px-10">
          <div className="flex-1 -translate-x-[100px]">
            <h1 className="text-4xl md:text-7xl lg:text-7xl font-inter font-semibold mb-5 leading-[1.3] pb-[10px] bg-gradient-to-b from-[#97BDFD] to-[#1A62DC] text-transparent bg-clip-text">
              Empower Your Insurance<br />
              Operations with Smart<br />
              Knowledge Access
            </h1>
            <p className="text-1xl md:text-2xl text-white/90 mb-10 font-medium max-w-lg text-left h-full w-full">
              Tingkatkan Kecepatan dan Ketepatan<br />
              Layanan Asuransi
            </p>
            <div className="flex justify-start items-center gap-4 mb-10">
              <button className="px-5 py-3 min-w-[80px] rounded-xl font-semibold text-lg bg-gradient-to-r from-blue-400 to-blue-600 text-white shadow-lg border border-blue-300 hover:scale-105 transition-all duration-200">
                Demo a Book
              </button>
            </div>
          </div>
          <div className="absolute z-1 flex-1 flex justify-end items-end translate-x-[750px] translate-y-[20px]">
            <img src="/images/ImageInsurance1.svg" alt="Banking Chart" className="w-full max-w-lg md:max-w-xl h-auto object-contain" />
          </div>
        </div>
      </section>

      {/* Solusi Brilian.AI Section */}
      <section className="relative py-16 bg-slate-900 overflow-hidden">
        <div className="relative max-w-6xl mx-auto px-10">
          <h2 className="text-4xl md:text-5xl font-semibold text-white mb-8 text-center relative z-20">Solusi dari Brilian.AI</h2>
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="space-y-6">
              <p className="text-1xl md:text-2xl font-inter font-normal text-white/90 leading-relaxed">
                Brilian.AI adalah platform AI-powered<br />
                knowledge management yang membantu tim <br />
                asuransi menemukan informasi penting, <br />
                memahami kebijakan, serta merespons <br />  
                pertanyaan secara instan dan konsisten — <br />
                seperti memiliki "asisten AI internal" yang <br />
                selalu siaga.
              </p>
            </div>
            <div className="flex justify-center ">
              <img src="/images/ImageInsurance2.svg" alt="Solusi Brilian.AI" className="w-full max-w-md h-auto object-contain scale-[2] translate-x-[200px] translate-y-[-70px]" />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="relative py-16 bg-gradient-to-b from-slate-900 via-[#101A2F] to-black overflow-hidden">
        <h3 className="relative z-20 text-4xl md:text-5xl font-semibold text-white mb-32 text-center"> Benefits for Insurance 
          <br />Companies</h3>
        <div className="max-w-6xl mx-auto px-10 flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="flex-1">
            <ul className="space-y-6 relative z-20">
              <li className="flex items-center gap-6">
                <span className="w-8 h-8 mt-1 rounded-full bg-gradient-to-b from-[#97BDFD] to-[#1A62DC] flex-shrink-0" />
                <span className="text-1xl md:text-3xl font-inter font-normal text-white/90 leading-relaxed">Percepat waktu respon klaim <br />& underwriting</span>
              </li>
              <li className="flex items-center gap-6">
                <span className="w-8 h-8 mt-1 rounded-full bg-gradient-to-b from-[#97BDFD] to-[#1A62DC] flex-shrink-0" />
                <span className="text-1xl md:text-3xl font-inter font-normal text-white/90 leading-relaxed">Konsistensi jawaban di semua<br /> touchpoint (agen, CS, tim<br /> operasional)</span>
              </li>
              <li className="flex items-center gap-6">
                <span className="w-8 h-8 mt-1 rounded-full bg-gradient-to-b from-[#97BDFD] to-[#1A62DC] flex-shrink-0" />
                <span className="text-1xl md:text-3xl font-inter font-normal text-white/90 leading-relaxed">Pengambilan keputusan lebih<br /> cepat & berbasis data</span>
              </li>
              <li className="flex items-center gap-6">
                <span className="w-8 h-8 mt-1 rounded-full bg-gradient-to-b from-[#97BDFD] to-[#1A62DC] flex-shrink-0" />
                <span className="text-1xl md:text-3xl font-inter font-normal text-white/90 leading-relaxed">Kurangi kesalahan akibat<br /> misinterpretasi dokumen</span>
              </li>
              <li className="flex items-center gap-6">
                <span className="w-8 h-8 mt-1 rounded-full bg-gradient-to-b from-[#97BDFD] to-[#1A62DC] flex-shrink-0" />
                <span className="text-1xl md:text-3xl font-inter font-normal text-white/90 leading-relaxed">Tingkatkan produktivitas &<br />kepuasan nasabah</span>
              </li>
            </ul>
          </div>
          <div className="flex-none w-[180px] md:w-[280px] relative z-10">
            <img src="/images/ImageInsurance3.svg" alt="Banking Chart" className="w-full max-w-md h-auto object-contain scale-[2] translate-x-[100px] translate-y-[-50px] mb-[100px]" />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        className="relative py-20 overflow-hidden flex flex-col items-center justify-center "
        style={{
          background: `#000000 url('/images/SHADOWLPBG.png') center/contain no-repeat`
        }}
      >
        {/* Title */}
        <div className="text-center mb-10 mt-20 ">
          <h3 className="text-3xl md:text-5xl font-semibold leading-snug text-white mb-10">
            Siap Mendefinisikan Ulang Efisiensi<br /> di Dunia Asuransi?
          </h3>
          <p className="text-2xl md:text-4xl text-white font-inter font-normal">
            Brilian.AI bantu tim asuransi Anda mengelola<br /> informasi lebih cerdas dan merespon lebih cepat.
          </p>
        </div>

        {/* Card content */}
        <div className="relative z-10 w-full flex justify-center items-center mb-20">
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
            <div className="flex-1 flex flex-col items-center md:items-end gap-6 w-full md:w-auto">
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