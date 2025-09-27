import React from "react";
import card from "../assets/card.png";

const Cards = () => {
  return (
    <div className="w-full overflow-hidden bg-[#00040f]">
      <div className="grid grid-cols-12 gap-12 items-center  mt-32 md:px-[120px] max-w-7xl mx-auto">
        {/* Left Image */}

        {/* Right Content */}
        <div className="col-span-12 md:col-span-6 pt-20 space-y-6 text-center md:text-left">
        {/* <p className="text-white text-[36px] sm:text-[48px] md:text-[60px] lg:text-[66px] font-extrabold tracking-tight leading-tight w-full">
 Find a better card deal <br/>in few easy steps.
</p> */}
<p className="text-white text-[44px] md:text-[66px] font-extrabold tracking-tight leading-tight">
  Find a better card deal, <span className="whitespace-nowrap">in few easy steps..</span>
</p>


          <p className="text-gray-400 text-lg max-w-md mx-auto md:mx-0 leading-relaxed">
            Our team of experts uses a methodology to identify the credit cards
            most likely to fit your needs. We examine annual percentage rates,
            annual fees.
          </p>
             <button className="border-2 border-[#33BBCF] text-[#33BBCF] rounded-full px-8 py-4 font-medium hover:bg-[#33BBCF] hover:text-white transition">
            Get Started →
          </button>
        </div>
        <div className="col-span-12 md:col-span-6 flex justify-center">
          <img
            src={card}
            alt="Billing"
            className="w-[530px]  h-[455px] max-w-md w- object-contain"
          />
          
        </div>
     
      </div>
    </div>
  );
};

export default Cards;
