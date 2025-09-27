import React from "react";
import bill from "../assets/bill.png";
import google from "../assets/google.svg";
import apple from "../assets/apple.svg";

const Bils = () => {
  return (
    <div className="w-full overflow-hidden bg-[#00040f]">
      <div className="grid grid-cols-12 gap-12 items-center px-6 md:px-[120px] max-w-7xl mx-auto">
        {/* Left Image */}
        <div className="col-span-12 md:col-span-6 flex justify-center">
          <img
            src={bill}
            alt="Billing"
            className="w-[530px] h-[455px] object-contain"
          />
        </div>

        {/* Right Content */}
        <div className="col-span-12 md:col-span-6 space-y-6 text-center md:text-left">
          {/* Heading */}
          <h1 className="text-white text-[48px] md:text-[66px] font-extrabold tracking-tight leading-tight">
  <span className="block w-full text-center md:text-left">
    Easily control your
  </span>
  <span className="block w-full text-center md:text-left whitespace-nowrap">
   Easily control your
  </span>
</h1>


          {/* Description */}
          <p className="text-gray-400 text-lg max-w-md mx-auto md:mx-0 leading-relaxed">
            Our team of experts uses a methodology to identify the credit cards
            most likely to fit your needs. We examine annual percentage rates
            and annual fees.
          </p>

          {/* App buttons */}
          <div className="flex items-center gap-4 mt-4 justify-center md:justify-start">
            <img
              src={google}
              alt="Google Play"
              className="w-[150px] h-auto cursor-pointer"
            />
            <img
              src={apple}
              alt="App Store"
              className="w-[150px] h-auto cursor-pointer"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bils;
