import React, { Component } from 'react';

export default class Header extends Component{
	render() {
		return (
			<header id="header" className="clearfix" data-ma-theme="blue">
				<ul className="h-inner">
					<li className="hi-logo hidden-xs">
						<a href="index.html">Material Admin</a>
					</li>
				</ul>
			</header>
		);
	}    
}