import React from 'react';

const PhoneMockup = () => {
  return (
    <div className="relative flex justify-center">
      <div className="relative w-full max-w-sm">
        <div className="bg-gray-200 rounded-[3rem] p-3 shadow-2xl">
          <div className="bg-white rounded-[2.5rem] overflow-hidden">
            <div className="bg-gray-100 px-6 py-3 flex justify-between items-center">
              <span className="text-sm font-semibold text-gray-900">9:41</span>
              <div className="flex items-center space-x-1">
                <div className="w-4 h-3 bg-gray-900 rounded-sm"></div>
                <div className="w-4 h-3 bg-gray-900 rounded-sm"></div>
                <div className="w-4 h-3 bg-gray-900 rounded-sm"></div>
              </div>
            </div>
            <div className="p-6 space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex-shrink-0 flex items-center justify-center">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <div>
                  <div className="flex items-center space-x-2 mb-1">
                    <span className="font-semibold text-gray-900">Speak</span>
                    <span className="text-xs text-gray-400">now</span>
                  </div>
                  <div className="bg-gray-100 rounded-2xl rounded-tl-sm p-4">
                    <p className="text-sm text-gray-900 leading-relaxed">
                      Hey Audrey, your trip to Mexico is in 6 days! Let's practice some vocabulary for your trip!
                    </p>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div className="bg-gray-100 rounded-xl h-24"></div>
                <div className="bg-gray-100 rounded-xl h-24"></div>
              </div>
              <div className="grid grid-cols-4 gap-2">
                <div className="bg-gray-100 rounded-xl h-16"></div>
                <div className="bg-gray-100 rounded-xl h-16"></div>
                <div className="bg-gray-100 rounded-xl h-16"></div>
                <div className="bg-gray-100 rounded-xl h-16"></div>
              </div>
              <div className="grid grid-cols-4 gap-2">
                <div className="bg-gray-100 rounded-xl h-16"></div>
                <div className="bg-gray-100 rounded-xl h-16"></div>
                <div className="bg-gray-100 rounded-xl h-16"></div>
                <div className="bg-gray-100 rounded-xl h-16"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhoneMockup;