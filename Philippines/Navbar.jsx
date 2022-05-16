import React from 'react'
import { Link } from 'react-router-dom'


function Navbar() {
 
    return (
        <nav>
            <ul>
                <div id="flagWrapper">
                    <li>
                        <a href="#">
                            <Link className='links' to='/'>
                                Home
                            </Link>
                        </a>
                    </li>
                    <div id="blue"></div>
                    <div id="red"></div>
                    <div id="white"></div>
                    <span id="sun"></span>
                    <span class="star-1"></span>
                    <span class="star-2"></span>
                    <span class="star-3"></span>
                </div>
                <div id="flagWrapper">
                    <li>
                        <a href="#">
                            <Link className='links' to='/history'>
                                History
                            </Link>
                        </a>
                    </li>
                    <div id="blue"></div>
                    <div id="red"></div>
                    <div id="white"></div>
                    <span id="sun"></span>
                    <span class="star-1"></span>
                    <span class="star-2"></span>
                    <span class="star-3"></span>
                </div>
            </ul>
        </nav>
    )
}

export default Navbar