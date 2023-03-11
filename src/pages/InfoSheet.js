import React, {useState, useEffect} from 'react';
import {statsModel} from '../utils/constants';
import firebase from '../firebase';
import {formatDate} from '../utils/helpers';
import InfoList from '../components/InfoList.js';
import '../stylesheets/infosheet.css';
import {Link} from "react-router-dom";

const InfoSheet = (props) => {
    const [goal, setGoal] = useState(1400);
    const [data, setData] = useState(statsModel);

    useEffect(() => {
        setGoal(props.config.goalCal);
    }, [props.config])


    useEffect(() => {
        let abortController = new AbortController();
        let aborted = abortController.signal.aborted;
        let firestore = firebase.firestore();
        if (firebase.auth().currentUser && aborted !== true) {
            firestore.collection("users").doc(firebase.auth().currentUser.uid).collection('days').doc(formatDate(props.date)).get().then((myDoc) => {

                aborted = abortController.signal.aborted;
                if (aborted !== true) {
                    setData(myDoc.data());
                }
            }).catch(function (error) {
                console.error("Error in Meal: ", error);
            })
        }
        return () => {
            abortController.abort();
        }
    }, [props]);

    return (
        <div className="infosheet">
            <div className="infosheet-back-div">
                <Link to="/">
                    <h2>Back</h2>
                </Link>
            </div>
            <div className="infosheet-section">
                <InfoList data={data} goal={goal} className="infosheet-infolist"/>
            </div>
            <div className="infosheet-section">
                {
                    data.nutrients.map((nutrient) => {
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
    );
}

export default InfoSheet;
