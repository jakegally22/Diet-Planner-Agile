import React from "react"
import AddRestaurant from "../components/AddRestaurant"
import AddRestaurant2 from "../components/AddRestaurant2"
import Header from "../components/Header"
import RestaurantList from "../components/RestaurantList"

const Home = (props) => {
  return (
    <div>
      <Header/>
      <AddRestaurant/>
      {/* <AddRestaurant2/> */}
      <RestaurantList />
    </div>
  )
};

export default Home;
