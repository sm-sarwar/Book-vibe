import React from "react";
import { Link } from "react-router";

const Book = ({ book }) => {
  const { bookName, author, image, category, bookId} =book;
  return (
    <div>
      <div className="card p-5 shadow-sm hover:shadow-lg bg-base-100">
        <div className="p-10 bg-base-300 rounded-lg ">
            <figure className=" rounded-lg">
          <img className="W-80 h-60"
            src={image}
            alt={bookName}
          />
        </figure>
        </div>
        <div className="card-body">
          <h2 className="card-title">
            {bookName}
            <div className="badge badge-soft badge-info">{category}</div>
          </h2>
          <p className="text-sm text-stone-500">
            {author}
          </p>
          <div className="card-actions justify-end">
            <Link to={`/books/${bookId}`} className="btn btn-soft btn-accent bg-[#50B1C9] text-white">
              Show Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Book;
