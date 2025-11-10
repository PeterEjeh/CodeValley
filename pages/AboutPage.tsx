import React from 'react';
import { TEAM_MEMBERS, CORE_VALUES } from '../constants';
import type { TeamMember, CoreValue } from '../types';

const TeamCard: React.FC<{ member: TeamMember }> = ({ member }) => (
    <div className="bg-gray-800 p-6 rounded-lg text-center transform hover:-translate-y-2 transition-transform duration-300">
        <img src={member.imageUrl} alt={member.name} className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-gray-700"/>
        <h3 className="text-xl font-bold text-white">{member.name}</h3>
        <p className="text-green-400 mb-2">{member.role}</p>
        <p className="text-gray-400">{member.bio}</p>
    </div>
);

const ValueCard: React.FC<{ value: CoreValue }> = ({ value }) => (
    <div className="flex items-start space-x-4">
        <div className="flex-shrink-0">
            <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center">
                <value.icon className="w-6 h-6 text-green-400" />
            </div>
        </div>
        <div>
            <h4 className="text-xl font-bold text-white">{value.name}</h4>
            <p className="text-gray-400">{value.description}</p>
        </div>
    </div>
);

const AboutPage: React.FC = () => {
    return (
        <div className="bg-gray-900 text-white">
            {/* Intro Banner */}
            <div className="relative bg-gray-800 py-32 text-center">
                <div className="absolute inset-0 bg-cover bg-center opacity-10" style={{backgroundImage: "url('https://picsum.photos/seed/landscape/1600/800')"}}></div>
                <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
                    <h1 className="text-4xl md:text-6xl font-extrabold">The Future of Innovation is Inclusive.</h1>
                    <p className="mt-4 text-xl text-gray-300">We are CodeValley. We build for impact.</p>
                </div>
            </div>

            {/* Our Mission */}
            <section className="py-20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-4xl">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Mission</h2>
                    <p className="text-xl text-gray-300">
                        "To build smart, inclusive, and transparent technologies that solve real African challenges, empowering communities and fostering sustainable growth from the ground up."
                    </p>
                </div>
            </section>

            {/* Our Story */}
            <section className="py-20 bg-gray-800">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold">Our Story</h2>
                        <p className="mt-4 text-lg text-gray-400">From a spark of an idea to a continent-wide vision.</p>
                    </div>
                    <div className="max-w-3xl mx-auto space-y-8 relative before:absolute before:inset-0 before:ml-5 before:h-full before:w-0.5 before:bg-gray-700 md:before:mx-auto md:before:translate-x-0">
                        {/* Timeline Item 1 */}
                        <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                            <div className="flex items-center justify-center w-10 h-10 rounded-full border-2 border-green-400 bg-gray-900 text-green-400 group-odd:order-1 group-odd:ml-auto group-even:mr-auto">2020</div>
                            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-gray-900 p-4 rounded-lg shadow-lg">
                                <h3 className="font-bold text-lg">The "Eureka" Moment</h3>
                                <p className="text-sm text-gray-400">Our founder witnessed the struggles of smallholder farmers and envisioned a tech-driven solution to bridge gaps in finance, data, and market access.</p>
                            </div>
                        </div>
                         {/* Timeline Item 2 */}
                        <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                            <div className="flex items-center justify-center w-10 h-10 rounded-full border-2 border-green-400 bg-gray-900 text-green-400 group-odd:order-1 group-odd:ml-auto group-even:mr-auto">2021</div>
                            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-gray-900 p-4 rounded-lg shadow-lg">
                                <h3 className="font-bold text-lg">Formation & First Lines of Code</h3>
                                <p className="text-sm text-gray-400">CodeValley was officially founded. The core team assembled, and development on PoliGrain, our flagship agritech platform, began.</p>
                            </div>
                        </div>
                         {/* Timeline Item 3 */}
                        <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                            <div className="flex items-center justify-center w-10 h-10 rounded-full border-2 border-green-400 bg-gray-900 text-green-400 group-odd:order-1 group-odd:ml-auto group-even:mr-auto">2023</div>
                            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-gray-900 p-4 rounded-lg shadow-lg">
                                <h3 className="font-bold text-lg">Ecosystem Expansion</h3>
                                <p className="text-sm text-gray-400">Recognizing interconnected challenges, we expanded our vision to include Fintech (GreenBloc) and ClimateTech (GreenValley), creating a holistic ecosystem for sustainable development.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
            {/* Core Values */}
            <section className="py-20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                     <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold">Our Core Values</h2>
                        <p className="mt-4 text-lg text-gray-400">The principles that guide every decision we make.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
                        {CORE_VALUES.map(value => <ValueCard key={value.name} value={value} />)}
                    </div>
                </div>
            </section>

            {/* Leadership Team */}
            <section className="py-20 bg-gray-800">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold">Our Leadership</h2>
                        <p className="mt-4 text-lg text-gray-400">The minds behind the mission.</p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {TEAM_MEMBERS.map(member => <TeamCard key={member.name} member={member} />)}
                    </div>
                </div>
            </section>

            {/* Advisory Board */}
             <section className="py-20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold">Backed by the Best</h2>
                    <p className="mt-4 text-lg text-gray-400">Proudly supported by industry leaders and innovators.</p>
                    <div className="flex justify-center items-center space-x-8 md:space-x-16 mt-8 grayscale opacity-60">
                         <p className="text-2xl font-semibold">Ecolab Capital</p>
                         <p className="text-2xl font-semibold">Google for Startups</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AboutPage;
