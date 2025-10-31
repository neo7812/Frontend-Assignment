import React from 'react';
import { User, Users, ImageIcon } from 'lucide-react';
import ConversationOption from './ConversationOption';

const ConversationSection = ({ scrollY }) => {
  const scale = Math.max(0.85, 1 - (scrollY - 800) / 3000);
  const translateY = scrollY < 800 ? 0 : Math.min((scrollY - 800) * 0.9, 1900);
  //const opacity = scrollY < 600 ? 0 : scrollY > 1400 ? Math.max(0, 1 - (scrollY - 1400) / 500) : Math.min(1, (scrollY - 600) / 200);

  const options = [
    {
      icon: <User className="w-5 h-5 text-white" />,
      bgColor: 'bg-gray-900',
      text: 'Tourist',
      isTitle: true
    },
    {
      icon: <Users className="w-5 h-5 text-white" />,
      bgColor: 'bg-blue-600',
      text: 'New friend',
      isTitle: true
    },
    {
      icon: <ImageIcon className="w-5 h-5 text-white" />,
      bgColor: 'bg-blue-900',
      text: 'Talking about the best places to grab dinner in San Francisco.',
      isTitle: false
    }
  ];

  return (
    <section 
      className="min-h-screen sticky top-0 z-30 overflow-hidden flex items-center justify-center p-4 md:p-8"
      style={{
        transform: `scale(${scale}) translateY(-${translateY}px)`,
        //opacity: opacity
      }}
    >
      <div className="w-full max-w-7xl bg-white rounded-[40px] md:rounded-[60px] shadow-2xl overflow-hidden">
        <div className="grid md:grid-cols-2 min-h-[600px]">
          <div className="flex flex-col justify-center p-8 md:p-12 lg:p-16 space-y-6">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              Talk about anything, anytime, anywhere
            </h2>
            <p className="text-base md:text-lg text-gray-500 leading-relaxed">
              Speak Tutor is your on-the-go conversational partner. Practice speaking on any topic, anytime, no matter how niche.
            </p>
          </div>
          <div className="flex items-center justify-center bg-gray-50 p-8 md:p-12">
            <div className="w-full max-w-md bg-gray-100 rounded-3xl p-6 md:p-8 shadow-lg">
              <h3 className="text-xs md:text-sm text-gray-600 font-medium mb-4 md:mb-6 text-center">
                Create your own
              </h3>
              <div className="space-y-3 md:space-y-4">
                {options.map((option, index) => (
                  <ConversationOption
                    key={index}
                    icon={option.icon}
                    bgColor={option.bgColor}
                    text={option.text}
                    isTitle={option.isTitle}
                  />
                ))}
              </div>
              <button className="w-full mt-4 md:mt-6 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 md:py-4 px-6 rounded-2xl shadow-lg transform hover:scale-105 transition-all duration-300">
                Start chatting
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConversationSection;