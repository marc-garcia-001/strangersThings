import React from "react";

const NavBar = () => {
    return (
        <div>
            <ul id="nav">
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">FAQ</a></li>
                <li><a href="#">Contact</a></li>
                <input type="text" placeholder="search"></input>
                <button>Search</button>
            </ul>
        </div>
    )
}

export default NavBar;