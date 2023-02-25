import React, {useEffect, useState} from 'react';
import '../stylesheets/meal.css'
import {Link, useRouteMatch} from "react-router-dom";
import {formatDate} from '../utils/helpers';
import ProgressCircle from '../components/ProgressCircle';
import firebase from '../firebase';
import {dataFrame} from '../utils/constants';
import {PrimaryButton} from '../stylesheets/common';
import MealFoodItem from '../components/MealFoodItem';

const Meal = (props) => {
    let meal = useRouteMatch('/meal/:id').url.split('/');
    meal = meal[meal.length - 1];
    const goalCal = Math.round((props.config.goalCal) / 3);
    const [data, setData] = useState(dataFrame.meals[meal]);
    const [progressColor, setProgressColor] = useState({color: "white"});
    const [progress, setProgress] = useState(0);
    const [isSigned, setIsSigned] = useState(!!firebase.auth().currentUser);
    const [allData, setAllData] = useState(dataFrame);

    useEffect(() => {
        let abortController = new AbortController();
        let aborted = abortController.signal.aborted;
        let firestore = firebase.firestore();
        if (firebase.auth().currentUser && aborted !== true) {
            firestore.collection("users").doc(firebase.auth().currentUser.uid).collection('days').doc(formatDate(props.date)).get().then((myDoc) => {
                aborted = abortController.signal.aborted;
                if (aborted !== true) {
                    setData(myDoc.data().meals[meal]);
                    setAllData(myDoc.data());
                }
            })
        }
        return () => {
            abortController.abort();
        }
    }, [props.date, meal, isSigned]);

    firebase.auth().onAuthStateChanged(() => {
        setIsSigned(!!firebase.auth().currentUser);
    });


    useEffect(() => {
        let calc = Math.round((data.totalCal / goalCal) * 100);
        if (calc > 100) {
            calc = calc % 100;
            setProgressColor({color: "rgb(245, 235, 146)"})
        } else {
            setProgressColor({color: "white"})
        }
        if (calc > 200) {
            calc = 100;
            setProgressColor({color: "rgb(245, 235, 146)"})
        }
        setProgress(calc);
    }, [data, goalCal])


    const updatedFullData = (updatedFullData) => {
        const db = firebase.firestore();
        db.collection('users').doc(firebase.auth().currentUser.uid).collection('days').doc(formatDate(props.date)).update(updatedFullData);
        props.dispatchDate({type: 'reload'});
    }


    return (
        <div className="meal">
            <div className="meal-top">
                <Link to="/diet-tracker">
                    <h2>Back</h2>
                </Link>
                <div className="meal-progress" style={progressColor}>
                    <ProgressCircle progress={progress} circleSize="200" calories={data.totalCal}
                                    message={"calories eaten"}/>
                    <h2>{meal}</h2>
                    <h3>{formatDate(props.date)}</h3>
                </div>
            </div>
            <Link to={`${meal}/search`} className="meal-search-link">
                <PrimaryButton width="20%">Add Food</PrimaryButton>
            </Link>
            <div className="meal-foodlist">
                {
                    data.foods.map((food, count) => {
                        return <MealFoodItem food={food} key={count} order={count} data={allData} meal={meal}
                                             update={updatedFullData}/>
                    })
                }
            </div>


        </div>
    );
}

export default Meal;
