import React from 'react';

export default function RangkumAI() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-[#0B0F2F] to-[#010314] text-white px-6 py-20 font-sans">
            <div className="max-w-4xl mx-auto text-center">

                {/* Judul & Subjudul dengan gambar bintang */}
                <div className="flex justify-center items-center gap-3 mb-4">
                    <h1 className="text-5xl font-bold text-blue-400">Rangkum.AI</h1>
                    <img src="/images/Image-BintangBG.png" alt="Bintang" className="w-12 h-12" />
                </div>

                <p className="text-gray-300 text-lg mb-4">
                    Intelligent Document Processing & Smart OCR Platform
                </p>

                {/* Tombol */}
                <button className="mt-4 bg-blue-600 hover:bg-blue-700 transition px-6 py-2 text-sm rounded-full font-semibold">
                    Book a demo
                </button>

                {/* Deskripsi */}
                <div className="mt-16 text-left">
                    <h2 className="text-3xl font-bold mb-4 text-white">What is Rangkum.AI?</h2>
                    <p className="text-gray-300 text-lg leading-relaxed">
                        Rangkum.AI adalah platform Intelligent Document Processing (IDP) berbasis AI yang membantu organisasi mengotomatiasi ekstraksi, pemrosesan, dan peringkasan dokumen, dari PDF, formulir, hingga laporan kompleks.
                    </p>
                </div>
            </div>

            {/* What Makes Powerful */}
            <div className="max-w-4xl mx-auto text-center mt-32">
                <h2 className="text-2xl font-semibold mb-10">What Makes Rangkum.AI Powerful?</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="border border-green-500 rounded-xl p-6 h-48 flex items-center justify-center text-lg text-green-300">
                        [Gambar Placeholder] Fitur Pencarian & Tampilan Dokumen
                    </div>
                    <div className="border border-orange-500 rounded-xl p-6 h-48 flex items-center justify-center text-lg text-orange-300">
                        [Gambar Placeholder] Fitur Otomatisasi & Proses Dokumen
                    </div>
                </div>
            </div>

            {/* Industries We Serve */}
            <div className="max-w-5xl mx-auto text-center mt-32">
                <h2 className="text-2xl font-semibold mb-10">Industries We Serve<br />Use Cases</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-sm">
                    <div className="bg-[#0C1F3F] p-4 rounded-xl border border-blue-500 text-blue-300">
                        <strong>Finance</strong>
                        <p className="mt-2 text-gray-300">Otomatisasi invoice, laporan keuangan, dan dokumen pajak.</p>
                    </div>
                    <div className="bg-[#0C1F3F] p-4 rounded-xl border border-green-500 text-green-300">
                        <strong>Purchasing</strong>
                        <p className="mt-2 text-gray-300">Ekstrak PO, delivery note, dan invoice secara cepat.</p>
                    </div>
                    <div className="bg-[#1D1233] p-4 rounded-xl border border-purple-500 text-purple-300">
                        <strong>Risk</strong>
                        <p className="mt-2 text-gray-300">Analisis dokumen hukum dan compliance secara otomatis.</p>
                    </div>
                    <div className="bg-[#19194A] p-4 rounded-xl border border-indigo-500 text-indigo-300">
                        <strong>Manufacture</strong>
                        <p className="mt-2 text-gray-300">Otomatisasi dokumen produksi, QC, dan laporan operasional.</p>
                    </div>
                    <div className="bg-[#2B1620] p-4 rounded-xl border border-red-500 text-red-300">
                        <strong>Human Resource</strong>
                        <p className="mt-2 text-gray-300">Ringkas CV, formulir lamaran, dan kontrak kerja.</p>
                    </div>
                    <div className="bg-[#0C1F3F] p-4 rounded-xl border border-blue-500 text-blue-300">
                        <strong>Others</strong>
                        <p className="mt-2 text-gray-300">Gunakan Rangkum.AI untuk berbagai jenis dokumen lainnya.</p>
                    </div>
                </div>
            </div>

            {/* CTA Get Started Section */}
            <div className="max-w-4xl mx-auto mt-32 px-6">
                <div className="bg-[#0B0F2F] border border-blue-800 rounded-2xl p-8 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">

                    {/* Teks */}
                    <div>
                        <h2 className="text-xl md:text-2xl font-bold text-white mb-1">
                            Get started today!
                        </h2>
                        <p className="text-gray-300 text-base">
                            Siap Mempercepat Akses Pengetahuan Anda?
                        </p>
                    </div>

                    {/* Badge + Tombol */}
                    <div className="flex flex-col md:flex-row items-center gap-3">
                        {/* Badge Info */}
                        <div className="bg-gray-800 text-sm text-white px-4 py-1 rounded-full border border-gray-600">
                            🆕 New: Our AI integration just landed
                        </div>

                        {/* Tombol Aksi */}
                        <div className="flex gap-2 mt-2 md:mt-0">
                            <button className="bg-blue-600 hover:bg-blue-700 transition px-5 py-2 rounded-full text-sm font-semibold text-white">
                                Get Started
                            </button>
                            <button className="bg-transparent hover:bg-blue-900 border border-blue-600 text-blue-400 px-5 py-2 rounded-full text-sm font-semibold transition">
                                Book a demo
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    );
}