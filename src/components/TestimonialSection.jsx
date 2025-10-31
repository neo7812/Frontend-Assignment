import React from 'react';
import UserBadge from './UserBadge';

const TestimonialSection = () => {
  return (
    <section className="min-h-screen relative z-10 bg-white -mt-16">
      <div className="container mx-auto px-6 md:px-12 py-32 md:py-40">
        <div className="max-w-5xl mx-auto">
          <div className="text-center space-y-6">
            <UserBadge name="Jessica Park" avatarColor="bg-pink-400" />
            <blockquote className="text-2xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight px-4">
              "The first time I used Speak Tutor, I couldn't believe it wasn't a real person. It feels like it understands my motivations at a deep..."
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
