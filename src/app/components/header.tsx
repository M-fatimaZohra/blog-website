import Link from 'next/link';
import React from 'react';

import { Bebas_Neue } from "next/font/google";

const bebasNeue = Bebas_Neue({
    weight: "400",
    subsets: ['latin'],
});
const Header= () => {
    return (
        <header className='flex  flex-col md:flex-row  justify-between items-center p-4 bg-gray-800 text-white w-full '>
          <div><h1 className='text-4xl'style={bebasNeue.style}><Link href="/">Dwell Days</Link></h1></div>
            <div className='flex justify-between items-center md:text-[20px] text-[16px]'> 
                <ul className='flex justify-between items-center md:space-x-4 space-x-1'>
                    <li className='hover:bg-white hover:text-black scale-100 hover:scale-110 rounded-2xl duration-200 py-2 px-4 '><Link href="/">Home</Link></li>
                    <li className='hover:bg-white hover:text-black scale-100 hover:scale-110 rounded-2xl duration-200 py-2 px-4 '><Link href="/About">About</Link></li>
                    <li className='hover:bg-white hover:text-black scale-100 hover:scale-110 rounded-2xl duration-200 py-2 px-4 '><Link href="/Blog">Blog</Link></li>
                </ul>
            </div>
        </header>
    );
};

export default Header;