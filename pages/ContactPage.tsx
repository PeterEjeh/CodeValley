import React, { useState } from 'react';

const ContactPage: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const [status, setStatus] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prevState => ({ ...prevState, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus('Sending...');
        // Simulate form submission
        setTimeout(() => {
            setStatus(`Thank you, ${formData.name}! Your message has been sent.`);
            setFormData({ name: '', email: '', subject: '', message: '' });
        }, 1500);
    };

    return (
        <div className="bg-gray-900 text-white min-h-screen">
            <section className="py-20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h1 className="text-4xl md:text-5xl font-extrabold">Get in Touch</h1>
                        <p className="mt-4 text-xl text-gray-300">We’d love to hear from you. Let’s build the future together.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 bg-gray-800 p-8 rounded-lg shadow-2xl">
                        {/* Left Column: Info and Map */}
                        <div>
                            <h2 className="text-2xl font-bold text-white mb-4">Contact Information</h2>
                            <p className="text-gray-400 mb-6">Have a question, a proposal, or just want to say hello? Reach out to us.</p>
                            <ul className="space-y-4 text-gray-300">
                                <li className="flex items-center">
                                    <svg className="w-6 h-6 mr-3 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                                    <span>Lagos, Nigeria HQ</span>
                                </li>
                                <li className="flex items-center">
                                    <svg className="w-6 h-6 mr-3 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                                    <a href="mailto:CodeValley@gmail.com" className="hover:text-green-400">CodeValley@gmail.com</a>
                                </li>
                                <li className="flex items-center">
                                    <svg className="w-6 h-6 mr-3 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                                    <a href="tel:+2348083863526" className="hover:text-green-400">+234 808 386 3526</a>
                                </li>
                            </ul>
                            <div className="mt-8">
                                <img src="https://picsum.photos/seed/map/600/400" alt="Map of Lagos HQ" className="rounded-lg shadow-lg w-full h-64 object-cover" />
                            </div>
                        </div>

                        {/* Right Column: Form */}
                        <div>
                             <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-300">Full Name</label>
                                    <input type="text" name="name" id="name" required value={formData.name} onChange={handleChange} className="mt-1 block w-full bg-gray-700 border-gray-600 rounded-md shadow-sm py-3 px-4 text-white focus:outline-none focus:ring-green-500 focus:border-green-500"/>
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-300">Email Address</label>
                                    <input type="email" name="email" id="email" required value={formData.email} onChange={handleChange} className="mt-1 block w-full bg-gray-700 border-gray-600 rounded-md shadow-sm py-3 px-4 text-white focus:outline-none focus:ring-green-500 focus:border-green-500"/>
                                </div>
                                <div>
                                    <label htmlFor="subject" className="block text-sm font-medium text-gray-300">Subject</label>
                                    <select id="subject" name="subject" required value={formData.subject} onChange={handleChange} className="mt-1 block w-full bg-gray-700 border-gray-600 rounded-md shadow-sm py-3 px-4 text-white focus:outline-none focus:ring-green-500 focus:border-green-500">
                                        <option value="" disabled>Select a subject</option>
                                        <option>Partnership Inquiry</option>
                                        <option>Investment Opportunity</option>
                                        <option>Product Question</option>
                                        <option>General Inquiry</option>
                                    </select>
                                </div>
                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-300">Message</label>
                                    <textarea id="message" name="message" rows={5} required value={formData.message} onChange={handleChange} className="mt-1 block w-full bg-gray-700 border-gray-600 rounded-md shadow-sm py-3 px-4 text-white focus:outline-none focus:ring-green-500 focus:border-green-500"></textarea>
                                </div>
                                <div>
                                    <button type="submit" className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-lg font-medium text-white bg-green-500 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-colors">
                                        Send Message
                                    </button>
                                </div>
                                {status && <p className="text-center text-green-400">{status}</p>}
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ContactPage;
