import React from 'react'
import Button from '../Button'
import Illustration from '../../assets/illustration-working.svg'

const GetStarted = () => {
  return (
    <div className='w-full flex flex-wrap justify-around mb-[-150px] '>
        <div className='w-1/2 px-28 pt-[100px] '>
            <h1 className='text-6xl font-extrabold mb-6'>
                More than just shorter links
            </h1>
            <p className='text-gray-500 text-xl font-semibold mb-8'>Build your brand's recognition and get detailed insights on how your links are performing.</p>
            <Button color='bg-blue-400' hoverColor='hover:bg-blue-300' paddingX='px-4'>
                Get Started
            </Button>
        </div>
        <div className='w-1/2 relative overflow-hidden h-screen mt-10'>
            <img src={Illustration} alt='a girl using a system' className='w-[900px] max-w-lg absolute right-[-50px] top-0 -translate-x-1 ' />
        </div>
    </div>
  )
}

export default GetStarted