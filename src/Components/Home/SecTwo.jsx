 import React from 'react'
 
 function SecTwo() {
   return (
     <div>
        <div className='flex'>
          <div className='w-[50%]'>
          <div className='flex items-center'>
            <div>
            <img src="./assets/playstation.png"/>
          </div>
            <div>
              <h1 className='font-medium text-[49px] '>Playstation 5</h1>
              <p>Incredibly powerful CPUs, GPUs, and an SSD with integrated I/O will redefine your PlayStation experience.</p>
            </div>
            </div>
            <div className='flex'>
              <div className='bg-[#EDEDED] flex items-center'>
              <img src="./assets/airpod.png"/>
              <div>
              <h1 className='font-light text-[29px]'>Apple</h1>
              <h1 className='font-light text-[29px]'>AirPods</h1>
              <h1 className='font-medium text-[29px]'>Max</h1>
              <p className='font-mediumtext-[14px] text-[#909090]'>Computational audio. Listen, it's powerful</p>
              </div>
              </div>
              <div className='bg-[#353535] flex items-center '>
               
                <img src="./assets/airpod2.png"/>
                 <div>
                <h1 className='text-[29px] text-white'>Apple </h1>
                <p className='text-[29px] text-white'>Vision Pro</p>
                <p className='text-[#909090] text-[14px]'>An immersive way to experience entertainment</p>

              </div>
              </div>
            </div>
              
            </div>
            <div className='flex w-[50%] bg-[#EDEDED] items-center '>
            <div className='  px-20 '>
              <h1 className='font-thin text-[64px] leading-16'>Macbook</h1>
              <h1 className='font-medium text-[64px] leading-16'>Air</h1>
              <p className='text-[14px] leading-7 pe-[150px] text-[#909090]'>The new 15‑inch MacBook Air makes room for more of what you love with a spacious Liquid Retina display.</p>
              <button className='text-black border-2 rounded w-[140px] xl:w-[191px] h-[30px] xl:h-[56px] mt-5'>Show Now</button>
            </div>
            <div>
              <img src="./assets/macbook.png" className='py-20'/>
            </div>
            </div>
            </div>
     </div>
   )
 }
 
 export default SecTwo