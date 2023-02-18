import React from "react";

function Body2() {
    return(
    <div>
    <nav class="w3-sidebar w3-collapse w3-white w3-animate-left" style={{zIndex:1,width:250,height:300}} id="mySidebar"><br/>
    <div class="w3-container w3-row">
      <div class="w3-col s4">
        <img src="/w3images/avatar2.png" alt="not working" class="w3-circle w3-margin-right" style={{width:46}}/>
      </div>
      <div class="w3-col s8 w3-bar">
        <span>Welcome, <strong>Mike</strong></span><br/>
        <a href="/#" class="w3-bar-item w3-button"><i class="fa fa-envelope"></i></a>
        <a href="/#" class="w3-bar-item w3-button"><i class="fa fa-user"></i></a>
        <a href="/#" class="w3-bar-item w3-button"><i class="fa fa-cog"></i></a>
      </div>
    </div>
    <hr/>
    <div class="w3-container">
      <h5>Dashboard</h5>
    </div>
    <div class="w3-bar-block">
      <a href="/#" class="w3-bar-item w3-button w3-padding-16 w3-hide-large w3-dark-grey w3-hover-black" onclick="w3_close()" title="close menu"><i class="fa fa-remove fa-fw"></i>  Close Menu</a>
      <a href="/#" class="w3-bar-item w3-button w3-padding w3-blue"><i class="fa fa-users fa-fw"></i>  Today at a Glance</a>
      <a href="/#" class="w3-bar-item w3-button w3-padding"><i class="fa fa-eye fa-fw"></i>  Big Picture Screenshot</a>
      <a href="/#" class="w3-bar-item w3-button w3-padding"><i class="fa fa-users fa-fw"></i>  Input Data</a>
      <a href="/#" class="w3-bar-item w3-button w3-padding"><i class="fa fa-bullseye fa-fw"></i>  Other Details</a>
  
    </div>
  </nav>
  </div>
    );

}

export default Body2;

