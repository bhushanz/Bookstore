import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchBooks } from '../Store/Reducers/BookSlice';

const CardContainer = () => {
    const dispatch = useDispatch();
    const {items ,status,error} =useSelector((state)=>state.books);
    

    useEffect(()=>{
        dispatch(fetchBooks());
    },[dispatch])

 if (status === "loading") return <p>Loading books...</p>;
  if (status === "failed") return <p>Error: {error}</p>;
  return (
    <div className='min-h-100  bg-gray-300  mt-15  w-full md:pt-10  md:p-4 pt-8 flex md:gap-5 gap-2 flex-wrap justify-center '>
        <h1 className='text-xl font-bold px-5 py-2 border  '>{items[0]?.subject?.[0] }</h1>
     <div className='flex flex-wrap justify-center gap-8'>
    {items.map((book, i) => (
      <div key={i} className="bg-white h-[45vh] w-[45%] md:h-[50vh] md:w-[20%] p-3 shadow-md rounded-lg overflow-hidden">
        <img
          src={`https://covers.openlibrary.org/b/id/${book.cover_id}-M.jpg`} // cover image
          alt={book.title}
          className="w-full h-[75%] object-cover object-center rounded"
        />
        <h2 className="font-semibold text-xs mt-2">{book.title}</h2>
        <p className="text-xs text-gray-600">
          {book.authors.map(a => a.name).join(", ")}
        </p>
      </div>
    ))}
  </div>
    </div>
  )
}

export default CardContainer