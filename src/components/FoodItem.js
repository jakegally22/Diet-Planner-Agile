import React from 'react';
import '../stylesheets/fooitem.css';
import {Link} from "react-router-dom";

const FoodItem = (props) => {

  const getNumId = (id) => {
    const arr = id.split('-');
    return arr[1];
  }

  return (
    <div  className="fooditem">
      <Link to={`/meal/${props.meal}/search/${getNumId(props.id)}`}>
      <div className="fooditem-left">
        {
          props.imgSrc ? <img src={props.imgSrc} alt={props.title} /> : null
        }
        <div className="fooditem-text">
          <h2>{props.title}</h2>
        </div>
      </div>
      </Link>
    </div>
  );
}

export default FoodItem;