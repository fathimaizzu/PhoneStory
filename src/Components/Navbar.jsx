 import React from 'react'
 import { Link } from 'react-router-dom'
 import { CiSearch } from "react-icons/ci";
 function Navbar() {
   return (
     <div className='flex justify-between items-center w-full   px-4 lg:px-20 py-5'>
        <h1 className='font-bold text-black text:[10px] sm:text-[50px]'>The Phone Story</h1>
        <div className=' sm:flex items-center bg-[#F5F5F5] rounded-lg px-2 gap-3 hidden'>
    <CiSearch />
        <input type = 'search' placeholder='Search' className='bg-[#F5F5F5]  placeholder:text-[10px] md:placeholder:text-[16px] w-[150px] lg:w-[200px] xl:w-[372px] h-[30px] lg:h-[56px] outline-none'/>
</div>
<div className=' text-[10px] lg:text-[16px] flex gap-5 sm:gap-10 lg:gap-20'>
        <Link to={''}>Home</Link>
         <Link to={''}>About us</Link>
          <Link to={''}>Contact</Link>
       </div>    
     </div>
   )
 }
 
 export default Navbar