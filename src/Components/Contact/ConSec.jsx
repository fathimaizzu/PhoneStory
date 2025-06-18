import React from 'react'
import { BiSolidPhoneCall } from "react-icons/bi";
import { MdEmail } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";

function ConSec() {
  return (
    <div>
        <div className='mt-[50px]'>
            <h1 className='text-center font-bold text-[20px] sm:text-[30px] lg:text-[40px]'>Contact Us</h1>
            <p className='text-center font-medium text-[12px] sm:text-[15px] lg:text-[18px] text-[#717171]'>Any question or remarks? Just write us a message!</p>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2  justify-center  py-20  '>
    <div className='flex pl-0 md:pl-13 lg:pl-40 xl:pl-80 px-80 w-[50%] items-center mx-auto'>
        <div className='bg-[#1A1A1A] p-[50px] rounded-xl mb-5'>
            <h1 className='font-semibold text-[28px] text-white'>Contact Information</h1>
            <p className='text-[18px] text-[#C9C9C9] '>Say something to start a live chat!</p>
            <div className='flex text-white mt-20 space-y-5 gap-3'>
            <BiSolidPhoneCall className=' text-[28px] '/> 
            <p>+91 8606198906</p>
            </div>
            <div className=' flex text-white space-y-5 gap-3'>
                <MdEmail className=' text-[25px] '/>
                <p>phonestory@gmail.com</p>
            </div>
             <div className=' flex text-white space-y-5 gap-3'>
                < IoLocationSharp className=' text-[25px] '/>
                <p>Kaichoondy Junction,Alappuzha,688001</p>
            </div>
        </div>

    </div>
    <div className='px-8 sm:px-10 xl:px-20  flex-row gap-3 w-[50%]  leading-9  '>
        <h1>Name:</h1>
        <input type="text" placeholder='Enter Your Name' className='w-[300px] h-[50px] border-2 rounded-lg text-center'/>
        <h1>Address:</h1>
        <input type="text" placeholder='Address' className='w-[300px] h-[50px] border-2 rounded-lg text-center'/>
         <h1>Phone No:</h1>
        <input type="text" placeholder='Phone Number' className='w-[300px] h-[50px] border-2 rounded-lg text-center'/>
        <h1>Message</h1>
        <input type="text" placeholder='Leave a message...' className='w-[300px] h-[150px] border-2 rounded-lg text-center'/>
       
      
    </div>
    </div>
    </div>
   
  )
}

export default ConSec