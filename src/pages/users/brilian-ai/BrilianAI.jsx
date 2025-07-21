import React from 'react';

export default function BrilianAI() {
    const features = [
        {
            title: "Tanya apa aja",
            desc: "Bertanya seputar bisnis, strategi, atau data perusahaan? Brilian.AI akan memberikan jawaban cerdas berdasarkan data dan tren terbaru.",
            image: "/images/Image-Tanyaapasaja.png",
        },
        {
            title: "Buatin Laporan",
            desc: "Cuma tinggal input data, AI kami langsung bantu kamu bikin laporan otomatis. Gak perlu ribet formatting!",
            image: "/images/Image-Buatlaporan.png",
        },
        {
            title: "Analisa Laporan",
            desc: "Data di tangan tapi bingung bacanya? Biarkan AI kami bantu simpulkan dan kasih insight.",
            image: "/images/Image-Analisislaporan.png",
        },
        {
            title: "Riset Market",
            desc: "Mau mulai bisnis baru atau cek peluang produk? AI kami bisa bantu cari dan analisa data pasar.",
            image: "/images/Image-Risetmarket.png",
        },
        {
            title: "Pikirin Ide",
            desc: "Lagi stuck? Tinggal lempar topik atau masalah, Brilian.AI kasih ide brilian buat kamu.",
            image: "/images/Image-Pikirinide.png",
        },
        {
            title: "Rangkum Meeting",
            desc: "Upload hasil meeting dan dapatkan rangkuman otomatis yang bisa langsung dibagikan ke tim.",
            image: "/images/Image-Rangkuminmeet.png",
        },
    ];

    return (
        <div
            className="w-full min-h-screen bg-cover bg-center text-white font-sans relative"
            style={{ backgroundImage: 'url("/images/bg.png")' }}
        >
            <div className="relative z-10 max-w-6xl mx-auto px-6 py-20">
                {/* Header */}
                <div className="text-center mb-12">
                    <img
                        src="/images/ImageBrilian1.svg"
                        alt="Brilian.AI"
                        className="mx-auto w-40 mt-6"
                    />
                    <h1 className="text-3xl font-semibold text-blue-400">Brilian.AI</h1>
                    <p className="text-lg mt-4">
                        Accelerating Decisions with AI-Powered Insight
                    </p>
                    <img
                        src="/images/asetLogoBrilian.svg"
                        alt="Logo Brilian"
                        className="mx-auto w-24 mb-4"
                    />
                </div>

                {/* Introduction */}
                <div className="relative mb-12 flex items-start gap-4">
                    <img
                        src="/images/Image-BintangBG.png"
                        alt="Star"
                        className="w-8 h-8 mt-1"
                    />
                    <div>
                        <h2 className="text-xl font-semibold mb-2">What is Brilian.AI?</h2>
                        <p className="text-sm text-gray-200">
                            Brilian.AI adalah platform cerdas yang dirancang untuk membantu kamu
                            dalam mengambil keputusan bisnis secara cepat dan tepat. Didukung
                            teknologi AI modern, Brilian.AI jadi asisten andalanmu dalam analisis data.
                        </p>
                    </div>
                </div>

                {/* Key Features */}
                <div className="text-center mb-10">
                    <h3 className="text-lg font-semibold text-blue-300">
                        Key Features<br />
                        <span className="text-white">What Makes Brilian.AI Different?</span>
                    </h3>
                </div>

                {/* Feature Cards Zig-Zag Layout */}
                <div className="space-y-16">
                    {features.map((item, i) => (
                        <div
                            key={i}
                            className={`flex flex-col md:flex-row items-center gap-8 ${
                                i % 2 !== 0 ? 'md:flex-row-reverse' : ''
                            }`}
                        >
                            <img
                                src={item.image}
                                alt={item.title}
                                className="w-full md:w-1/2 h-64 object-cover rounded-xl shadow-md"
                            />
                            <div className="md:w-1/2">
                                <h4 className="text-2xl font-bold mb-2">{item.title}</h4>
                                <p className="text-sm text-gray-300">{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Overlay for darker tone */}
            <div className="absolute inset-0 bg-black/50 z-0" />
        </div>
    );
}