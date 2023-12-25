import React from 'react';
import Links from './links/links'; // Fix the casing of the file name
import ColorModes from './colors/Color-modes';

const Navbar = () => {
    return (
        <nav>
            <Links />
            <ColorModes />
        </nav>
    );
};

export default Navbar;