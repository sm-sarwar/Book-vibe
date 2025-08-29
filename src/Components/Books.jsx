import React, { useEffect, useState } from 'react';
import Book from './Book';

const Books = () => {
    const [books, setBooks] = useState([]);

    useEffect(()=>{
        fetch('/public/booksData.json')
        .then(res=> res.json())
        .then(data => {
            console.log(data)
            setBooks(data)
        })
    }, [])
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 px-10 mb-20'>
            {
                books.map(book => <Book book={book} key={book.bookId}></Book>)
            }
        </div>
    );
};

export default Books;