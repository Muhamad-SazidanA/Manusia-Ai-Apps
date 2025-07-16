import React from 'react';
import { Link } from 'react-router-dom';
// Jika tidak ada B1.png, gunakan gambar dari public/images
// import B1 from '../assets/B1.png';

export default function Blog() {
    const blogPosts = [
        { id: 1, title: 'BLOG1', image: '/images/Image-Blog1.png' },
        { id: 2, title: 'BLOG2', image: '/images/Image-Blog2.png' },
        { id: 3, title: 'BLOG3', image: '/images/Image-Blog1.png' },
        { id: 4, title: 'BLOG4', image: '/images/Image-Blog2.png' },
        { id: 5, title: 'BLOG5', image: '/images/Image-Blog1.png' },
        { id: 6, title: 'BLOG6', image: '/images/Image-Blog2.png' },
    ];

    return (
        <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white min-h-screen">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">Step Ahead with Manusia AI Insights</h1>
                    <p className="text-xl text-gray-600">
                        Stay ahead of the curve with our curated articles on AI, IT trends, automation, and real-world case studies.
                    </p>
                    <div className="border-t border-gray-200 my-6"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {blogPosts.map((post) => (
                        <div key={post.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
                            <img
                                src={post.image}
                                alt={post.title}
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-6">
                                <h3 className="text-xl font-semibold text-gray-800 mb-2">{post.title}</h3>
                                <p className="text-gray-600 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.</p>
                                <button className="text-blue-600 font-medium hover:text-blue-800 transition-colors duration-300">
                                    Read More →
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-12 flex flex-col md:flex-row justify-between items-center gap-6">
                    <div>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">Manusia AI</h2>
                        <ul className="space-y-2">
                            <li><Link to="/" className="text-gray-600 hover:text-blue-600 transition-colors duration-300">Home</Link></li>
                            <li><Link to="/#about" className="text-gray-600 hover:text-blue-600 transition-colors duration-300">About</Link></li>
                            <li><Link to="/#products" className="text-gray-600 hover:text-blue-600 transition-colors duration-300">Products</Link></li>
                            <li><Link to="/blog" className="text-gray-600 hover:text-blue-600 transition-colors duration-300">Blog</Link></li>
                            <li><Link to="/#industries" className="text-gray-600 hover:text-blue-600 transition-colors duration-300">Industries</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}