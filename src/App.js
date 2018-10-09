import React, { Component } from 'react';
import logo from './img/logo.png';
import './App.css';
import './css/style.css';

class App extends Component {
  render() {
    return (
      <div class="container">
        <header>
          <nav class="navbar navbar-expand-sm bg-light justify-content-center">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link" href="#" style={{ textdecoration: 'none' }}>About Us</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#" style={{ textdecoration: 'none' }}>Help</a>
              </li>
            </ul>
          </nav>
        </header>
        <div class="row">
          <div class="col-md-12">
            <img src={logo} class="img-logo" />
            <p>Set Your Location <br /><span>Find Your Ideal Home</span></p>
            <input type="text" id="soruceLocation" class="form-control" placeholder="Select Location" name="sourcePlace" autocomplete="off" data-icon="2555" />
          </div>
        </div>
      </div>
    );
  }
}
export default App;
