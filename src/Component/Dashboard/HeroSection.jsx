import React from "react";
import robot from "../assets/robot.png";

const HeroSection = () => {
  return (
    <div className=" w-full overflow-hidden">
      <div className="  grid grid-cols-12 gap-6 items-center pt-20  px-[120px]">
        <div className="col-span-6 space-y-8">
          <div className="flex items-center ml-2 gap-2 bg-gradient-to-r from-[#272727] to-[#1a1a1a] px-4 py-2 rounded-lg w-fit shadow-md">
            <span className="text-teal-400 text-sm font-medium">
              20% DISCOUNT
            </span>
            <span className="text-white text-sm">FOR 1 MONTH ACCOUNT</span>
          </div>
          <h1 className="text-[64px] md:text-[72px] font-extrabold leading-[1.1] tracking-tight ml-2">
            <span className="block text-white">The Next</span>
            <span className="block text-[#33BBCF]">Generation</span>
            <span className="text-white whitespace-nowrap">
              Payment <span className="text-[#33BBCF]">Method.</span>
            </span>
          </h1>

          <p className="text-gray-400 text-lg max-w-md leading-relaxed">
            Our team of experts uses a methodology to identify the credit cards
            most likely to fit your needs. We examine annual percentage rates,
            annual fees.
          </p>

          <div></div>
        </div>

        <div className="col-span-6 relative flex justify-center items-start">
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#BCA5FF]/20 blur-3xl z-0"></div>

          <img
            src={robot}
            alt="robot hand"
            className="relative z-10 w-[669px] h-[664px]  translate-x-31 translate-y-10"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
