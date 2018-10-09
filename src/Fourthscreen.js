import React, { Component } from 'react';
import logo from './img/logo.png';
import room from './img/room.jpg';
import './css/header.css';
import './css/map.css';
import './css/tab.css';

export class Fourthscreen extends Component {

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
            <div id="mySidenav" class="sidenav" style={{zIndex:'9'}}>
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
  
          <div class="row">
        <div class="col-md-12 col-sm-12 col-xs-12 col-lg-12">
           
                <div class="col-md-12" style={{marginTop: '10px'}}>
                    <div class="col-md-1 col-md-offset-1">
                    <button class=" btn btn-default" type="button">filter</button>
                    </div>
                    <div class="col-md-1">
                        <button class=" btn btn-default" type="button">sort</button></div>
                 
                <div class="col-md-3 col-md-offset-6" id="dropdown1">  
                 <div class="dropdown">
            <button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown"><i class="fa fa-search" aria-hidden="true"></i>&nbsp;search by area
            <span class="caret"></span></button>
            <ul class="dropdown-menu">
              <li><a href="#">Ameerpet</a></li>
              <li><a href="#">Madhapur</a></li>
              <li><a href="#">Hitech City</a></li>
            </ul>
              </div>
            </div>
                </div>
                    </div>
            </div>
            <div class="col-md-12 col-sm-12 col-xs-12 col-lg-12">
                
             <div class="col-md-6 ">
                    <div class="col-md-12 " id="leftdiv" >
                        <br/>
                <div class="col-md-4 image1">
                    <img src={room} class="img-responsive" />
                </div>
                    <div class="col-md-8">
                        <div class="col-md-12">
                    <h5 class="m15241">15241 Gen X Banjara by 1589 Hotels&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 2 reviews &nbsp;&nbsp;&nbsp; <label class="lable1" >5/5</label></h5>  
                      <h6>Area:Banjara hills area</h6>
                        </div>
                        <div class="col-md-12 col-md-offset-0" style={{textalign: 'right'}}>
                           <p class="color0" > save $349303 </p>
                           <p>23566</p>
                      <button type="button" id="view">BookNow</button>
                         <p class="line1">sign up to get discount of upto $29</p>
                        </div>
                         
                    </div>
                    </div>
                  <div class="col-md-12 " id="leftdiv" >
                        <br/>
                <div class="col-md-4 image1">
                    <img src={room} class="img-responsive" />
                </div>
                    <div class="col-md-8">
                        <div class="col-md-12">
                    <h5 class="m15241">15241 Gen X Banjara by 1589 Hotels&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 2 reviews &nbsp;&nbsp;&nbsp; <label class="lable1" >5/5</label></h5>  
                      <h6>Area:Banjara hills area</h6>
                        </div>
                        <div class="col-md-12 col-md-offset-0" style={{textalign: 'right'}}>
                           <p class="color0" > save $349303 </p>
                           <p>23566</p>
                      <button type="button" id="view">BookNow</button>
                         <p class="line1">sign up to get discount of upto $29</p>
                        </div>
                         
                    </div>
                    </div>
                  <div class="col-md-12 " id="leftdiv" >
                        <br/>
                <div class="col-md-4 image1">
                    <img src={room} class="img-responsive" />
                </div>
                    <div class="col-md-8">
                        <div class="col-md-12">
                    <h5 class="m15241">15241 Gen X Banjara by 1589 Hotels&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 2 reviews &nbsp;&nbsp;&nbsp; <label class="lable1" >5/5</label></h5>  
                      <h6>Area:Banjara hills area</h6>
                        </div>
                        <div class="col-md-12 col-md-offset-0" style={{textalign: 'right'}}>
                           <p class="color0" > save $349303 </p>
                           <p>23566</p>
                      <button type="button" id="view">BookNow</button>
                         <p class="line1">sign up to get discount of upto $29</p>
                        </div>
                         
                    </div>
                    </div>           
            </div>
               
            <div class="col-md-6" >
           <h4 id="compare">COMPARE</h4>
                <div class="col-md-12" id="border1">
               <div class="col-md-12">
     
                    <div class="col-md-12">
                        <div class="tab" role="tabpanel">
                          
                            <ul class="nav nav-tabs" role="tablist">
                                <li role="presentation" class="active"><a href="#Section1" aria-controls="home" role="tab" data-toggle="tab">CATEGORY</a></li>
                                <li role="presentation"><a href="#Section2" aria-controls="profile" role="tab" data-toggle="tab">B/W HOTELS</a></li>

                            </ul>
                          
                            <div class="tab-content tabs">
                            <div role="tabpanel" class="tab-pane fade in active" id="Section1">
                                      <div class="col-md-12">
                                    <div class="col-md-6">

