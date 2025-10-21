import React from 'react'

const Search = () => {
  return (
    <div className=' fixed top-0 left-0  w-full md:px-10 justify-between md:justify-end  md:h-20 bg-white items-center p-4 flex '>
        <div className='md:hidden'>
            Logo
        </div>
        <div className='w-[60%]  flex items-center justify-between   '>
             <div className='flex items-center    md:w-[75%] border border-gray-300 md:p-2 rounded-4xl'>
                 <input type="text" className=' w-full md:w-[80%] text-xs md:text-sm text-gray-400  outline-none h-full  px-4  ' placeholder='Enter Book name Here ' />
              <button className=' cursor-pointer hover:scale-105  px-2 text-xs  md:px-4 py-2 text-gray-200 rounded-2xl bg-blue-500 '> Search</button>
             </div>

               <div className=' text-xs font-semibold flex  gap-2'>
            <span>cart</span>
            <span>LogIn</span>

        </div>
        </div>
       


         
    </div>
  )
}

export default Search