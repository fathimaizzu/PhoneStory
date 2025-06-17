 import React from 'react'
 
 function SecOne() {
   return (
     <div className='bg-black w-full flex  flex-col-reverse sm:flex-row sm:justify-center sm:gap-15 px-10 sm:px-20 lg:px-0'>
        <div className=' sm:pt-20 lg:pt-50 mb-3 sm:mb-0'>
            <h1 className='font-semibold text-[25px] text-[#FFFFFF]'>Pro.Beyond.</h1>
            <h1 className='text-[30px] md:text-[40px] lg:text-[50px] xl:text-[96px] text-[#FFFFFF] '>IPhone 16 Pro</h1>
            <p className='font-medium text-[12px] md:text-[18px] text-[#909090]'>Created to change everything for the better. For everyone</p>
          <button className='text-white border-2 rounded w-[140px] xl:w-[191px] h-[30px] xl:h-[56px] mt-5'>Shop Now</button>
        </div>
        <div>
            <img src="/assets/iphone.png" className=' w-[200px] sm:w-auto '/>
           
        </div>
       
     </div>
   )
 }
 
 export default SecOne