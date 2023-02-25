import React, {useState, useEffect} from 'react';
import "../stylesheets/infoitem.css";
import ProgressCircle from "../components/ProgressCircle.js";
import MealItem from '../components/MealItem';
import SignIn from './SignIn'
import '../stylesheets/home.css';
import firebase from '../firebase';
import {formatDate} from '../utils/helpers';
import {statsModel} from '../utils/constants';
import {Link} from "react-router-dom";

const Home = (props) => {
    const meals = ["breakfast", "lunch", "dinner", "snacks"];
    const [date, setDate] = useState(formatDate(new Date()));
    const [isSigned, setIsSigned] = useState(!!firebase.auth().currentUser);
    const [data, setData] = useState(statsModel);

    useEffect(() => {
        let abortController = new AbortController();
        let aborted = abortController.signal.aborted;
        if (aborted === false) {
            setDate(formatDate(props.date));
        }
        return () => {
            abortController.abort();
        };
    }, [props.date])


    firebase.auth().onAuthStateChanged(() => {
        setIsSigned(!!firebase.auth().currentUser);
    });
    const setSigned = (ans) => {
        setIsSigned(ans);
    }

    useEffect(() => {
        let abortController = new AbortController();
        let aborted = abortController.signal.aborted;
        if (isSigned === true) {
            let firestore = firebase.firestore();
            const usersRef = firestore.collection('users').doc(firebase.auth().currentUser.uid).collection('days').doc(date)
            usersRef.get()
                .then((docSnapshot) => {
                    if (docSnapshot.exists) {
                        usersRef.onSnapshot((doc) => {
                            aborted = abortController.signal.aborted;
                            if (aborted === false) {
                                setData(doc.data());
                            }
                        });
                    } else {
                        usersRef.set(statsModel);
                        aborted = abortController.signal.aborted;
                        if (aborted === false) {
                            setData(statsModel);
                        }
                    }
                });
        }
        return () => {
            abortController.abort();
        };
    }, [isSigned, date]);


    if (isSigned) {
        return (
            <div className="home">
                <div className="home-top">
                    <button onClick={() => {
                        firebase.auth().signOut()
                    }}>Sign Out
                    </button>
                    <DataItem date={date} data={data} config={props.config}/>
                </div>

                <DatePicker date={date} dispatchDate={props.dispatchDate}/>

                <div className="home-mealitems">
                    {meals.map((meal) => <MealItem meal={meal} totalCal={data.meals[meal].totalCal} key={meal}/>)}
                </div>
                <div className="home-settings">
                    <Link to="/settings">
                        <button>Settings</button>
                    </Link>
                </div>
            </div>
        );
    } else {
        return (
            <SignIn changeSign={setSigned}/>
        )
    }
}

export default Home;

const DataItem = (props) => {
    const [goalCal, setGoalCal] = useState(props.config.goalCal);
    const [eaten, setEaten] = useState(0);
    const [burnt, setBurnt] = useState(0);

    const [totalCalories, setSumCalories] = useState(0);
    const [caloriesLeft, setCaloriesLeft] = useState(0);
    const [progressCal, setProgressCal] = useState(0);
    const [progressCalColor, setProgressCalColor] = useState({color: "white"});
    const [calMessage, setCalMessage] = useState("Calories Left");

    useEffect(() => {
        setEaten(props.data.totalCal);
        setBurnt(props.data.totalBurnt);
    }, [props.data]);
    useEffect(() => {
        setGoalCal(props.config.goalCal);
    }, [props.config]);

    useEffect(() => {
        let total = eaten - burnt;
        total = total < 0 ? 0 : total;
        setSumCalories(total);
    }, [eaten, burnt]);

    useEffect(() => {
        let left = goalCal - totalCalories;
        let calc = Math.round((totalCalories / goalCal) * 100);
        if (calc > 100) {
            calc = calc % 100;
            left = totalCalories - goalCal;
            setCalMessage("Calories Over");
            setProgressCalColor({color: "rgb(245, 235, 146)"});
        } else {
            setProgressCalColor({color: "white"});
        }
        if (calc > 200) {
            calc = 100;
        }
        setCaloriesLeft(left);
        setProgressCal(calc);
    }, [totalCalories, goalCal]);

    return (
        <div className="infoitem">
            <div className="infoitem-top">
                <div className="infoitem-data">
                    <h2>{eaten}</h2>
                    <h3>Calories Eaten</h3>
                </div>
                <div className="infoitem-calories" style={progressCalColor}>
                    <ProgressCircle
                        progress={progressCal}
                        circleSize="200"
                        calories={caloriesLeft}
                        message={calMessage}
                    />
                </div>
                <div className="infoitem-data">
                    <h2>{goalCal}</h2>
                    <h3>Calorie Goal</h3>
                </div>
            </div>
            <Link to={`/infosheet`}>
                <button className="infoitem-button">Nutrient Data</button>
            </Link>
        </div>
    );
}

const DatePicker = (props) => {

    const changeDate = (event) => {
        const newDate = new Date(event.currentTarget.value);
        newDate.setDate(newDate.getDate() + 1);
        props.dispatchDate({type: 'update', payload: newDate});
    }

    return (
        <div className="datechanger">
            <button onClick={() => props.dispatchDate({type: 'decrement'})}>Back</button>
            <div>
                <h1>{props.date}</h1>
                <input type="date" id="datechanger-date" onChange={changeDate}/>
            </div>
            <button onClick={() => props.dispatchDate({type: 'increment'})}>Next</button>
        </div>
    );
}
