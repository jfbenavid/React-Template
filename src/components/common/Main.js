import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../Home";
import Roster from "../Roster";

export default class Main extends Component{
	render() {
		return (
			<section id="main">
				<Switch>
					<Route exact path='/' component={Home}/>
					<Route path='/roster' component={Roster}/>
				</Switch>
			</section>
		);
	}
}