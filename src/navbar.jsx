import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {

return(

    <div className="navbar">
        <ul className="navbar_list">
            <Link to="/">
                <li className="nav_li_contact">Home</li>
            </Link>

            <Link to="/me">
                <li className="nav_li_me">Me</li>
            </Link>

            <Link to="/competances">
                <li className="nav_li_project">Skills</li>
            </Link>
        </ul>
    </div>

)
}