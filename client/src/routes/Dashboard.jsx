// import React from "react";
import React from "react";
import Header2 from "../components/Header2"
import Footer from "../components/Footer"
import SideBar from "../components/SideBar"

// import { useState } from "react";
// import { Data } from "./Data";
// import PieChart from "./Backup/PieChart";
// import 'chart.js/auto'


function Dashboard() {

    return(

<div>
<Header2/>
<SideBar/>


<div class="w3-main" style={{marginLeft:320, marginTop:43}} className="App">




{/* <PieChart chartData={chartData} /> */}

<header class="w3-container" style={{paddingTop:22}}>
  <h2><b><i class="fa fa-dashboard"></i> My Dashboard</b></h2>
  <h3><b><i class="fa fa-dashboard" ></i> Today At a Glance</b></h3>
</header>



<div class="w3-row-padding w3-margin-bottom">
  <div class="w3-quarter">
    <div class="w3-container w3-red w3-padding-16">
      <div class="w3-left"><i class="fa fa-comment w3-enlarge"></i></div>
      <div class="w3-right">
        <h3>1875 Cal</h3>
      </div>
      <div class="w3-clear"></div>
      <h4>Calories Today</h4>
    </div>
  </div>
  <div class="w3-quarter">
    <div class="w3-container w3-blue w3-padding-16">
      <div class="w3-left"><i class="fa fa-eye w3-enlarge"></i></div>
      <div class="w3-right">
        <h3>5767 Steps</h3>
      </div>
      <div class="w3-clear"></div>
      <h4>Steps Today</h4>
    </div>
  </div>
  <div class="w3-quarter">
    <div class="w3-container w3-teal w3-padding-16">
      <div class="w3-left"><i class="fa fa-share-alt w3-enlarge"></i></div>
      <div class="w3-right">
        <h3>1.5 liters</h3>
      </div>
      <div class="w3-clear"></div>
      <h4>Water Today</h4>
    </div>
  </div>
  <div class="w3-quarter">
    <div class="w3-container w3-orange w3-text-white w3-padding-16">
      <div class="w3-left"><i class="fa fa-users w3-enlarge"></i></div>
      <div class="w3-right">
        <h3>34</h3>
      </div>
      <div class="w3-clear"></div>
      <h4>Connections</h4>
    </div>
    
  </div>
  
</div>


<div class="w3-panel">

  <h3><b><i class="fa fa-dashboard"></i> Big Picture Screenshot</b></h3>
  <div class="w3-row-padding" style={{margin:0 -16}}>
    <div class="w3-third">

    </div>

<canvas id="myChart" style={{"width":"100%",maxWidth:800}}></canvas>

<br/>
<canvas id="myChart2" style={{"width":"100%",maxWidth:800}}></canvas>
<br/>
<canvas id="myChart3" style={{"width":"100%",maxWidth:800}}></canvas>
<br/>



  </div>
</div>
<hr/>
<div class="w3-container">
  <h3><b><i class="fa fa-dashboard"></i>Other Details</b></h3>
  <h5>General Stats</h5>
  <p>Calorie Improvements</p>
  <div class="w3-grey">
    <div class="w3-container w3-center w3-padding w3-green" style={{"width":"45%"}}>+45%</div>
  </div>

  <p>Steps Improvements</p>
  <div class="w3-grey">
    <div class="w3-container w3-center w3-padding w3-orange" style={{"width":"80%"}}>80%</div>
  </div>

  <p>Water Consumption Improvements</p>
  <div class="w3-grey">
    <div class="w3-container w3-center w3-padding w3-red" style={{"width":"75%"}}>75%</div>
  </div>
</div>
<hr/>

<hr/>
<hr/>

<div class="w3-container">
<h2>Diet Calculator Tool</h2>
<button onclick="https://dieta1.w3spaces.com/dietappv1.html">Click Here</button>

<h2>Meal Selection Tool</h2>
<button onclick="https://dieta1.w3spaces.com/dietappv1.html">Click Here</button>
</div>
<br/>






</div>

<Footer/>

</div>
        
    );

}

export default Dashboard;

