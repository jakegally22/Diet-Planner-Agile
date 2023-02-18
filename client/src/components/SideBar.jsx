import React from "react";

function Footer() {
  return (
<div>


<nav class="w3-sidebar w3-red w3-collapse w3-top w3-large w3-padding" style={{zIndex:3,width:270,fontWeight:"bold"}}  id="mySidebar"><br/>
  <a href="javascript:void(0)" onclick="w3_close()" class="w3-button w3-hide-large w3-display-topleft" sstyle={{width:100,fontSize:22}}
>Close Menu</a>

  <div class="w3-container">
    <h3 class="w3-padding-64"><b>Nutrition<br/>King App</b></h3>

  </div>
  <div class="w3-bar-block">
  <a href="/LoginPage" onclick="w3_close()" class="w3-bar-item w3-button w3-hover-white">Login Page</a> 
    <a href="/Dashboard" onclick="w3_close()" class="w3-bar-item w3-button w3-hover-white">Diet Dashboard</a> 
    <a href="/DietCalculator" onclick="/DietCalculator" class="w3-bar-item w3-button w3-hover-white">Diet Calculator</a> 
    <a href="/RecipePage" onclick="/DietCalculator" class="w3-bar-item w3-button w3-hover-white">Recipes</a> 
    <a href="/ExercisesPage" onclick="/DietCalculator" class="w3-bar-item w3-button w3-hover-white">Exercise</a> 
    <a href="/FoodsPage" onclick="/DietCalculator" class="w3-bar-item w3-button w3-hover-white">Foods</a> 
    <a href="RestaurantFinderPage" onclick="w3_close()" class="w3-bar-item w3-button w3-hover-white">RestaurantFinder<br/>Postgres Testing</a> 

  </div>
</nav>





    </div>
  );
}

export default Footer;
