import React from 'react';

export default function BrilianAI() {
    return (
        <div
            className="w-full min-h-screen bg-cover bg-center text-white font-sans"
            style={{ backgroundImage: 'url("/images/bg.png")' }}
        >
            <div className="relative z-10 max-w-4xl mx-auto px-6 py-20">
                {/* Header */}
                <div className="text-center mb-12">
                    <h1 className="text-3xl font-semibold text-blue-400">Brilian.AI</h1>
                    <p className="text-lg mt-4">
                        Accelerating Decisions with AI-Powered Insight
                    </p>
                    <img
                        src="/images/brilianai-content.png"
                        alt="Brilian.AI Logo"
                        className="mx-auto w-40 mt-6"
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

                {/* Feature Cards */}
                <div className="space-y-10">
                    {[
                        {
                            title: "Tanya apa aja",
                            desc: "Bertanya seputar bisnis, strategi, atau data perusahaan? Brilian.AI akan memberikan jawaban cerdas berdasarkan data dan tren terbaru.",
                        },
                        {
                            title: "Buatin Laporan",
                            desc: "Cuma tinggal input data, AI kami langsung bantu kamu bikin laporan otomatis. Gak perlu ribet formatting!",
                        },
                        {
                            title: "Analisa Laporan",
                            desc: "Data di tangan tapi bingung bacanya? Biarkan AI kami bantu simpulkan dan kasih insight.",
                        },
                        {
                            title: "Riset Market",
                            desc: "Mau mulai bisnis baru atau cek peluang produk? AI kami bisa bantu cari dan analisa data pasar.",
                        },
                        {
                            title: "Pikirin Ide",
                            desc: "Lagi stuck? Tinggal lempar topik atau masalah, Brilian.AI kasih ide brilian buat kamu.",
                        },
                        {
                            title: "Rangkum Meeting",
                            desc: "Upload hasil meeting dan dapatkan rangkuman otomatis yang bisa langsung dibagikan ke tim.",
                        },
                    ].map((item, i) => (
                        <div key={i}>
                            <h4 className="text-lg font-bold">{item.title}</h4>
                            <p className="text-sm text-gray-300">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Optional overlay for darker background tone */}
            <div className="absolute inset-0 bg-black/50 z-0" />
        </div>
    );
}