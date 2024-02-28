import React, { useState } from 'react';
import NavLinks from '../Navbar/NavLinks';
import './navbar.css'; 
const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);

    function handleClick() {
        setIsOpen(!isOpen);
    }

    return (
        <nav className={`navbar ${isOpen ? 'open' : ''}`}>
            <div className="hamburger-menu" onClick={handleClick}>
                <div className={`line ${isOpen ? 'open' : ''}`}></div>
                <div className={`line ${isOpen ? 'open' : ''}`}></div>
                <div className={`line ${isOpen ? 'open' : ''}`}></div>
            </div>
            <div className={`nav-links ${isOpen ? 'open' : ''}`}>
                <NavLinks />
            </div>
        </nav>
    );
};

export default NavBar;
