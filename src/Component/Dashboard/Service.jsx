import React from "react";

const Service = () => {
  return (
    <div  className="flex flex-col md:flex-row items-center justify-between max-w-6xl bg-[#6D6D6D] rounded-4xl mx-auto px-6 py-16 ">
      {/* Left Side Content */}
      <div className="md:w-2/3 space-y-6">
        <h2 className="text-4xl md:text-5xl font-bold text-white">
          Let’s try our service now!
        </h2>
        <p className="text-white text-lg md:text-xl max-w-md">
          Everything you need to accept card payments and grow your business anywhere on the planet.
        </p>
      </div>

      {/* Right Side Button */}
      <div className="md:w-1/3 flex justify-start md:justify-end mt-6 md:mt-0">
         <button className="border-2 border-[#33BBCF] text-[#33BBCF] rounded-full px-8 py-4 font-medium hover:bg-[#33BBCF] hover:text-white transition">
            Get Started →
          </button>
      </div>
    </div>
  );
};

export default Service;
