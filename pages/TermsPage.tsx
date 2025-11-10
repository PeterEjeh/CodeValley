import React from 'react';

const termsSections = [
    { id: 'user-rights', title: 'User Rights' },
    { id: 'data-privacy', title: 'Data Privacy' },
    { id: 'platform-liability', title: 'Platform Liability' },
    { id: 'payment-terms', title: 'Payment Terms' },
    { id: 'cookies', title: 'Cookies Policy' },
    { id: 'security', title: 'Security' },
];

const TermsPage: React.FC = () => {
    return (
        <div className="bg-gray-900 text-white min-h-screen">
            <header className="py-12 bg-gray-800 text-center">
                <h1 className="text-4xl font-extrabold">Terms and Conditions</h1>
                <p className="text-lg text-gray-400 mt-2">Last Updated: {new Date().toLocaleDateString()}</p>
            </header>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="flex flex-col lg:flex-row gap-12">
                    {/* Sticky Sidebar Nav */}
                    <aside className="lg:w-1/4">
                        <div className="sticky top-24">
                            <h2 className="text-xl font-bold mb-4">Table of Contents</h2>
                            <ul className="space-y-2">
                                {termsSections.map(section => (
                                    <li key={section.id}>
                                        <a href={`#${section.id}`} className="text-gray-400 hover:text-green-400 transition-colors">
                                            {section.title}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </aside>

                    {/* Main Content */}
                    <main className="lg:w-3/4">
                        <div className="prose prose-invert prose-lg max-w-none text-gray-300 prose-headings:text-white prose-a:text-green-400">
                             <p>Welcome to CodeValley. These terms and conditions outline the rules and regulations for the use of CodeValley's Website and services.</p>

                            <section id="user-rights">
                                <h2>1. User Rights</h2>
                                <p>You are granted a limited license to access and use our services for personal and commercial use, subject to these Terms. You agree not to misuse the services or help anyone else to do so.</p>
                            </section>

                            <section id="data-privacy">
                                <h2>2. Data Privacy</h2>
                                <p>Our Privacy Policy, which is available on our website, explains how we collect, use, and protect your personal data. By using our services, you agree to the terms of the Privacy Policy.</p>
                            </section>

                            <section id="platform-liability">
                                <h2>3. Platform Liability</h2>
                                <p>CodeValley provides its services "as is." We do not make any specific promises about the services. For example, we don’t make any commitments about the content within the services, the specific functions of the services, or their reliability, availability, or ability to meet your needs.</p>
                            </section>

                            <section id="payment-terms">
                                <h2>4. Payment Terms</h2>
                                <p>For services that require payment, you agree to provide us with accurate and complete billing information. You agree to pay all charges incurred by you at the prices in effect when such charges are incurred.</p>
                            </section>
                            
                            <section id="cookies">
                                <h2>5. Cookies Policy</h2>
                                <p>We employ the use of cookies. By accessing CodeValley, you agreed to use cookies in agreement with the CodeValley's Privacy Policy. Most interactive websites use cookies to let us retrieve the user’s details for each visit.</p>
                            </section>
                            
                            <section id="security">
                                <h2>6. Security</h2>
                                <p>We are committed to ensuring that your information is secure. In order to prevent unauthorized access or disclosure, we have put in place suitable physical, electronic and managerial procedures to safeguard and secure the information we collect online.</p>
                            </section>
                        </div>
                    </main>
                </div>
            </div>
        </div>
    );
};

export default TermsPage;
