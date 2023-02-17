import Restaurant2Finder from "../apis/Restaurant2Finder";
import React, { useContext, useState } from "react";
//import { Restaurants2Context } from "../context/Restaurants2Context";

import { RestaurantsContext } from "../context/RestaurantsContext";
//This line above breaks code when 2
//This is the issue. If restuarntContext, works, but Restuarant2 breaks.
//import { Restaurants2Context } from "../context/Restaurants2Context";

const AddRestaurant2 = () => {
  //This single line below here breaks it when 2
  const {addRestaurant2} = useContext(RestaurantsContext)
  const [name2, setName2] = useState("");
  const [calories2, setcalories2] = useState("");
  //const [price, setPrice] = useState(1);

  const isDisabled = name2.trim().length === 0 || calories2.trim().length === 0

  const handleSubmit = (e) => {
    e.preventDefault();
    Restaurant2Finder.post('/addtable2', {
      name2: name2,
      calories2,
      //_range: price
    })
    .then(function (response) {
      addRestaurant2(response.data.data)
      setName2("");
      //setPrice(0);
      setcalories2("");
    })
    .catch(function (error) {
      console.log(error);
    });

    
  };
  return (
    <div className="mb-4">
      <form onSubmit={handleSubmit} action="">
        <div className="form-row m-3">
          
          
          
          <div className="col">
            <input
              type="text"
              value={name2}
              className="form-control"
              onChange={(e) => setName2(e.target.value)}
              placeholder="name2"
            />
          </div>

          
          <div className="col">
            <input
              type="text"
              value={calories2}
              className="form-control"
              onChange={(e) => setcalories2(e.target.value)}
              placeholder="calories"
            />
          </div>


          {/* <div className="col">
            <select
              className="custom-select mr-sm-2"
              onChange={(e) => setPrice(e.target.value)}
              value={price}
            >
              <option disabled>Price Range</option>
              <option value="1">$</option>
              <option value="2">$$</option>
              <option value="3">$$$</option>
              <option value="4">$$$$</option>
              <option value="5">$$$$$</option>
            </select>
          </div> */}


          <button type="submit" disabled={isDisabled} className="col-auto btn btn-primary">ADD calories</button>
        </div>
      </form>
    </div>
  );
};

export default AddRestaurant2;
