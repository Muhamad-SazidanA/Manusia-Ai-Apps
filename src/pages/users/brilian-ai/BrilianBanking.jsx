import React from 'react';

export default function BrilianBanking() {
  return (
    <div className="bg-gradient-to-b from-[#040011] to-[#06082B] text-white min-h-screen font-sans">
      {/* Section 1 - Header */}
      <section className="px-6 py-12 text-center">
        <h1 className="text-2xl md:text-4xl font-bold mb-4 leading-tight">
          Smarter Decision-Making <br /> Banking & Multifinance
        </h1>
        <p className="text-base md:text-lg mb-6">
          Ubah Data Tak Terstruktur Jadi <br className="md:hidden" />
          Keputusan yang Cerdas
        </p>
        <button type="button" className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold shadow-lg">
          Book a demo
        </button>
      </section>

      {/* Section 2 - Solusi Brilian */}
      <section className="px-6 py-10 text-center max-w-3xl mx-auto">
        <h2 className="text-xl md:text-2xl font-semibold mb-4">Solusi dari Brilian.AI</h2>
        <p className="text-gray-300">
          Brilian.AI adalah platform AI-powered knowledge management yang membantu tim perbankan & multifinance menemukan informasi penting, mengambil keputusan, dan merespons pertanyaan secara instan—layaknya "ChatGPT internal" yang aman & andal.
        </p>
      </section>

      {/* Section 3 - Benefit List */}
      <section className="px-6 py-10 bg-[#0B0E2D]">
        <h3 className="text-xl md:text-2xl font-semibold text-center mb-8">Benefits for Banks & Multifinance</h3>
        <ul className="max-w-2xl mx-auto space-y-4 list-disc list-inside text-gray-200">
          <li>Menghemat waktu pencarian informasi & riset internal hingga 80%</li>
          <li>Mempercepat pengambilan keputusan kredit & operasional</li>
          <li>Meningkatkan konsistensi informasi antar cabang</li>
          <li>Mendukung efisiensi customer service dan complaint handling</li>
          <li>Mempercepat onboarding karyawan baru</li>
        </ul>
      </section>

      {/* Section 4 - Call to Action */}
      <section className="px-6 py-10 text-center">
        <h3 className="text-xl md:text-2xl font-semibold mb-4">
          Siap Transformasi Pengetahuan Menjadi Keunggulan Kompetitif?
        </h3>
        <p className="text-gray-300 mb-6">
          Brilian.AI bantu tim Anda mengambil keputusan lebih cepat, akurat, dan berbasis data internal yang selama ini belum tergali.
        </p>
        <button type="button" className="bg-gradient-to-r from-blue-500 to-purple-600 hover:opacity-90 text-white px-6 py-3 rounded-xl font-semibold shadow-xl">
          Get started today!
        </button>
        <p className="text-sm mt-2 text-gray-400">Siap Mempercepat Akses Pengetahuan Anda?</p>
      </section>

      {/* Footer */}
      <footer className="bg-[#030416] py-6 text-center text-sm text-gray-500">
        <p>© {new Date().getFullYear()} Manusia.AI · Product · Work · Blog · Pricing</p>
        <div className="mt-2 space-x-4">
          <a href="#" className="hover:underline" rel="noopener noreferrer" target="_blank">Instagram</a>
          <a href="#" className="hover:underline" rel="noopener noreferrer" target="_blank">LinkedIn</a>
        </div>
      </footer>
    </div>
  );
}