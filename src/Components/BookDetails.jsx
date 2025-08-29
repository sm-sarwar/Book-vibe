import React from 'react';
import { useLoaderData, useParams } from 'react-router';

const BookDetails = () => {

    const {bookId} = useParams()

    const data = useLoaderData()

    const book = data.find(book => book.bookId === parseInt(bookId))

    const {bookName, author, image, category, totalPages, review, tags} = book;
    return (
        <div>
            <section className='grid grid-cols-1 md:grid-cols-2 md:gap-10'>
               <div className='my-10'>
                <figure className='text-center p-16 bg-base-200 flex justify-center items-center rounded-lg'>
                    <img className='W-80 rounded-lg' src={image} alt="" />
                </figure>
               </div>

               <div className='space-y-4 p-5'>
                <h2 className='text-4xl font-bold mt-10 headingFont'>{bookName}</h2>
                <p className='text-stone-700'>By: {author}</p>
                <div className="divider"></div>
                <p className='headingFont text-lg'>{category}</p>
                <div className="divider"></div>
                <p className='text-stone-700'><span className='text-lg font-semibold headingFont'>Review: </span>{review}</p>
                <p className='headingFont font-bold text-lg'>tag:
                    <span>
                        {
                            tags.map(tag => <span className=' mx-2 badge badge-soft badge-accent text-green-500'> #{tag}</span>)
                        }
                    </span>
                </p>
                <div className="divider"></div>
                <p>Number of pages: <span className='md:ml-4 ml-0 font-bold'>{totalPages}</span></p>
                <div className='flex gap-5'>
                    <button className='btn btn-outline btn-accent hover:bg-[#50B1C9] hover:text-white'>Read</button>
                    <button className='btn btn-active btn-accent bg-[#50B1C9] text-white'>Wishlist</button>
                </div>
               </div>
            </section>
        </div>
    );
};

export default BookDetails;