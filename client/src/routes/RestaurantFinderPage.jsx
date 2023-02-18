

// import React from "react";
import React from "react";
import Header2 from "../components/Header2"
import Footer from "../components/Footer"
import SideBar from "../components/SideBar"
import AddRestaurant from "../components/AddRestaurant"
import Header from "../components/Header"
import RestaurantList from "../components/RestaurantList"


function RestaurantFinderPage() {

    return(

<div >
<Header2/>
<SideBar/>

<div style={{marginLeft:320, marginTop:43}}>
      <Header/>
      <AddRestaurant/>
      <RestaurantList />


</div>

<Footer/>

</div>
        
    );

}

export default RestaurantFinderPage;
