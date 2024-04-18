import React from 'react'


const Nav = () => {
  
  return (
    <div className='flex justify-center bg-[#008DDA] py-[35px] pb-5 '>
      <a href="" className='ml-9 sm:size-[100px] sm:w-[120px]'><img  className='size-[50px] sm:size-[80px]' src="\public\logo192.png" alt="react" /></a>
  <ul className='flex text-lg mt-5 sm:flex-wrap sm:justify-center lg:px-auto xl:mx-auto mx-8 sm:mx-2 '>
    <li className=' sm:px-5 lg:px-2 xl:px-2'>
      <a href="" className='py-2 sm:py-4 font-bold bg-[#ACE2E1] hover:text-purple-700 p-2 sm:p-6 rounded-full focus:bg-black focus:text-white'>ACCUEIL</a>
    </li>
    <li className=' sm:px-5 '>
      <a href="" className='py-2 sm:py-4 font-bold bg-[#ACE2E1] hover:text-purple-700 p-2 sm:p-6 rounded-full focus:bg-black focus:text-white'>NEW</a>
    </li>
    <li className=' sm:px-4  ' >
      <a href="" className='py-2 sm:py-4 font-bold hover:text-purple-700 bg-[#ACE2E1] p-2 sm:p-6 rounded-full focus:bg-black focus:text-white'>MORE OPTIONS</a>
    </li>
    <li className=' lg:mt-0 lg:py-0 xl:py-0 sm:py-9'>
      <a href="" className='py-2 sm:py-4 font-bold bg-[#ACE2E1] p-2 hover:text-purple-700 sm:p-6 rounded-full focus:bg-black focus:text-white '>BLACK-FRIDAYS</a>
    </li>
    <li className=' sm:px-5 sm:py-9 lg:mt-0 lg:py-0 xl:py-0'>
      <a href="" className='py-2 sm:py-4 font-bold  bg-[#ACE2E1] p-2 hover:text-purple-700 sm:p-6 rounded-full focus:bg-black focus:text-white'>CONTACT US</a>
    </li>
    <li className=' sm:px-5 sm:py-9 lg:mt-0 lg:py-0 xl:py-0 lg:px-2 xl:px-2'>
      <a href="" className='py-2 sm:py-4 font-bold  bg-[#ACE2E1] hover:text-purple-700 p-2  rounded-full focus:bg-black focus:text-white sm:px-10 sm:mr-6'>LOGIN</a>
    </li>
  </ul>


      


    </div>
  )
}

export default Nav