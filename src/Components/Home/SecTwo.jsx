 import React from 'react'
 
 function SecTwo() {
   return (
     <div>
        <div className=' flex flex-col lg:flex-row'>
          <div className='lg:w-[50%]'>
          <div className='flex items-center'>
            <div>
            <img src="./assets/playstation.png" />
          </div>
            <div>
              <h1 className='font-medium  text-[20px] lg:text-[30px] xl:text-[49px] '>Playstation 5</h1>
              <p className=' font-medium text-[8px] lg:text-[12px] xl:text-[14px] text-[#909090]'>Incredibly powerful CPUs, GPUs, and an SSD with integrated I/O will redefine your PlayStation experience.</p>
            </div>
            </div>
            <div className='w-full flex' >
              <div className='bg-[#EDEDED] w-full flex items-center'>
              <img src="./assets/airpod.png "className=' w-[50px] lg:w-auto'/>
              <div>
              <h1 className='font-light  text-[15px] lg:text-[20px] xl:text-[29px]'>Apple</h1>
              <h1 className='font-light  text-[15px] lg:text-[20px] xl:text-[29px]'>AirPods</h1>
              <h1 className='font-medium  text-[15px] lg:text-[20px] xl:text-[29px]'>Max</h1>
              <p className='font-medium  text-[8px] lg:text-[12px] xl:text-[14px] text-[#909090]'>Computational audio. Listen, it's powerful</p>
              </div>
              </div>
              <div className='bg-[#353535] w-full flex items-center '>
               
                <img src="./assets/airpod2.png" className=' w-[50px] lg:w-auto'/>
                 <div>
                <h1 className=' text-[15px] lg:text-[20px] xl:text-[29px] text-white'>Apple </h1>
                <p className='  text-[15px] lg:text-[20px] xl:text-[29px] text-white'>Vision Pro</p>
                <p className='text-[#909090]   text-[8px] lg:text-[12px] xl:text-[14px]'>An immersive way to experience entertainment</p>

              </div>
              </div>
            </div>
              
            </div>
            <div className='flex lg:w-[50%] bg-[#EDEDED] items-center '>
            <div className='  px-20 '>
              <h1 className='font-thin text-[30px] xl:text-[64px] leading-10 xl:leading-20'>Macbook</h1>
              <h1 className='font-medium text-[30px] xl:text-[64px] leading-10 xl:leading-20'>Air</h1>
              <p className='text-[12px] xl:text-[14px] leading-4 sm:leading-7  lg:pe-[100px] xl:pe-[150px] text-[#909090]'>The new 15‑inch MacBook Air makes room for more of what you love with a spacious Liquid Retina display.</p>
              <button className='text-black border-2 rounded w-[140px] xl:w-[191px] h-[30px] xl:h-[56px] mt-5 text-[12px] xl:text-[14px] mb-4'>Show Now</button>
            </div>
            <div>
              <img src="./assets/macbook.png" className='py-20 w-[500px] lg:w-auto' />
              
            </div>
            </div>
            </div>
     </div>

   )
 }
 
 export default SecTwo