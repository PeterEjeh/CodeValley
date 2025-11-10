export interface NavLink {
  name: string;
  path: string;
}

export interface TeamMember {
  name: string;
  role: string;
  imageUrl: string;
  bio: string;
}

export interface Product {
  name: string;
  description: string;
  longDescription: string;
  themeColor: string;
  icon: React.ComponentType<{ className?: string }>;
}

export interface FaqItem {
  question: string;
  answer: string;
  category: 'General' | 'Product Features' | 'Partnerships' | 'Pricing' | 'Support';
}

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  videoUrl?: string;
}

export interface CoreValue {
    name: string;
    description: string;
    icon: React.ComponentType<{ className?: string }>;
}