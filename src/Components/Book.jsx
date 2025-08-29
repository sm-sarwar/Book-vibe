import React from "react";

const Book = ({ book }) => {
  const { bookName, author, image, totalPages, rating, category, publisher } =
    book;
  return (
    <div>
      <div className="card p-5 shadow-sm hover:shadow-lg bg-base-100">
        <div className="p-10 bg-base-300 rounded-lg ">
            <figure className="h-[200px] rounded-lg">
          <img className=""
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
            <div className="badge badge-outline">Fashion</div>
            <div className="badge badge-outline">Products</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Book;
