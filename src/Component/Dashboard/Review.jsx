import React from "react";
import people03 from '../assets/people03.png'
import people02 from '../assets/people02.png'
import people01 from '../assets/people01.png'

const Review = () => {
  return (
    <div className="w-full  py-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-12 gap-12 items-start">
        {/* Left Section */}
        <div className="col-span-12 md:col-span-6 relative flex flex-col items-start">
          {/* Heading overlaying the left card */}
          <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-16">
            What{" "}
            <span className="text-gradient bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              people are
            </span>
            <br />
            saying about us
          </h2>

          {/* Main Testimonial Card - moved down with more gap */}
          <div className="w-full md:w-[370px] h-[390px] bg-slate-800 rounded-2xl shadow-xl p-8 relative overflow-hidden mt-20">
            <div className="absolute top-6 left-6">
              <span className="text-cyan-400 text-4xl font-bold">"</span>
            </div>
            <div className="absolute top-6 right-6">
              <span className="text-cyan-400 text-4xl font-bold">"</span>
            </div>

            <div className="mt-12 mb-8">
              {/* <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mb-4 mx-auto">
                <span className="text-white text-xl font-bold">M</span>
              </div> */}
              <p className="text-white text-center text-sm leading-relaxed">
                It will talks about how it impacts on. It impacts on the money
                business financial and that business process to makes customer
                support, but all over.
              </p>
            </div>

            <div className="absolute bottom-6 left-6 flex items-center gap-3">
              <div className="w-10 h-10 bg-gray-600 rounded-full flex items-center justify-center">
                {/* <span className="text-white text-sm font-medium">HJ</span> */}
                <img src={people01} alt="" />
              </div>
              <div>
                <p className="text-white text-sm font-medium">Herman Jensen</p>
                <p className="text-gray-400 text-xs">Founder & Leader</p>
              </div>
            </div>

            <div className="absolute bottom-6 right-6 bg-cyan-400 px-3 py-1 rounded-full">
              <span className="text-slate-900 text-sm font-bold">4.9/5.0★</span>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="col-span-12 md:col-span-6 flex flex-col justify-start">
          {/* Intro Text - moved up to align with heading */}
          <div className="mb-16">
            <p className="text-gray-300 text-lg max-w-lg leading-relaxed">
              Everything you need to accept card payments and grow your business
              anywhere on the planet.
            </p>
          </div>

          {/* Right Cards - moved down with more gap */}
          <div className="flex flex-col md:flex-row gap-6 mt-36">
            {/* Testimonial Card 1 */}
            <div className="w-full md:w-[370px] h-[390px]  rounded-2xl shadow-xl p-6 relative overflow-hidden">
              <div className="absolute top-6 left-6">
                <span className="text-cyan-400 text-4xl font-bold">"</span>
              </div>
              <div className="absolute top-6 right-6">
                <span className="text-cyan-400 text-4xl font-bold">"</span>
              </div>

              <div className="mt-12 mb-8">
                {/* <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <span className="text-white text-xl font-bold">M</span>
                </div> */}
                <p className="text-white text-center text-sm leading-relaxed">
                  "Money makes your life easier. If you're lucky to have it, you're lucky."
                </p>
              </div>

              <div className="absolute bottom-6 left-6 flex items-center gap-3">
                <div className="w-10 h-10 bg-gray-600 rounded-full flex items-center justify-center">
                  {/* <span className="text-white text-sm font-medium">SM</span> */}
                  <img src={people03} alt="" />
                </div>
                <div>
                  <p className="text-white text-sm font-medium">Steve Mark</p>
                  <p className="text-gray-400 text-xs">Founder & Leader</p>
                </div>
              </div>
            </div>

            {/* Testimonial Card 2 */}
            <div className="w-full md:w-[370px] h-[390px]  rounded-2xl shadow-xl p-6 relative overflow-hidden">
              <div className="absolute top-6 left-6">
                <span className="text-cyan-400 text-4xl font-bold">"</span>
              </div>
              <div className="absolute top-6 right-6">
                <span className="text-cyan-400 text-4xl font-bold">"</span>
              </div>

              <div className="mt-12 mb-8">
                {/* <div className="w-16 h-16 bg-gray-600 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <span className="text-white text-xl font-bold">K</span>
                </div> */}
                <p className="text-white text-center text-sm leading-relaxed">
                  "It is usually people in the money business, finance, and international trade that are really rich."
                </p>
              </div>

              <div className="absolute bottom-6 left-6 flex items-center gap-3">
                <div className="w-10 h-10 bg-gray-600 rounded-full flex items-center justify-center">
                  {/* <span className="text-white text-sm font-medium">KG</span> */}
                   <img src={people02} alt="" />
                </div>
                <div>
                  <p className="text-white text-sm font-medium">Kenn Gallagher</p>
                  <p className="text-gray-400 text-xs">Founder & Leader</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;