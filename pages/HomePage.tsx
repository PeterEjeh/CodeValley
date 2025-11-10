import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { PRODUCTS } from '../constants';

// Custom hook to detect if an element is on screen
const useOnScreen = <T extends Element,>(ref: React.RefObject<T>, rootMargin = '0px'): boolean => {
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIntersecting(entry.isIntersecting);
      },
      {
        rootMargin,
      }
    );
    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }
    return () => {
      if(currentRef) {
        observer.unobserve(currentRef);
      }
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); 

  return isIntersecting;
};

// Animated counter component
const AnimatedCounter = ({ end, duration = 2000, suffix = '', prefix = '' }: { end: number, duration?: number, suffix?: string, prefix?: string }) => {
    const [count, setCount] = useState(0);
    const ref = useRef<HTMLDivElement>(null);
    const isOnScreen = useOnScreen(ref);

    useEffect(() => {
        if (isOnScreen) {
            let start = 0;
            const endValue = end;
            if (start === endValue) return;

            const incrementTime = (duration / endValue);
            const timer = setInterval(() => {
                start += 1;
                setCount(start);
                if (start === endValue) clearInterval(timer);
            }, incrementTime);

            return () => clearInterval(timer);
        }
    }, [isOnScreen, end, duration]);

    return (
        <div ref={ref} className="text-4xl md:text-5xl font-bold text-green-400">
            {prefix}{count.toLocaleString()}{suffix}
        </div>
    );
};

// Sub-components for HomePage
const HeroSection = () => (
    <div className="relative h-screen flex items-center justify-center text-center text-white overflow-hidden">
        <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute z-0 w-auto min-w-full min-h-full max-w-none"
            style={{ objectFit: 'cover', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
        >
            <source src="/media/hero-video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="relative z-10 p-4">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-4 animate-fade-in-down">
                Empowering Africa’s Future Through Smart, Inclusive Technology.
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl font-light text-gray-300 mb-8 animate-fade-in-up">
                Agritech | Fintech | ClimateTech | Edutech | Renewable Energy
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
                <Link to="/products" className="px-8 py-4 bg-green-500 text-white font-semibold rounded-lg shadow-lg hover:bg-green-600 transition-all duration-300 transform hover:scale-105">
                    Explore Our Solutions
                </Link>
                <Link to="/contact" className="px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300">
                    Partner with Us
                </Link>
            </div>
        </div>
    </div>
);

const AnimatedSection = ({ children }: { children: React.ReactNode }) => {
    const ref = useRef<HTMLDivElement>(null);
    const isVisible = useOnScreen(ref, '-100px');
    return (
        <div ref={ref} className={`transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {children}
        </div>
    );
};

const ScrollStorySection = () => (
    <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
                 <AnimatedSection>
                    <h2 className="text-4xl md:text-5xl font-bold">The Journey of a Farmer</h2>
                    <p className="mt-4 text-lg text-gray-400">Transforming agriculture, one smart solution at a time.</p>
                </AnimatedSection>
            </div>
            <div className="space-y-20">
                <div className="flex flex-col md:flex-row items-center gap-12">
                    <div className="md:w-1/2">
                         <AnimatedSection>
                            <img src="/media/farmer.jpg" alt="Farmer in field" className="rounded-lg shadow-2xl"/>
                        </AnimatedSection>
                    </div>
                    <div className="md:w-1/2">
                         <AnimatedSection>
                            <h3 className="text-3xl font-bold text-green-400 mb-4">Meet Kofi</h3>
                            <p className="text-gray-300 text-lg">Kofi, a farmer in rural Ghana, faced uncertainty every season. Unpredictable weather and lack of access to markets meant his hard work didn't always pay off.</p>
                        </AnimatedSection>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row-reverse items-center gap-12">
                    <div className="md:w-1/2">
                         <AnimatedSection>
                            <img src="/media/farm-map.jpg" alt="Digital map of a farm" className="rounded-lg shadow-2xl"/>
                        </AnimatedSection>
                    </div>
                    <div className="md:w-1/2">
                        <AnimatedSection>
                            <h3 className="text-3xl font-bold text-green-400 mb-4">The PoliGrain Transformation</h3>
                            <p className="text-gray-300 text-lg">With PoliGrain, Kofi's farm is now a digital map. He receives IoT-powered alerts about soil moisture and weather forecasts, helping him make informed decisions and optimize his water usage.</p>
                        </AnimatedSection>
                    </div>
                </div>
            </div>
        </div>
    </section>
);


const SolutionsPreviewSection = () => (
    <section className="py-20 bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
                 <AnimatedSection>
                    <h2 className="text-4xl md:text-5xl font-bold">Our Core Solutions</h2>
                    <p className="mt-4 text-lg text-gray-400">An ecosystem of technologies for a brighter future.</p>
                 </AnimatedSection>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {PRODUCTS.slice(0, 5).map(product => (
                    <AnimatedSection key={product.name}>
                        <Link to="/products" className="block p-8 bg-gray-900 rounded-lg shadow-lg hover:shadow-green-400/20 hover:-translate-y-2 transition-all duration-300 h-full">
                            <product.icon className={`h-12 w-12 mb-4 text-green-400`} />
                            <h3 className="text-2xl font-bold text-white mb-2">{product.name}</h3>
                            <p className="text-gray-400">{product.description}</p>
                        </Link>
                    </AnimatedSection>
                ))}
            </div>
        </div>
    </section>
);

const ImpactMetricsSection = () => (
    <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                <div>
                    <AnimatedCounter end={200000} suffix="+" />
                    <p className="text-lg text-gray-400 mt-2">Projected Users</p>
                </div>
                <div>
                    <AnimatedCounter end={6} />
                    <p className="text-lg text-gray-400 mt-2">Countries in Focus</p>
                </div>
                <div>
                    <AnimatedCounter end={20} prefix="$" suffix="M" />
                    <p className="text-lg text-gray-400 mt-2">Valuation Target</p>
                </div>
            </div>
        </div>
    </section>
);


const HomePage: React.FC = () => {
  return (
    <div>
      <HeroSection />
      <ScrollStorySection />
      <SolutionsPreviewSection />
      <ImpactMetricsSection />
    </div>
  );
};

export default HomePage;