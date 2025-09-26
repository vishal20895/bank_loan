import React from "react";

const Rewards = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 pt-20 grid grid-cols-12 gap-6 items-center">
      <div className="col-span-6 space-y-8">
        <p className="text-gray-400 text-lg max-w-md leading-relaxed">
          Our team of experts uses a methodology to identify the credit cards
          most likely to fit your needs. We examine annual percentage rates,
          annual fees.
        </p>

        <button className="border-2 border-[#33BBCF] text-[#33BBCF] rounded-full px-8 py-4 font-medium hover:bg-[#33BBCF] hover:text-white transition">
          Get Started →
        </button>
      </div>

      <div className="col-span-6">
        <div className="col-span-1">
          <span className="text-white">Rewards</span>
        </div>
        <div className="col-span-1">
          <span className="text-white">Rewards</span>
        </div>
        <div className="col-span-1">
          <span className="text-white">Rewards</span>
        </div>
      </div>
    </div>
  );
};

export default Rewards;
