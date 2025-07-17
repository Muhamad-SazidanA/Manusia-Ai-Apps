import React, { useState } from 'react';

export default function RangkumAI() {
    const [inputText, setInputText] = useState('');
    const [summary, setSummary] = useState('');

    const handleSummarize = () => {
        // Simulasi ringkasan
        if (!inputText.trim()) return;
        setSummary('📌 Ini adalah ringkasan otomatis dari teks yang kamu masukkan...');
    };

    return (
        <div className="min-h-screen bg-gray-900 text-white px-6 py-16 font-sans">
            <div className="max-w-3xl mx-auto">
                {/* Header */}
                <h1 className="text-4xl font-bold mb-4 text-center">Rangkum Meeting dengan AI</h1>
                <p className="text-gray-300 mb-10 text-center">
                    Upload file atau paste teks hasil rapatmu. Kami bantu rangkum otomatis!
                </p>

                {/* Textarea Input */}
                <textarea
                    rows={8}
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                    placeholder="Tempel hasil meeting di sini..."
                    className="w-full p-4 rounded-lg bg-gray-800 text-white border border-gray-600 mb-4"
                />

                {/* Tombol Rangkum */}
                <button
                    onClick={handleSummarize}
                    className="bg-blue-600 hover:bg-blue-700 font-semibold px-6 py-3 rounded-full"
                >
                    Rangkum Sekarang
                </button>

                {/* Hasil Ringkasan */}
                {summary && (
                    <div className="mt-10 bg-gray-800 p-6 rounded-lg border border-gray-600">
                        <h2 className="text-xl font-semibold mb-2">Hasil Ringkasan:</h2>
                        <p className="text-gray-200">{summary}</p>
                    </div>
                )}
            </div>
        </div>
    );
}