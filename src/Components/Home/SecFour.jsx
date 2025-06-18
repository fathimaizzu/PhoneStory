 import React from 'react'
 import { CiHeart } from "react-icons/ci";
 function SecFour() {
   return (
     <div className='px-[20px] lg:px-[100px]'>
        <div className='flex gap-5 '>
            <h1 className='text-[18px]'>New Arrival</h1>
            <h1 className='text-[18px]'>Bestseller</h1>
            <h1 className='text-[18px]'>Featured Products</h1>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 '>
            <div className='px-10 bg-[#EDEDED] relative rounded-lg mx-auto mt-[32px] flex flex-col justify-center items-center pt-[40px]' >
              < CiHeart className='absolute right-10 top-6 text-[18px]'/>
                <img src="./assets/iphonepro.png"/>
                <p className='text-[16px] font-medium leading-8'>Apple iPhone 14 Pro Max </p>
                 <p className='text-[16px] font-medium'>128GB Deep Purple </p>
                 <p className='font-semibold text-[24px] leading-18'>$900</p>
                 <button className='font font-mediumtext-[14px] bg-black text-white w-[188px] h-[48px] rounded-lg mb-3'>Buy Now</button>
            </div>

             <div className='px-10  bg-[#EDEDED] relative rounded-lg mx-auto mt-[32px] flex flex-col justify-center items-center pt-[40px]' >
              < CiHeart className='absolute right-10 top-6 text-[18px]'/>
                <img src="./assets/camera1.png"/>
                <p className='text-[16px] font-medium leading-8'>Blackmagic Pocket Cinema </p>
                 <p className='text-[16px] font-medium'>Camera 6k </p>
                 <p className='font-semibold text-[24px] leading-18'>$2535</p>
                 <button className='font font-mediumtext-[14px] bg-black text-white w-[188px] h-[48px] rounded-lg mb-3'>Buy Now</button>
            </div>

             <div className='px-10  bg-[#EDEDED] relative rounded-lg mx-auto mt-[32px] flex flex-col justify-center items-center pt-[40px]' >
              < CiHeart className='absolute right-10 top-6 text-[18px]'/>
                <img src="./assets/watch.png"/>
                <p className='text-[16px] font-medium leading-8'>Apple Watch Series 9 GPS  </p>
                 <p className='text-[16px] font-medium'>41mm Starlight Aluminium  </p>
                 <p className='font-semibold text-[24px] leading-18'>$399</p>
                 <button className='font font-mediumtext-[14px] bg-black text-white w-[188px] h-[48px] rounded-lg mb-3'>Buy Now</button>
            </div>

             <div className='px-10  bg-[#EDEDED] relative rounded-lg mx-auto mt-[32px] flex flex-col justify-center items-center pt-[40px]' >
              < CiHeart className='absolute right-10 top-6 text-[18px]'/>
                <img src="./assets/headphones.png"/>
                <p className='text-[16px] font-medium leading-8'>AirPods Max Silver </p>
                 <p className='text-[16px] font-medium'>Starlight Aluminium  </p>
                 <p className='font-semibold text-[24px] leading-18'>$549</p>
                 <button className='font font-mediumtext-[14px] bg-black text-white w-[188px] h-[48px] rounded-lg mb-3'>Buy Now</button>
            </div>
            
             <div className='px-10  bg-[#EDEDED] relative rounded-lg mx-auto mt-[32px] flex flex-col justify-center items-center pt-[40px]' >
              < CiHeart className='absolute right-10 top-6 text-[18px]'/>
                <img src="./assets/samsung.png"/>
                <p className='text-[16px] font-medium leading-8'>Samsung Galaxy Watch6  </p>
                 <p className='text-[16px] font-medium'>Classic 47mm Black </p>
                 <p className='font-semibold text-[24px] leading-18'>$369</p>
                 <button className='font font-mediumtext-[14px] bg-black text-white w-[188px] h-[48px] rounded-lg mb-3'>Buy Now</button>
            </div>
            
             <div className='px-10  bg-[#EDEDED] relative rounded-lg mx-auto mt-[32px] flex flex-col justify-center items-center pt-[40px]' >
              < CiHeart className='absolute right-10 top-6 text-[18px]'/>
                <img src="./assets/galaxy.png"/>
                <p className='text-[16px] font-medium leading-8'>Galaxy Z Fold5 Unlocked |  </p>
                 <p className='text-[16px] font-medium'>256GB | Phantom Black </p>
                 <p className='font-semibold text-[24px] leading-18'>$1799</p>
                 <button className='font font-mediumtext-[14px] bg-black text-white w-[188px] h-[48px] rounded-lg mb-3'>Buy Now</button>
            </div>
            
             <div className='px-10  bg-[#EDEDED] relative rounded-lg mx-auto mt-[32px] flex flex-col justify-center items-center pt-[40px]' >
              < CiHeart className='absolute right-10 top-6 text-[18px]'/>
                <img src="./assets/galaxyair.png"/>
                <p className='text-[16px] font-medium leading-8'>Galaxy Buds FE </p>
                 <p className='text-[16px] font-medium'>Graphite </p>
                 <p className='font-semibold text-[24px] leading-18'>$99.99</p>
                 <button className='font font-mediumtext-[14px] bg-black text-white w-[188px] h-[48px] rounded-lg mb-3'>Buy Now</button>
            </div>
            
             <div className='px-6  bg-[#EDEDED] relative rounded-lg mx-auto mt-[32px] flex flex-col justify-center items-center pt-[40px]' >
              < CiHeart className='absolute right-10 top-6 text-[18px]'/>
                <img src="./assets/tab.png"/>
                <p className='text-[16px] font-medium leading-8'>Apple iPad 9 10.2" 64GB Wi-Fi </p>
                 <p className='text-[16px] font-medium'>Silver (MK2L3) 2021 </p>
                 <p className='font-semibold text-[24px] leading-18'>$398</p>
                 <button className='font font-mediumtext-[14px] bg-black text-white w-[188px] h-[48px] rounded-lg mb-3'>Buy Now</button>
            </div>

        </div>

     </div>
   )
 }
 
 export default SecFour