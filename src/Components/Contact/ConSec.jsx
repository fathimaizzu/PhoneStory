import React from 'react'
import { BiSolidPhoneCall } from "react-icons/bi";
import { MdEmail } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";

function ConSec() {
  return (
    <div>
        <div className='mt-[50px]'>
            <h1 className='flex justify-center font-bold text-[40px]'>Contact Us</h1>
            <p className='flex justify-center font-medium text-[18px] text-[#717171]'>Any question or remarks? Just write us a message!</p>
        </div>
        <div className='flex  justify-center py-20 '>
    <div className='flex mb-2'>
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
    <div className='px-20  flex-row gap-3 '>
        <h1>Name:</h1>
        <input type="text" placeholder='Enter Your Name' className='w-[300px] h-[50px] border-2 rounded-lg text-center'/>
        <h1>Address:</h1>
        <input type="text" placeholder='Address' className='w-[300px] h-[50px] border-2 rounded-lg text-center'/>
         <h1>Phone No:</h1>
        <input type="text" placeholder='Phone Number' className='w-[300px] h-[50px] border-2 rounded-lg text-center'/>
        <h1>Message</h1>
        <input type="text" placeholder='Leave a message...' className='w-[300px] h-[130px] border-2 rounded-lg text-center'/>
       
      
    </div>
    </div>
    </div>
   
  )
}

export default ConSec