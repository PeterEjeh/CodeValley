import React from 'react';
import { Link } from 'react-router-dom';

const BrokenChainIcon = () => (
    <svg width="120" height="120" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mx-auto text-green-500">
        <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.72" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.72-1.72" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <line x1="8" y1="2" x2="2" y2="8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <line x1="16" y1="22" x2="22" y2="16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    </svg>
);


const NotFoundPage: React.FC = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-900 text-white text-center">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <BrokenChainIcon />
                <h1 className="mt-8 text-4xl md:text-6xl font-extrabold text-white">404</h1>
                <p className="mt-4 text-xl md:text-2xl text-gray-300">Oops! Looks like this field is still under cultivation.</p>
                <p className="mt-2 text-gray-400">The page you're looking for doesn't exist or has been moved.</p>
                <div className="mt-10">
                    <Link 
                        to="/" 
                        className="px-8 py-4 bg-green-500 text-white font-semibold rounded-lg shadow-lg hover:bg-green-600 transition-all duration-300 transform hover:scale-105"
                    >
                        Back to Homepage
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default NotFoundPage;
