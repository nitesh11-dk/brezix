import React from 'react';
import { Star, Shield } from 'lucide-react';
import { Inter } from 'next/font/google'
const inter = Inter({
  subsets: ['latin'],
})


const StarVerified = () => {
  return (
    <div className="flex  w-fit -ml-4 px-3 py-1 sm:pr-20 sm:flex-row items-center group  gap-4 hover:bg-white rounded-3xl    transition-all duration-300">
      
      {/* Stars + Badge */}

      <div className="flex items-center gap-4">
        {/* Star Rating */}
        <div className="flex items-center gap-2 p-1 px-4 group-hover:bg-black    transition-all duration-300 bg-white rounded-3xl">
          <div className="flex items-center gap-1">
            {Array.from({ length: 3 }, (_, i) => (
              <Star
                key={i}
                className="w-4 h-4 fill-yellow-400 text-yellow-400"
              />
            ))}
          </div>
          <span className="font-semibold text-gray-700     transition-all duration-300 group-hover:text-white text-md">4.9</span>
        </div>

        {/* Gold Verified Badge */}
        <div className=" hidden sm:flex  items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold tracking-wide shadow-lg transition-all duration-300 bg-gradient-to-r from-yellow-400 to-amber-500 text-white">
          <Shield className="w-3.5 h-3.5" />
          <span>GOLD VERIFIED</span>
        </div>
      </div>

      {/* Text Line */}
      <div className={`flex-1 ${inter.className}`}>
        <p className="text-white flex gap-2  font-medium group-hover:text-black  text-sm sm:text-base">
         Rated Excellent by Customers  <span className=" hidden  sm:flex">37 Reviews</span>
        </p>
      </div>
    </div>
  );
};

export default StarVerified;
