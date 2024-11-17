import React from 'react';
import Hero from './components/Hero';

import About from './components/About';
import Features from './components/Features';
import TopDestination from './components/TopDestination';
import BeachDestinations from './components/BeachDestinations';
import Testimonials from './components/Testimonials';
import DiscountBanner from './components/DiscountBanner';
import Footer from './components/Footer';
import Header from './components/Header';

const App: React.FC = () => {
  return (
    <div>
      <Header />
      <main className="pt-16">
        <Hero />
        <About />
        <Features />
        <TopDestination />
        <BeachDestinations />
        <Testimonials />
        <DiscountBanner />
        <Footer />
        {/* Add other sections */}
      </main>
    </div>
  );
};

export default App;
