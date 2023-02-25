import React, {useState, useEffect} from 'react';
import '../stylesheets/food.css';
import {Link, useRouteMatch} from "react-router-dom";
import {foodModel, statsModel, SPOONACULAR_API_KEY} from '../utils/constants';
import {formatDate, findNutrient, addFood} from '../utils/helpers';
import {HintDiv, PrimaryButton} from '../stylesheets/common';
import ProgressCircle from '../components/ProgressCircle';
import firebase from '../firebase';

const Food = (props) => {
    const link = useRouteMatch('/meal/:id/search/:id').url.split('/');
    const foodId = link[link.length - 1];
    let meal = link[link.length - 3];
    const [result, setResult] = useState(foodModel);
    const [data, setData] = useState(statsModel);
    const [amount, setAmount] = useState(1);
    const [unit, setUnit] = useState("g");
    const [macrosPer, setMacrosPer] = useState([["protein", 30], ["fat", 20], ["carbs", 50]]);


    useEffect(() => {
        let abortController = new AbortController();
        let aborted = abortController.signal.aborted;
        let firestore = firebase.firestore();
        const usersRef = firestore.collection('users').doc(firebase.auth().currentUser.uid).collection('days').doc(formatDate(props.date))
        usersRef.get()
            .then((docSnapshot) => {
                if (docSnapshot.exists) {
                    usersRef.onSnapshot((doc) => {
                        aborted = abortController.signal.aborted;
                        if (aborted !== true) {
                            setData(doc.data());
                        }
                    });
                }
            });
        return () => {
            abortController.abort();
        }
    }, [props.date])

    useEffect(() => {
        let input = document.getElementById("food-amount");
        input.value = amount;
    }, [amount])

    useEffect(() => {
        let input = document.getElementById("food-amount");
        const pressedEnter = (event) => {
            if (event.keyCode === 13) {
                event.preventDefault();
                setAmount(input.value);
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

        async function fetchResults() {
            let response = await fetch(`https://api.spoonacular.com/food/ingredients/${foodId}/information?apiKey=${SPOONACULAR_API_KEY}&amount=${amount}&unit=${unit}`);
            let myData = await response.json();
            aborted = abortController.signal.aborted;
            if (aborted === false) {
                setResult(myData);
            }
        }

        fetchResults();

        return () => {
            abortController.abort();
        };
    }, [amount, unit, foodId]);


    useEffect(() => {
        const myMacros = result.nutrition.caloricBreakdown;
        setMacrosPer([["protein", myMacros.percentProtein], ["fat", myMacros.percentFat], ["carbs", myMacros.percentCarbs]]);
    }, [result])


    const trackFood = () => {
        const updated = addFood(data, meal, result);
        var db = firebase.firestore();
        db.collection('users').doc(firebase.auth().currentUser.uid).collection('days').doc(formatDate(props.date)).update(updated)
    }


    return (
        <div className="food">
            <div className="food-top">
                <h2>{result.name}</h2>
            </div>

            <div className="food-section">
                <div className="food-inputs">
                    <HintDiv>
                        <h2 className="component-message">Input in grams, press Enter to Submit</h2>
                        <input type="number" min="1" id="food-amount"/>
                    </HintDiv>
                </div>
                <div>
                    <h2>{findNutrient(result, "Calories").amount} cals</h2>
                </div>
            </div>

            <div className="food-section">
                <h3>Nutritional Information</h3>
                <div className="food-macros">
                    {
                        macrosPer.map((macro) => {
                            return <ProgressCircle key={macro[0]} progress={Number(macro[1])} circleSize="250"
                                                   calories={`${macro[1]}%`} message={macro[0]}/>
                        })
                    }
                </div>
                <div className="food-nutrients">
                    {
                        result.nutrition.nutrients.map((nutrient) => {
                            return <div className="food-nutrient" key={nutrient.name}>
                                <div className="food-nutrient-top">
                                    <h4 className="food-nutrient-top-text">{nutrient.name}</h4>
                                    <h4 className="food-nutrient-top-text">{nutrient.amount + nutrient.unit}</h4>
                                </div>
                                <div>
                                    <h4 className="food-nutrient-percent">{nutrient.percentOfDailyNeeds}% of Daily
                                        Needs</h4>
                                </div>
                            </div>
                        })
                    }
                </div>
            </div>

            <div className="food-trackDiv">
                <Link to={`/meal/${meal}`}>
                    <PrimaryButton onClick={trackFood}>Track Food</PrimaryButton>
                </Link>
            </div>

            <Link to={`/meal/${meal}/search`}>
                <h2>Back</h2>
            </Link>
        </div>
    );
}

export default Food;
