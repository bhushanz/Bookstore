// Components/BookDetail.jsx
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchBookDetails } from "../Store/Reducers/BookDetailsSlice";

const BookDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const { items, status, error } = useSelector(state => state.bookDetails);
  console.log(items , "im the detail items here ")

useEffect(() => {
  if (id) {
    console.log("Fetched ID (raw):", id);

    // Clean both unwanted patterns
    const cleanId = id
      .replace(/^_/, "")          // remove leading underscore
      .replace(/^works_/, "")     // remove 'works_' prefix
      .replace(/^works\//, "");   // also remove 'works/' if it appears that way

    console.log("Clean ID for API:", cleanId);

    dispatch(fetchBookDetails(cleanId));
  }
}, [dispatch, id]);


  if (status === "loading") {
    return (
      <p className="text-2xl text-black font-bold flex justify-center mt-10">
        Loading book details...
      </p>
    );
  }

  if (status === "failed") {
    return (
      <p className="text-red-600 text-center mt-10">
        Error loading book details: {error}
      </p>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 p-5 md:p-10">
      {/* Book Title */}
      <h1 className="text-3xl font-bold mb-5">
        {items?.title || "Book Title"}
      </h1>

      {/* Book Description / Info */}
      <div className="bg-white p-5 rounded-lg shadow-md mb-10">
        <p className="text-gray-700">
          {items?.description
            ? typeof items.description === "string"
              ? items.description
              : items.description.value
            : "No description available."}
        </p>
        {/* You can later add author, subjects, published date here */}
      </div>

      {/* Related Books Section */}
      <div>
        <h2 className="text-2xl font-semibold mb-3">Related Books</h2>
        <div className="flex gap-4 overflow-x-auto">
          {/* Placeholder cards */}
          {[1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className="bg-white w-[150px] h-[220px] rounded-lg shadow-md flex items-center justify-center"
            >
              <p className="text-center text-sm text-gray-500">Book {i}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BookDetail;
