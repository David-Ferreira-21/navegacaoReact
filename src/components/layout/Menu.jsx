import './Menu.css'
import React from 'react'

import { Link } from 'react-router-dom'

const Menu = props => (
    <aside className='Menu'>
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/param/123">Param #01</Link>
                </li>
                <li>
                    <Link to="/param/works">Param #02</Link>
                </li>
                <li>
                    <Link to="/NotFound">Not Found</Link>
                </li>
                <li>
                    <Link to="/About">About</Link>
                </li>
            </ul>
        </nav>
    </aside>
)

export default Menu