import React, { Component } from 'react';
import logo from '../static/images/logo.svg';
import '../static/styles/App.css';
import Main from './Main'
import { Link } from "react-router-dom";


class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <nav>
            <ul>
              <li><Link to='/'>Home</Link></li>
              <li><Link to='/roster'>Roster</Link></li>
            </ul>
          </nav>
        </header>
        <Main/>
      </div>
    );
  }
}

export default App;
