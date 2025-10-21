import SideNavbar from './Components/SideNavbar'
import Search from './Components/Search';
import CardContainer from './Components/CardContainer';
import { useState } from 'react';

const App = () => {
  const [category , setCategory] =useState('horror')
  return (
    <div className='w-full min-h-screen flex  bg-gray-100 '>
       <SideNavbar  categorie={category} setcategorie={setCategory} />
        <div className='h-full w-full  md:ml-[18%]  md:w-[90%]  bg-gray-100  flex flex-col   justify-center '>
                 <Search  />
                 <CardContainer  categorie={category} setcategorie={setCategory}/>
          </div>
    </div>
  )
}

export default App