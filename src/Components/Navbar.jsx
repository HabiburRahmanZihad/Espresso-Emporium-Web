import React from 'react';
import { Link } from 'react-router';

const Navbar = () => {

    return (
        <Link to={'/'} >
            <div className="navbar bg-[url('/assets/more/15.jpg')] bg-cover bg-center bg-no-repeat flex  items-center justify-center gap-4  py-4">

                <img className='w-14 md:w-18' src="/assets/more/logo1.png" alt="" />
                <p className="text-5xl md:text-6xl  text-center rancho text-[#FFFFFF]">Espresso Emporium</p>

            </div>
        </Link>

    );
};

export default Navbar;