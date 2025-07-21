import React from 'react';

export default function Industries() {
  const industries = [
    {
      title: "Finance & Banking",
      desc: "Otomatisasi invoice, laporan keuangan, dan dokumen pajak",
      icon: "fa-landmark",
      color: "blue"
    },
    {
      title: "Healthcare",
      desc: "Manajemen rekam medis dan dokumen pasien",
      icon: "fa-heart-pulse", 
      color: "red"
    },
    {
      title: "Manufacturing",
      desc: "Otomatisasi dokumen produksi dan quality control",
      icon: "fa-industry",
      color: "green"
    },
    {
      title: "Human Resource",
      desc: "Digitalisasi CV, kontrak kerja, dan dokumen karyawan",
      icon: "fa-users",
      color: "purple"
    },
    {
      title: "Retail & FMCG",
      desc: "Manajemen inventory dan supply chain documents",
      icon: "fa-store",
      color: "orange"
    },
    {
      title: "Insurance",
      desc: "Pemrosesan klaim dan dokumen polis otomatis",
      icon: "fa-shield-halved",
      color: "teal"
    }
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 min-h-screen bg-gradient-to-b from-slate-900 via-blue-900 to-black">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Industries We Serve
          </h1>
          <p className="text-lg text-white/70 max-w-3xl mx-auto">
            Manusia.AI membantu berbagai industri meningkatkan produktivitas dan pengambilan keputusan menggunakan teknologi AI terdepan
          </p>
        </div>

        {/* Industries Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => (
            <div
              key={index}
              className="bg-slate-900/80 rounded-xl p-6 border border-blue-500/30 hover:border-blue-500/60 hover:bg-blue-900/20 transition-all duration-300"
              style={{ boxShadow: '0 0 20px 4px rgba(59,130,246,0.2)' }}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className={`w-12 h-12 rounded-lg bg-${industry.color}-500/20 flex items-center justify-center`}>
                  <i className={`fa-solid ${industry.icon} text-xl text-${industry.color}-400`}></i>
                </div>
                <h3 className="text-xl font-semibold text-white">{industry.title}</h3>
              </div>
              <p className="text-white/70">{industry.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}