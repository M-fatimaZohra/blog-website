import React from 'react';

function Footer() {

    const currentYear = new Date().getFullYear()
    const since = currentYear-2023

    const years = since>1 ? ` years`: `st year`;

    

    return (
        <div className="text-center p-4 bg-gray-200 text-[10px] sm:text-[16px]">
            <p>&copy; {new Date().getFullYear()} Dwell Days. All rights reserved. </p>
            <p>{since}{years} of excellence.</p>
        </div>
    );
}

export default Footer;
