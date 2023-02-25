import React, {useState, useEffect} from 'react';
import '../stylesheets/search.css';
import {Link, useRouteMatch} from "react-router-dom";
import {SPOONACULAR_API_KEY} from "../utils/constants.js";
import FoodItem from '../components/FoodItem'

const Search = (props) => {
  let meal = useRouteMatch('/meal/:id/search').url.split('/');
  meal=meal[meal.length-2];
  const [search, setSearch] = useState('');
  const baseSrc = "https://spoonacular.com/cdn/ingredients_100x100/";
  const myDispatchResults = props.dispatchResults;

  useEffect(() => {
    let input = document.getElementById("searchbar");
    const pressedEnter = (event) => {
      if (event.keyCode === 13) {
        event.preventDefault();
        setSearch(input.value);
      }
    }
    input.addEventListener("keyup", pressedEnter);
    return () => {
      return input.removeEventListener("keyup", pressedEnter);
    };
  }, []);


  useEffect(() => {
    let abortController = new AbortController();
    let aborted = abortController.signal.aborted;
    if (search!==''){
      async function fetchResults() {
        let response = await fetch(`https://api.spoonacular.com/food/ingredients/search?apiKey=${SPOONACULAR_API_KEY}&query=${search}&number=25`);
        let data = await response.json();
        aborted = abortController.signal.aborted;
        if (aborted === false) {
          myDispatchResults({type: 'update', payload: data.results});
        }
      }
      fetchResults();
    }
    return () => {
      abortController.abort();
    };
  }, [search, myDispatchResults])


  return (
    <div  className="search">
      <div className="search-top">
        <div className="search-nav">
          <Link to={`/meal/${meal}`}>
            <button>Back</button>
          </Link>
          <h2>{meal}</h2>
        </div>
        <input type="text" placeholder="Search Food" id="searchbar" />
      </div>
      <div className="search-items">
        {
          props.results.map((item) => {
            return <FoodItem key={item.id} id={'foodId-'+item.id} title={item.name} imgSrc={baseSrc+item.image} meal={meal}/>
          })
        }
      </div>
    </div>
  );
}

export default Search;
