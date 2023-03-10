import React, { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Restaurant2Finder from "../apis/Restaurant2Finder";
import { RestaurantsContext } from "../context/RestaurantsContext";
import { Spinner } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
//import StarRating from "./StarRating";

const Restaurant2List = (props) => {
  const history = useHistory();
  const [isLoading, setIsLoading] = useState(true);
  const { restaurants, setRestaurants, deleteRestaurant } = useContext(
    RestaurantsContext
  );

  const handleUpdate = (e, id) => {
    e.stopPropagation();
    history.push(`/restaurants/${id}/update`);
  };

  const handleRestaurantSelect = (id) => {
    history.push(`/restaurants/${id}`);
  };

  // const renderRating = (rating, count) => {
  //   if (!count) {
  //     return <span className="text-warning">0 review</span>;
  //   } else {
  //     return (
  //       <>
  //         <StarRating rating={rating} />
  //         <span className="text-warning ml-1">({count})</span>
  //       </>
  //     );
  //   }
  // };

  const handleDelete = (e, id) => {
    e.stopPropagation();
    Restaurant2Finder.delete(`/${id}`)
      .then(function (response) {
        deleteRestaurant(id);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  useEffect(() => {
    Restaurant2Finder.get("/")
      .then((response) => {
        setRestaurants(response.data.data);
      })
      .then(() => {
        setIsLoading((prevState) => !prevState);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [setRestaurants]);

  if (isLoading) {
    return (
      <div className="d-flex justify-content-center">
        <Spinner animation="border" role="status">
          <span className="sr-only">Loading...</span>
        </Spinner>
      </div>
    );
  }

  return (
    <div className="table-responsive">
      <table className="table table-striped table-hover table-dark">
        <thead>
          <tr className="bg-primary">
            <th scope="col">Restaurant</th>
            <th scope="col">Calories</th>
            {/* <th scope="col">Price Range</th> */}
            {/* <th scope="col">Ratings</th> */}
            <th scope="col">Edit</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          {restaurants.map(
            // ({ id, name, calories, price_range, count, average_rating }) => (
              // ({ id, name, price_range, count, average_rating }) => (

              // ({ id, name, count, average_rating }) => (
              ({ id, name,calories}) => (
              <tr onClick={() => handleRestaurantSelect(id)} key={id}>
                <th scope="row">{name}</th>
                <td>{calories}</td>
                {/* <td>{"$".repeat(price_range)}</td> */}
                {/* <td>{renderRating(average_rating, count)}</td> */}
                <td>
                  <button
                    onClick={(e) => handleUpdate(e, id)}
                    className="btn btn-warning"
                  >
                    Update
                  </button>
                </td>
                <td>
                  <button
                    onClick={(e) => handleDelete(e, id)}
                    className="btn btn-danger"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            )
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Restaurant2List;
