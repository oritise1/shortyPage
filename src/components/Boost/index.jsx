import React from 'react'
import BgImg from '../../assets/bg-boost-desktop.svg'
import Button from '../Button'

const Boost = () => {
  return (
    <div className='w-full py-10 px-[200px] bg-purple-900 bg-cover bg-center flex flex-col text-center item-center' 
    style={{backgroundImage: `url(${BgImg})`}}>
        <span>
        <h1 className='mb-10 text-center text-white text-4xl font-extrabold'>
            Boost your links today
        </h1>
        <Button color='bg-blue-400' hoverColor='hover:bg-blue-300' paddingX='px-10' className='w-[30%]'>
                Get Started
            </Button>
        </span>
    </div>
  )
}

export default Boost