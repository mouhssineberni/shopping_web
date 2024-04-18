import React, { useState, useEffect } from 'react';

function Slider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Dummy slide data
  const slides = [
    { },
    { text: 'Slide 2' },
    { text: 'Slide 3' }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 3000); // Change slide every 3 seconds (3000 milliseconds)

    return () => clearInterval(interval);
  }, []); // Empty dependency array ensures effect runs only once on component mount

  return (
    <div className="relative overflow-hidden">
      <div className="flex transition-transform duration-500" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {slides.map((slide, index) => (
            <div key={index} className="w-full flex-shrink-0">
                <div className='text-center text-3xl font-bold pt-4 pb-0 '>NEW SET-UP </div>
                  <div className={`h-64 flex justify-center items-center my-[100px]  ${slide.bgColor}`}>
                    <div className="max-w- rounded overflow-hidden shadow-lg">
                    </div>
                    <div class=" xl:ml-[50px] sm:ml-[50px] py-8 px-8 max-w-[450px] mx-auto bg-white rounded-xl shadow-lg space-y-2 sm:py-4  sm:items-center sm:space-y-0 sm:space-x-6 mr-5">
                      <img class="block mx-auto h-[150px] rounded-full sm:mx-0 sm:shrink-0" src="\public\buro2.png" alt="" />
                      <div class="text-center space-y-2 sm:text-left">
                        <div class="space-y-0.5">
                          <p class="text-lg text-blue-700 font-semibold">
                          BUEDT
                          </p>
                          <p class="text-slate-500 font-medium">
                          This stylish and functional desk is perfect for any home or office. Crafted from high-quality materials,
                           it offers durability and ample workspace to boost productivity and organization.
                          </p>
                        </div>
                        <button class="px-4 py-1 text-sm text-black font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-black hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">Buy Now</button>
                      </div>
                    </div>
                    <div class="sm:hidden xl:ml-[50px] xl:block lg:block py-8 px-8 max-w-[450px] mx-auto bg-white rounded-xl shadow-lg space-y-2 sm:py-4  sm:items-center sm:space-y-0 sm:space-x-6 mr-5">
                      <img class="block mx-auto h-[150px] rounded-full sm:mx-0 sm:shrink-0" src="\public\buro4.png" alt="" />
                      <div class="text-center space-y-2 sm:text-left">
                        <div class="space-y-0.5">
                          <p class="text-lg text-blue-700 font-semibold">
                          BUEDT
                          </p>
                          <p class="text-slate-500 font-medium">
                          This stylish and functional desk is perfect for any home or office. Crafted from high-quality materials,
                           it offers durability and ample workspace to boost productivity and organization.
                          </p>
                        </div>
                        <button class="px-4 py-1 text-sm text-black font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-black hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">Buy Now</button>
                      </div>
                    </div>
                    <div class="sm:hidden xl xl:ml-[50px] xl:block lg:block py-8 px-8 max-w-[450px] mx-auto bg-white rounded-xl shadow-lg space-y-2 sm:py-4  sm:items-center sm:space-y-0 sm:space-x-6 mr-[50px]">
                      <img class="block mx-auto h-[150px] rounded-full sm:mx-0 sm:shrink-0" src="\public\buro3.png" alt="" />
                      <div class="text-center space-y-2 sm:text-left">
                        <div class="space-y-0.5">
                          <p class="text-lg text-blue-700 font-semibold">
                          BUEDT
                          </p>
                          <p class="text-slate-500 font-medium">
                          This stylish and functional desk is perfect for any home or office. Crafted from high-quality materials,
                           it offers durability and ample workspace to boost productivity and organization.
                          </p>
                        </div>
                        <button class="px-4 py-1 text-sm text-black font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-black hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">Buy Now</button>
                      </div>
                    </div>    
                  </div>
              </div>
            ))}
      </div>
      
    </div>
  );
}

export default Slider;
