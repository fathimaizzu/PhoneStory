 import React from 'react'
  import { CiHeart } from "react-icons/ci";
 function SecSix() {
   return (
    <div className='px-[50px] sm:px-[80px] 2xl:px-[120px]'>
        <div className='font-medium text-[18px] sm:text-[24px] py-[50px]'>
            Discounts up to -50%
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 mb-5'>
                <div className='px-10 bg-[#EDEDED] relative rounded-lg mx-auto mt-[32px] flex flex-col justify-center items-center pt-[40px]' >
                  < CiHeart className='absolute right-10 top-6 text-[18px]'/>
                    <img src="./assets/iphone14.png"/>
                    <p className='text-[16px] font-medium leading-8'>Apple iPhone 14 Pro 512GB  </p>
                     <p className='text-[16px] font-medium'>Gold (MQ233) </p>
                     <p className='font-semibold text-[24px] leading-18'>$1437</p>
                     <button className='font font-mediumtext-[14px] bg-black text-white w-[188px] h-[48px] rounded-lg mb-3'>Buy Now</button>
                </div>

                                <div className='px-10 bg-[#EDEDED] relative rounded-lg mx-auto mt-[32px] flex flex-col justify-center items-center pt-[40px]' >
                  < CiHeart className='absolute right-10 top-6 text-[18px]'/>
                    <img src="./assets/headphone1.png"/>
                    <p className='text-[16px] font-medium leading-8'>AirPods Max Silver</p>
                     <p className='text-[16px] font-medium'>Starlight Aluminium  </p>
                     <p className='font-semibold text-[24px] leading-18'>$549</p>
                     <button className='font font-mediumtext-[14px] bg-black text-white w-[188px] h-[48px] rounded-lg mb-3'>Buy Now</button>
                </div>

                                <div className='px-10 bg-[#EDEDED] relative rounded-lg mx-auto mt-[32px] flex flex-col justify-center items-center pt-[40px]' >
                  < CiHeart className='absolute right-10 top-6 text-[18px]'/>
                    <img src="./assets/applewatch.png"/>
                    <p className='text-[16px] font-medium leading-8'>Apple Watch Series 9 GPS  </p>
                     <p className='text-[16px] font-medium'>41mm Starlight Aluminium </p>
                     <p className='font-semibold text-[24px] leading-18'>$399</p>
                     <button className='font font-mediumtext-[14px] bg-black text-white w-[188px] h-[48px] rounded-lg mb-3'>Buy Now</button>
                </div>

                                <div className='px-7 bg-[#EDEDED] relative rounded-lg mx-auto mt-[32px] flex flex-col justify-center items-center pt-[40px]' >
                  < CiHeart className='absolute right-10 top-6 text-[18px]'/>
                    <img src="./assets/iphone1tb.png"/>
                    <p className='text-[16px] font-medium leading-8'>Apple iPhone 14 Pro 1TB Gold </p>
                     <p className='text-[16px] font-medium'>(MQ2V3) </p>
                     <p className='font-semibold text-[24px] leading-18'>$1499</p>
                     <button className='font font-mediumtext-[14px] bg-black text-white w-[188px] h-[48px] rounded-lg mb-3'>Buy Now</button>
                </div>
                </div>
    </div>
    
   )
 }
 
 export default SecSix