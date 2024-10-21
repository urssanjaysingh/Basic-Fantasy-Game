import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <nav>
            <ul>
                <li>
                    <NavLink className="nav-link" to="/">
                        All Players
                    </NavLink>
                </li>
                <li>
                    <NavLink className="nav-link" to="/create-team">
                        Create Team
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
