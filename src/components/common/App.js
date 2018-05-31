import React, { Component } from 'react';
import { Link } from "react-router-dom";
//import swal from 'sweetalert';
import Main from './Main'
import Menu from './Menu'
import Header from './Header'
import Footer from './Footer'

class App extends Component {
	render() {
		return (
			<div>
				<Header/>
				<Main/>
				<Footer/>
			</div>
		);
	}
}

export default App;
