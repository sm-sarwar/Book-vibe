import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

const MainLayout = () => {
    return (
        <div>
            <header>
                <nav className='max-w-screen-xl mx-auto'>
                    <Navbar></Navbar>
                </nav>
            </header>
            <main className='max-w-screen-xl mx-auto'>
                <Outlet></Outlet>
            </main>
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default MainLayout;