import React, {useState} from 'react';
import {Link} from "react-router-dom";
import {personDefIcon, searchIcon, shopIcon} from "../ExportFiles";

const Navbar = () => {
    const [cssHamburger, setCssHamburger] = useState('navbar__burgerBtn')
    const clickHandle = () => {
        if (cssHamburger === 'navbar__burgerBtn__isActive') {
            setCssHamburger('navbar__burgerBtn');
        } else {
            setCssHamburger('navbar__burgerBtn__isActive')
        }

    }
    return (
        <div className='navbar'>
            <div className='navbar_container'>
                <div className='navbar_menu'>
                    <div className={cssHamburger} onClick={clickHandle}>
                        <span />
                    </div>
                </div>
                <div className='navbar_logo'>
                    <img src='https://i.ibb.co/jg3PtLQ/Animeijin-2.png' alt='Animeijin'/>
                </div>
                <div className='navbar_links'>
                    <Link to='*'>{personDefIcon}</Link>
                    <Link to='*'>{searchIcon}</Link>
                    <Link to='/'>{shopIcon}</Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;