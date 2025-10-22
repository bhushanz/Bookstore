import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBooks } from "../Store/Reducers/BookSlice";
import { useNavigate } from "react-router-dom";

const CardContainer = ({ category }) => {
   const handleClick = (book) => {
  if (!book.key) return;
  const cleanKey = book.key.replace(/^\/+/, ""); // remove leading slashes
  navigate(`/book/${cleanKey}`);
};
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { items, status, error } = useSelector((state) => state.books);

    useEffect(() => {
        if (category) {
            dispatch(fetchBooks({ type: "category", value: category }));
        } else {
            dispatch(fetchBooks({ type: "category", value: "horror" })); // default
        }
    }, [dispatch, category]);


    if (status === "loading")
        return (
            <p className="text-2xl text-black font-black flex mt-50 justify-center">
                Loading books...
            </p>
        );

    if (status === "failed") return <p>Error: {error}</p>;


    return (
        <div className="min-h-100 bg-gray-200 mt-15 w-full md:pt-10 md:p-4 pt-8 flex md:gap-5 px-1 flex-wrap">
            <h1 className="md:text-xl text-sm uppercase h-8 font-bold px-5 text-gray-800 inline-block">
                {items.length > 0 ? items[0].subject?.[0] || items[0].title : ""}
            </h1>

            <div className="flex flex-wrap justify-center md:gap-8 gap-4 mt-2">
                {items.map((book, i) => {
                    // Safely handle both API types
                    const title = book.title || "Untitled";
                    const authors =
                        book.authors?.map((a) => a.name).join(", ") ||
                        book.author_name?.join(", ") ||
                        "Unknown Author";
                    const coverId = book.cover_id || book.cover_i;
                    const coverUrl = coverId
                        ? `https://covers.openlibrary.org/b/id/${coverId}-M.jpg`
                        : "https://via.placeholder.com/150?text=No+Image";

                    return (
                        <div
                            key={i}
                            onClick={() => handleClick(book)}
                            className="bg-white h-[45vh] w-[45%] md:h-[50vh] md:w-[20%] p-3 shadow-md rounded-lg overflow-hidden"
                        >
                            <img
                                src={coverUrl}
                                alt={title}
                                className="w-full h-[75%] object-cover object-center rounded"
                            />
                            <h2 className="font-semibold text-xs mt-2">{title}</h2>
                            <p className="text-xs text-gray-600">{authors}</p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default CardContainer;
