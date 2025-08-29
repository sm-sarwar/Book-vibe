import React from 'react';

import heroBook from '../assets/pngwing 1 (1).png'
import Books from '../Components/Books';

const Home = () => {
    return (
        <div>
            {/* Hero banner  */}
            <section className='md:flex justify-around items-center my-5 bg-[#f3f3f3] md:p-20 p-10 rounded-lg'>
                <div >
                    <h1 className='text-3xl md:text-6xl my-5 max-w-2xl headingFont'>Books to freshen up your bookshelf</h1>
                    <button className='btn bg-[#23BE0A] text-white py-6'>View The List</button>
                </div>
                <div className='mt-10 lg:mt-0'>
                    <img src={heroBook} alt="" />
                </div>
            </section>


            {/* All books  */}
            <section >
                <h1 className='headingFont text-center mt-20 mb-10 text-5xl'>Books</h1>
                <Books></Books>
            </section>
        </div>
    );
};

export default Home;