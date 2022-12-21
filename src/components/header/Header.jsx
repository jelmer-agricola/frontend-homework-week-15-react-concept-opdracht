import React from 'react';
import './Header.css'
import {NavLink} from "react-router-dom";

function Header({children}) {
    return (
        //Header element outer container

        <header className="outer-content-container">
            <div className="inner-content-container">
                <nav>
                    <ul>
                        <li><NavLink to="/">Hottest Posts</NavLink></li>
                        <li><a href="https://www.reddit.com/" target="_blank">Reddit</a></li>
                        <li><a href="https://www.reddit.com/memes" target="_blank">Memes</a></li>


                    </ul>

                </nav>
                <div className="children-content">
                    {children}
                </div>
            </div>
        </header>


    );
}

export default Header;