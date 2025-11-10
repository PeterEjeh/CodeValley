import React from 'react';
import type { NavLink, TeamMember, Product, FaqItem, Testimonial, CoreValue } from './types';

// SVG Icons
export const LeafIcon = ({ className }: { className?: string }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11 20A7 7 0 0 1 4 13H2a10 10 0 0 0 10 10zM2 13a10 10 0 0 1 10-10 10 10 0 0 1 10 10h-2a8 8 0 0 0-8-8 8 8 0 0 0-8 8z"/></svg>
);
export const DollarSignIcon = ({ className }: { className?: string }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
);
export const SunIcon = ({ className }: { className?: string }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>
);
export const BookIcon = ({ className }: { className?: string }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20v2H6.5A2.5 2.5 0 0 1 4 19.5z"/><path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v2H6.5A2.5 2.5 0 0 1 4 5.5z"/></svg>
);
export const ChurchIcon = ({ className }: { className?: string }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 6.5l6 4.5v9H6v-9l6-4.5M12 6.5V3m-6 8h12"/></svg>
);
export const LightbulbIcon = ({ className }: { className?: string }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18h6v-2.5a4.5 4.5 0 0 0-4-4.3V9a2.5 2.5 0 0 0-5 0v2.2A4.5 4.5 0 0 0 5 15.5V18h4z"/><path d="M12 18v4"/><path d="M8 18h8"/><path d="M10 22h4"/></svg>
);
export const UsersIcon = ({ className }: { className?: string }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="8.5" cy="7" r="4"/><path d="M20 8v6m-3-3h6"/></svg>
);
export const GlobeIcon = ({ className }: { className?: string }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
);
export const LockIcon = ({ className }: { className?: string }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
);
export const ChevronDownIcon = ({ className }: { className?: string }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
);

// Navigation
export const NAV_LINKS: NavLink[] = [
  { name: 'Home', path: '/' },
  { name: 'About Us', path: '/about' },
  { name: 'Products', path: '/products' },
  { name: 'FAQ', path: '/faq' },
  { name: 'Testimonials', path: '/testimonials' },
  { name: 'Contact', path: '/contact' },
];

// Team Members
export const TEAM_MEMBERS: TeamMember[] = [
  { name: 'Nosakhare Obaseki', role: 'CEO & Founder', imageUrl: 'https://picsum.photos/seed/ceo/400/400', bio: 'Visionary leader driving inclusive technology for Africa.' },
  { name: 'Babafemi Ayinde', role: 'CTO', imageUrl: 'https://picsum.photos/seed/cto/400/400', bio: 'Expert architect of our robust and scalable platforms.' },
  { name: 'Jane Doe', role: 'Head of Product', imageUrl: 'https://picsum.photos/seed/product/400/400', bio: 'Strategist ensuring our solutions meet real-world needs.' },
  { name: 'John Smith', role: 'Lead Agritech Specialist', imageUrl: 'https://picsum.photos/seed/agritech/400/400', bio: 'Bridging the gap between technology and agriculture.' },
];

// Products
export const PRODUCTS: Product[] = [
  { name: 'PoliGrain', description: 'Smart Agriculture for Every Farmer.', longDescription: 'PoliGrain empowers farmers with data-driven insights, access to crowdfunded financing, and direct market linkages. Our platform uses IoT alerts and advanced logistics to optimize the entire agricultural value chain.', themeColor: 'green', icon: LeafIcon },
  { name: 'GreenBloc', description: 'Blockchain for Sustainable Impact.', longDescription: 'GreenBloc provides a transparent and secure platform for tokenized fundraising, ESG tracking, and smart contracts. We enable organizations to prove their impact and connect with conscious investors.', themeColor: 'blue', icon: LockIcon },
  { name: 'GreenValley', description: 'Measure, Manage, and Monetize Your Carbon Footprint.', longDescription: 'GreenValley is a comprehensive tool for businesses to measure their carbon emissions, implement reduction strategies, and participate in the carbon credit market, turning sustainability into a valuable asset.', themeColor: 'teal', icon: GlobeIcon },
  { name: 'Church Collection', description: 'Faith Meets Financial Transparency.', longDescription: 'A simple, elegant, and secure platform for faith-based organizations to manage tithes, offerings, and donations. Provides clear analytics and reporting to foster trust and accountability.', themeColor: 'purple', icon: ChurchIcon },
  { name: 'GreenVend', description: 'Finance and Procurement for SMEs.', longDescription: 'GreenVend streamlines finance and procurement for small and medium-sized enterprises, integrating ESG metrics to help businesses grow sustainably and responsibly.', themeColor: 'orange', icon: DollarSignIcon },
];

