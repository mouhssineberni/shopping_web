import React from 'react'

const Header = () => {
  return (
    <div className='relative'>
        <img  className="w-full h-[550px] sm:h-auto xl:h-[500px]" src="\public\table1.png" alt="" />
    <div class="absolute top-0 left-0 w-full flex justify-center items-center">
    <p class="text-white text-lg font-bold w-[60%] my-auto py-[4rem] xl:leading-[40px] bg-black bg-opacity-70 p-4 rounded-lg h-[300px] py-[200px] mt-[70px] w-[40rem]
    xl:w-[1200px] lg:w-[720px] xl:h-auto hover:text-yellow-400 sm:py-5">
XYZ Furniture is a renowned company specializing in the design, manufacturing, and distribution of high-quality furniture pieces.
 Established in 1995, our journey began with a vision to redefine spaces through timeless and innovative furniture solutions.
  With over two decades of experience, we have earned a reputation for excellence, craftsmanship, and attention to detail. <p className='sm:hidden xl:block lg:block' >Our commitment to superior design, sustainable practices, and customer satisfaction sets us apart in the industry.
     From classic to contemporary styles, XYZ Furniture offers a diverse range of products tailored to meet the unique needs and preferences of our clients,
      making us a trusted partner in furnishing homes and commercial spaces worldwide.</p></p>
  </div>
    </div>
  )
}

export default Header