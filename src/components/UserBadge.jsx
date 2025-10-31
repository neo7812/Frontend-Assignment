import React from 'react';

const UserBadge = ({ name, avatarColor }) => {
  return (
    <div className="flex justify-center">
      <div className="inline-flex items-center space-x-3 bg-white border-2 border-gray-200 rounded-full px-6 py-3 shadow-md">
        <div className={`w-8 h-8 ${avatarColor} rounded-full`}></div>
        <span className="font-semibold text-gray-900">{name}</span>
      </div>
    </div>
  );
};


export default UserBadge;