                                            <div class="dropdown" id="dropdown2">
                                                <button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown"><i class="fa fa-search" aria-hidden="true"></i>&nbsp;Select Hotel
                                                <span class="caret"></span></button>
                                                <ul class="dropdown-menu">
                                                  <li><a href="#">Hotel_1</a></li>
                                                  <li><a href="#">Hotel_3</a></li>
                                                  <li><a href="#">Hotel_2</a></li>
                                                </ul>

                                        </div>
                                    </div>
                                    <div class="col-md-6">

                                            <div class="dropdown">
                                                <button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown"><i class="fa fa-search" aria-hidden="true"></i>&nbsp;Select Hotel
                                                <span class="caret"></span></button>
                                                <ul class="dropdown-menu">
                                                  <li><a href="#">Hotel_1</a></li>
                                                  <li><a href="#">Hotel_3</a></li>
                                                  <li><a href="#">Hotel_2</a></li>
                                                </ul>
                                            </div>

                                    </div>
                                </div>

                                    <div class="col-md-12" id="dropdown3">

                                            <div class="dropdown" style={{textalign: 'center'}}>
                                                <button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown"><i class="fa fa-search" aria-hidden="true"></i>&nbsp;Compare by all
                                                <span class="caret"></span></button>
                                                <ul class="dropdown-menu">
                                                  <li><a href="#">Price</a></li>
                                                  <li><a href="#">Room</a></li>
                                                  <li><a href="#">Food</a></li>
                                                </ul>
                                            </div>

                                    </div>


             <div >
                       <table class="table table-bordered">
                <thead  >
                  <tr >
                    <th></th>
                    <th class="hotel1">HOTEL_1</th>
                    <th class="hotel1">HOTEL_2</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td  class="align">Price</td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td  class="align">Wifi</td>
                   <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td  class="align" >Food</td>
                   <td></td>
                    <td></td>
                  </tr>
                    <tr>
                    <td  class="align">Review</td>
                    <td></td>
                    <td></td>
                  </tr>
                    <tr >
                    <td  class="align">Rating</td>
                    <td></td>
                    <td></td>
                  </tr>
                   <tr>
                    <td  class="align">Category</td>
                    <td></td>
                    <td></td>
                  </tr>
                    
                </tbody>
              </table>       
            </div>    


                                </div>
                            <div role="tabpanel" class="tab-pane fade" id="Section2">
                                           <div class="col-md-12">
                                    <div class="col-md-6">

                                            <div class="dropdown" id="dropdown2">
                                                <button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown"><i class="fa fa-search" aria-hidden="true"></i>&nbsp;Select Hotel
                                                <span class="caret"></span></button>
                                                <ul class="dropdown-menu">
                                                  <li><a href="#">Hotel_1</a></li>
                                                  <li><a href="#">Hotel_3</a></li>
                                                  <li><a href="#">Hotel_2</a></li>
                                                </ul>

                                        </div>
                                    </div>
                                    <div class="col-md-6">

                                            <div class="dropdown">
                                                <button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown"><i class="fa fa-search" aria-hidden="true"></i>&nbsp;Select Hotel
                                                <span class="caret"></span></button>
                                                <ul class="dropdown-menu">
                                                  <li><a href="#">Hotel_1</a></li>
                                                  <li><a href="#">Hotel_3</a></li>
                                                  <li><a href="#">Hotel_2</a></li>
                                                </ul>
                                            </div>

                                    </div>
                                </div>

                                    <div class="col-md-12" id="dropdown3">

                                            <div class="dropdown" style={{textalign: 'center'}}>
                                                <button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown"><i class="fa fa-search" aria-hidden="true"></i>&nbsp;Compare by all
                                                <span class="caret"></span></button>
                                                <ul class="dropdown-menu">
                                                  <li><a href="#">Price</a></li>
                                                  <li><a href="#">Room</a></li>
                                                  <li><a href="#">Food</a></li>
                                                </ul>
                                            </div>

                                    </div>


             <div >
                       <table class="table table-bordered">
                <thead  >
                  <tr >
                    <th></th>
                    <th class="hotel1">HOTEL_1</th>
                    <th class="hotel1">HOTEL_2</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td  class="align">Price</td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td  class="align">Wifi</td>
                   <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td  class="align" >Food</td>
                   <td></td>
                    <td></td>
                  </tr>
                    <tr>
                    <td  class="align">Review</td>
                    <td></td>
                    <td></td>
                  </tr>
                    <tr >
                    <td  class="align">Rating</td>
                    <td></td>
                    <td></td>
                  </tr>
                   <tr>
                    <td  class="align">Category</td>
                    <td></td>
                    <td></td>
                  </tr>
                   
                </tbody>
              </table>       
            </div>    
 


                                </div>

                            </div>
                        </div>

                    </div>
                </div>
 
             
                 
            
  
                </div>
            </div>
            </div>
        </div>
  
  
  
      
  
      );
    }
  }
  
  export default Fourthscreen;
  