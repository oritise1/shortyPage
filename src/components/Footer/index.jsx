import React from 'react'
import Logo from '../../assets/logo.svg'
import FaceBook from '../../assets/icon-facebook.svg'
import Twitter from '../../assets/icon-twitter.svg'
import Pinterest from '../../assets/icon-pinterest.svg'
import Instagram from '../../assets/icon-instagram.svg'

const Footer = () => {
    return (
        <div className='bg-black'>
            <div className='px-20 py-16 flex flex-wrap justify-around'>
                <span className='w-1/6'>
                <img src={Logo} alt='Project Logo'  /> </span>
                <span className='flex flex-wrap justify-around gap-20'>
                    <ul className='text-Barlow text-sm font-medium text-gray-700 tracking-widest  leading-loose'>
                        <p className='text-Barlow text-xl font-extrabold hover:text-white text-white mb-4'>Features</p>
                        <li className='hover:text-blue-400 cursor-pointer'>Link Shortening</li>
                        <li className='hover:text-blue-400 cursor-pointer'>Branded Links</li>
                        <li className='hover:text-blue-400 cursor-pointer'>Analytics</li>
                    </ul>
                    <ul className='text-Barlow text-sm font-medium text-gray-700 tracking-widest leading-loose'>
                        <p className='text-Barlow text-xl font-extrabold text-white mb-4'>Resources </p>
                        <li className='hover:text-blue-400 cursor-pointer'>Blog</li>
                        <li className='hover:text-blue-400 cursor-pointer'>Developers</li>
                        <li className='hover:text-blue-400 cursor-pointer'>Support</li>
                    </ul>
                    <ul className='text-Barlow text-sm font-medium text-gray-700 tracking-widest leading-loose'>
                        <p className='text-Barlow text-xl font-extrabold text-white mb-4'>Company</p>
                        <li className='hover:text-blue-400 cursor-pointer'>About</li>
                        <li className='hover:text-blue-400 cursor-pointer'>Our Team</li>
                        <li className='hover:text-blue-400 cursor-pointer'>Careers</li>
                        <li className='hover:text-blue-400 cursor-pointer'>Contact</li>
                    </ul>
                </span>
                <span className='h-1/2 gap-6 flex flex-wrap justify-between'>
                    <img src={FaceBook} alt='Facebook Logo' className='hover:bg-blue-400 hover:rounded-xl cursor-pointer' />
                    <img src={Twitter} alt='Facebook Logo' className='hover:bg-blue-400 hover:rounded-xl cursor-pointer' />
                    <img src={Pinterest} alt='Facebook Logo' className='hover:bg-blue-400 hover:rounded-xl cursor-pointer' />
                    <img src={Instagram} alt='Facebook Logo' className='hover:bg-blue-400 hover:rounded-xl cursor-pointer' />
                </span>
            </div>
        </div>
    )
}

export default Footer