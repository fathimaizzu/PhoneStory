import React from 'react'
import { CiTwitter} from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa6";
function Footer() {
  return (
    <div>
       
        <div className=' bg-black pb-[20px]'>
        <div className='grid  grid-cols-1 lg:grid-cols-3 pt-[100px] px-[40px] sm:px-[80px]'>
            <div className='  lg:mx-auto '>
                 <h1 className='font-bold text-white text-[30px] '>The Phone Story</h1>
                 <p className='text-[#CFCFCF] font-medium text-[14px] pt-[20px] lg:pt-[50px]'>We are a residential interior design firm located in Portland. Our boutique-studio offers more than</p>
          
            </div>
            <div className='text-white  mt-8 lg:mt-0 lg:mx-auto space-y-5'>
                <h1 className='font-semibold text-[16px] '>Services</h1>
                <div className='text-[14px] text-[#CFCFCF] space-y-3'>
                <p >Bonus program</p>
                <p>Gift cards</p>
                <p>Credit and payment</p>
                <p>Service contracts</p>
                <p>Non-cash account</p>
                <p>Payment</p>
                </div>
            </div>
            <div className='  mt-8 lg:mt-0 lg:mx-auto space-y-5'>
               <h1 className='font-semibold text-[16px] text-white'>Assistance to the buyer</h1>
                <div className='text-[14px] text-[#CFCFCF] space-y-3'>
                <p>Find an order</p>
                <p>Terms of delivery</p>
                <p>Exchange and return of goods</p>
                <p>Guarantee</p>
                <p>Frequently asked questions</p>
                <p>Terms of use of the site</p>
                </div>
            </div>
        </div>
         <div className='flex mt-[50px] sm:mt-[100px] gap-5 px-[40px] sm:px-[80px] text-[20px] sm:text-[40px] text-white '>
                <CiTwitter className='text-[30px] sm:text-[50px]'/>
                <FaFacebookF />
                <FaTiktok />
                <FaInstagram />
           </div>
           </div>
    </div>
  )
}

export default Footer;