import React, { Component } from "react";
import { Link } from "react-router-dom";
import MenuNavHeader from "./MenuNavHeader";

export default class Menu extends Component{
	render(){
		return(
			<section className="section">
				<nav className="">
					<MenuNavHeader/>
					<div className="">
						<ul className="">
							<li><Link to='/'><i className="menu-icon fa fa-dashboard"></i>Dashboard</Link></li>
							<h3 className="">UI elements</h3>
							<li className="">
								<a href="#" className=""><i className="menu-icon fa fa-laptop"></i>Components</a>
								<ul className="">
									<li><Link to='/roster'><i className="fa fa-puzzle-piece"></i>Roster</Link></li>
								</ul>
							</li>
						</ul>
					</div>
				</nav>
			</section>
        );
    }
}