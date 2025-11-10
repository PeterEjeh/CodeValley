import React, { useState } from 'react';
import { FAQ_DATA, ChevronDownIcon } from '../constants';
import type { FaqItem } from '../types';

const AccordionItem: React.FC<{ item: FaqItem }> = ({ item }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border-b border-gray-700">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex justify-between items-center text-left py-6 px-4 hover:bg-gray-800 transition-colors"
            >
                <span className="text-lg font-semibold text-white">{item.question}</span>
                <ChevronDownIcon className={`w-6 h-6 text-green-400 transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
            </button>
            <div
                className={`grid transition-all duration-500 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
            >
                <div className="overflow-hidden">
                    <div className="p-6 text-gray-300">
                        {item.answer}
                    </div>
                </div>
            </div>
        </div>
    );
};

const FaqPage: React.FC = () => {
    const [activeCategory, setActiveCategory] = useState<'All' | FaqItem['category']>('All');
    const categories: ('All' | FaqItem['category'])[] = ['All', 'General', 'Product Features', 'Partnerships', 'Pricing', 'Support'];

    const filteredFaqs = activeCategory === 'All'
        ? FAQ_DATA
        : FAQ_DATA.filter(faq => faq.category === activeCategory);

    return (
        <div className="bg-gray-900 text-white min-h-screen">
            {/* Header */}
            <section className="bg-gray-800 py-20 text-center">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <h1 className="text-4xl md:text-5xl font-extrabold">Frequently Asked Questions</h1>
                    <p className="mt-4 text-xl text-gray-300">Answers to your most common questions about CodeValley.</p>
                </div>
            </section>

            {/* FAQ Content */}
            <section className="py-20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Category Filters */}
                    <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-12">
                        {categories.map(category => (
                            <button
                                key={category}
                                onClick={() => setActiveCategory(category)}
                                className={`px-4 py-2 rounded-full font-semibold transition-colors ${
                                    activeCategory === category 
                                    ? 'bg-green-500 text-white' 
                                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                                }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>

                    {/* Accordion */}
                    <div className="max-w-4xl mx-auto bg-gray-900 rounded-lg shadow-xl overflow-hidden">
                        {filteredFaqs.map((faq, index) => (
                            <AccordionItem key={index} item={faq} />
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default FaqPage;
