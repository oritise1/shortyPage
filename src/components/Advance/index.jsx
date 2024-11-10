import React from "react";
import Brand from "../../assets/icon-brand.svg";
import Detailed from "../../assets/icon-detailed.svg";
import Fully from "../../assets/icon-fully.svg";

const Advance = () => {
  return (
    <div className="w-full bg-gray-200 px-6 lg:px-20 py-12 overflow-hidden">
      <div className="text-center max-w-xl mx-auto mb-12">
        <h3 className="text-3xl font-extrabold mb-4">Advanced Statistics</h3>
        <p className="text-gray-500 text-base font-semibold">
          Track how your links are performing across the web with our advanced
          statistics dashboard.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row justify-center items-start lg:space-x-8 relative">
        {/* Connector line */}
        <div className="absolute lg:top-[50%] overflow-hidden top-[180px] left-[50%] transform lg:translate-x-0 translate-x-[-50%] lg:w-full w-1 h-1 lg:h-1 lg:bg-blue-400 z-0"></div>

        {/* Card 1 */}
        <div className="relative z-10 bg-white shadow-lg rounded-lg px-6 pb-10 pt-12 w-full lg:w-1/3 mb-8 lg:mb-0 lg:mt-0">
          <div className="p-4 rounded-full bg-purple-900 absolute top-[-30px] left-1/2 transform -translate-x-1/2 lg:left-10">
            <img src={Brand} alt="Icon Brand" />
          </div>
          <h3 className="text-lg font-extrabold mb-2 text-center lg:text-left">
            Brand Recognition
          </h3>
          <p className="text-gray-500 text-base font-semibold text-center lg:text-left">
            Boost your brand recognition with each click. Generic links don't
            mean a thing. Branded links help install confidence in your content.
          </p>
        </div>

        {/* Card 2 */}
        <div className="relative z-10 bg-white shadow-lg rounded-lg px-6 pb-10 pt-12 w-full lg:w-1/3 mb-8 lg:mb-0 lg:mt-8">
          <div className="p-4 rounded-full bg-purple-900 absolute top-[-30px] left-1/2 transform -translate-x-1/2 lg:left-10">
            <img src={Detailed} alt="Icon Detailed" />
          </div>
          <h3 className="text-lg font-extrabold mb-2 text-center lg:text-left">
            Detailed Records
          </h3>
          <p className="text-gray-500 text-base font-semibold text-center lg:text-left">
            Gain insights into who is clicking your links. Knowing when and
            where people engage with your content helps inform better decisions.
          </p>
        </div>

        {/* Card 3 */}
        <div className="relative z-10 bg-white shadow-lg rounded-lg px-6 pb-10 pt-12 w-full lg:w-1/3 lg:mt-16">
          <div className="p-4 rounded-full bg-purple-900 absolute top-[-30px] left-1/2 transform -translate-x-1/2 lg:left-10">
            <img src={Fully} alt="Icon Fully Customizable" />
          </div>
          <h3 className="text-lg font-extrabold mb-2 text-center lg:text-left">
            Fully Customizable
          </h3>
          <p className="text-gray-500 text-base font-semibold text-center lg:text-left">
            Improve brand awareness and content discoverability through
            customizable links, supercharging audience engagement.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Advance;
