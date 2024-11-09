import React from 'react'
import Logo from '../../assets/logo.svg'
import Button from '../Button/index'

const NavBar = () => {
  return (
    <div className='py-10 px-28 flex flex-wrap justify-between gap-10 w-full'>
        <img src={Logo} alt='logo of the website' />
        <div className='flex flex-wrap justify-between gap-5 w-[85%]'>
            <nav className='flex gap-8'>
                <a href='#'>Features</a>
                <a href='#'>Pricing</a>
                <a href='#'>Resources</a>
            </nav>
            <div className='flex gap-4 w-1/5'>
                <Button color='bg-white' hoverColor='hover:bg-white' textColor='text-black-400'>
                    Login
                </Button>
                <Button color='bg-blue-400' hoverColor='hover:bg-blue-300'>
                    Sign Up
                </Button>
            </div>
        </div>
    </div>
  ) 
}

export default NavBar