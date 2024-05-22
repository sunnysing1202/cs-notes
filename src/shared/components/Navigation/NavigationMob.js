import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import "./Navigation.css"

const NavigationMob = () => {
    return (
		<>
		<nav class="nav-mobile">
			<div class="navbar">
			  <div class="container nav-container">
				  <input class="checkbox" type="checkbox" name="" id="" />
				  <div class="hamburger-lines">
					<span class="line line1"></span>
					<span class="line line2"></span>
					<span class="line line3"></span>
				  </div>  
				<div class="logo">
				  <h1>Navbar</h1>
				</div>
				<div class="menu-items">
				  <li>
					<NavLink to="/">
						Home
					</NavLink>
				  </li>
				  <li>
				  <NavLink to="/web">
						Web Development
					</NavLink>
				  </li>
				  <li>
				  <NavLink to="/cn">
						Computer Network
					</NavLink>
				  </li>
				  <li>
				  <NavLink to="/os">
						operating System
					</NavLink>
				  </li>
				  <li>
				  <NavLink to="/cloud">
						Cloud Computing
					</NavLink>
				  </li>
				  
				</div>
			  </div>
			</div>
		  </nav>

		  
		  </>

    );
}

export default NavigationMob;