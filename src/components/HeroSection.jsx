import React from 'react';
import { Heart, List } from 'lucide-react';
import GoalCard from './GoalCard';

const HeroSection = ({ scrollY }) => {
  const scale = Math.max(0.85, 1 - scrollY / 3000);
  const translateY = Math.min(scrollY * 0.9, 1800);
  //const opacity = scrollY > 800 ? Math.max(0, 1 - (scrollY - 800) / 300) : 1;

  return (
    <section 
      className="min-h-screen sticky top-0 z-40 overflow-hidden flex items-center justify-center p-4 md:p-8"
      style={{
        transform: `scale(${scale}) translateY(-${translateY}px)`,
        //opacity: opacity
      }}
    >
      <div className="w-full max-w-7xl bg-white rounded-[40px] md:rounded-[60px] shadow-2xl overflow-hidden">
        <div className="grid md:grid-cols-2 min-h-[600px]">
          <div className="flex flex-col justify-center p-8 md:p-12 lg:p-16 space-y-6">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              Stay motivated and reach your goals
            </h1>
            <p className="text-base md:text-lg text-gray-500 leading-relaxed">
              Speak Tutor keeps you motivated and accountable to achieve your goals. Learning a language is better with someone by your side.
            </p>
          </div>
          <div className="flex items-center justify-center bg-gray-50 p-8 md:p-12">
            <div className="w-full max-w-md bg-gray-100 rounded-3xl p-6 md:p-8 shadow-lg">
              <div className="flex justify-start mb-6">
                <div className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center">
                  <div className="w-8 h-8 rounded-full bg-blue-400 flex items-center justify-center">
                    <div className="w-4 h-4 rounded-full bg-white"></div>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3 md:gap-4 mb-6">
                <GoalCard
                  icon={<Heart className="w-5 h-5 md:w-6 md:h-6 mb-2 md:mb-3" />}
                  bgColor="from-pink-400 to-pink-500"
                  text="You're interested in traveling, and exploring new cultures."
                />
                <GoalCard
                  icon={<List className="w-5 h-5 md:w-6 md:h-6 mb-2 md:mb-3" />}
                  bgColor="from-blue-600 to-blue-700"
                  text="We've created unique lessons and conversations based on those goals."
                />
              </div>
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 md:py-4 px-6 rounded-2xl shadow-lg transform hover:scale-105 transition-all duration-300">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;