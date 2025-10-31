import React, { useState, useEffect } from 'react';
import HeroSection from './components/HeroSection';
import ConversationSection from './components/ConversationSection';
import RelationshipSection from './components/RelationshipSection';
import TestimonialSection from './components/TestimonialSection';

const App = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative bg-gray-50">
      <HeroSection scrollY={scrollY} />
      <ConversationSection scrollY={scrollY} />
      <RelationshipSection scrollY={scrollY} />
      <TestimonialSection scrollY={scrollY} />
    </div>
  );
};

export default App;