import React from 'react';

const ConversationOption = ({ icon, bgColor, text, isTitle }) => {
  return (
    <div className="bg-white rounded-xl p-5 flex items-center space-x-4 hover:shadow-md transition-shadow duration-300 cursor-pointer">
      <div className={`w-10 h-10 ${bgColor} rounded-full flex items-center justify-center flex-shrink-0`}>
        {icon}
      </div>
      <span className={`${isTitle ? 'text-lg font-semibold text-gray-900' : 'text-base text-gray-700'}`}>
        {text}
      </span>
    </div>
  );
};

export default ConversationOption;