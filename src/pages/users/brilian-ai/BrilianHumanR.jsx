import React from 'react';

export default function BrilianHumanR() {
  return (
    <div className="relative bg-gradient-to-b from-[#040011] to-[#06082B] text-white min-h-screen font-sans overflow-hidden">
      {/* Top-right decorative image */}
      <img
        src="/images/ImageHR1.svg"
        alt="Decor 1"
        className="absolute top-0 right-0 w-[300px] md:w-[400px] opacity-80 pointer-events-none z-0"
      />



      {/* Header section */}
      <section className="relative z-10 px-6 py-20 text-left">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-inter font-semibold mb-5 leading-[1.3] pb-[10px] bg-gradient-to-b from-[#97BDFD] to-[#1A62DC] text-transparent bg-clip-text">
          Transform the Way HR   <br /> Teams Manage & Share  <br /> Knowledge
        </h1>
        <p className="text-base md:text-lg mb-6">
          Permudah Akses Informasi & Tingkatkan <br />
Efisiensi Tim HR         </p>
        <button className="flex justify-center items-center h-10 px-10 text-white bg-blue-600/20 border border-blue-500/30 rounded-md mb-12 hover:bg-blue-600/30 hover:border-blue-500/60 hover:shadow-md hover:scale-105 transition-all duration-200 ease-in-out cursor-pointer font-inter font-light mt-12">
          Book a demo
        </button>
      </section>

      {/* Solusi Brilian.AI */}
      <section className="bg-[#0B0E2D] px-6 py-16">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-semibold text-white mb-10">
            Solusi dari Brilian.AI
          </h2>

          <div className="flex flex-col md:flex-row items-center justify-center gap-10">
            <div className="text-white max-w-xl text-center md:text-left">
              <p className="text-gray-300 leading-relaxed">
                Brilian.AI adalah platform AI-powered knowledge management yang membantu tim HR menyimpan, mengelola, dan membagikan informasi internal secara cerdas. Karyawan cukup “tanya apa aja”, dan AI akan menjawab langsung dari kebijakan atau dokumen resmi perusahaan — seperti asisten HR digital 24/7.              </p>
            </div>
            <div className="flex-shrink-0">
              <img src="/images/ImageHR2.svg" alt="Solusi Brilian.AI" className="w-48 md:w-60" />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="relative px-6 py-16 bg-[#0B0E2D]">
        <div className="relative z-10 max-w-6xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-12">
          <div className="flex-1 flex flex-col justify-center h-full">
            <div className="mb-10">
              <h3 className="text-2xl md:text-3xl font-semibold text-white text-center">
Benefits for HR & Employees              </h3>
            </div>

            <ul className="space-y-6">
              {[
                "Percepat akses ke informasi klinis & operasional",
                "Kurangi kesalahan akibat miskomunikasi prosedur",
                "Dukung akurasi & efisiensi pelayanan pasien",
                "Mempermudah pelatihan staf baru",
                "Meningkatkan kepatuhan terhadap regulasi",
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-4">
                  <span className="w-4 h-4 mt-1 rounded-full bg-gradient-to-b from-[#97BDFD] to-[#1A62DC] flex-shrink-0" />
                  <span className="text-white text-lg md:text-xl leading-relaxed max-w-md">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex-none w-[180px] md:w-[280px]">
            <img src="/images/ImageHR3.svg" alt="Banking Chart" className="w-full h-auto" />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-16 text-center bg-black text-white relative">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl md:text-4xl font-semibold leading-snug mb-6">
            Ubah HR Anda Jadi Lebih Cerdas, <br />
            Cepat, dan Kolaboratif 
          </h3>

          <p className="text-lg text-gray-300 mb-12">
            Brilian.AI bantu tim HR membagikan informasi penting tanpa hambatan, 24/7.          </p>

          <div className="bg-[#0B122E] border border-blue-500/40 rounded-2xl px-6 py-8 shadow-xl max-w-2xl mx-auto">
            <div className="flex justify-center mb-3">
              <span className="bg-gradient-to-r from-blue-600 to-purple-500 text-xs text-white font-medium px-3 py-1 rounded-full shadow">
                🆕 New: Our AI integration just landed
              </span>
            </div>

            <h4 className="text-xl font-semibold mb-1">Get started today!</h4>
            <p className="text-gray-400 text-sm mb-6">Siap Mempercepat Akses Pengetahuan Anda?</p>

            <div className="flex justify-center gap-4">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold">
                Get Started
              </button>
              <button className="bg-white text-black px-6 py-2 rounded-lg font-semibold hover:bg-gray-200">
                Book a demo
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#030416] py-6 text-center text-sm text-gray-500">
        <p>© {new Date().getFullYear()} Manusia.AI · Product · Work · Blog · Pricing</p>
        <div className="mt-2 space-x-4">
          <a href="#" className="hover:underline" rel="noopener noreferrer" target="_blank">
            Instagram
          </a>
          <a href="#" className="hover:underline" rel="noopener noreferrer" target="_blank">
            LinkedIn
          </a>
        </div>
      </footer>
    </div>
  );
}