import React from 'react';
import { Hero } from '../sections/Hero';
import { Services } from '../sections/Services';
import { Showcase } from '../sections/Showcase';
import { Testimonials } from '../sections/Testimonials';
import { ContactCTA } from '../sections/ContactCTA';
import { useSEO } from '../hooks/useSEO';

const HomePage: React.FC = () => {
  // SEO optimization for home page
  useSEO({
    title: 'VibeX - AI-Powered Development Solutions | Enterprise Software Development',
    description: 'Transform your business with cutting-edge AI-powered applications, enterprise dashboards, and scalable SaaS platforms. Trusted by 50+ companies worldwide. Get custom software solutions that drive growth and efficiency.',
    keywords: 'AI development, enterprise software, SaaS platform, custom software development, AI-powered applications, business automation, software solutions, web development, mobile app development, digital transformation',
    url: 'https://vibex.pro/',
    image: 'https://vibex.pro/VibeX%20dashbord%20image.jpeg'
  });

  return (
    <main className="relative z-10 pt-20">
      <Hero />
      <Services />
      <Showcase />
      <Testimonials />
      <ContactCTA />
    </main>
  );
};

export default HomePage;
