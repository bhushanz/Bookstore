import React from 'react'


const SideNavbar = ({category,setCategory}) => {

const categories = ["horror", "thriller", "fantasy", "romance", "manga"];
  
  return (

       <div className=' hidden md:block  fixed top-0 left-0 z-50   h-full w-[18%] bg-white px-5 pt-10'>
                  <div className='font-semibold' >
                    My Book Store   
                  </div>
                  <div className='w-full font-semibold  pt-10 capitalize flex flex-col gap-3 text-gray-500 '>
                       {["home",'Books','categories', "about"].map((item ,index)=>(
                           <div  key={index} >
                           <h1>{item}</h1>
               {item ==="categories" && (
              <div  className="flex flex-wrap     gap-4 mt-1   ">
                {categories.map((cat, idx) => (
                  <span
                    key={idx}
                     onClick={()=>setCategory(cat)}
                    className={`px-3 border text-xs hover:scale-105 font-semibold bg-gray-100 ${category ===cat ?"bg-blue-600 text-white":"bg-white text-gray-700 hover:bg-blue-400 hover:text-white"}    py-1  rounded-2xl cursor-pointer`}
                  >
                    {cat}
                  </span>
                ))}
              </div>
            )}

                          </div>
                         
                       ))}
                     
                  </div>
                  
          </div>

  )
}

export default SideNavbar