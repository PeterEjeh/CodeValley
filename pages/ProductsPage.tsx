import React from 'react';
import { PRODUCTS } from '../constants';
import type { Product } from '../types';

const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
    const themeClasses: {[key: string]: string} = {
        green: 'border-green-500 hover:shadow-green-500/20',
        blue: 'border-blue-500 hover:shadow-blue-500/20',
        teal: 'border-teal-500 hover:shadow-teal-500/20',
        purple: 'border-purple-500 hover:shadow-purple-500/20',
        orange: 'border-orange-500 hover:shadow-orange-500/20',
    };

    const iconThemeClasses: {[key: string]: string} = {
        green: 'text-green-500',
        blue: 'text-blue-500',
        teal: 'text-teal-500',
        purple: 'text-purple-500',
        orange: 'text-orange-500',
    };

    return (
        <div className={`bg-gray-800 p-8 rounded-lg border-t-4 ${themeClasses[product.themeColor]} shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 flex flex-col`}>
            <div className="flex items-center mb-4">
                <product.icon className={`w-10 h-10 mr-4 ${iconThemeClasses[product.themeColor]}`} />
                <h3 className="text-3xl font-bold text-white">{product.name}</h3>
            </div>
            <p className="text-lg text-gray-400 mb-4">{product.description}</p>
            <p className="text-gray-300 flex-grow">{product.longDescription}</p>
            <button className="mt-6 self-start font-semibold text-green-400 hover:text-green-300 transition-colors">
                Learn More &rarr;
            </button>
        </div>
    );
};


const ProductsPage: React.FC = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen">
        {/* Header Section */}
        <section className="bg-gray-800 py-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h1 className="text-4xl md:text-5xl font-extrabold">Our Ecosystem of Solutions</h1>
                <p className="mt-4 text-xl text-gray-300">Targeted technologies for fundamental change.</p>
            </div>
        </section>

        {/* Products Grid */}
        <section className="py-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                    {PRODUCTS.map(product => (
                        <ProductCard key={product.name} product={product} />
                    ))}
                </div>
            </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-20 bg-gray-800">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-3xl font-bold text-white">Ready to Join Our Ecosystem?</h2>
                <p className="mt-4 text-lg text-gray-400">Whether you're a farmer, an investor, an SME, or an organization, there's a place for you in the Valley.</p>
                <a href="#/contact" className="mt-8 inline-block px-8 py-4 bg-green-500 text-white font-semibold rounded-lg shadow-lg hover:bg-green-600 transition-all duration-300 transform hover:scale-105">
                    Become a Partner
                </a>
            </div>
        </section>
    </div>
  );
};

export default ProductsPage;
