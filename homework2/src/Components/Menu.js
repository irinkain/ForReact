import React from 'react';
import './Menu.css';
import { Link } from 'react-router-dom';

function MenuComponent(){
    return(
        <header className='header'>
            <div className='header-wrapper'>
                <div className='header-container'>
                    <ul>
                        <li>
                            <Link to='/All'>All</Link>
                        </li>
                        <li>
                            <Link to='/Countries'>Countries</Link>
                        </li>
                        <li>
                            <Link to='/Country'>Country</Link>
                        </li>
                        <li>
                            <Link to='/States'>States</Link>
                        </li>
                        <li>
                            <Link to='/John'>John HOpkins CSSE Data</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    )
}
export default MenuComponent;
