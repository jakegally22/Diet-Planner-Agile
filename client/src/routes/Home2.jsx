import React from "react"
import AddRestaurant2 from "../components/AddRestaurant2"
import Header from "../components/Header"
import Restaurant2List from "../components/Restaurant2List"

import RestaurantList from "../components/RestaurantList"

const Home = (props) => {
  return (
    <div>
      <Header/>
      <AddRestaurant2/>
      {/* <RestaurantList /> */}
      <Restaurant2List />

    </div>
  )
};

export default Home;
