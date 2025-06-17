import React from 'react'

function SecThree() {
  return (
    <div  className=' px-[10px] sm:px-[80px] py-[20px] sm:py-[80px]'>
        <div>
        <h1 className='font-medium text-[24px]'>Browse By Category</h1>
        </div>
        <div className='grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-6 justify-between gap-1 md:gap-4 mt-[30px] '>
             <div className=' bg-[#EDEDED] rounded-lg w-[160px] h-[128px] flex flex-col justify-center items-center '>
              <img src="./assets/phones.png" className='w-[48px] h-[48px] '/>
              <p className='text-[16px] font-medium text-black  '>Phones</p>
            </div>
            <div className='bg-[#EDEDED] rounded-lg w-[160px] h-[128px] flex flex-col justify-center items-center'>
              <img src="./assets/smartwatch.png" className='w-[48px] h-[48px] '/>
              <p className='text-[16px] font-medium text-black  '>Smart Watches</p>
            </div>
             <div className='bg-[#EDEDED] rounded-lg w-[160px] h-[128px] flex flex-col justify-center items-center '>
              <img src="./assets/camera.png" className='w-[48px] h-[48px] '/>
              <p className='text-[16px] font-medium text-black  '>Cameras</p>
            </div>
             <div className='bg-[#EDEDED] rounded-lg w-[160px] h-[128px] flex flex-col justify-center items-center'>
              <img src="./assets/headphone.png" className='w-[48px] h-[48px] '/>
              <p className='text-[16px] font-medium text-black  '>Headphones</p>
            </div>
             <div className='bg-[#EDEDED] rounded-lg w-[160px] h-[128px] flex flex-col justify-center items-center'>
              <img src="./assets/computer.png" className='w-[48px] h-[48px] '/>
              <p className='text-[16px] font-medium text-black  '>Smart Watches</p>
            </div>
             <div className='bg-[#EDEDED] rounded-lg w-[160px] h-[128px] flex flex-col justify-center items-center '>
              <img src="./assets/gaming.png" className='w-[48px] h-[48px] '/>
              <p className='text-[16px] font-medium text-black  '>Gaming</p>
            </div>

             
         </div>
    </div>
  )
}

export default SecThree