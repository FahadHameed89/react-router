import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css'

function Nav ()
{
    return (
        <nav className="navigator">
            <h2>To-Do App Navigation</h2>
            <ul>
                <li>
                    <Link to="/">
                    Home (To-Do's List)
                    </Link>
                </li>
                <li>
                    <Link to="/form">
                    Form (Add a New To-Do)
                    </Link>
                </li>
            </ul>
        </nav>
    );
}

export default Nav;

