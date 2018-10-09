import React, { Component } from 'react';
import logo from './img/logo.png';
import room from './img/room.jpg';
import { Button } from 'react';
import './css/third.css';

export class Thirdscreen extends Component {

  constructor(props) {
    super(props);
    this.openNav = this.openNav.bind(this);
  }
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
                <a id="us" class="nav-link" style={{ textDecoration: 'none' }} href="#" >Contact Us</a>
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
        <div class="search">
          <div class="container">
            <div class="row">
              <div class="col-md-12">
                <div class="col-md-3">
                  <b>LOCATION</b><br />
                  <input type="text" id="soruceLocation" class="form-control" placeholder="Hyderabad" name="sourcePlace" autocomplete="off" />
                </div>
                <div class="col-md-3">
                  <b>CHECK IN</b><br />
                  <input type="date" id="soruceLocation" class="form-control" name="sourcePlace1" autocomplete="off" />
                </div>
                <div class="col-md-3">
                  <b>CHECK OUT</b><br />
                  <input type="date" id="soruceLocation" class="form-control" name="sourcePlace1" autocomplete="off" />
                </div>
                <div class="col-md-3">
                  <b>GUESTS</b><br />
                  <select id="soruceLocation" class="form-control" placeholder="" name="sourcePlace" autocomplete="off">
                    <option>Guest 1</option>
                    <option>Guest 2</option>
                    <option>Guest 3</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="container-fluid">
          <div class="row">
            <div class="col-md-12 col-sm-12 col-xs-12 col-lg-12">
              <div class="col-md-4 ">
                <div class="col-md-12" style={{ margintop: '10px' }}>
                  <div class="col-md-3">
                    <button class=" btn btn-default" style={{ marginTop: '7px' }} type="button">filter</button>
                  </div>
                  <div class="col-md-3">
                    <button class=" btn btn-default" style={{ marginTop: '7px' }} type="button">sort</button></div>

                  <div class="col-md-4">  <div class="dropdown">
                   
                    <select style={{ marginTop: '7px' }} class="btn btn-default dropdown-toggle" >
                    <option> search by area</option>
                    <option> Kukatpally</option>
                    <option> Ameerpet</option>
                    </select>
                  </div>
                  </div>
                </div>
                <div class="col-md-12" id="leftdiv">
                  <br />
                  <div class="col-md-4">
                    <img src={room} class="img-responsive" />
                  </div>
                  <div class="col-md-8">
                    <p >Borra lakshmi nilayam 201</p>
                    <h5>Shared room in 3BHK independent house in Hakimpet</h5>
                    <h6 id="fur" >Fully Furnished| 1200 sq ft| 3 Beds Available</h6>
                    <h6 >Rent starts from</h6>
                    <h5>7000/bed</h5>

                    <button type="button" class="col-md-offset-8 btn btn-primary" id="view" >view</button>

                  </div>
                </div>

                <div class="col-md-12 " id="leftdiv" >
                  <br />
                  <div class="col-md-4">
                    <img src={room} class="img-responsive" />
                  </div>
                  <div class="col-md-8">
                    <p>Borra lakshmi nilayam 201</p>
                    <h5>Shared room in 3BHK independent house in Hakimpet</h5>
                    <h6 id="fur" >Fully Furnished| 1200 sq ft| 3 Beds Available</h6>
                    <h6 >Rent starts from</h6>
                    <h5>7000/bed</h5>

                    <button type="button" class="col-md-offset-8 btn btn-primary" id="view" >view</button>

                  </div>
                </div>
                <div class="col-md-12 " id="leftdiv" >
                  <br />
                  <div class="col-md-4">
                    <img src={room} class="img-responsive" />
                  </div>
                  <div class="col-md-8">
                    <p>Borra lakshmi nilayam 201</p>
                    <h5>Shared room in 3BHK independent house in Hakimpet</h5>
                    <h6 id="fur" >Fully Furnished| 1200 sq ft| 3 Beds Available</h6>
                    <h6 >Rent starts from</h6>
                    <h5>7000/bed</h5>

                    <button type="button" class="col-md-offset-8 btn btn-primary" id="view" >view</button>

                  </div>
                </div>
              </div>

              <div class="col-md-8" >
                <iframe src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d15224.687175898136!2d78.38991064999999!3d17.4514897!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1538111178144" width="890" height="652" frameborder="0" allowfullscreen></iframe>
              </div>
            </div>
          </div>
        </div>



      </div>

    );
  }
}

export default Thirdscreen;
