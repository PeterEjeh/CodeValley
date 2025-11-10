import React, { useState, useEffect, useCallback } from 'react';
import { TESTIMONIALS } from '../constants';

const TestimonialsPage: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = useCallback(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % TESTIMONIALS.length);
    }, []);

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
    };

    useEffect(() => {
        const slideInterval = setInterval(nextSlide, 5000);
        return () => clearInterval(slideInterval);
    }, [nextSlide]);

    return (
        <div className="bg-gray-900 text-white min-h-screen">
            {/* Header */}
            <div className="relative py-32 text-center bg-gray-800 overflow-hidden">
                 <div className="absolute inset-0 opacity-10" style={{backgroundImage: "url('/african-patterns.svg')"}}></div>
                 <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
                    <h1 className="text-4xl md:text-5xl font-extrabold">Voices of Impact</h1>
                    <p className="mt-4 text-xl text-gray-300">Hear from the people we're proud to partner with and serve.</p>
                </div>
            </div>

            {/* Carousel Section */}
            <section className="py-20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
                    <div className="relative w-full max-w-4xl mx-auto h-80 flex items-center justify-center">
                        <div className="overflow-hidden w-full">
                            <div
                                className="flex transition-transform duration-500 ease-in-out"
                                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                            >
                                {TESTIMONIALS.map((testimonial, index) => (
                                    <div key={index} className="flex-shrink-0 w-full text-center px-8">
                                        <blockquote className="text-2xl md:text-3xl font-light italic text-gray-200">
                                            "{testimonial.quote}"
                                        </blockquote>
                                        <cite className="block mt-6 not-italic">
                                            <span className="font-bold text-white text-lg">{testimonial.name}</span>
                                            <span className="block text-green-400">{testimonial.role}</span>
                                        </cite>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Carousel Controls */}
                        <button onClick={prevSlide} className="absolute left-0 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
                        </button>
                        <button onClick={nextSlide} className="absolute right-0 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
                        </button>
                    </div>

                    {/* Dots */}
                    <div className="flex justify-center mt-8 space-x-2">
                        {TESTIMONIALS.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentIndex(index)}
                                className={`w-3 h-3 rounded-full transition-colors ${currentIndex === index ? 'bg-green-500' : 'bg-gray-600 hover:bg-gray-500'}`}
                            ></button>
                        ))}
                    </div>
                </div>
            </section>
            
            <div className="py-16 text-center border-t border-gray-800">
                 <p className="text-xl text-gray-400">"Together, we’re shaping a transparent future."</p>
            </div>
        </div>
    );
};

export default TestimonialsPage;
