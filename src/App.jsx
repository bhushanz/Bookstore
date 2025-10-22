import SideNavbar from './Components/SideNavbar'
import Search from './Components/Search';
import CardContainer from './Components/CardContainer';
import {  useState } from 'react';
import { Routes, Route  } from 'react-router-dom';
import BookDetails from './Components/BookDetail';


const App = () => {
    
  const [category , setCategory] =useState('horror')
   
  return (
    <div className='w-full min-h-screen flex  bg-gray-100 '>
       <SideNavbar  category={category} setCategory={setCategory} />
        <div className='h-full w-full  md:ml-[18%]  md:w-[90%]  bg-gray-100  flex flex-col   justify-center '>
                 <Search category={category}  />
           <Routes>
          <Route path='/' element={<CardContainer category={category} />} />
            <Route path="/book/:id" element={<BookDetails />} />
        </Routes>

                
          </div>
    </div>
  )
}

export default App