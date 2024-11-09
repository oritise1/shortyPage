import React from 'react';
import Brand from '../../assets/icon-brand.svg'
import Detailed from '../../assets/icon-detailed.svg'
import Fully from '../../assets/icon-fully.svg'

const Advance = () => {
    return (
        <div className='w-full bg-gray-200 px-20'>
            <span className='text-center w-[100px]'>
                <h3 className="text-3xl font-extrabold mb-2">Advanced Statistics</h3>
                <p className='text-gray-500 text-base font-semibold px-[380px]'>Track how your links are performing across the web with our advanced statistics dashboard.</p>
            </span>
            <div className="flex justify-center  items-start space-x-8 py-20 relative">
                {/* Connector line */}
                <div className="absolute top-[220px] left-28 right-20 h-1 bg-blue-400 z-0"></div>

                <div className="relative z-10 bg-white shadow-lg rounded-lg px-10 pb-10 pt-20 w-1/3 mt-0">
                    <span className='p-6 rounded-full bg-purple-900 absolute top-[-40px]'>
                        <img src={Brand} alt='Icon Brand' />
                    </span>
                    <h3 className="text-lg font-extrabold mb-2">Brand Recognition</h3>
                    <p className='text-gray-500 text-base font-semibold'>Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help install confidence in your content </p>
                </div>

                <div className="relative z-10 bg-white shadow-lg rounded-lg px-10 pb-10 pt-20 w-1/3 mt-8">
                    <span className='p-6 rounded-full bg-purple-900 absolute top-[-40px]'>
                        <img src={Detailed} alt='Icon Brand' />
                    </span>
                    <h3 className="text-lg font-extrabold mb-2">Detailed Records</h3>
                    <p className='text-gray-500 text-base font-semibold'>Gain insights into who is clicking your links. Knowing when and where people engage withyour content helps inform better decisions. </p>
                </div>

                <div className="relative z-10 bg-white shadow-lg rounded-lg px-10 pb-10 pt-20 w-1/3 mt-16">
                    <span className='p-6 rounded-full bg-purple-900 absolute top-[-40px]'>
                        <img src={Fully} alt='Icon Brand' />
                    </span>
                    <h3 className="text-lg font-extrabold mb-2">Fully Customizable</h3>
                    <p className='text-gray-500 text-base font-semibold'>Improve brand awareness and content discoverabilty through customizable links, supercharging audience engagement.</p>
                </div>
            </div>
        </div>
    );
};


export default Advance;
