import React from 'react';

export default function DemoEmail() {
    return (
        <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-blue-900 to-slate-900 px-4 py-16 md:py-24">
            <div className="max-w-6xl w-full mx-auto grid md:grid-cols-2 items-center gap-0 relative">
                {/* Contact Form */}
                <div className="relative z-10 flex flex-col justify-center">
                    <div className="bg-slate-900/80 border border-blue-500/30 rounded-2xl shadow-lg p-8 md:p-10"
                        style={{
                            boxShadow: '0 0 32px 4px rgba(72,156,255,0.25), 0 0 0 2px rgba(72,156,255,0.10) inset'
                        }}>
                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">Contact Us</h2>
                        <p className="text-white/70 text-sm mb-6">
                            Don&apos;t have time to call? Send your enquiry to the Manusia.AI team and we&apos;ll <br />get back to you quickly. If you do not receive a response, please reach out via WhatsApp.
                        </p>
                        <form className="space-y-4">
                            <div>
                                <label className="block text-white/80 text-sm mb-1">Name</label>
                                <input
                                    type="text"
                                    placeholder="Your full name"
                                    className="w-full bg-transparent border border-blue-500/30 rounded-lg px-4 py-2 text-white placeholder-white/50 focus:outline-none focus:border-blue-500 transition"
                                />
                            </div>
                            <div>
                                <label className="block text-white/80 text-sm mb-1">Email</label>
                                <input
                                    type="email"
                                    placeholder="Your email address"
                                    className="w-full bg-transparent border border-blue-500/30 rounded-lg px-4 py-2 text-white placeholder-white/50 focus:outline-none focus:border-blue-500 transition"
                                />
                            </div>
                            <div>
                                <label className="block text-white/80 text-sm mb-1">Company Name</label>
                                <input
                                    type="text"
                                    placeholder="Enter Company Name"
                                    className="w-full bg-transparent border border-blue-500/30 rounded-lg px-4 py-2 text-white placeholder-white/50 focus:outline-none focus:border-blue-500 transition"
                                />
                            </div>
                            <div>
                                <label className="block text-white/80 text-sm mb-1">Phone Number</label>
                                <input
                                    type="text"
                                    placeholder="Enter Phone Number"
                                    className="w-full bg-transparent border border-blue-500/30 rounded-lg px-4 py-2 text-white placeholder-white/50 focus:outline-none focus:border-blue-500 transition"
                                />
                            </div>
                            <button
                                type="submit"
                                className="w-full mt-2 bg-[#2196FF] hover:bg-blue-700 text-white font-semibold rounded-lg py-2 transition-all duration-200 shadow-md"
                            >
                                Submit Message
                            </button>
                        </form>
                    </div>
                </div>

                {/* Right Side Text */}
                <div className="flex flex-col justify-center items-center md:items-start px-0 md:px-10 md:pl-24 mt-10 md:mt-0">
                    <div className="absolute inset-0">
                        <img
                            src="/images/Image-BintangBG.png"
                            alt="Star"
                            className="absolute top-40 right-8 w-auto h-20 animate-pulse delay-500 opacity-30"
                        />
                    </div>
                    <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 text-center md:text-left leading-tight">
                        Bring Your Ideas to Life <br /> with Manusia.AI.
                    </h1>
                    <p className="text-white/80 text-sm md:text-base mt-2 text-center md:text-left max-w-md">
                        Reach out today — let&apos;s craft intelligent solutions that accelerate your business transformation.
                    </p>
                </div>
            </div>
        </section>
    );
}