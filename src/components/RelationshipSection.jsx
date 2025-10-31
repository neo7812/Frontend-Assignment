import React from 'react';
import PhoneMockup from './PhoneMockup';

const RelationshipSection = () => {
  return (
    <section className="min-h-screen relative z-20 bg-white rounded-b-[40px] md:rounded-b-[60px] shadow-xl -mt-16">
      <div className="container mx-auto px-6 md:px-12 py-32 md:py-40">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center max-w-7xl mx-auto">
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Build a relationship with your tutor
            </h2>
            <p className="text-lg md:text-xl text-gray-500 leading-relaxed">
              Speak Tutor designs a personalized curriculum as unique as you are by getting to know you on a surprisingly deep level.
            </p>
          </div>

          <PhoneMockup />
        </div>
      </div>
    </section>
  );
};

export default RelationshipSection;
