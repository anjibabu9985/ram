import React, { Component } from 'react';
import logo from './img/logo.png';
import img1 from './img/pic1.png';
import img2 from './img/pic2.png';
import img3 from './img/pic3.png';
import { Button } from 'react';
import './css/second-page.css';
export class Secondscreen extends Component {

 
  openNav() {


    document.getElementById('mySidenav').style.width = "100%"
  }
  closeNav() {
    document.getElementById('mySidenav').style.width = "0%";
  }

  render() {

    return (

      <div>
        <header>
          <div id="mySidenav" class="sidenav">
            <a href="javascript:void(0)" class="closebtn" onClick={this.closeNav}>&times;</a>
            <a href="index.html">Home</a>
            <a href="second-page.html">Page2</a>
            <a href="third.html">Page3</a>
            <a href="four.html">Page4</a>
          </div>
          <nav class="navbar navbar-expand-sm bg-light justify-content-center">
            <ul class="navbar-nav">
              <li style={{ cursor: 'pointer', marginTop: '10px' }} onClick={this.openNav}>&#9776; </li>
              <li class="nav-item">
                <a class="nav-link" style={{ textDecoration: 'none' }} href="#" >About Us</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" style={{ textDecoration: 'none' }} href="#" >Contact Us</a>
              </li>
            </ul>
            <ul class="navbar-nav" style={{ float: 'right' }} >
              <li class="nav">
                <button class="btn btn-primary">SIGN IN</button>
              </li>
              <li class="nav">
                <button class="btn btn-primary">HOST WITH US</button>
              </li>
            </ul>

          </nav>
        </header>

        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <div class="col-md-4 source">
                <input type="text" id="soruceLocation" class="form-control" placeholder="Hyderabad" name="sourcePlace" autocomplete="off	" />
              </div>
              <div class="col-md-8">
                <img src="http://www.joeyrooms.com/l.png" class="img-logo " />
              </div>
            </div>

            <div class="col-md-12">
              <br /><br /><br /><br /><br /><br /><br /><br />
              <div class="col-md-4">
                <img src={img1} class="pic1" />
              </div>
              <div class="col-md-4">
                <img src={img2} class="pic2" />
              </div>
              <div class="col-md-4">
                <img src={img3} class="pic3" />
              </div>
            </div>

          </div>
        </div>
      </div>

    );
  }
}
export default Secondscreen;
