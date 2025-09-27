import React from "react";
import Star from "../assets/Star.svg";
import Shield from "../assets/Shield.svg";
import Send from "../assets/Send.svg";

const Rewards = () => {
  const items = [
    {
      title: "Rewards",
      description:
        "The best credit cards offer some tantalizing combinations of promotions and prizes",
      icon: Star,
    },
    {
      title: "Balance",
      description:
        "We take proactive steps to make sure your information and transactions are secure.",
      icon: Shield,
    },
    {
      title: "Transfer",
      description:
        "A balance transfer credit card can save you a lot of money in interest charges.",
      icon: Send,
    },
  ];

  return (
    <div className="w-full bg-[#00040f] py-32 ">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12 px-6">
        
        {/* Left Section */}
        <div className="flex-1 text-center md:text-left space-y-6 ml-10">
 <p className="text-white text-[44px] md:text-[66px] font-extrabold tracking-tight leading-tight">
  You do the business, <span className="whitespace-nowrap">we’ll handle the money.</span>
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

        {/* Right Section */}
        <div className="flex-1 flex flex-col gap-6 max-w-md w-full">
          {items.map((item, index) => (
            <div
              key={index}
              className="flex items-start gap-4 rounded-2xl p-4 hover:bg-white/10 transition duration-300 cursor-pointer"
            >
              {/* Circle with Icon */}
              <div className="relative w-[64px] h-[64px] flex items-center justify-center shrink-0">
                <div className="absolute w-full h-full rounded-full bg-[#09977C1A]"></div>
                <img
                  src={item.icon}
                  alt={item.title}
                  className="relative z-10 w-8 h-8"
                />
              </div>
              {/* Title and Description */}
              <div>
                <h3 className="text-white text-lg font-semibold">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Rewards;
