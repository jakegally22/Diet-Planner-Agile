// import React from "react";
import React from "react";
import Header2 from "../components/Header2"
import Footer from "../components/Footer"
//import Body2 from "../components/Body2"
import LoginForm from "../components/LoginForm";
import SideBar from "../components/SideBar";

// import { useState } from "react";
// import { Data } from "./Data";
// import PieChart from "./Backup/PieChart";
// import 'chart.js/auto'


// body,h1,h2,h3,h4,h5 {font-family: "Poppins", sans-serif}
// body {font-size:16px;}
// .w3-half img{margin-bottom:-6px;margin-top:16px;opacity:0.8;cursor:pointer}
// .w3-half img:hover{opacity:1}


  
  const mystyle = {
    color: "white",
    backgroundColor: "DodgerBlue",
    padding: "10px",
    fontFamily: "Arial",
    body: {fontFamily: "Poppins", font:"sansSerif",fontSize:16,height:100},
    html: {height:100},
    w3HalfImg:{marginBottom:-6,marginTop:16,opacity:0.8,cursor:"pointer",hover:{opacity:1}},

  };


function LoginPage() {

  

    return(

<div>

<Header2/>
{/* <Body2/> */}

<div>

<SideBar/>


<header class="w3-container w3-top w3-hide-large w3-red w3-xlarge w3-padding">
  <a href="javascript:void(0)" class="w3-button w3-red w3-margin-right" onclick="w3_open()">☰</a>
  <span>Nutrition King App</span>
</header>


<div class="w3-overlay w3-hide-large" onclick="w3_close()" style={mystyle.pointer} title="close side menu" id="myOverlay"></div>

<h1 class="w3-xxxlarge w3-text-black" style={{marginLeft:300,marginTop:75}}><b>Login Page</b></h1>


<LoginForm/>


{/* <div id="modal01" class="w3-modal w3-black" style={{paddingTop:0}} onclick={this.style.display='none'}> */}
    {/* <span class="w3-button w3-black w3-xxlarge w3-display-topright">×</span> */}
    <div class="w3-modal-content w3-animate-zoom w3-center w3-transparent w3-padding-64">
      <img id="img01" class="w3-image"></img>
      <p id="caption"></p>
    </div>
  {/* </div> */}


<div class="w3-container" id="services" style={{marginLeft:250,marginTop:75}}>
</div>

<div class="w3-container" id="about us" style={{marginLeft:300,marginTop:75}}>
    <h1 class="w3-xxxlarge w3-text-red"><b>About Us</b></h1>
    <hr style={{width:50,border:5,fontColor:"solidRed"}} class="w3-round"></hr>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
  </div>



</div>
<Footer/>
</div>


        
    );

}

export default LoginPage;

