import React from 'react';
import '../stylesheets/fooitem.css';
import {findNutrient, deleteFood} from '../utils/helpers';

const MealFoodItem = (props) => {

  const baseSrc = "https://spoonacular.com/cdn/ingredients_100x100/";

  const removeFood = () => {
    const updated = deleteFood(props.data, props.meal, props.food, props.order);
    props.update(updated);
  }

  return (
    <div  className="fooditem">
      <div className="fooditem-left">
        {
          props.food.image ? <img src={baseSrc+props.food.image} alt={props.food.name} /> : null
        }
        <div className="fooditem-text">
          <h2>{props.food.name}</h2>
          <h3>{findNutrient(props.food, "Calories").amount}cal | {props.food.amount}{props.food.unit}</h3>
        </div>
      </div>
      <button onClick={() => removeFood()}>-</button>
    </div>
  );
}

export default MealFoodItem;
