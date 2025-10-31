import React from 'react';

const GoalCard = ({ icon, bgColor, text }) => {
  return (
    <div className={`bg-gradient-to-br ${bgColor} rounded-2xl p-6 text-white shadow-lg transform hover:scale-105 transition-transform duration-300`}>
      {icon}
      <p className="text-sm md:text-base font-medium leading-snug">
        {text}
      </p>
    </div>
  );
};

export default GoalCard;
