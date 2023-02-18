// import React from "react";
import React from "react";
import Header2 from "../components/Header2"
import Footer from "../components/Footer"
import SideBar from "../components/SideBar"
import DietForm from "../components/DietForm"
import WalkForm from "../components/WalkForm"

// import { useState } from "react";
// import { Data } from "./Data";
// import PieChart from "./Backup/PieChart";
// import 'chart.js/auto'


function DietCalculator() {

    return(

<div>
<Header2/>
<SideBar/>

<div>

<h1 class="w3-xxxlarge w3-text-black" style={{marginLeft:300,marginTop:75}}><b>Diet Calculator Page</b></h1>

<DietForm/>
  

<WalkForm/>






</div>

<Footer/>

</div>
        
    );

}

export default DietCalculator;