// Core Values
export const CORE_VALUES: CoreValue[] = [
    { name: 'Innovation', description: 'We relentlessly pursue new ideas to solve complex challenges.', icon: LightbulbIcon },
    { name: 'Inclusion', description: 'Our solutions are designed for everyone, leaving no one behind.', icon: UsersIcon },
    { name: 'Transparency', description: 'We build trust through open, honest, and verifiable processes.', icon: LockIcon },
    { name: 'Impact', description: 'Our success is measured by the positive change we create.', icon: GlobeIcon },
];

// FAQs
export const FAQ_DATA: FaqItem[] = [
  { category: 'General', question: 'What makes CodeValley different from other African tech startups?', answer: 'CodeValley focuses on building a deeply interconnected ecosystem of solutions for underserved sectors. Our use of blockchain for transparency and our focus on grassroots impact sets us apart.' },
  { category: 'General', question: 'Which countries do you operate in?', answer: 'We are currently launching in Nigeria and Ghana, with plans to expand to 6 countries across West and East Africa within the next three years.' },
  { category: 'Product Features', question: 'Are your platforms blockchain-secured?', answer: 'Yes, key platforms like GreenBloc and PoliGrain leverage blockchain technology to ensure data integrity, transparency in transactions, and security for all stakeholders.' },
  { category: 'Product Features', question: 'How does PoliGrain help farmers?', answer: 'PoliGrain provides farmers with access to credit, real-time data on soil and weather conditions via IoT, and connects them directly to buyers, eliminating middlemen and increasing their profits.' },
  { category: 'Partnerships', question: 'How can NGOs or faith-based institutions integrate your tools?', answer: 'We offer tailored onboarding processes. For instance, faith-based institutions can easily set up Church Collection within a day. NGOs can partner with us on GreenBloc projects to track and showcase their impact. Please reach out via our contact form to discuss specifics.' },
  { category: 'Pricing', question: 'What is the pricing model for your services?', answer: 'Our pricing varies by product. Some, like PoliGrain, operate on a commission model, while others like GreenValley are subscription-based. We also offer customized enterprise solutions. Contact our sales team for a detailed quote.' },
  { category: 'Support', question: 'What kind of support do you offer?', answer: 'We offer 24/7 technical support through email and a dedicated helpdesk. Enterprise clients receive a dedicated account manager and specialized training sessions.' },
];

// Testimonials
export const TESTIMONIALS: Testimonial[] = [
  { name: 'Kofi Mensah', role: 'Farmer, Ghana', quote: 'PoliGrain changed everything. I got funding for my seeds, and my harvest was sold before it even left the farm. For the first time, I feel secure.' },
  { name: 'Pastor John Adebayo', role: 'Church Leader, Lagos', quote: 'Church Collection brought incredible transparency to our finances. Our congregation\'s trust has grown because they can see exactly how their contributions are used.' },
  { name: 'Amina Yusuf', role: 'SME Owner, Nigeria', quote: 'With GreenVend, managing my suppliers and getting loans has become so much easier. The ESG badge has even attracted new customers who value sustainability.' },
  { name: 'Dr. Elizabeth Chen', role: 'Impact Investor', quote: 'CodeValley\'s GreenBloc is a game-changer for ESG investing in Africa. The level of transparency and data they provide is unparalleled.' },
];
