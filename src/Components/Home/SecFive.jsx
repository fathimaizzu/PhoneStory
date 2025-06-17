 import React from 'react'
 
 function SecFive() {
   return (
     <div>
        <div className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 justify-center items-center   p-10 2xl:p-30'>
            <div className='w-[360] h-[640px] '>
          <img src="./assets/group1.png" className='h-[330px]'/>
                <div className='px-[20px]'>
                <p className='font-light text-[33px] leading-30'>Popular Products</p>
                <p className='text-[14px] font-medium text-[#909090]'>iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.</p>
                <button className='font font-mediumtext-[14px] bg-white text-black border-1 w-[188px] h-[48px] rounded-lg mb-3 mt-10'>Shop Now</button>
             </div>
            </div>

             <div className='w-[360] h-[640px] '>
          <img src="./assets/group2.png"  className='h-[330px]'/>
         
                <div className='px-[20px]'>
                <p className='font-light text-[33px] leading-30'>Ipad Pro</p>
                <p className='text-[14px] font-medium text-[#909090]'>iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use</p>
                <button className='font font-mediumtext-[14px] bg-white text-black border-1 w-[188px] h-[48px] rounded-lg mb-3 mt-10'>Shop Now</button>
             </div>
            </div>


          <div className='bg-[#EAEAEA] w-[360] h-[640px]'>
          <img src="./assets/group3.png"  className='h-[330px]'/>
                <div className='px-[20px]'>
                <p className='font-light text-[33px] leading-30'>Samsung Galaxy </p>
                <p className='text-[14px] font-medium text-[#909090]'>iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.</p>
                <button className='font font-mediumtext-[14px] bg-white text-black border-1 w-[188px] h-[48px] rounded-lg mb-3 mt-10'>Shop Now</button>
             </div>
            </div>


                        <div className='bg-[#2C2C2C]  w-[360] h-[640px] '>
          <img src="./assets/group4.png"  className='h-[330px]'/>
                <div  className='px-[20px]'>
                <p className='font-light text-[33px] text-white leading-30'>Macbook Pro</p>
                <p className='text-[14px] font-medium text-[#909090]'>iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.</p>
                <button className='font font-mediumtext-[14px] bg-white text-black border-1 w-[188px] h-[48px] rounded-lg mb-3 mt-10'>Shop Now</button>
             </div>
            </div>

        </div>
     </div>
   )
 }
 
 export default SecFive