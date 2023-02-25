import React, { useState, useEffect } from "react";
import "../stylesheets/mealitem.css";
import { Link } from "react-router-dom";

const MealItem = (props) => {
  const [meal, setMeal] = useState(props.meal);
  const [totalCal, setTotalCal] = useState(props.totalCal);

  const options = {
    breakfast: {
      title: "Breakfast",
      emoji: "🥐",
    },
    lunch: {
      title: "Lunch",
      emoji: "🍛",
    },
    dinner: {
      title: "Dinner",
      emoji: "🍜",
    },
    snacks: {
      title: "Snacks",
      emoji: "🍪",
    },
  };

  useEffect(() => {
    setMeal(props.meal);
    setTotalCal(props.totalCal);
  }, [props]);

  return (
    <div className="mealitem">
      <div className="mealitem-top">
        <h2 className="mealitem-emoji">{options[meal].emoji}</h2>
        <Link to={`/meal/${meal}`}>
          <div className="mealitem-text">
            <h2>{options[meal].title}</h2>
          </div>
        </Link>
        <Link to={`/meal/${meal}/search`}>
          <button>Add</button>
        </Link>
      </div>
      <div className="mealitem-bottom">
        <h2>{totalCal} Calories</h2>
      </div>
    </div>
  );
};

export default MealItem;
