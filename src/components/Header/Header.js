import React from 'react';
import './Header.css';
import logo from './logo.png'

const Header = () => {
    return (
        <div>
            <div className="logo">
                <img src={logo} alt="" />
            </div>
            <div>
                <h5>Astronuts To Team Up for your next Space Expedition</h5>
            </div>
            <nav className='nav'>
                <a href="/home">Home</a>
                <a href="/Craft">Space Crafts</a>
                <a href="/Create Mission">Create Mission</a>
            </nav>
        </div>
    );
};

export default Header;